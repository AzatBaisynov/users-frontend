import gql from 'graphql-tag';

export const GET_USERLOGS_PAGE = gql`
query GetAllUserLogsPage($paging: OffsetPaging = { limit: 10 }, $filter: UserLogFilter = {}, $sorting: [UserLogSort!] = [{field: id, direction : DESC}]) {
	getAllUserLogs(paging: $paging, filter: $filter, sorting: $sorting) {
		pageInfo {
			hasNextPage
			hasPreviousPage
		}
		nodes  {
      id
      device
      email
      country
      loggedAt
    }
	}
}
`;

