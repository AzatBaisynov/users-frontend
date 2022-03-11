/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginUserInput } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login {
  __typename: "UserModel";
  email: string;
  token: string;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  user: LoginUserInput;
}
