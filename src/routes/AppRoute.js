import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SeccionHambientacion from '../components/SeccionHambientacion'
import SeccionSimple from '../components/SeccionSimple'
import SeccionTripticos from '../components/SeccionTripticos'
import GaleriaApp from '../GaleriaApp'

const AppRoute = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/simples' element={<SeccionSimple/>}></Route>
                <Route path='/tripticos' element={<SeccionTripticos/>}></Route>
                <Route path='/hambientacion' element={<SeccionHambientacion/>}></Route>

                <Route path='/' element={<GaleriaApp />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRoute
