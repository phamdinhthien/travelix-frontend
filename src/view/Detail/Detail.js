import React, { Component } from 'react';
import Home from './component/Home';
import Search from '../Home/component/Search';
import './css/single_listing_styles.css';
import './css/single_listing_responsive.css';
import Footer from '../Botttom/Footer';
import CopyRight from '../Botttom/CopyRight';
import HotelInfo from './component/HotelInfo';
import Room from './component/Rooms';
import Reviews from './component/Reviews';
import GoogleMap from '../Contact/component/GoogleMap';
var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;


class Detail extends Component {


  componentDidMount() {
    window.scrollTo(0, 0)
  }


  render() {

    return (
      <div>
        {/* Home */}
        <Home />
        {/* Search */}
        {/* <Search/> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single_listing">
                {/* Hotel Info */}
                <HotelInfo />
                {/* Rooms */}
                <Room />
                {/* Reviews */}
                <Reviews />
                {/* Location on Map */}
                <Element className="location_on_map" name="location">
                  <div className="location_on_map_title mb-4">location on map</div>
                  {/* Google Map */}
                  <GoogleMap />
                </Element >
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
        {/* Copyright */}
        <CopyRight />
      </div>
    )
  }
}

export default Detail;