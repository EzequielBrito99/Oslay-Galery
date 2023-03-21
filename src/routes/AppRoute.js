import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import SeccionHambientacion from '../components/SeccionHambientacion'
import SeccionSimple from '../components/SeccionSimple'
import SeccionTripticos from '../components/SeccionTripticos'
import NavBar from '../components/ui/NavBar'
import GaleriaApp from '../GaleriaApp'


const AppRoute = () => {
  return (
    <div>
        <HashRouter>
            <NavBar/>
            <Routes>
                <Route path='/simples' element={<SeccionSimple/>}></Route>
                <Route path='/tripticos' element={<SeccionTripticos/>}></Route>
                <Route path='/ambientacion' element={<SeccionHambientacion/>}></Route>
                <Route path='/Oslay-Galery/' element={<GaleriaApp />}></Route>
                <Route path='/' element={<GaleriaApp />}></Route>
            </Routes>
            <Footer />
        </HashRouter>
    </div>
  )
}

export default AppRoute
