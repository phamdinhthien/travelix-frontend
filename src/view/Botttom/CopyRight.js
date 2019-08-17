import React, { Component } from 'react';

class CopyRight extends Component {
    render() {
        return (
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 order-lg-1 order-2  ">
                            <div className="copyright_content d-flex flex-row align-items-center">
                                <div>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright ©
                                    All rights reserved | This
                      template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 order-lg-2 order-1">
                            <div className="footer_nav_container d-flex flex-row align-items-center justify-content-lg-end">
                                <div className="footer_nav">
                                    <ul className="footer_nav_list">
                                        <li className="footer_nav_item"><a href="#">home</a></li>
                                        <li className="footer_nav_item"><a href="about.html">about us</a></li>
                                        <li className="footer_nav_item"><a href="offers.html">offers</a></li>
                                        <li className="footer_nav_item"><a href="blog.html">news</a></li>
                                        <li className="footer_nav_item"><a href="contact.html">contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CopyRight;