const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MONGODBSTRING =
  "mongodb+srv://anderskoo:aIs8bjHjgYvNxJNf@cluster0.vn1x049.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const server = ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODBSTRING, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB database");
    server.listen({ port: 5000 }).then((res) => {
      console.log(`🚀 Server ready at ${res.url}`);
    });
  });
