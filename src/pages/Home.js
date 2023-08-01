import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/spices.jpg'
import image1 from '../images/image01.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'

import '../styles/Home.css';
function Home() {
  return (
    <>
      {/* <section class="slider-area" style="margin-top: -40px;">
  <div class="bg-overlay"></div>
  <div class="container position-relative">
    <div class="inner-bg-overlay"></div>
    <div class="row">
      <div class="slider-detail col-12 col-lg-7 text-center text-lg-left wow fadeInLeft slick-initialized slick-slider" data-wow-delay=".8s" style="visibility: visible;"><div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 3710px; transform: translate3d(-530px, 0px, 0px);"><div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style="width: 530px;"><div><div class="slider-slide" style="width: 100%; display: inline-block;">
          <div class="slider-inner-content">
            <h4 class="slide-heading">Procuring and Supplying Finest Quality of Spices And Seeds <span>for More Than 40 Years.</span></h4>
            <p class="slide-text" style="text-align:justify;">We adhere to strict guidelines of processing and manufacturing to make sure the best products reach our customers.</p>
          </div>
        </div></div></div><div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 530px;"><div><div class="slider-slide" style="width: 100%; display: inline-block;">
          <div class="slider-inner-content">
            <h4 class="slide-heading">One Of The Government’s <span>Trusted Exporter </span><span>With Two-Star Recognition.</span></h4>
            <p class="slide-text" style="text-align:justify;">With the experience of 4 decades in the food industry, we are one of the market leaders in the manufacture and export of spices and seeds all over the globe to our valuable customers.</p>
          </div>
        </div></div></div><div class="slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" style="width: 530px;"><div><div class="slider-slide" style="width: 100%; display: inline-block;">
          <div class="slider-inner-content">
            <h4 class="slide-heading">Create Your Private Labelling <span>With Us </span></h4>
            <p class="slide-text" style="text-align:justify;">We offer Private Label solutions for wholesaler, retail chains, and distributors for international and domestic market.</p>
            <a href="private-labeling.html" class="btn anim-btn rounded-pill scroll" tabindex="-1">Click for detail <span></span><span></span><span></span><span></span> </a> </div>
        </div></div></div><div class="slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" style="width: 530px;"><div><div class="slider-slide" style="width: 100%; display: inline-block;">
          <div class="slider-inner-content">
            <h4 class="slide-heading">Procuring and Supplying Finest Quality of Spices And Seeds <span>for More Than 40 Years.</span></h4>
            <p class="slide-text" style="text-align:justify;">We adhere to strict guidelines of processing and manufacturing to make sure the best products reach our customers.</p>
          </div>
        </div></div></div><div class="slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" tabindex="-1" style="width: 530px;"><div><div class="slider-slide" style="width: 100%; display: inline-block;">
          <div class="slider-inner-content">
            <h4 class="slide-heading">One Of The Government’s <span>Trusted Exporter </span><span>With Two-Star Recognition.</span></h4>
            <p class="slide-text" style="text-align:justify;">With the experience of 4 decades in the food industry, we are one of the market leaders in the manufacture and export of spices and seeds all over the globe to our valuable customers.</p>
          </div>
        </div></div></div><div class="slick-slide slick-cloned" data-slick-index="4" aria-hidden="true" tabindex="-1" style="width: 530px;"><div><div class="slider-slide" style="width: 100%; display: inline-block;">
          <div class="slider-inner-content">
            <h4 class="slide-heading">Create Your Private Labelling <span>With Us </span></h4>
            <p class="slide-text" style="text-align:justify;">We offer Private Label solutions for wholesaler, retail chains, and distributors for international and domestic market.</p>
            <a href="private-labeling.html" class="btn anim-btn rounded-pill scroll" tabindex="-1">Click for detail <span></span><span></span><span></span><span></span> </a> </div>
        </div></div></div><div class="slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabindex="-1" style="width: 530px;"><div><div class="slider-slide" style="width: 100%; display: inline-block;">
          <div class="slider-inner-content">
            <h4 class="slide-heading">Procuring and Supplying Finest Quality of Spices And Seeds <span>for More Than 40 Years.</span></h4>
            <p class="slide-text" style="text-align:justify;">We adhere to strict guidelines of processing and manufacturing to make sure the best products reach our customers.</p>
          </div>
        </div></div></div></div></div></div>
      <div class="slider-img col-12 col-lg-5 wow fadeInRight slick-initialized slick-slider slick-vertical" data-wow-delay=".8s" data-depth="0.1" style="visibility: visible; transform: translate3d(-13.6px, -2.75px, 0px);"><div class="slick-list draggable" style="height: 281.406px;"><div class="slick-track" style="opacity: 1; height: 1970px; transform: translate3d(0px, -281px, 0px);"><div class="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style="width: 370px;"><div><div class="img-slide" style="width: 100%; display: inline-block;"> <img src={image1} /> </div></div></div><div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 370px;"><div><div class="img-slide" style="width: 100%; display: inline-block;"> <img src={image2} /> </div></div></div><div class="slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" style="width: 370px;"><div><div class="img-slide" style="width: 100%; display: inline-block;"> <img src={image3} /> </div></div></div><div class="slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" style="width: 370px;"><div><div class="img-slide" style="width: 100%; display: inline-block;"> <img src={image3} /> </div></div></div><div class="slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" tabindex="-1" style="width: 370px;"><div><div class="img-slide" style="width: 100%; display: inline-block;"> <img src={image4} /> </div></div></div><div class="slick-slide slick-cloned" data-slick-index="4" aria-hidden="true" tabindex="-1" style="width: 370px;"><div><div class="img-slide" style="width: 100%; display: inline-block;"> <img src={BannerImage} /> </div></div></div><div class="slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabindex="-1" style="width: 370px;"><div><div class="img-slide" style="width: 100%; display: inline-block;"> <img src={image2} /> </div></div></div></div></div></div>
    </div>
    <div class="slider-arrows"> <a href="javascript:void(0);" class="slider-arr slider-arr-up" id="slider-arr-up"><i class="fas fa-angle-up"></i></a> <a href="javascript:void(0);" class="slider-arr slider-arr-down" id="slider-arr-down"><i class="fas fa-angle-down"></i></a> </div>
  </div>
</section> */}
      <div className="header">
        <div className='headerContainer'>
          <h1>Indian Masala Company</h1>
          <p>Spices to fit any taste</p>
          <Link to="/menu" >
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
      <div className='home'
        style={{ backgroundImage: `url(${BannerImage})`, height: '100vh' }}>
      </div>
      <div className="image-gallery">
        <div className="image-container">
          <img src={image1} alt=" 1" />
        </div>
        <div className="image-container">
          <img src={image2} alt=" 2" />
        </div>
        <div className="image-container">
          <img src={image3} alt=" 3" />
        </div>
        <div className="image-container">
          <img src={image4} alt=" 4" />
        </div>
      </div>
    </>

  )
}

export default Home
