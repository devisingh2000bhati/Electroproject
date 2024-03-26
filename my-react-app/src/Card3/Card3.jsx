import React from 'react';
import "./card3.css";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import f1 from "../img/card3/f1.jpg"
import f2 from "../img/card3/f2.jpg"
import f3 from "../img/card3/f3.jpg"
import f4 from "../img/card3/f4.jpg"
function Card3({ }) { 
  return (
    <>
    
      <section id="feature" class="feature">
	  <div class="container dav">
    <div class="section-header m-5">
        <h2>featured products</h2>
    
</div>

				<div class="feature-content">
					<div class="row">
						<div class="col-sm-3">
							<div class="single-feature">
								<img src={f1} alt="feature image"/>
								<div class="single-feature-txt text-center">
									<p>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                   <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><CiStar /></i>
                    <i><CiStar /></i>
                    <i><CiStar /></i>
										<span class="spacial-feature-icon"><i class="fa fa-star"></i></span>
										<span class="feature-review">(45 review)</span>
									</p>
									<h3><a href="#">designed sofa</a></h3>
									<h5>$160.00</h5>
								</div>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="single-feature">
								<img src={f2} alt="feature image"/>
								<div class="single-feature-txt text-center">
									<p>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                   <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><CiStar /></i>
                    <i><CiStar /></i>
                    <i><CiStar /></i>
										<span class="spacial-feature-icon"><i class="fa fa-star"></i></span>
										<span class="feature-review">(45 review)</span>
									</p>
									<h3><a href="#">dinning table </a></h3>
									<h5>$200.00</h5>
								</div>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="single-feature">
								<img src={f3} alt="feature image"/>
								<div class="single-feature-txt text-center">
									<p>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                   <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><CiStar /></i>
                    <i><CiStar /></i>
                    <i><CiStar /></i>
										<span class="spacial-feature-icon"><i class="fa fa-star"></i></span>
										<span class="feature-review">(45 review)</span>
									</p>
									<h3><a href="#">chair and table</a></h3>
									<h5>$100.00</h5>
								</div>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="single-feature">
								<img src={f4} alt="feature image"/>
								<div class="single-feature-txt text-center">
									<p>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                   <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><CiStar /></i>
                    <i><CiStar /></i>
                    <i><CiStar /></i>
										<span class="spacial-feature-icon"><i class="fa fa-star"></i></span>
										<span class="feature-review">(45 review)</span>
									</p>
									<h3><a href="#">modern arm chair</a></h3>
									<h5>$299.00</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
</section>


    </>
  );
}

export default Card3;
