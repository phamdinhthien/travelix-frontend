import React, { Component } from 'react';
import './css/offers_styles.css';
import './css/offers_responsive.css';
import Home from './component/Home';
import Search from '../Home/component/Search';
import Lists from './component/Lists';
import Footer from '../Botttom/Footer';
import CopyRight from '../Botttom/CopyRight';

class Offers extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="super_container">

        {/* Home */}
        <Home />
        <div className="offers">
          {/* Search */}
          <Search />
          {/* Offers */}
          <Lists />
        </div>
        {/* Footer */}
        <Footer />
        {/* Copyright */}
        <CopyRight />
      </div>
    )
  }
}

export default Offers;