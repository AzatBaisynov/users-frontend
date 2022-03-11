import { LoginUserInput } from '../../../../__generated__/globalTypes';
import { apolloClient } from '../../graphql';
import { Login } from './__generated__/Login';
import { LOGIN } from './queries';


class AuthService {
	async login(
		user: LoginUserInput
	): Promise<Login["login"]> {
		try {
			const response = await apolloClient.mutate({ mutation: LOGIN, variables: {
				user
			}})

			if (!response || !response.data)
				throw new Error("Cannot login")
			
			return response.data;
		} catch (err) {
			throw err;
		}
	}
}

export default new AuthService();