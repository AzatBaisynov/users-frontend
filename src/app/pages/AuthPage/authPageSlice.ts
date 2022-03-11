import { createSlice } from '@reduxjs/toolkit';
import { IAuthPageState } from './types';

const initialState: IAuthPageState = {
	authInfo : {
		__typename: "UserModel",
		email: localStorage.getItem("email") || "",
		token: localStorage.getItem("token") || ""
	}
}

const AuthPageSlice = createSlice({
	name: "authPage",
	initialState,
	reducers: {
		login(state, action) {
			localStorage.setItem("token", action.payload.login.token);
			localStorage.setItem("email", action.payload.login.email);
			state.authInfo = action.payload.login;
		},
		logout(state) {
			localStorage.clear()
			state.authInfo = { __typename: "UserModel", email: "", token: ""}
		}
	},
})

export const { login, logout } = AuthPageSlice.actions;
export default AuthPageSlice.reducer;