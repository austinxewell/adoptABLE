import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      username
      email
    }
  }
`;

export const ADOPT_USER = gql`
  mutation addAdoptedFamily($adoptedFamilyId: ID!) {
    addAdoptedFamily(adoptedFamilyId: $adoptedFamilyId) {
      _id
      username
      adoptedFamily{
        _id
        username
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($productName: String!, $productNote: String!) {
    addProduct(productName: $productName, productNote: $productNote) {
      productName
      productNote
    }
  }
`;

export const UPDATE_PRODUCT =gql`
  mutation updateProduct($productName: String!, $productNote: String!, $productId: ID) {
    updateProduct(productName: $productName, productNote: $productNote, productId: $productId ) {
      productName
      productNote
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: String!) {
    deleteProduct(productId: $productId) {
      _id
    }
  }
`;

export const DELETE_ADOPTED_FAMILY = gql`
  mutation deleteAdoptedFamily($adoptedFamilyId: ID!) {
    deleteAdoptedFamily(adoptedFamilyId: $adoptedFamilyId) {
      _id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($email: String, $familyMembers: String) {
    updateUser(email: $email, familyMembers: $familyMembers) {
      username
      email
      familyMembers
    }
  }
`;

export const ADD_DONATION = gql`
  mutation addDonation($price: Int) {
    addDonation(price: $price) {
      purchaseDate
    }
  }
`;
export const CREATE_MESSAGE = gql`
  mutation createMessage($text: String!, $conversationId: String!) {
    createMessage(text: $text, conversationId: $conversationId) {
      messages{
        sender
        text
        createdAt
      }
    }
  }
`;

export const ADD_CONVERSATION = gql`
  mutation addConversation($receiverId: String!){
    addConversation(receiverId: $receiverId){
      _id
      members {
        _id
        username
      }
    }
  }
`;
