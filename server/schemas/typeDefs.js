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
  categories: [Category]
  category(_id: ID!): Category
  tags: [Tag]
  tag(_id: ID!): Tag
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

type Tag {
  _id: ID
  tagName: String
}

type Auth {
  token: ID!
  user: Adoptee
}

type Mutation {
        addAdoptee(username: String!, email: String!, password: String!): Adoptee
        login(email: String!, password: String!): Adoptee
        saveAdoptedFamily(input: String!): Adoptee
        removeAdoptedFamily(username: String!): Adoptee
        saveProduct(input: String!): Adoptee
        removeProducts(productName: String!): Adoptee
    }

`;

// export the typeDefs
module.exports = typeDefs;