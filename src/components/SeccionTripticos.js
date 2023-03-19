import React from 'react'
import ObraList from './ObraList'

const SeccionTripticos = () => {
  return (
    <div className='container'>
      <h1>Tripticos</h1>
      <div className='row'>
          <ObraList tipo='triptico' />
      </div>
    </div>
  )
}

export default SeccionTripticos
