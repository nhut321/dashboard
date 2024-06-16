import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard';
import Wrapper from './components/Wrapper';
import MainContextProvider, { MainContext } from './Context/MainContext';

function App() {
  const mainContext = useContext(MainContext)
  console.log(mainContext)
  return (
    <>
      <MainContextProvider>
        <BrowserRouter>

          <Wrapper />
        </BrowserRouter>

      {/* <Login /> */}
      </MainContextProvider>
    </>
  );
}

export default App;
