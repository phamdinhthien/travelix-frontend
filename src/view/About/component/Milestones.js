import React, { Component } from 'react';

class Milestones extends Component {
    render() {
        return (
            <div className="milestones">
                <div className="container">
                    <div className="row">
                        {/* Milestone */}
                        <div className="col-lg-3 milestone_col">
                            <div className="milestone text-center">
                                <div className="milestone_icon"><img src={require("../../../images/milestone_1.png")} alt="" /></div>
                                <div className="milestone_counter" data-end-value={255}>0</div>
                                <div className="milestone_text">Clients</div>
                            </div>
                        </div>
                        {/* Milestone */}
                        <div className="col-lg-3 milestone_col">
                            <div className="milestone text-center">
                                <div className="milestone_icon"><img src={require("../../../images/milestone_2.png")} alt="" /></div>
                                <div className="milestone_counter" data-end-value={1176}>0</div>
                                <div className="milestone_text">Projects</div>
                            </div>
                        </div>
                        {/* Milestone */}
                        <div className="col-lg-3 milestone_col">
                            <div className="milestone text-center">
                                <div className="milestone_icon"><img src={require("../../../images/milestone_3.png")} alt="" /></div>
                                <div className="milestone_counter" data-end-value={39}>0</div>
                                <div className="milestone_text">Countries</div>
                            </div>
                        </div>
                        {/* Milestone */}
                        <div className="col-lg-3 milestone_col">
                            <div className="milestone text-center">
                                <div className="milestone_icon"><img src={require("../../../images/milestone_4.png")} alt="" /></div>
                                <div className="milestone_counter" data-end-value={127}>0</div>
                                <div className="milestone_text">Coffees</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Milestones;