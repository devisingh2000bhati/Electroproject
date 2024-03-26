import React from 'react'
import "./card.css"
const Card = ({ image,Text,price }) => {
    return (
        <div class="col-md-3 col-sm-3">
            <div class="single-new-arrival">
                <div class="single-new-arrival-bg">
                    <img src={image} alt="new-arrivals images" />
                    <div class="single-new-arrival-bg-overlay"></div>
                    <div class="sale bg-1">
                        <p>sale</p>
                    </div>
                    <div class="new-arrival-cart">
                        <p>
                            <span class="lnr lnr-cart"></span>
                            <a href="#">add <span>to </span> cart</a>
                        </p>
                        <p class="arrival-review pull-right">
                            <span class="lnr lnr-heart"></span>
                            <span class="lnr lnr-frame-expand"></span>
                        </p>
                    </div>
                </div>
                <h4><a href="#">{Text}</a></h4>
                <p class="arrival-product-price">{price}</p>
            </div>
        </div>
    )
}

export default Card