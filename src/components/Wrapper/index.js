import React, { useContext } from 'react'
import Dashboard from '../../Pages/Dashboard'
import { MainContext } from '../../Context/MainContext'
import Login from '../../Pages/Login'

export default function Wrapper() {
    const mainContext = useContext(MainContext)
    console.log(mainContext)
  return (
    <>
    {
        mainContext.isLogin
        ?
        <Dashboard />
        :
        <Login />
    }
    </>
  )
}
