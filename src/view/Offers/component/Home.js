import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="home_offer">
                <div className="home_background" style={{ background: "url(" + require("../../../images/about_background.jpg") + ") no-repeat fixed" }} />
                <div className="home_content">
                    <div className="home_title">our offers</div>
                </div>
            </div>
        )
    }
}

export default Home;