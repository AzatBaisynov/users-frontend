import React, { FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { useAppSelector } from '../../hooks';
import { RootState } from '../../store';
import { makeSelectUserLogsPage } from './selectors';
import { UserLog } from './types';
import { OffsetPaging, StringFieldComparison, UserLogFilter, UserLogSort } from '../../../../__generated__/globalTypes';

const stateSelector = createSelector(makeSelectUserLogsPage, (userLogsPage) => ({
	userLogsPage
}));

interface IUserLogsListProps {
	setFilters: (filters: UserLogFilter) => void
	setOffset: (offset: number) => void
	offset: number
}
export const UserLogsList = ({setFilters, setOffset, offset}: IUserLogsListProps) => {

	const { userLogsPage } = useAppSelector(stateSelector)
	const [isEmptyLogsPage, setIsEmptyLogsPage] = useState<boolean>(true)
	const [pageFilters, setPageFilters] = useState<UserLogFilter>({})
	const [dateFrom, setDateFrom] = useState<string>("")
	const [dateTo, setDateTo] = useState<string>("")

	const nextPage = (): void => {
		setOffset(offset+=30)
	}

	const prevPage = (): void => {
		setOffset(offset -= 30)
	}

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const type = event.currentTarget.id
		const value = event.currentTarget.value
		if (value) {
			switch (type) {
				case "email": setPageFilters({ ...pageFilters, user: { email : { like : value} } })
				break;
				case "country" : setPageFilters({ ...pageFilters, country: { like : value }})
				break;
				case "device" : setPageFilters({ ...pageFilters, device: { like : value }})
				break;
				case "dateFrom" : setDateFrom(value)
				break;
				case "dateTo" : setDateTo(value)
				break;
			}
		}
	}

	const handleSearch = ():void => {
		if (dateFrom && dateTo) {
			setPageFilters({...pageFilters, loggedAt : {between : {lower : dateFrom, upper: dateTo}}})
		}
		setFilters(pageFilters);
	}


	useEffect(() => {
		if (userLogsPage?.getAllUserLogs?.nodes?.length > 0) {
			setIsEmptyLogsPage(false)
		}
	}, [userLogsPage?.getAllUserLogs?.nodes])

	if (isEmptyLogsPage) {
		return (
			<div>
				empty
			</div>
		)
	} else {
		return (
			<section className="logs">
				<div className="container">
					<div className="d-flex justify-between align-center">
						<h1 className="logs__title">Current users activities:</h1>
						<div className="d-flex">
							<input id="email" type="email" className="logs__filter" placeholder="email" onInput={handleInput}/>
							<input id="country" type="text" className="logs__filter" placeholder="country" onInput={handleInput}/>
							<input id="device" type="text" className="logs__filter" placeholder="device IP" onInput={handleInput}/>
							<input id="dateFrom" type="datetime-local" className="logs__filter" placeholder="date from" onInput={handleInput}/>
							<input id="dateTo" type="datetime-local" className="logs__filter" placeholder="date to" onInput={handleInput}/>
							<button className="logs__search" onClick={handleSearch}>Search</button>
						</div>
					</div>
					<ul className="logs__list">
						{
							userLogsPage?.getAllUserLogs?.nodes?.map((log: UserLog ) => (
								<li className="logs__item" >
									<p className="logs__date">{log.loggedAt.replace("T", " ").split(".")[0]}</p>
									<p className="logs__user">Signed email {log.email} device ip {log.device} </p>
									<p className='logs__country'>{log.country}</p>
								</li>
							))
						}
					</ul>
					<div className="logs__controll">
						{
							userLogsPage?.getAllUserLogs?.pageInfo?.hasPreviousPage &&
							<button className="logs__btn" onClick={prevPage}> ← Prev Page</button>
						}
						{
							userLogsPage?.getAllUserLogs?.pageInfo?.hasNextPage &&
							<button className="logs__btn" onClick={nextPage}>Next Page → </button>
						}
					</div>
				</div>
			</section>
		)
	}

}