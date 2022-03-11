import { GetAllUserLogsPage } from '../../services/userLogsService/__generated__/GetAllUserLogsPage';

export interface IHomePageState {
	userLogsPage: GetAllUserLogsPage["getAllUserLogs"]
}

export interface UserLog {
	country: string | null
	device: string | null
	email: string
	loggedAt: string 
}