import React, { useEffect } from "react";
import { animateScroll } from "react-scroll";
import CustomHeader from "./CustomHeader";
import ObraList from "./ObraList";

const SeccionHambientacion = () => {

  useEffect(() => {
      animateScroll.scrollToTop();
  }, []);
  
  return (
    <div className="container">
    <CustomHeader title='Ambientación' description='Servicio de ambientacion de locales...' />
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
