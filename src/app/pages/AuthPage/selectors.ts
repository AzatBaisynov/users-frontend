import { createSelector } from 'reselect';
import { RootState } from '../../store';

const selectAuthPage = (state: RootState) => state.authPage;

export const makeSelectAuthPage = createSelector(
	selectAuthPage,
	(authPage) => authPage.authInfo
)