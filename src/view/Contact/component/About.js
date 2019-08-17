import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            {/* About - Image */}
                            <div className="about_image">
                                <img src={require("../../../images/man.png")} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            {/* About - Content */}
                            <div className="about_content">
                                <div className="logo_container about_logo">
                                    <div className="logo"><a href="#"><img src={require("../../../images/logo.png")} alt="" />travelix</a></div>
                                </div>
                                <p className="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula iaculis consequat nisl. Nunc et suscipit urna pretium.</p>
                                <ul className="about_social_list">
                                    <li className="about_social_item"><a href="#"><i className="fa fa-pinterest" /></a></li>
                                    <li className="about_social_item"><a href="#"><i className="fa fa-facebook-f" /></a></li>
                                    <li className="about_social_item"><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li className="about_social_item"><a href="#"><i className="fa fa-dribbble" /></a></li>
                                    <li className="about_social_item"><a href="#"><i className="fa fa-behance" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            {/* About Info */}
                            <div className="about_info">
                                <ul className="contact_info_list">
                                    <li className="contact_info_item d-flex flex-row">
                                        <div><div className="contact_info_icon"><img src={require("../../../images/placeholder.svg")} alt="" /></div></div>
                                        <div className="contact_info_text">4127 Raoul Wallenber 45b-c Gibraltar</div>
                                    </li>
                                    <li className="contact_info_item d-flex flex-row">
                                        <div><div className="contact_info_icon"><img src={require("../../../images/phone-call.svg")} alt="" /></div></div>
                                        <div className="contact_info_text">2556-808-8613</div>
                                    </li>
                                    <li className="contact_info_item d-flex flex-row">
                                        <div><div className="contact_info_icon"><img src={require("../../../images/message.svg")} alt="" /></div></div>
                                        <div className="contact_info_text"><a href="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactme@gmail.com</a></div>
                                    </li>
                                    <li className="contact_info_item d-flex flex-row">
                                        <div><div className="contact_info_icon"><img src={require("../../../images/planet-earth.svg")} alt="" /></div></div>
                                        <div className="contact_info_text"><a href="https://colorlib.com">www.colorlib.com</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About