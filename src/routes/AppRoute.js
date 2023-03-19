import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import SeccionHambientacion from '../components/SeccionHambientacion'
import SeccionSimple from '../components/SeccionSimple'
import SeccionTripticos from '../components/SeccionTripticos'
import Navbar from '../components/ui/Navbar'
import GaleriaApp from '../GaleriaApp'


const AppRoute = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/simples' element={<SeccionSimple/>}></Route>
                <Route path='/tripticos' element={<SeccionTripticos/>}></Route>
                <Route path='/hambientacion' element={<SeccionHambientacion/>}></Route>
                <Route path='/' element={<GaleriaApp />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  )
}

export default AppRoute
