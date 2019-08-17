import React, { Component } from 'react';
import './css/contact_styles.css';
import './css/contact_responsive.css';
import Footer from '../Botttom/Footer';
import CopyRight from '../Botttom/CopyRight';
import Home from './component/Home';
import Form from './component/Form';
import About from './component/About';
import GoogleMap from './component/GoogleMap';
class Contact extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (

      <div className="super_container">

        {/* Home */}
        <Home />
        {/* Contact */}
        <Form />
        {/* About */}
        <About />
        {/* Google Map */}
        <GoogleMap />
        {/* Footer */}
        <Footer />
        {/* Copyright */}
        <CopyRight />
      </div>
    )
  }
}

export default Contact;