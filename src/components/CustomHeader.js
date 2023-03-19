import React from 'react'

const CustomHeader = ({title, description}) => {
  return (
    <div className='py-2 my-3 img-thumbnail bg-primary-ligth d-flex flex-column align-items-center'>
      <h2 className='text-center text-muted my-2'>{title}</h2>
      <p className='fs-5 text-center'>{description}</p>
      <button className='btn border-start-0 border-end-0 border-dark rounded-0'>Hacer encargo</button>
    </div>
  )
}

export default CustomHeader
