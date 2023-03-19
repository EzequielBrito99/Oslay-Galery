import React from 'react'

const ObraCard = ({clases='', rutaImg=''}) => {
  return (
    <>
      <img className={clases} src={rutaImg} alt="Obra en Venta" />
    </>
  )
}

export default ObraCard
