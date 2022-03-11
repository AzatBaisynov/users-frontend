/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserLogs
// ====================================================

export interface GetUserLogs_getUserLogs_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
  hasPreviousPage: boolean;
}

export interface GetUserLogs_getUserLogs_edges_node_user {
  __typename: "UserEntity";
  email: string;
}

export interface GetUserLogs_getUserLogs_edges_node {
  __typename: "UserLogEntity";
  id: string;
  user: GetUserLogs_getUserLogs_edges_node_user | null;
  device: string | null;
  country: string | null;
  loggedAt: any;
}

export interface GetUserLogs_getUserLogs_edges {
  __typename: "UserLogEntityEdge";
  node: GetUserLogs_getUserLogs_edges_node;
  cursor: string;
}

export interface GetUserLogs_getUserLogs {
  __typename: "PaginatedUserLog";
  pageInfo: GetUserLogs_getUserLogs_pageInfo | null;
  edges: GetUserLogs_getUserLogs_edges[] | null;
}

export interface GetUserLogs {
  getUserLogs: GetUserLogs_getUserLogs;
}

export interface GetUserLogsVariables {
  dateFrom?: string | null;
  dateTo?: string | null;
}
