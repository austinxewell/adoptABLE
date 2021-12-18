// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Query {
  products: [Product]
}

type Product {
  _id: ID
  productName: String
  productNote: String
  createdAt: String
  username: String
}
`;

// export the typeDefs
module.exports = typeDefs;