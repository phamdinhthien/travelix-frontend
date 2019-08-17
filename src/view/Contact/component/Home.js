import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="home_contact">
                <div className="home_background" style={{ background: "url(" + require("../../../images/contact_background.jpg") + ") no-repeat fixed" }} />
                <div className="home_content">
                    <div className="home_title">contact</div>
                </div>
            </div>
        )
    }
}

export default Home