import React from 'react'

const Footer = () => {
  return (
    <footer className="piedepaguina py-2 text-center" role="contentinfo">
        <div className="container">
            <p>2023 © Oslay Todos los derechos reservados</p>
            <ul className="redes-sociales">
                <li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href=""><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
