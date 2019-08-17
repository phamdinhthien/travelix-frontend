import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

class Lists extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-1 temp_col" />
                    <div className="col-lg-11">
                        {/* Offers Sorting */}
                        <div className="offers_sorting_container">
                            <ul className="offers_sorting">
                                <li>
                                    <span className="sorting_text">price</span>
                                    <i className="fa fa-chevron-down" />
                                    <ul>
                                        <li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }" data-parent=".price_sorting"><span>show all</span></li>
                                        <li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;price&quot; }" data-parent=".price_sorting"><span>ascending</span></li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="sorting_text">location</span>
                                    <i className="fa fa-chevron-down" />
                                    <ul>
                                        <li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }"><span>default</span></li>
                                        <li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;name&quot; }"><span>alphabetical</span></li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="sorting_text">stars</span>
                                    <i className="fa fa-chevron-down" />
                                    <ul>
                                        <li className="filter_btn" data-filter="*"><span>show all</span></li>
                                        <li className="sort_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;stars&quot; }"><span>ascending</span></li>
                                        <li className="filter_btn" data-filter=".rating_3"><span>3</span></li>
                                        <li className="filter_btn" data-filter=".rating_4"><span>4</span></li>
                                        <li className="filter_btn" data-filter=".rating_5"><span>5</span></li>
                                    </ul>
                                </li>
                                <li className="distance_item">
                                    <span className="sorting_text">distance from center</span>
                                    <i className="fa fa-chevron-down" />
                                    <ul>
                                        <li className="num_sorting_btn"><span>distance</span></li>
                                        <li className="num_sorting_btn"><span>distance</span></li>
                                        <li className="num_sorting_btn"><span>distance</span></li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="sorting_text">reviews</span>
                                    <i className="fa fa-chevron-down" />
                                    <ul>
                                        <li className="num_sorting_btn"><span>review</span></li>
                                        <li className="num_sorting_btn"><span>review</span></li>
                                        <li className="num_sorting_btn"><span>review</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        {/* Offers Grid */}
                        <div className="offers_grid">
                            {/* Offers Item */}
                            <div className="offers_item rating_4">
                                <div className="row">
                                    <div className="col-lg-1 temp_col" />
                                    <div className="col-lg-3 col-1680-4">
                                        <div className="offers_image_container">
                                            {/* Image by https://unsplash.com/@kensuarez */}
                                            <div className="offers_image_background" style={{ backgroundImage: 'url(' + require('../../../images/offer_1.jpg') + ')' }} />
                                            <Link to='/detail'><div className="offer_name"><a href="">grand castle</a></div></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="offers_content">
                                            <div className="offers_price">$70<span>per night</span></div>
                                            <div className="rating_r rating_r_4 offers_rating" data-rating={4}>
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                            </div>
                                            <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
                                            <div className="offers_icons">
                                                <ul className="offers_icons_list">
                                                    <li className="offers_icons_item"><img src={require("../../../images/post.png")} alt="" /></li>
                                                    <li className="offers_icons_item"><img src={require("../../../images/compass.png")} alt="" /></li>
                                                    <li className="offers_icons_item"><img src={require("../../../images/bicycle.png")} alt="" /></li>
                                                    <li className="offers_icons_item"><img src={require("../../../images/sailboat.png")} alt="" /></li>
                                                </ul>
                                            </div>
                                            <Link to='/detail'><div className="button book_button"><a href="#">book<span /><span /><span /></a></div></Link>
                                            <div className="offer_reviews">
                                                <div className="offer_reviews_content">
                                                    <div className="offer_reviews_title">very good</div>
                                                    <div className="offer_reviews_subtitle">100 reviews</div>
                                                </div>
                                                <div className="offer_reviews_rating text-center">8.1</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Offers Item */}
                            <div className="offers_item rating_3">
                                <div className="row">
                                    <div className="col-lg-1 temp_col" />
                                    <div className="col-lg-3 col-1680-4">
                                        <div className="offers_image_container">
                                            {/* Image by https://unsplash.com/@thoughtcatalog */}
                                            <div className="offers_image_background" style={{ backgroundImage: 'url(' + require('../../../images/offer_5.jpg') + ')' }} />
                                            <div className="offer_name"><a href="single_listing.html">eurostar hotel</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="offers_content">
                                            <div className="offers_price">$50<span>per night</span></div>
                                            <div className="rating_r rating_r_3 offers_rating" data-rating={3}>
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                            </div>
                                            <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
                                            <div className="offers_icons">
                                                <ul className="offers_icons_list">
                                                    <li className="offers_icons_item"><img src={require("../../../images/post.png")} alt="" /></li>
                                                    <li className="offers_icons_item"><img src={require("../../../images/compass.png")} alt="" /></li>
                                                    <li className="offers_icons_item"><img src={require("../../../images/bicycle.png")} alt="" /></li>
                                                    <li className="offers_icons_item"><img src={require("../../../images/sailboat.png")} alt="" /></li>
                                                </ul>
                                            </div>
                                            <div className="button book_button"><a href="#">book<span /><span /><span /></a></div>
                                            <div className="offer_reviews">
                                                <div className="offer_reviews_content">
                                                    <div className="offer_reviews_title">very good</div>
                                                    <div className="offer_reviews_subtitle">100 reviews</div>
                                                </div>
                                                <div className="offer_reviews_rating text-center">8.1</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Offers Item */}
                            <div className="offers_item rating_5">
                                <div className="row">
                                    <div className="col-lg-1 temp_col" />
                                    <div className="col-lg-3 col-1680-4">
                                        <div className="offers_image_container">
                                            {/* Image by https://unsplash.com/@mindaugas */}
                                            <div className="offers_image_background" style={{ backgroundImage: 'url(' + require('../../../images/offer_6.jpg') + ')' }} />
                                            <div className="offer_name"><a href="single_listing.html">grand castle</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="offers_content">
                                            <div className="offers_price">$110<span>per night</span></div>
                                            <div className="rating_r rating_r_5 offers_rating" data-rating={5}>
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                            </div>
                                            <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
                                            <div className="offers_icons">
                                                <ul className="offers_icons_list">
                                                    <li className="offers_icons_item"><img src={require("../../../images/post.png")} alt="" /></li>
                                                    <li className="offers_icons_item"><img src={require("../../../images/compass.png")} alt="" /></li>
                                                    <li className="offers_icons_item"><img src={require("../../../images/bicycle.png")} alt="" /></li>
                                                    <li className="offers_icons_item"><img src={require("../../../images/sailboat.png")} alt="" /></li>
                                                </ul>
                                            </div>
                                            <div className="button book_button"><a href="#">book<span /><span /><span /></a></div>
                                            <div className="offer_reviews">
                                                <div className="offer_reviews_content">
                                                    <div className="offer_reviews_title">very good</div>
                                                    <div className="offer_reviews_subtitle">100 reviews</div>
                                                </div>
                                                <div className="offer_reviews_rating text-center">8.1</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Offers Item */}
                            <div className="offers_item rating_4">
                                <div className="row">
                                    <div className="col-lg-1 temp_col" />
                                    <div className="col-lg-3 col-1680-4">
                                        <div className="offers_image_container">
                                            {/* Image by https://unsplash.com/@rktkn */}
                                            <div className="offers_image_background" style={{ backgroundImage: 'url(' + require('../../../images/offer_7.jpg') + ')' }} />
                                            <div className="offer_name"><a href="single_listing.html">eurostar hotel</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="offers_content">
                                            <div className="offers_price">$50<span>per night</span></div>
                                            <div className="rating_r rating_r_4 offers_rating" data-rating={4}>
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                            </div>
                                            <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
                                            <div className="offers_icons">
                                                <ul className="offers_icons_list">
                                                    <li className="offers_icons_item"><img src={require("../../../images/post.png")} alt="" /></li>
                                                    <li className="offers_icons_item"><img src={require("../../../images/compass.png")} alt="" /></li>
                                                    <li className="offers_icons_item"><img src={require("../../../images/bicycle.png")} alt="" /></li>
                                                    <li className="offers_icons_item"><img src={require("../../../images/sailboat.png")} alt="" /></li>
                                                </ul>
                                            </div>
                                            <div className="button book_button"><a href="#">book<span /><span /><span /></a></div>
                                            <div className="offer_reviews">
                                                <div className="offer_reviews_content">
                                                    <div className="offer_reviews_title">very good</div>
                                                    <div className="offer_reviews_subtitle">100 reviews</div>
                                                </div>
                                                <div className="offer_reviews_rating text-center">8.1</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Offers Item */}
                            <div className="offers_item rating_3">
                                <div className="row">
                                    <div className="col-lg-1 temp_col" />
                                    <div className="col-lg-3 col-1680-4">
                                        <div className="offers_image_container">
                                            {/* Image by https://unsplash.com/@itsnwa */}
                                            <div className="offers_image_background" style={{ backgroundImage: 'url(' + require('../../../images/offer_8.jpg') + ')' }} />
                                            <div className="offer_name"><a href="single_listing.html">grand castle</a></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="offers_content">
                                            <div className="offers_price">$90<span>per night</span></div>
                                            <div className="rating_r rating_r_3 offers_rating" data-rating={3}>
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                                <i />
                                            </div>
                                            <p className="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.</p>
                                            <div className="offers_icons">
                                                <ul className="offers_icons_list">
                                                    <li className="offers_icons_item"><img src={require("../../../images/post.png")} alt="" /></li>
                                                    <li className="offers_icons_item"><img src={require("../../../images/compass.png")} alt="" /></li>
                                                    <li className="offers_icons_item"><img src={require("../../../images/bicycle.png")} alt="" /></li>
                                                    <li className="offers_icons_item"><img src={require("../../../images/sailboat.png")} alt="" /></li>
                                                </ul>
                                            </div>
                                            <div className="button book_button"><a href="#">book<span /><span /><span /></a></div>
                                            <div className="offer_reviews">
                                                <div className="offer_reviews_content">
                                                    <div className="offer_reviews_title">very good</div>
                                                    <div className="offer_reviews_subtitle">100 reviews</div>
                                                </div>
                                                <div className="offer_reviews_rating text-center">8.1</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lists;