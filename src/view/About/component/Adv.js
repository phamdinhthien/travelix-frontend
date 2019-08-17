import React, { Component } from 'react';

class Adv extends Component {
    render() {
        return (
            <div className="add">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="add_container">
                                <div className="add_background" style={{ backgroundImage: 'url(' + require('../../../images/add.jpg') + ')' }} />
                                <div className="add_content">
                                    <h1 className="add_title">thailand</h1>
                                    <div className="add_subtitle">From <span>$999</span></div>
                                    <div className="button add_button"><div className="button_bcg" /><a href="#">explore now<span /><span /><span /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Adv;