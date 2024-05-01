export const moods = [
  { emoji: "😍", text: "romantic" },
  { emoji: "😎", text: "chill" },
  { emoji: "😶‍🌫️", text: "lonely" },
  { emoji: "🧘🏼‍♀️", text: "meditative" },
]

const booksByMood = {
  romantic: [
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description:
        "A classic romantic novel set in early 19th-century England. The story follows the emotional journey of Elizabeth Bennet as she navigates love, family, and societal expectations.",
      rating: 4.5,
    },
    {
      title: "Romeo and Juliet",
      author: "William Shakespeare",
      description:
        "One of Shakespeare's most famous plays, Romeo and Juliet tells the tragic story of two young lovers from feuding families whose untimely deaths ultimately reconcile their families.",
      rating: 4.4,
    },
    {
      title: "Wuthering Heights",
      author: "Emily Brontë",
      description:
        "A dark and passionate tale of love and revenge on the Yorkshire moors. The story centers around the doomed love affair between Catherine Earnshaw and the brooding Heathcliff.",
      rating: 4.3,
    },
    // Add more romantic books here...
    // Total: 12
  ],
  chill: [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      description:
        "A philosophical tale about a young Andalusian shepherd named Santiago who sets off on a journey to find his personal legend. Along the way, he encounters mystical experiences and learns profound life lessons.",
      rating: 4.3,
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      description:
        "The first book in the iconic Harry Potter series, which follows the adventures of a young wizard, Harry Potter, as he discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry.",
      rating: 4.7,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description:
        "A fantasy adventure novel that follows the journey of Bilbo Baggins, a hobbit who is recruited by the wizard Gandalf to accompany a group of dwarves on a quest to reclaim their homeland and treasure from the dragon Smaug.",
      rating: 4.6,
    },
    // Add more chill books here...
    // Total: 12
  ],
  lonely: [
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description:
        "A coming-of-age novel narrated by a teenager named Holden Caulfield, who struggles with feelings of alienation and disillusionment in the face of societal hypocrisy.",
      rating: 4.0,
    },
    {
      title: "1984",
      author: "George Orwell",
      description:
        "A dystopian novel set in a totalitarian society ruled by the oppressive Party and its leader, Big Brother. The story follows Winston Smith as he rebels against the government's control and surveillance.",
      rating: 4.5,
    },
    {
      title: "The Bell Jar",
      author: "Sylvia Plath",
      description:
        "A semi-autobiographical novel about a young woman named Esther Greenwood who struggles with mental illness and societal expectations in 1950s America.",
      rating: 4.2,
    },
    // Add more lonely books here...
    // Total: 12
  ],
  meditative: [
    {
      title: "Siddhartha",
      author: "Hermann Hesse",
      description:
        "A spiritual journey novel that follows Siddhartha, a young man in ancient India, as he seeks enlightenment and explores different paths to wisdom, including asceticism and sensual indulgence.",
      rating: 4.2,
    },
    {
      title: "The Power of Now",
      author: "Eckhart Tolle",
      description:
        "A spiritual guidebook that emphasizes the importance of living in the present moment and transcending the ego. Tolle offers practical advice and exercises for achieving inner peace and enlightenment.",
      rating: 4.6,
    },
    {
      title: "The Tao Te Ching",
      author: "Laozi",
      description:
        "An ancient Chinese text that presents the teachings of Taoism, emphasizing the concepts of wu wei (effortless action) and the Tao (the fundamental nature of the universe).",
      rating: 4.4,
    },
    // Add more meditative books here...
    // Total: 12
  ],
}

export default booksByMood
