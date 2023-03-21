import React from 'react'
import { fotos } from '../data/fotos'
import ObraCard from './ObraCard';

const ObraList = ({tipo, col}) => {
  return (
    <>
      {
        fotos.map(foto => {
            return(
                ((tipo===foto.seccion)&&(foto.col===col))&&
                <div key={foto.id} id={foto.id} className="d-flex align-items-center animate__animated animate__fadeIn">
                    <ObraCard clases='img-thumbnail mb-3' rutaImg={`${process.env.PUBLIC_URL}/assets/${foto.seccion}/${foto.id}.jpg`}/>
                </div>
            );
        })
      }
    </>
  )
}

export default ObraList
