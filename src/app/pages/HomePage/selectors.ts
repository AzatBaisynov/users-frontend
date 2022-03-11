import { createSelector } from 'reselect';
import { RootState } from '../../store';

const selectHomePage = (state: RootState) => state.homePage; 

export const makeSelectUserLogsPage = createSelector(
	selectHomePage, 
	(homePage) => homePage.userLogsPage
	);