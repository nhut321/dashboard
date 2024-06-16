import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import './Dashboard.css'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import CPanel from '../CPanel'
import Personal from '../Personal'
import Customer from '../Customer'
import Warehouse from '../Warehouse'
import AddOrder from '../addOrder'
import Order from '../Order'


export default function Dashboard() {
  return (
    <>
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/panel' element={<CPanel />}></Route>
          <Route path='/personal' element={<Personal />}></Route>
          <Route path='/customer' element={<Customer />}></Route>
          <Route path='/warehouse' element={<Warehouse />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/order/add-order' element={<AddOrder />}></Route>
        </Routes>
        
    </>
  )
}
