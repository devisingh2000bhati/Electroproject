import React from 'react'
import c1 from "../img/"
function Itams() {
  return (
    <>
    <section id="clients"  class="clients">
<div class="container m-5">
    <div class="owl-carousel owl-theme" id="client">
            <div class="item">
                <a href="#">
                    <img src={c1} alt="brand-image" />
                </a>
            </div>
            <div class="item">
                <a href="#">
                    <img src={c2} alt="brand-image" />
                </a>
            </div>
            <div class="item">
                <a href="#">
                    <img src={c3} alt="brand-image" />
                </a>
            </div>
            <div class="item">
                <a href="#">
                    <img src={c4} alt="brand-image" />
                </a>
            </div>
            <div class="item">
                <a href="#">
                    <img src={c5} alt="brand-image" />
                </a>
            </div>
        </div>

</div>

</section>
    

    </>
  )
}

export default Itams