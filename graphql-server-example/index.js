const { ApolloServer, gql } = require("apollo-server");

const resolvers = {
  Query: {
    Students: () => Students,
  },
};

const Students = [
  { name: "Mohsin ", email: "mohsin123@gmail.com", age: "24", id: "136",  post: "React Developer"},

  { name: "Aamir Alli ", email: "amirali23@gmail.com", age: "23", id: "140", post: "Blockchain Developer" },

  { name: "Hamza Farooq ", email: "hamzafrq3@gmail.com", age: "25", id: "133" , post: "Node.js Developer"},

  { name: "Ali Raza ", email: "aliraza3@gmail.com", age: "20", id: "130", post: "Front Developer" },

  { name: "Talha ", email: "mt882513@gmail.com", age: "19", id: "114", post: "Android Developer" },

  { name: "Umair ", email: "mainumair@gmail.com", age: "23", id: "102" , post: "React Developer"},

];

const typeDefs = gql`
  type Student {
    name: String
    email: String
    age: Int
    id: Int
    post: String
  }

  type Query {
    Students: [Student]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
