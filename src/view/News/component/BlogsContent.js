import React, { Component } from 'react';

class BlogsContent extends Component {
    render() {
        return (
            <div className="col-lg-8">
                <div className="blog_post_container">
                    {/* Blog Post */}
                    <div className="blog_post">
                        <div className="blog_post_image">
                            <img src={require("../../../images/blog_1.jpg")} alt="https://unsplash.com/@anniespratt" />
                            <div className="blog_post_date d-flex flex-column align-items-center justify-content-center">
                                <div className="blog_post_day">01</div>
                                <div className="blog_post_month">Dec, 2017</div>
                            </div>
                        </div>
                        <div className="blog_post_meta">
                            <ul>
                                <li className="blog_post_meta_item"><a href="#">by Lore Papp</a></li>
                                <li className="blog_post_meta_item"><a href="#">Uncategorized</a></li>
                                <li className="blog_post_meta_item"><a href="#">3 Comments</a></li>
                            </ul>
                        </div>
                        <div className="blog_post_title"><a href="#">Try these new dream destinations</a></div>
                        <div className="blog_post_text">
                            <p>Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet,
                              pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper.
                              Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at
                    eleifend tellus. Ut eleifend dui nunc, non fermentum qua.</p>
                        </div>
                        <div className="blog_post_link"><a href="#">read more</a></div>
                    </div>
                    {/* Blog Post */}
                    <div className="blog_post">
                        <div className="blog_post_image">
                            <img src={require("../../../images/blog_2.jpg")} alt="https://unsplash.com/@tschax" />
                            <div className="blog_post_date d-flex flex-column align-items-center justify-content-center">
                                <div className="blog_post_day">01</div>
                                <div className="blog_post_month">Dec, 2017</div>
                            </div>
                        </div>
                        <div className="blog_post_meta">
                            <ul>
                                <li className="blog_post_meta_item"><a href>by Lore Papp</a></li>
                                <li className="blog_post_meta_item"><a href>Uncategorized</a></li>
                                <li className="blog_post_meta_item"><a href>3 Comments</a></li>
                            </ul>
                        </div>
                        <div className="blog_post_title"><a href="#">Try these new dream destinations</a></div>
                        <div className="blog_post_text">
                            <p>Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet,
                              pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper.
                              Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at
                    eleifend tellus. Ut eleifend dui nunc, non fermentum qua.</p>
                        </div>
                        <div className="blog_post_link"><a href="#">read more</a></div>
                    </div>
                    {/* Blog Post */}
                    <div className="blog_post">
                        <div className="blog_post_image">
                            <img src={require("../../../images/blog_3.jpg")} alt="https://unsplash.com/@stilclassics" />
                            <div className="blog_post_date d-flex flex-column align-items-center justify-content-center">
                                <div className="blog_post_day">01</div>
                                <div className="blog_post_month">Dec, 2017</div>
                            </div>
                        </div>
                        <div className="blog_post_meta">
                            <ul>
                                <li className="blog_post_meta_item"><a href>by Lore Papp</a></li>
                                <li className="blog_post_meta_item"><a href>Uncategorized</a></li>
                                <li className="blog_post_meta_item"><a href>3 Comments</a></li>
                            </ul>
                        </div>
                        <div className="blog_post_title"><a href="#">Try these new dream destinations</a></div>
                        <div className="blog_post_text">
                            <p>Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet,
                              pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper.
                              Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at
                    eleifend tellus. Ut eleifend dui nunc, non fermentum qua.</p>
                        </div>
                        <div className="blog_post_link"><a href="#">read more</a></div>
                    </div>
                </div>
                <div className="blog_navigation">
                    <ul>
                        <li className="blog_dot active">
                            <div />01.
                        </li>
                        <li className="blog_dot">
                            <div />02.
                        </li>
                        <li className="blog_dot">
                            <div />03.
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BlogsContent