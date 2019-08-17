import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
var Scroll = require('react-scroll');
var Element = Scroll.Element;
var scroller = Scroll.scroller;


const options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 16,
    smartSpeed: 1000,
    responsive:
    {
      0: { items: 2 },
      320: { items: 3 },
      480: { items: 4 },
      575: { items: 5 },
      768: { items: 7 },
      992: { items: 8 },
      1199: { items: 9 }
    }
  };
  
  const events = {
  }

class HotelInfo extends Component {

    onLocation = ()=>{
      scroller.scrollTo('location', {
        duration: 1000,
        smooth: true,
        offset: -100
      })
    }

    constructor(props) {
        super(props);
        this.state = {
          photoIndex: 0,
          isOpen: false,
          images : [
            require('../../../images/listing_1.jpg'),require('../../../images/listing_2.jpg'),require('../../../images/listing_3.jpg'),
            require('../../../images/listing_4.jpg'),require('../../../images/listing_5.jpg'),require('../../../images/listing_6.jpg'),
            require('../../../images/listing_7.jpg'),require('../../../images/listing_8.jpg'),require('../../../images/listing_9.jpg')
          ]
        };
      }

    onSelect = (e, index)=>{
        e.preventDefault();
        this.setState({
          photoIndex : index,
          isOpen: true
        })
      }

    render() {
        const { photoIndex, isOpen, images } = this.state;
        return (
            <div className="hotel_info">
                {/* Title */}
                <div className="hotel_title_container d-flex flex-lg-row flex-column">
                  <div className="hotel_title_content">
                    <h1 className="hotel_title">Grand Hotel Eurostar</h1>
                    <div className="rating_r rating_r_4 hotel_rating">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="hotel_location">345 677 Gran Via Street, no 34, Madrid, Spain</div>
                  </div>
                  <div className="hotel_title_button ml-lg-auto text-lg-right">
                    <div className="button book_button trans_200"><a href="#">book<span /><span /><span /></a></div>
                    <div className="hotel_map_link_container" onClick={this.onLocation}>
                      <a className="hotel_map_link" >See Location on Map</a>
                    </div>
                  </div>
                </div>
                {/* Listing Image */}
                <div className="hotel_image">
                  <img src={require("../../../images/listing_hotel.jpg")} alt="" />
                  <div className="hotel_review_container d-flex flex-column align-items-center justify-content-center">
                    <div className="hotel_review">
                      <div className="hotel_review_content">
                        <div className="hotel_review_title">very good</div>
                        <div className="hotel_review_subtitle">100 reviews</div>
                      </div>
                      <div className="hotel_review_rating text-center">8.1</div>
                    </div>
                  </div>
                </div>
                {isOpen && (
                  <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                      })
                    }
                  />
                )}
                {/* Hotel Gallery */}
                <div className="hotel_gallery">
                  <div className="hotel_slider_container">
                    <OwlCarousel ref="slider" options={options} events={events}>
                      {/* Hotel Gallery Slider Item */}
                      <img src={require("../../../images/listing_thumb_1.jpg")} onClick={(e) => this.onSelect(e, 0)} />
                      {/* Hotel Gallery Slider Item */}
                      <img src={require("../../../images/listing_thumb_2.jpg")} onClick={(e) => this.onSelect(e, 1)} />
                      {/* Hotel Gallery Slider Item */}
                      <img src={require("../../../images/listing_thumb_3.jpg")} onClick={(e) => this.onSelect(e, 2)} />
                      {/* Hotel Gallery Slider Item */}
                      <img src={require("../../../images/listing_thumb_4.jpg")} onClick={(e) => this.onSelect(e, 3)} />                     
                      {/* Hotel Gallery Slider Item */}
                      <img src={require("../../../images/listing_thumb_5.jpg")} onClick={(e) => this.onSelect(e, 4)} />
                      {/* Hotel Gallery Slider Item */}
                      <img src={require("../../../images/listing_thumb_6.jpg")} onClick={(e) => this.onSelect(e, 5)} />
                      {/* Hotel Gallery Slider Item */}
                      <img src={require("../../../images/listing_thumb_7.jpg")} onClick={(e) => this.onSelect(e, 6)} />
                      {/* Hotel Gallery Slider Item */}
                      <img src={require("../../../images/listing_thumb_8.jpg")} onClick={(e) => this.onSelect(e, 7)} />
                      {/* Hotel Gallery Slider Item */}
                      <img src={require("../../../images/listing_thumb_9.jpg")} onClick={(e) => this.onSelect(e, 8)} />
                    </OwlCarousel>
                    {/* Hotel Slider Nav - Prev */}
                    <div className="hotel_slider_nav hotel_slider_prev" onClick={() => this.refs.slider.prev()} >
                      <svg version="1.1" id="Layer_6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                        <defs>
                          <linearGradient id="hotel_grad_prev">
                            <stop offset="0%" stopColor="#fa9e1b" />
                            <stop offset="100%" stopColor="#8d4fff" />
                          </linearGradient>
                        </defs>
                        <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
											M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
											C22.545,2,26,5.541,26,9.909V23.091z" />
                        <polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
											11.042,18.219 " />
                      </svg>
                    </div>
                    {/* Hotel Slider Nav - Next */}
                    <div className="hotel_slider_nav hotel_slider_next" onClick={() => this.refs.slider.next()} >
                      <svg version="1.1" id="Layer_7" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                        <defs>
                          <linearGradient id="hotel_grad_next">
                            <stop offset="0%" stopColor="#fa9e1b" />
                            <stop offset="100%" stopColor="#8d4fff" />
                          </linearGradient>
                        </defs>
                        <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
										M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
										C22.545,2,26,5.541,26,9.909V23.091z" />
                        <polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
										17.046,15.554 " />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Hotel Info Text */}
                <div className="hotel_info_text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum. Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum quam placerat non. Etiam venenatis nibh augue, sed eleifend justo tristique eu</p>
                </div>
                {/* Hotel Info Tags */}
                <div className="hotel_info_tags">
                  <ul className="hotel_icons_list">
                    <li className="hotel_icons_item"><img src={require("../../../images/post.png")} alt="" /></li>
                    <li className="hotel_icons_item"><img src={require("../../../images/compass.png")} alt="" /></li>
                    <li className="hotel_icons_item"><img src={require("../../../images/bicycle.png")} alt="" /></li>
                    <li className="hotel_icons_item"><img src={require("../../../images/sailboat.png")} alt="" /></li>
                  </ul>
                </div>
              </div>
        )
    }
}

export default HotelInfo;