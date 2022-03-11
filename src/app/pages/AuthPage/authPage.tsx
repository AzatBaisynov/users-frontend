import axios from 'axios'
import React, { ReactElement, useState } from 'react'
import authService from '../../services/authService'
import { store } from '../../store'
import { login } from './authPageSlice'
import { LocationInfo } from './types'

interface IAuthPageProps {}
export const AuthPage = ({} : IAuthPageProps): ReactElement => {

	const [email, setEmail] = useState<string>("")
	const [password, setPassword] = useState<string>("")

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const type: string = event.currentTarget.id
		const value: string = event.currentTarget.value

		switch(type) {
			case "auth_email" : setEmail(value)
			break;
			case "auth_password" : setPassword(value)
			break;
		}
	}

	const handleLogin = async (): Promise<void> => {
		if (email && password) {
			const { data } = await axios("https://geolocation-db.com/json/");
			const locationInfo: LocationInfo = data;
			const user_info = await authService.login(
				{ 
					email, 
					password, 
					country: locationInfo.country_name, 
					ip: locationInfo.IPv4 
				})
			.catch((err) => console.log(err))
			if (user_info) store.dispatch(login(user_info));
		}
	}

	return (
		<div className='auth'>
			<div className="auth__form">
				<input id="auth_email" type="email" className='auth__inp' placeholder='email' onInput={handleInput}/>
				<input id="auth_password" type="password" className='auth__inp' placeholder='password' onInput={handleInput}/>
				<button className='auth__btn' onClick={handleLogin}>Login</button>
			</div>
		</div>
	)
}