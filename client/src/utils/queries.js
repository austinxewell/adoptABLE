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
            adoptedFamily{
                _id
                username
            }
        }
    }
`;

export const QUERY_CONVERSATION_BY_ID = gql`
query($_id: ID!){
  conversationById(_id: $_id){
    _id
    members{
      username
    }
    messages{
      sender
      text
      createdAt
    }
  }
}
`;