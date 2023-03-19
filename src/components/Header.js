import React, { useEffect, useState } from 'react'

const Header = () => {
  const ancho = window.screen.width;

  const [fondo, setFondo] = useState(`url(${process.env.PUBLIC_URL + '/assets/headerMovile.jpg'})`);
  
  useEffect(() => {
    if(ancho<576){
      setFondo(`url(${process.env.PUBLIC_URL + '/assets/headerMovile.jpg'})`);
    }else{
      setFondo(`url(${process.env.PUBLIC_URL + '/assets/headerDesktop.jpg'})`);
    }
  }, [ancho]);

  return (
    <header id='inicio' className='text-white d-flex flex-column justify-content-center align-items-center' 
            style={{backgroundImage: fondo}}
    >
      <h1 className='display-1'>Oslay</h1>
      <p className=''>Artista plástico</p>
      <a href="#contenido"><i className="fa fa-angle-double-down mt-5" aria-hidden="true"></i></a>
    </header>
  )
}

export default Header
