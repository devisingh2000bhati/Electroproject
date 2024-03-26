import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderCcomponent.css';
import slider1 from "../img/slider1.png";
import Slider2 from "../img/slider2.png";
import Slider3 from "../img/slider3.png";
import { IoAddCircleOutline } from "react-icons/io5";

function SliderComponent() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: 'linear'
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slide">
            <div className="single-slide-item slide1">
              <div className="container">
                <div className="welcome-hero-content">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-txt m-5">
                          <h4 className='m-5 jump-text'>Great Design Collection</h4>
                          <h2 className='gap-3 jump-text'>Cloth Covered Accent Chair</h2>
                          <p className='m-3 jump-text'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                          </p>
                          <div className="packages-price m-5 jump-text">
                            <p>
                              $ 399.00
                              <del>$ 499.00</del>
                            </p>
                          </div>
                          <button className="btn-cart welcome-add-cart custom-yellow" onClick={() => window.location.href='#'}>
                            <span className="lnr lnr-plus-circle"><IoAddCircleOutline /></span>
                            Add <span>To</span> cart
                          </button>

                          <button className="btn-cart welcome-add-cart welcome-more-info dav" onClick={() => window.location.href='#'}>
                            more Info
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-img">
                          <img src={slider1} alt="slider image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slide">
            <div className="single-slide-item slide2">
              <div className="container">
                <div className="welcome-hero-content">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-txt m-5">
                          <h4 className='m-5 jump-text'>Great Design Collection</h4>
                          <h2 className='m-5 gap-4 jump-text'>Mapple Wood Accent Chair</h2>
                          <p className='m-3 jump-text'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nesciunt quaerat tempore atque sed suscipit aliquam facere sint nisi labore voluptatum, saepe laboriosam soluta quod? Amet, hic. Ullam, voluptatem deleniti!
                          </p>
                          <div className="packages-price m-5 jump-text">
                            <p>
                              $ 399.00
                              <del>$ 499.00</del>
                            </p>
                          </div>
                          <button className="btn-cart welcome-add-cart custom-yellow" onClick={() => window.location.href='#'}>
                            <span className="lnr lnr-plus-circle"><IoAddCircleOutline /></span>
                            Add <span>To</span> cart
                          </button>
                          <button className="btn-cart welcome-add-cart welcome-more-info" onClick={() => window.location.href='#'}>
                            More Info
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-img">
                          <img src={Slider2} alt="slider image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="single-slide-item slide3">
              <div className="container">
                <div className="welcome-hero-content">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-txt m-5">
                          <h4 className='m-5 jump-text'>Great Design Collection</h4>
                          <h2 className='m-5 gap-3 jump-text'>Cloth Covered Accent Chair</h2>
                          <p className='m-3 jump-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequuntur libero a aliquam alias quisquam unde nemo autem quod ea mollitia cupiditate iure sunt perspiciatis iusto dignissimos, atque delectus sapiente!
                          </p>
                          <div className="packages-price m-5 jump-text">
                            <p>
                              $ 399.00
                              <del>$ 499.00</del>
                            </p>
                          </div>
                          <button className="btn-cart welcome-add-cart custom-yellow" onClick={() => window.location.href='#'}>
                            <span className="lnr lnr-plus-circle"><IoAddCircleOutline /></span>
                            Add <span>To</span> cart
                          </button>
                          <button className="btn-cart welcome-add-cart welcome-more-info" onClick={() => window.location.href='#'}>
                            More Info
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-img">
                          <img src={Slider3} alt="slider image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default SliderComponent;
