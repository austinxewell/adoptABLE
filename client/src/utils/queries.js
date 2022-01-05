import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query {
        users {
            _id
            username
            email
            familyMembers
            products {
                productName
            }
        }
    }
`;

export const QUERY_MY_CONVERSATIONS = gql`
    query myConversations {
        myConversations{
	        _id
            members{
                _id
                username
            }
            messages{
                text
                sender
                createdAt
            }
        }
    }
`;

export const QUERY_ME_BASIC = gql`
    {
        me {
            _id
            email
            username
            familyMembers
            products {
                _id
                productName
                productNote
            }
            adoptedFamily{
                _id
                username
            }
        }
    }
`;

export const QUERY_CHECKOUT = gql`
    query getCheckout($users: [ID]!) {
        checkout(users: $users) {
            session
        }
    }
`
