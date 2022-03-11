import React, { ReactElement, useEffect, useState } from 'react'
import { Header } from '../../components/header'
import userLogsService from '../../services/userLogsService'
import { store } from '../../store'
import { setUserLogsPage } from './homePageSlice'
import { UserLogsList } from './usersLogsList'
import { UserLogFilter} from '../../../../__generated__/globalTypes';


interface IHomePageProps {}
export const HomePage = ({}: IHomePageProps): ReactElement => {

	const [filters, setFilters] = useState<UserLogFilter>({})
	const [offset, setOffset] = useState<number>(0)

	const fetchUserLogsPage = async (): Promise<void> => {
		const userLogsPage = await userLogsService.getUserLogsPage(
			{
				limit: 30,
				offset
			}, 
			filters
			).catch((err) => {
		})
		if (userLogsPage) store.dispatch(setUserLogsPage(userLogsPage))
	}

	useEffect(() => {
		fetchUserLogsPage();
	}, [offset, filters])

	return (
		<section>
			<Header />
			<UserLogsList setFilters={setFilters} setOffset={setOffset} offset={offset} />
		</section>
	)
}