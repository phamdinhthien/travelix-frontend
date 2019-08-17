import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="home_news">
                <div className="home_background" style={{ background: "url(" + require("../../../images/blog_background.jpg") + ") no-repeat fixed" }} />
                <div className="home_content">
                    <div className="home_title">the blog</div>
                </div>
            </div>
        )
    }
}

export default Home