import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const existingAdmin = await prisma.user.findUnique({
    where: { email: "admin@localhost.com" },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("Secret!@#123", 10);

    await prisma.user.create({
      data: {
        name: "Admin",
        email: "admin@localhost.com",
        password: hashedPassword,
        role: "admin",
      },
    });

    console.log("Seeding complete");
  } else {
    console.log("Seeding incomplete");
  }
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
