import React from 'react';
import Slider from 'react-slick';
import './SliderComponent.css';

const SliderComponent = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-component">
      <Slider {...settings}>
        {items.map(item => (
          <div key={item.id} className="slider-item">
            <img src={item.image} alt={item.title} />
            <div className="slider-caption">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
