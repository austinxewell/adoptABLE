// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    familyMembers: Int
    products: [Product]
    adoptedFamily: [User]
    donates: [Donate]
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    products(username: String): [Product]
    product(productName: String!): Product
    categories: [Category]
    category(categoryName: String): Category
    tags: [Tag]
    tag(tagName: String!): Tag
    conversations: [Conversation]
    myConversations: [Conversation]
    checkout(users: [ID]!): Checkout
    donate(_id: ID!): Donate
  }

  type Product {
    _id: ID
    productName: String
    productNote: String
    createdAt: String
    users: [User]
    tags: [Tag]
  }

  type Category {
    _id: ID
    categoryName: String
    products: [Product]
  }

  type Tag {
    _id: ID
    tagName: String
    products: [Product]
  }

  type Conversation {
    _id: ID
    members: [User]
    messages: [Message]
  }

  type Message {
    _id: ID
    sender: String
    text: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
    addAdoptedFamily(adoptedFamilyId: ID!): User
    deleteAdoptedFamily(adoptedFamilyId: ID!): User
    addProduct(productName: String!, productNote: String!): Product
    deleteProduct(productId: String!): Product
    addTag(tagName: String!): Product
    deleteTag(tagId: String!): Product
    updateUser(email: String, familyMembers: String): User
    updateProduct(productName: String, productNote: String, productId: ID): Product
    addConversation(receiverId: String!): Conversation
    createMessage(text: String!, conversationId: String!): Conversation
    addDonate(users: [ID]!): Donate
  }

  type Donate {
    _id: ID
    purchaseDate: String
    users: [User]
  }

  type Checkout {
    session: ID
  }
`;

// export the typeDefs
module.exports = typeDefs;