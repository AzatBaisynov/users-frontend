import { Login } from '../../services/authService/__generated__/Login';

export interface IAuthPageState {
	authInfo: Login["login"]
}

export interface LocationInfo {
	country_code: string | null,
	country_name: string | null,
	city: string | null,
	postal: string | null,
	lattitude: number | null,
	longtitude: number | null,
	IPv4: string | null,
	state: string | null
}