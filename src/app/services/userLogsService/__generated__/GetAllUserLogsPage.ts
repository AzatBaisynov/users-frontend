/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OffsetPaging, UserLogFilter, UserLogSort } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetAllUserLogsPage
// ====================================================

export interface GetAllUserLogsPage_getAllUserLogs_pageInfo {
  __typename: "OffsetPageInfo";
  /**
   * true if paging forward and there are more records.
   */
  hasNextPage: boolean | null;
  /**
   * true if paging backwards and there are more records.
   */
  hasPreviousPage: boolean | null;
}

export interface GetAllUserLogsPage_getAllUserLogs_nodes {
  __typename: "UserLog";
  id: string;
  device: string | null;
  email: string | null;
  country: string | null;
  loggedAt: any | null;
}

export interface GetAllUserLogsPage_getAllUserLogs {
	[x: string]: any;
  __typename: "UserLogOffsetConnection";
  /**
   * Paging information
   */
  pageInfo: GetAllUserLogsPage_getAllUserLogs_pageInfo;
  /**
   * Array of nodes.
   */
  nodes: GetAllUserLogsPage_getAllUserLogs_nodes[];
}

export interface GetAllUserLogsPage {
  getAllUserLogs: GetAllUserLogsPage_getAllUserLogs;
}

export interface GetAllUserLogsPageVariables {
  paging?: OffsetPaging | null;
  filter?: UserLogFilter | null;
  sorting?: UserLogSort[] | null;
}
