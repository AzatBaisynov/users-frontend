import React, { ReactElement } from 'react';
import shield from '../../assets/images/shield.svg'
import log_out from '../../assets/images/logout.svg'
import { store } from '../store';
import { logout } from '../pages/AuthPage/authPageSlice';

export const Header = (): ReactElement => {

	const handleLogout = (): void => {
		store.dispatch(logout())
	}

	return (
		<header className='header'>
			<div className="container header__container">
				<div className='d-flex align-center'>
					<img src={shield} alt="logo" className='header__logo' />
					<h2 className="header__title">Users logs</h2>
				</div>
				<button className="header__logout" onClick={handleLogout}>
					Logout
					<img src={log_out} alt="" />
				</button>
			</div>
		</header>
	)
}