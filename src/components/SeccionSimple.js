import React from 'react'
import ObraList from './ObraList'

const SeccionSimple = () => {
  return (
    <div className='container'>
      <h2>Obras simples</h2>
      <div className='row'>
          <ObraList tipo='simple' />
      </div>
    </div>
  )
}

export default SeccionSimple
