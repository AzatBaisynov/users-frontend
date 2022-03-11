import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './assets/style/style.scss';
import { HomePage } from './app/pages/HomePage/homePage';
import { AuthPage } from './app/pages/AuthPage/authPage';
import { createSelector } from 'reselect';
import { makeSelectAuthPage } from './app/pages/AuthPage/selectors';
import { useAppSelector } from './app/hooks';


const stateSelector = createSelector(makeSelectAuthPage, (authInfo) => ({
  authInfo
}));


function App() {

  const { authInfo } = useAppSelector(stateSelector)
  const [authentificated, setAuthentificated] = useState(false)

  useEffect(() => {
    if (authInfo.token) {
      setAuthentificated(true)
    } else {
      setAuthentificated(false)
    }
  }, [authInfo.token])

  if (authentificated) {
    return <HomePage />
  } else {
    return <AuthPage />
  }

}

export default App;
