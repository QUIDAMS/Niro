import React from 'react';
import SimpleSlider from '../Slider';

const TopSection = ({}) => {
	return (
		<section className="top-section">
			<div className="container">
				<div className="image-gallery">
					<div className="jumbotron jumbotron__hero position-absolute ">
					  <div className="jumbotron__hero-content">
					  	<h1 className="display-4">High-Quality Furniture Just For You</h1>
						  <p className="lead jumbotron__text">Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
					  	<button className="orange-button">
					  		<p className="jumbotron__button-text">Shop Now</p>
					  	</button>
					  </div>
					</div>
					<div className="d-flex justify-content-between align-items-center multiple__slider-device">
						<div></div>
						<div className="box-for-slider-dots"></div>
						<div className="box-for-slider-arrows d-flex align-items-center justify-content-end"></div>
					</div>
				</div>
			</div>
				<div className="container-fluid px-0 position-relative">
					<div className="multiple-items">
						<SimpleSlider />
					</div>
				</div>
			
		</section>
	)
}

export default TopSection;

// 