import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query {
        users {
            _id
            username
            email
            familyMembers
        }
    }
`