import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import Sofa2 from '../../assets/img/sofa2.jpg';
import Sofa1 from '../../assets/img/sofa1.jpg';
import Sofa3 from '../../assets/img/sofa3.jpg';
import Left24 from '../../assets/img/Left24px.svg';
import Right24 from '../../assets/img/Right24px.svg';


export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
    	className: "center",
      centerMode: true,
      variableWidth: true,
      slidesToShow: 1,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <div><img className='imgSize' src={Sofa2} alt="sofa2" /></div>
          </div>
          <div key={2}>
            <div><img className='imgSize' src={Sofa1} alt="sofa1" /></div>
          </div>
          <div key={3}>
            <div><img className='imgSize' src={Sofa3} alt="sofa3" /></div>
          </div>
          <div key={4}>
            <div><img className='imgSize' src={Sofa3} alt="sofa3" /></div>
          </div>
        </Slider>
        <div style={{ textAlign: "center", display: "flex", position: "absolute", top: -70, right: 70, bottom: 22 }}>
          <button className="box-for-slider-arrows__prev" onClick={this.previous}>
          	<img src={Left24} alt="L"/>
          </button>
          <button className="box-for-slider-arrows__next" onClick={this.next}>
            <img src={Right24} alt="R"/>
          </button>
        </div>
      </div>
    );
  }
}