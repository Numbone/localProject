import React from 'react'
import { Route, Routes } from 'react-router'
import Auth from './Auth'
import HomePage from './HomePage'

const Routing = () => {
  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />
      <Route path='/' element={<HomePage />} />
    </Routes>
  )
}

export default Routing
