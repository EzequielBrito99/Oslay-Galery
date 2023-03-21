import React, { useEffect } from 'react'
import { animateScroll } from 'react-scroll';
import CustomHeader from './CustomHeader'
import ObraList from './ObraList'

const SeccionSimple = () => {
  
  useEffect(() => {
    animateScroll.scrollToTop();
}, []);

const description = "En esta sección encontrarás una selección única de obras de arte que han sido creadas en una sola pieza, sin necesidad de ensamblar diferentes partes. Cada cuadro es una obra completa y autónoma, con su propia personalidad y estilo.";

return (
    <div className='container'>
      <CustomHeader title='Simple' description={description} />
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
