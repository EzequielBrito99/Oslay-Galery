import React, { useEffect } from 'react'
import { animateScroll } from 'react-scroll';
import CustomHeader from './CustomHeader'
import ObraList from './ObraList'

const SeccionTripticos = () => {

  useEffect(() => {
    animateScroll.scrollToTop();
}, []);

  return (
    <div className='container'>
      <CustomHeader title='Trípticos' description='Cuadros de más de una pieza...' />
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
