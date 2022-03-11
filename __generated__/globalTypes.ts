/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * Sort Directions
 */
export enum SortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

/**
 * Sort Nulls Options
 */
export enum SortNulls {
  NULLS_FIRST = "NULLS_FIRST",
  NULLS_LAST = "NULLS_LAST",
}

export enum UserLogSortFields {
  country = "country",
  device = "device",
  email = "email",
  id = "id",
  loggedAt = "loggedAt",
}

export interface DateFieldComparison {
  between?: DateFieldComparisonBetween | null;
  eq?: any | null;
  gt?: any | null;
  gte?: any | null;
  in?: any[] | null;
  is?: boolean | null;
  isNot?: boolean | null;
  lt?: any | null;
  lte?: any | null;
  neq?: any | null;
  notBetween?: DateFieldComparisonBetween | null;
  notIn?: any[] | null;
}

export interface DateFieldComparisonBetween {
  lower: any;
  upper: any;
}

export interface IDFilterComparison {
  eq?: string | null;
  gt?: string | null;
  gte?: string | null;
  iLike?: string | null;
  in?: string[] | null;
  is?: boolean | null;
  isNot?: boolean | null;
  like?: string | null;
  lt?: string | null;
  lte?: string | null;
  neq?: string | null;
  notILike?: string | null;
  notIn?: string[] | null;
  notLike?: string | null;
}

export interface LoginUserInput {
  country?: string | null;
  email: string;
  ip?: string | null;
  password: string;
}

export interface OffsetPaging {
  limit?: number | null;
  offset?: number | null;
}

export interface StringFieldComparison {
  eq?: string | null;
  gt?: string | null;
  gte?: string | null;
  iLike?: string | null;
  in?: string[] | null;
  is?: boolean | null;
  isNot?: boolean | null;
  like?: string | null;
  lt?: string | null;
  lte?: string | null;
  neq?: string | null;
  notILike?: string | null;
  notIn?: string[] | null;
  notLike?: string | null;
}

export interface UserLogFilter {
  and?: UserLogFilter[] | null;
  country?: StringFieldComparison | null;
  device?: StringFieldComparison | null;
  email?: StringFieldComparison | null;
  id?: IDFilterComparison | null;
  loggedAt?: DateFieldComparison | null;
  or?: UserLogFilter[] | null;
  user?: UserLogFilterUserEntityFilter | null;
}

export interface UserLogFilterUserEntityFilter {
  and?: UserLogFilterUserEntityFilter[] | null;
  email?: StringFieldComparison | null;
  or?: UserLogFilterUserEntityFilter[] | null;
  uuid?: IDFilterComparison | null;
}

export interface UserLogSort {
  direction: SortDirection;
  field: UserLogSortFields;
  nulls?: SortNulls | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
