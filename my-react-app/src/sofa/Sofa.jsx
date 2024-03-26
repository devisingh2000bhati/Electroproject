import React from 'react';
import "./sofa.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sofa = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        arrows: true, // Show navigation arrows
        dots: false // Hide dots
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slide">
                    <section id="sofa-collection">
                        <div className="sofa-collection collectionbg1">
                            <div className="container">
                                <div className="sofa-collection-txt">
                                    <h2>Unlimited Sofa Collection</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <div className="sofa-collection-price">
                                        <h4>Starting From <span>$ 199</span></h4>
                                    </div>
                                    <button className="btn-cart welcome-add-cart sofa-collection-btn" onClick={() => window.location.href = '#'}>
                                        view more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="slide">
                    <section id="sofa-collection">
                        <div className="collectionbg2">
                            <div className="container">
                                <div className="sofa-collection-txt">
                                    <h2>Unlimited Dining table Collection</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <div className="sofa-collection-price">
                                        <h4>Starting from <span>$ 299</span></h4>
                                    </div>
                                    <button className="btn-cart welcome-add-cart sofa-collection-btn" onClick={() => window.location.href = '#'}>
                                        view more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Slider>
        </div>
    );
}

export default Sofa;
