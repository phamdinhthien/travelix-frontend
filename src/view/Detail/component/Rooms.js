import React, { Component } from 'react';

class Room extends Component {
    render() {
        return (
            <div className="rooms">
                {/* Room */}
                <div className="room">
                    {/* Room */}
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="room_image"><img src={require("../../../images/room_1.jpg")} alt="https://unsplash.com/@grovemade" /></div>
                        </div>
                        <div className="col-lg-7">
                            <div className="room_content">
                                <div className="room_title">Double or Twin Room</div>
                                <div className="room_price">$99/night</div>
                                <div className="room_text">FREE cancellation before 23:59 on 20 December 2017</div>
                                <div className="room_extra">Breakfast $7.50</div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-lg-right">
                            <div className="room_button">
                                <div className="button book_button trans_200"><a href="#">book<span /><span /><span /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Room */}
                <div className="room">
                    {/* Room */}
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="room_image"><img src={require("../../../images/room_2.jpg")} alt="https://unsplash.com/@oowgnuj" /></div>
                        </div>
                        <div className="col-lg-7">
                            <div className="room_content">
                                <div className="room_title">Double or Twin Room</div>
                                <div className="room_price">$99/night</div>
                                <div className="room_text">FREE cancellation before 23:59 on 20 December 2017</div>
                                <div className="room_extra">Breakfast $7.50</div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-lg-right">
                            <div className="room_button">
                                <div className="button book_button trans_200"><a href="#">book<span /><span /><span /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Room;