const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    age: 17
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    age: 20
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

module.exports = resolvers;
