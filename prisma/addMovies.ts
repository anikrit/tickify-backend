// Import Prisma client
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function addMovie() {
    const movies = [
        {
            "id": 1,
            "title": "Guardians of the Galaxy Vol. 3",
            "genre": "Action, Adventure, Comedy",
            "duration": "2h 30m",
            "rating": 8.2,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=Guardians+3",
            "description": "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own."
        },
        {
            "id": 2,
            "title": "Spider-Man: Across the Spider-Verse",
            "genre": "Animation, Action, Adventure",
            "duration": "2h 20m",
            "rating": 8.7,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=Spider-Verse",
            "description": "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People."
        },
        {
            "id": 3,
            "title": "The Flash",
            "genre": "Action, Adventure, Fantasy",
            "duration": "2h 24m",
            "rating": 6.9,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=The+Flash",
            "description": "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without superheroes."
        },
        {
            "id": 4,
            "title": "Transformers: Rise of the Beasts",
            "genre": "Action, Adventure, Sci-Fi",
            "duration": "2h 7m",
            "rating": 6.1,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=Transformers",
            "description": "During the '90s, a new faction of Transformers - the Maximals - join the Autobots as allies in the battle for Earth."
        },
        {
            "id": 5,
            "title": "Oppenheimer",
            "genre": "Drama, History, Biography",
            "duration": "3h 0m",
            "rating": 9.0,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=Oppenheimer",
            "description": "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb."
        },
        {
            "id": 6,
            "title": "Barbie",
            "genre": "Adventure, Comedy, Fantasy",
            "duration": "1h 54m",
            "rating": 7.2,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=Barbie",
            "description": "Barbie suffers a crisis that leads her to question her world and her existence."
        },
        {
            "id": 7,
            "title": "John Wick: Chapter 4",
            "genre": "Action, Crime, Thriller",
            "duration": "2h 49m",
            "rating": 8.1,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=John+Wick+4",
            "description": "John Wick uncovers a path to defeating The High Table."
        },
        {
            "id": 8,
            "title": "Mission: Impossible – Dead Reckoning",
            "genre": "Action, Adventure, Thriller",
            "duration": "2h 43m",
            "rating": 7.9,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=MI+Dead+Reckoning",
            "description": "Ethan Hunt and his team must track down a terrifying new weapon."
        },
        {
            "id": 9,
            "title": "Elemental",
            "genre": "Animation, Comedy, Family",
            "duration": "1h 42m",
            "rating": 7.1,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=Elemental",
            "description": "In a city where fire, water, land, and air residents live together, a fiery young woman and a go-with-the-flow guy discover something elemental."
        },
        {
            "id": 10,
            "title": "Indiana Jones and the Dial of Destiny",
            "genre": "Action, Adventure",
            "duration": "2h 22m",
            "rating": 6.8,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=Indiana+Jones",
            "description": "Archaeologist Indiana Jones races against time to retrieve a legendary artifact."
        },
        {
            "id": 11,
            "title": "The Marvels",
            "genre": "Action, Adventure, Fantasy",
            "duration": "2h 5m",
            "rating": 6.3,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=The+Marvels",
            "description": "Carol Danvers, Kamala Khan, and Monica Rambeau must unite to save the universe."
        },
        {
            "id": 12,
            "title": "The Little Mermaid",
            "genre": "Adventure, Family, Fantasy",
            "duration": "2h 15m",
            "rating": 7.0,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=Little+Mermaid",
            "description": "A young mermaid makes a deal with a sea witch to trade her voice for human legs."
        },
        {
            "id": 13,
            "title": "Fast X",
            "genre": "Action, Crime, Thriller",
            "duration": "2h 21m",
            "rating": 6.2,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=Fast+X",
            "description": "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes."
        },
        {
            "id": 14,
            "title": "Dungeons & Dragons: Honor Among Thieves",
            "genre": "Action, Adventure, Fantasy",
            "duration": "2h 14m",
            "rating": 7.3,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=DnD+Honor",
            "description": "A charming thief and a band of unlikely adventurers embark on an epic quest."
        },
        {
            "id": 15,
            "title": "The Super Mario Bros. Movie",
            "genre": "Animation, Adventure, Comedy",
            "duration": "1h 32m",
            "rating": 7.4,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=Mario+Bros",
            "description": "A plumber named Mario travels through an underground labyrinth with his brother, Luigi."
        },
        {
            "id": 16,
            "title": "Wonka",
            "genre": "Adventure, Comedy, Family",
            "duration": "1h 56m",
            "rating": 7.8,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=Wonka",
            "description": "The story of how Willy Wonka met the Oompa-Loompas on one of his earliest adventures."
        },
        {
            "id": 17,
            "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
            "genre": "Action, Adventure, Drama",
            "duration": "2h 45m",
            "rating": 7.1,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=Hunger+Games+Prequel",
            "description": "Coriolanus Snow mentors and develops feelings for the female District 12 tribute."
        },
        {
            "id": 18,
            "title": "Five Nights at Freddy's",
            "genre": "Horror, Mystery, Thriller",
            "duration": "1h 50m",
            "rating": 6.5,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=FNAF",
            "description": "A troubled security guard begins working at Freddy Fazbear's Pizza."
        },
        {
            "id": 19,
            "title": "Killers of the Flower Moon",
            "genre": "Crime, Drama, History",
            "duration": "3h 26m",
            "rating": 8.1,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=Flower+Moon",
            "description": "Members of the Osage tribe are murdered under mysterious circumstances in the 1920s."
        },
        {
            "id": 20,
            "title": "Napoleon",
            "genre": "Action, Biography, Drama",
            "duration": "2h 38m",
            "rating": 7.5,
            "posterUrl": "/placeholder.svg?height=400&width=300&text=Napoleon",
            "description": "The rise and fall of French Emperor Napoleon Bonaparte."
        }
    ];

    for (const movie of movies) {
        await prisma.movie.upsert({
            where: { title: movie.title },
            update: {},  // No update if exists
            create: movie,
        });
    }

    console.log("Movies processed.");
}

addMovie()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    });
