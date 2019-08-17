import React, { Component } from 'react';

class Reviews extends Component {
    render() {
        return (
            <div className="reviews">
                <div className="reviews_title">reviews</div>
                <div className="reviews_container">
                    {/* Review */}
                    <div className="review">
                        <div className="row">
                            <div className="col-lg-1">
                                <div className="review_image">
                                    <img src={require("../../../images/review_1.jpg")} alt="https://unsplash.com/@saaout" />
                                </div>
                            </div>
                            <div className="col-lg-11">
                                <div className="review_content">
                                    <div className="review_title_container">
                                        <div className="review_title">"We loved the services"</div>
                                        <div className="review_rating">9.5</div>
                                    </div>
                                    <div className="review_text">
                                        <p>Tetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum.</p>
                                    </div>
                                    <div className="review_name">Christinne Smith</div>
                                    <div className="review_date">12 November 2017</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Review */}
                    <div className="review">
                        <div className="row">
                            <div className="col-lg-1">
                                <div className="review_image">
                                    <img src={require("../../../images/review_2.jpg")} alt="Image by Andrew Robles" />
                                </div>
                            </div>
                            <div className="col-lg-11">
                                <div className="review_content">
                                    <div className="review_title_container">
                                        <div className="review_title">"Nice staff and great location"</div>
                                        <div className="review_rating">9.5</div>
                                    </div>
                                    <div className="review_text">
                                        <p>Tetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum.</p>
                                    </div>
                                    <div className="review_name">Christinne Smith</div>
                                    <div className="review_date">12 November 2017</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reviews;