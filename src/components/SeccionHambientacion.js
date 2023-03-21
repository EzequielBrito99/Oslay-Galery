import React, { useEffect } from "react";
import { animateScroll } from "react-scroll";
import CustomHeader from "./CustomHeader";
import ObraList from "./ObraList";

const SeccionHambientacion = () => {

  useEffect(() => {
      animateScroll.scrollToTop();
  }, []);

  const description = "Aquí encontrarás una amplia variedad de opciones para crear el ambiente perfecto en tu negocio. Desde espacios pequeños hasta amplios y panorámicos. Garantizando la calidad de las pinturas y aspecto brillante en el acabado de las locaciones.";
  
  return (
    <div className="container">
    <CustomHeader title='Ambientación' description={description} buttonText='Contratar Servicio' />
      <div className="row">
        <div className="col-12 col-sm-4">
          <ObraList tipo="hambientacion" col="1" />
        </div>
        <div className="col-12 col-sm-4">
          <ObraList tipo="hambientacion" col="2" />
        </div>
        <div className="col-12 col-sm-4">
          <ObraList tipo="hambientacion" col="3" />
        </div>
      </div>
    </div>
  );
};

export default SeccionHambientacion;
