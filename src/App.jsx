import React, { useEffect } from 'react'
import Container from './Container'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import { ReduxData } from './Utils/Crud'
import { FetchDataFromApi, tokenLogin, userdata } from './Redux/Action'
import { useDispatch } from 'react-redux'
import { TodoRedux } from './Redux/Store'
const App = () => {
  const navigate = useNavigate();
  const { Userdata, isLogged } = ReduxData();
  const dispatch = useDispatch(TodoRedux);

  useEffect(() => {
    console.log(isLogged);
    if (localStorage.getItem('token') && !isLogged) {
      const tokenData = JSON.parse(localStorage.getItem('token'));
      tokenLogin(tokenData)
        .then(res => {
          console.log(res.data);
          dispatch(userdata(res.data))
        })
    }

    if (isLogged) {
      let date = new Date();
      let today = date.toLocaleDateString('en-in', { day: '2-digit', month: 'short', year: 'numeric' }).split('-')
      dispatch(FetchDataFromApi(Userdata.username, today[0], today[1], today[2]))
      navigate('/DashBoard')

    }
  }, [isLogged])

  return (
    <>
      <Routes>
        <Route path='/' exact element={isLogged ? <Navigate to={'/DashBoard'} /> : <Navigate to={'/Login'} />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/DashBoard' element={isLogged ? <Container /> : <Navigate to={'/Login'} />} />
      </Routes>
    </>
  )
}

export default App