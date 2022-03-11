import { createSlice } from '@reduxjs/toolkit';
import { IHomePageState } from './types';


const initialState: IHomePageState = {
	userLogsPage: {
		__typename: "UserLogOffsetConnection",
		pageInfo: {
			__typename: "OffsetPageInfo",
			hasNextPage: null,
			hasPreviousPage: null
		},
		nodes: [
			{
				__typename: "UserLog",
				id: "",
				device: null,
				email: null,
				country: null,
				loggedAt: null,
			}
		]
	}
}

const HomePageSlice = createSlice({
	name: "homePage",
	initialState,
	reducers: {
		setUserLogsPage(state, action) {
			state.userLogsPage = action.payload;
		}
	},
})

export const { setUserLogsPage } = HomePageSlice.actions;
export default HomePageSlice.reducer;