import React, { useEffect, useState } from 'react'
import { animateScroll } from 'react-scroll';

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

  const handleArrowDown = () => {
    animateScroll.scrollTo(window.screen.height, {smooth:true, duration:1500});
  };

  return (
    <header className='header-wrapper d-flex flex-column justify-content-center align-items-center' 
            style={{backgroundImage: fondo}}
    >
      <h1 className='animate__animated animate__fadeIn'>Oslay Moya</h1>
      <p className='animate__animated animate__fadeIn'>Artista plástico</p>
      <a className='animate__animated animate__fadeIn' onClick={handleArrowDown}><i className="fa fa-angle-double-down mt-5" aria-hidden="true"></i></a>
    </header>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  );
};

export default Header
