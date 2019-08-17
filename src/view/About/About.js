import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Botttom/Footer.js';
import './css/about_styles.css';
import './css/about_responsive.css';
import CopyRight from '../Botttom/CopyRight.js';
import Home from './component/Home.js';
import Intro from './component/Intro.js';
import Stats from './component/Stats.js';
import Adv from './component/Adv.js';
import Milestones from './component/Milestones.js';

class About extends Component {
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
        {/* Home */}
        <Home />
        {/* Intro */}
        <Intro />
        {/* Stats */}
        <div data-aos="zoom-in">
          <Stats />
        </div>
        {/* Adv */}
        <Adv />
        {/* Milestones */}
        <div data-aos="zoom-in">
          <Milestones />
        </div>
        {/* Footer */}
        <Footer />
        {/* Copyright */}
        <CopyRight />
      </div>
    )
  }
}

export default About;