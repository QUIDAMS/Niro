import React from 'react';
import Trophy from '../../assets/img/trophy 1.svg';
import Guarantee from '../../assets/img/guarantee.svg';
import Shipping from '../../assets/img/shipping.svg';
import Support from '../../assets/img/customer-support.svg';

const FeatureSection = ({}) => {
	return (
		<section className="feature-section">
			<div className="container ">
				<div className="row align-items-center feature-section__margin">
				  <div className="col d-flex justify-content-center align-items-center">
				  	<img className="feature-section__img" src={Trophy} alt="trophy"/>
				    <div className="feature-section__content">
				    	<h4>High Quality</h4>
				    	<p className="feature-section__text mb-0">crafted from top materials</p>
				    </div>
				  </div>
				  <div className="col d-flex justify-content-center align-items-center">
				  	<img className="feature-section__img" src={Guarantee} alt="customer-support"/>
				    <div className="feature-section__content">
				    	<h4>Warrany Protection</h4>
				    	<p className="feature-section__text mb-0">Over 2 years</p>
				    </div>
				  </div>
				  <div className="col d-flex justify-content-center align-items-center">
				  	<img className="feature-section__img" src={Shipping} alt="shipping"/>
				    <div className="feature-section__content">
				    	<h4>Free Shipping</h4>
				    	<p className="feature-section__text mb-0">Order over 150 $</p>
				    </div>
				  </div>
				  <div className="col d-flex justify-content-center align-items-center">
				  	<img className="feature-section__img" src={Support} alt="customer-support"/>
				    <div className="feature-section__content">
				    	<h4>24 / 7 Support</h4>
				    	<p className="feature-section__text mb-0">Dedicated support</p>
				    </div>
				  </div>
				</div>
			</div>
		</section>
	)
}
export default FeatureSection;