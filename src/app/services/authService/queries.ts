import gql from 'graphql-tag';

export const LOGIN = gql`
mutation Login($user: LoginUserInput!) {
  login(login: $user) {
    email
    token
  }
}
`;