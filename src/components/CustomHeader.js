import React from 'react'

const CustomHeader = ({ title, description, buttonText='Hacer encargo' }) => {
  return (
    <div className='py-2 my-3 img-thumbnail bg-primary-ligth d-flex flex-column align-items-center animate__animated animate__bounceIn'>
          <h2 className='text-center text-muted my-2'>{title}</h2>
          <p className='fs-6 text-center text-muted blockquote p-2 mx-2 mx-sm-5'>{description}</p>
          <a href='https://wa.me/message/RNDOTBROZ5NBK1' className='btn border-start-0 border-end-0 border-dark rounded-0  animate__animated animate__backInLeft animate__delay-2s'>{buttonText}</a>
    </div>
  )
}

export default CustomHeader
