import React, { useEffect } from 'react'
import { animateScroll } from 'react-scroll';
import CustomHeader from './CustomHeader'
import ObraList from './ObraList'

const SeccionSimple = () => {
  
  useEffect(() => {
    animateScroll.scrollToTop();
}, []);

  return (
    <div className='container'>
      <CustomHeader title='Simple' description='Cuadros de una pieza...' />
      <div className='row'>
        <div className="col-12 col-sm-4">
          <ObraList tipo='simple' col='1' />
        </div>
        <div className="col-12 col-sm-4">
          <ObraList tipo='simple' col='2' />
        </div>
        <div className="col-12 col-sm-4">
          <ObraList tipo='simple' col='3' />
        </div>
      </div>
    </div>
  )
}

export default SeccionSimple
