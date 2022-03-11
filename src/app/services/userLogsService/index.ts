import { OffsetPaging, UserLogFilter, UserLogSort } from '../../../../__generated__/globalTypes';
import { apolloClient } from '../../graphql';
import { GET_USERLOGS_PAGE } from './queries';
import { GetAllUserLogsPage } from './__generated__/GetAllUserLogsPage';

class UserLogsService {
	async getUserLogsPage(
		paging: OffsetPaging,
		filter: UserLogFilter
	): Promise<GetAllUserLogsPage["getAllUserLogs"]> {
		try {
			const response = await apolloClient.query({ query: GET_USERLOGS_PAGE,  variables: { 
				paging, filter
			 }, context: {
				 headers: {
					 authorization: "Bearer " + localStorage.getItem("token")
				 }
			 }})

			if (!response || !response.data)
				throw new Error("Cannot get logs list")
			
			return response.data;
		} catch (err) {
			throw err;
		}
	}
}

export default new UserLogsService();