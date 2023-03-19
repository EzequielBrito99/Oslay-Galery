import React from 'react'
import SeccionCard from './SeccionCard'

const SeccionBase = () => {
  const rutaSimple = '../../assets/simple/';
  const rutaTriptico = '../../assets/triptico/';
  const rutaHambientacion = '../../assets/hambientacion/';
  const imgsSimple = [{'id': '1','src': `${rutaSimple}1.jpg`},{ 'id': '2', 'src': `${rutaSimple}2.jpg`}, {'id': '3','src': `${rutaSimple}3.jpg`}];
  const imgsTriptico = [{'id': '1','src': `${rutaTriptico}1.jpg`},{ 'id': '2', 'src': `${rutaTriptico}2.jpg`}, {'id': '3','src': `${rutaTriptico}3.jpg`}];
  const imgsHambientacion = [{'id': '22','src': `${rutaHambientacion}22.jpg`},{ 'id': '23', 'src': `${rutaHambientacion}23.jpg`}, {'id': '24','src': `${rutaHambientacion}24.jpg`}];

  return (
    <div id='contenido' className='container my-5'>
      <div id='servicios' className="row">
        <SeccionCard id='carousel2' titulo='Simples' descripcion='Cuadros de una pieza por encargos.' images={imgsSimple} boton='simples'/>
        <SeccionCard id='carousel3' titulo='Tripticos' descripcion='Cuadros de mas de una pieza por encargos' images={imgsTriptico} boton='tripticos'/>
        <SeccionCard id='carousel1' titulo='Hambientacion' descripcion='Servicio de hambientacion de locales.' images={imgsHambientacion} boton='hambientacion'/>
      </div>
    </div>
  )
}

export default SeccionBase
