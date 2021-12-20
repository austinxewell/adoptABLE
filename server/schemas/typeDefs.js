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

type Category {
  _id: ID
  categoryName: String
  products: [Product]
}

type Query {
  categories: [Category]
  products(username: String): [Product]
  product(_id: ID!): Product
}

type Tag {
  _id: ID
  tagName: String
}

type Mutation {
        addAdoptee(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveAdoptedFamily(input: Adoptee): Adoptee
        removeAdoptedFamily(username: String!): Adoptee
        saveProduct(input: Product): Adoptee
        removeProduct(productName: String!): Adoptee
    }
`;

// export the typeDefs
module.exports = typeDefs;