import React, { Component } from 'react';

class Trending extends Component {
    render() {
        return (
            <div className="trending">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h2 className="section_title">trending now</h2>
                        </div>
                    </div>
                    <div className="row trending_container">
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src={require("../../../images/trend_1.png")} alt="https://unsplash.com/@fransaraco" /></div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">grand hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src={require("../../../images/trend_2.png")} alt="https://unsplash.com/@grovemade" /></div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">mars hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src={require("../../../images/trend_3.png")} alt="https://unsplash.com/@jbriscoe" /></div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">queen hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src={require("../../../images/trend_4.png")} alt="https://unsplash.com/@oowgnuj" /></div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">mars hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src={require("../../../images/trend_5.png")} alt="https://unsplash.com/@mindaugas" /></div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">grand hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src={require("../../../images/trend_6.png")} alt="https://unsplash.com/@itsnwa" /></div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">mars hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src={require("../../../images/trend_7.png")} alt="https://unsplash.com/@rktkn" />
                                </div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">queen hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                        {/* Trending Item */}
                        <div className="col-lg-3 col-sm-6">
                            <div className="trending_item clearfix">
                                <div className="trending_image"><img src={require("../../../images/trend_8.png")} alt="https://unsplash.com/@thoughtcatalog" /></div>
                                <div className="trending_content">
                                    <div className="trending_title"><a href="#">mars hotel</a></div>
                                    <div className="trending_price">From $182</div>
                                    <div className="trending_location">madrid, spain</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Trending;