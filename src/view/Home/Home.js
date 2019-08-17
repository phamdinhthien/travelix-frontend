import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tours from './component/Tours';
import CTA from './component/CTA';
import Offers from './component/Offers';
import Judge from './component/Judge';
import Trending from './component/Trending';
import Contact from './component/Contact';
import Footer from '../Botttom/Footer';
import CopyRight from '../Botttom/CopyRight';
import Slider from './component/Slider';
import Search from './component/Search';
import './css/main_styles.css';
import './css/responsive.css';

class Home extends Component {
  constructor(props) {
    super(props);
    AOS.init();
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="super_container">
        {/* Slider */}
        <Slider />
        {/* Search */}
        <Search />
        {/* Tours */}
        <div data-aos="zoom-in">
          <Tours />
        </div>
        {/* CTA */}
        <div data-aos="zoom-in">
          <CTA />
        </div>
        {/* Offers */}
        <div data-aos="zoom-in">
          <Offers />
        </div>
        {/* Testimonials */}
        <div data-aos="zoom-in">
          <Judge />
        </div>
        {/* trending */}
        <div data-aos="zoom-in">
          <Trending />
        </div>
        {/* Contact */}
        <Contact />
        {/* Footer */}
        <Footer />
        {/* Copyright */}
        <CopyRight />
      </div>
    )
  }
}

export default Home;