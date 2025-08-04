import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
  };
}

export function authMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) {
  const token = req.cookies?.access_token;
  if (!token) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      userId: number | string;
    };

    // Convert userId to number just in case
    const userId =
      typeof decoded.userId === "string"
        ? Number(decoded.userId)
        : decoded.userId;

    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid user id in token" });
    }

    req.user = { id: userId };

    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}
