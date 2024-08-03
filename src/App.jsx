import React from 'react'
import Container from './Container'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Container />}></Route>
      </Routes>
    </>
  )
}

export default App