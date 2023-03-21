import React, { useEffect } from 'react'
import { animateScroll } from 'react-scroll';
import CustomHeader from './CustomHeader'
import ObraList from './ObraList'

const SeccionTripticos = () => {

  useEffect(() => {
    animateScroll.scrollToTop();
}, []);

const description = "En esta sección encontrarás una amplia variedad de obras que se componen de varias partes, creando así una imagen completa y armoniosa. Cada pieza está cuidadosamente diseñada para encajar perfectamente con las demás, creando un efecto visual impresionante.";

  return (
    <div className='container'>
      <CustomHeader title='Trípticos' description={description} />
      <div className='row'>
        <div className="col-12 col-sm-4">
          <ObraList tipo='triptico' col='1' />
        </div>
        <div className="col-12 col-sm-4">
          <ObraList tipo='triptico' col='2' />
        </div>
        <div className="col-12 col-sm-4">
          <ObraList tipo='triptico' col='3' />
        </div>
      </div>
    </div>
  )
}

export default SeccionTripticos
