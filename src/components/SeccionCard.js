import React from 'react'
import { Link } from 'react-router-dom'
import CustomCarousel from './ui/Carousel'

const SeccionCard = ({id, images, titulo='titulo', descripcion='descripcion', boton='#'}) => {
  return (
    <div className="col-12 col-sm-4">
        <div className='shadow bg-light my-2 rounded-3 overflow-hidden'>
            <CustomCarousel id={id} images={images}/>
            <div className='p-3'>
                <h4>{titulo}</h4>
                <p className='text-muted'>{descripcion}</p>
            </div>
            <div className='text-center'>
                <Link to={'/'+boton} className='btn btn-sm btn-outline-secondary mb-3'>Ver Mas...</Link>
            </div>

        </div>
    </div>
  )
}

export default SeccionCard
