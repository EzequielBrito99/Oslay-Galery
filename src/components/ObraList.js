import React from 'react'
import { fotos } from '../data/fotos'
import ObraCard from './ObraCard';

const ObraList = ({tipo}) => {
  return (
    <>
        {
            fotos.map(foto => {
                return(
                        (tipo===foto.seccion)&&
                        <div id={foto.id} className="col-12 col-sm-3 d-flex align-items-center">
                            <ObraCard key={foto.id} clases='img-thumbnail mb-3' rutaImg={`../../assets/${foto.seccion}/${foto.id}.jpg`}/>
                        </div>
                );
            })
        }
    </>
  )
}

export default ObraList
