import {gql} from '@apollo/client';

export const QUERY_THOUGHTS = gql `
    query user($username: String!) {
        user(username: $username) {
        _id
        username
        email
        friendCount
        friends {
          _id
          username
        }
        thoughts {
          _id
          thoughtText
          createdAt
          reactionCount
            }
        }
    }
`;