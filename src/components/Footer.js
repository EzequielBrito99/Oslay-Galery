import React from 'react'

const Footer = () => {
  return (
    <footer className="piedepaguina py-3 text-center" role="contentinfo">
        <div className="container">
            <p className='mb-0'>2023 © Oslay Todos los derechos reservados</p>
            <ul className="redes-sociales">
                <li><a href="https://www.facebook.com/oslay.moya.1"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="https://instagram.com/oslaymoyanori?igshid=YmMyMTA2M2Y="><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href=""><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
            </ul>
            <div className='dev-link-wrapper text-muted mt-3'>
              <span className='dev-link-label'>Web desarrollada por: </span>
              <a className='dev-link' href="https://wa.me/message/ST66CS7X7BHZM1">Ezequiel Brito Navarro | Desarrollador Web Front-End</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
