// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Adoptee {
  _id: ID
  username: String
  email: String
  familyMembers: Int
  products: [Product]
  adoptedFamily: [Adoptee]
}

type Query {
  adoptees: [Adoptee]
  adoptee(username: String!): Adoptee 
  products(username: String): [Product]
  product(_id: ID!): Product
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