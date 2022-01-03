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