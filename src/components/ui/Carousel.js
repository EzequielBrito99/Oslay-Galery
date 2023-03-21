import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';

// const Carousel = ({ images, id }) => {
//   let count = 0;
//   return (
//     <div>
//       <div id={id} className="carousel slide">
//         <div className="carousel-indicators">
//           <button type="button" data-bs-target={'#' + id} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//           <button type="button" data-bs-target={'#' + id} data-bs-slide-to="1" aria-label="Slide 2"></button>
//           <button type="button" data-bs-target={'#' + id} data-bs-slide-to="2" aria-label="Slide 3"></button>
//         </div>
//         <div className="carousel-inner">
//           {
//             images.map(img => {
//               count = count + 1;
//               return (
//                 <div key={img.id} className={"carousel-item max-h-sc " + ((count === 1) ? 'active' : '')}>
//                   <img src={img.src} className="d-block w-100" alt="img" />
//                 </div>
//               );
//             })
//           }
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target={'#' + id} data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target={'#' + id} data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Carousel



const CustomCarousel = ({ images, id }) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {
        images.map(img => {
          return (
            <Carousel.Item key={img.id} className="max-h-sc">
                <img src={img.src} className="d-block w-100" alt="img" />
            </Carousel.Item>
          );
        })
      }
    </Carousel>
  );
}

export default CustomCarousel;