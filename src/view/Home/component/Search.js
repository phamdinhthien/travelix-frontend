import React, { Component } from 'react';
var classNames = require('classnames');

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchItem: 0
        }
    }

    onClickSearchItem = (index) => {
        this.setState({
            searchItem: index
        })
    }
    render() {
        return (
            <div className="search">
                {/* Search Contents */}
                <div className="container fill_height">
                    <div className="row fill_height">
                        <div className="col fill_height">
                            {/* Search Tabs */}
                            <div className="search_tabs_container">
                                <div className="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                    <div className={classNames('search_tab', 'd-flex', 'flex-row', 'align-items-center', 'justify-content-lg-center', 'justify-content-start', { active: this.state.searchItem === 0 })} onClick={() => this.onClickSearchItem(0)}>
                                        <img src={require("../../../images/suitcase.png")} alt="" /><span>hotels</span>
                                    </div>
                                    <div className={classNames('search_tab', 'd-flex', 'flex-row', 'align-items-center', 'justify-content-lg-center', 'justify-content-start', { active: this.state.searchItem === 1 })} onClick={() => this.onClickSearchItem(1)}>
                                        <img src={require("../../../images/bus.png")} alt="" />car rentals
                                    </div>
                                    <div className={classNames('search_tab', 'd-flex', 'flex-row', 'align-items-center', 'justify-content-lg-center', 'justify-content-start', { active: this.state.searchItem === 2 })} onClick={() => this.onClickSearchItem(2)}>
                                        <img src={require("../../../images/departure.png")} alt="" />flights
                                    </div>
                                    <div className={classNames('search_tab', 'd-flex', 'flex-row', 'align-items-center', 'justify-content-lg-center', 'justify-content-start', { active: this.state.searchItem === 3 })} onClick={() => this.onClickSearchItem(3)}>
                                        <img src={require("../../../images/island.png")} alt="" />trips
                                    </div>
                                    <div className={classNames('search_tab', 'd-flex', 'flex-row', 'align-items-center', 'justify-content-lg-center', 'justify-content-start', { active: this.state.searchItem === 4 })} onClick={() => this.onClickSearchItem(4)}>
                                        <img src={require("../../../images/cruise.png")} alt="" />cruises
                                    </div>
                                    <div className={classNames('search_tab', 'd-flex', 'flex-row', 'align-items-center', 'justify-content-lg-center', 'justify-content-start', { active: this.state.searchItem === 5 })} onClick={() => this.onClickSearchItem(5)}>
                                        <img src={require("../../../images/diving.png")} alt="" />activities
                                    </div>
                                </div>
                            </div>
                            {/* Search Panel */}
                            <div className={classNames('search_panel', { active: this.state.searchItem === 0 })}>
                                <form action="#" id="search_form_1" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                    <div className="search_item">
                                        <div>destination</div>
                                        <input type="text" className="destination search_input" required="required" />
                                    </div>
                                    <div className="search_item">
                                        <div>check in</div>
                                        <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                                    </div>
                                    <div className="search_item">
                                        <div>check out</div>
                                        <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                                    </div>
                                    <div className="search_item">
                                        <div>adults</div>
                                        <select name="adults" id="adults_1" className="dropdown_item_select search_input">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                    </div>
                                    <div className="search_item">
                                        <div>children</div>
                                        <select name="children" id="children_1" className="dropdown_item_select search_input">
                                            <option>0</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                    </div>
                                    <div className="extras">
                                        <ul className="search_extras clearfix">
                                            <li className="search_extras_item">
                                                <div className="clearfix">
                                                    <input type="checkbox" id="search_extras_1" className="search_extras_cb" />
                                                    <label htmlFor="search_extras_1">Pet Friendly</label>
                                                </div>
                                            </li>
                                            <li className="search_extras_item">
                                                <div className="clearfix">
                                                    <input type="checkbox" id="search_extras_2" className="search_extras_cb" />
                                                    <label htmlFor="search_extras_2">Car Parking</label>
                                                </div>
                                            </li>
                                            <li className="search_extras_item">
                                                <div className="clearfix">
                                                    <input type="checkbox" id="search_extras_3" className="search_extras_cb" />
                                                    <label htmlFor="search_extras_3">Wireless Internet</label>
                                                </div>
                                            </li>
                                            <li className="search_extras_item">
                                                <div className="clearfix">
                                                    <input type="checkbox" id="search_extras_4" className="search_extras_cb" />
                                                    <label htmlFor="search_extras_4">Reservations</label>
                                                </div>
                                            </li>
                                            <li className="search_extras_item">
                                                <div className="clearfix">
                                                    <input type="checkbox" id="search_extras_5" className="search_extras_cb" />
                                                    <label htmlFor="search_extras_5">Private Parking</label>
                                                </div>
                                            </li>
                                            <li className="search_extras_item">
                                                <div className="clearfix">
                                                    <input type="checkbox" id="search_extras_6" className="search_extras_cb" />
                                                    <label htmlFor="search_extras_6">Smoking Area</label>
                                                </div>
                                            </li>
                                            <li className="search_extras_item">
                                                <div className="clearfix">
                                                    <input type="checkbox" id="search_extras_7" className="search_extras_cb" />
                                                    <label htmlFor="search_extras_7">Wheelchair Accessible</label>
                                                </div>
                                            </li>
                                            <li className="search_extras_item">
                                                <div className="clearfix">
                                                    <input type="checkbox" id="search_extras_8" className="search_extras_cb" />
                                                    <label htmlFor="search_extras_8">Pool</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="more_options">
                                        <div className="more_options_trigger">
                                            <a href="#">load more options</a>
                                        </div>
                                        <ul className="more_options_list clearfix">
                                            <li className="more_options_item">
                                                <div className="clearfix">
                                                    <input type="checkbox" id="more_options_1" className="search_extras_cb" />
                                                    <label htmlFor="more_options_1">Pet Friendly</label>
                                                </div>
                                            </li>
                                            <li className="more_options_item">
                                                <div className="clearfix">
                                                    <input type="checkbox" id="more_options_2" className="search_extras_cb" />
                                                    <label htmlFor="more_options_2">Car Parking</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <button className="button search_button">search<span /><span /><span /></button>
                                </form>
                            </div>
                            {/* Search Panel */}
                            <div className={classNames('search_panel', { active: this.state.searchItem === 1 })}>
                                <form action="#" id="search_form_2" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                    <div className="search_item">
                                        <div>destination</div>
                                        <input type="text" className="destination search_input" required="required" />
                                    </div>
                                    <div className="search_item">
                                        <div>check in</div>
                                        <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                                    </div>
                                    <div className="search_item">
                                        <div>check out</div>
                                        <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                                    </div>
                                    <div className="search_item">
                                        <div>adults</div>
                                        <select name="adults" id="adults_2" className="dropdown_item_select search_input">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                    </div>
                                    <div className="search_item">
                                        <div>children</div>
                                        <select name="children" id="children_2" className="dropdown_item_select search_input">
                                            <option>0</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                    </div>
                                    <button className="button search_button">search<span /><span /><span /></button>
                                </form>
                            </div>
                            {/* Search Panel */}
                            <div className={classNames('search_panel', { active: this.state.searchItem === 2 })}>
                                <form action="#" id="search_form_3" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                    <div className="search_item">
                                        <div>destination</div>
                                        <input type="text" className="destination search_input" required="required" />
                                    </div>
                                    <div className="search_item">
                                        <div>check in</div>
                                        <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                                    </div>
                                    <div className="search_item">
                                        <div>check out</div>
                                        <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                                    </div>
                                    <div className="search_item">
                                        <div>adults</div>
                                        <select name="adults" id="adults_3" className="dropdown_item_select search_input">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                    </div>
                                    <div className="search_item">
                                        <div>children</div>
                                        <select name="children" id="children_3" className="dropdown_item_select search_input">
                                            <option>0</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                    </div>
                                    <button className="button search_button">search<span /><span /><span /></button>
                                </form>
                            </div>
                            {/* Search Panel */}
                            <div className={classNames('search_panel', { active: this.state.searchItem === 3 })}>
                                <form action="#" id="search_form_4" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                    <div className="search_item">
                                        <div>destination</div>
                                        <input type="text" className="destination search_input" required="required" />
                                    </div>
                                    <div className="search_item">
                                        <div>check in</div>
                                        <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                                    </div>
                                    <div className="search_item">
                                        <div>check out</div>
                                        <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                                    </div>
                                    <div className="search_item">
                                        <div>adults</div>
                                        <select name="adults" id="adults_4" className="dropdown_item_select search_input">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                    </div>
                                    <div className="search_item">
                                        <div>children</div>
                                        <select name="children" id="children_4" className="dropdown_item_select search_input">
                                            <option>0</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                    </div>
                                    <button className="button search_button">search<span /><span /><span /></button>
                                </form>
                            </div>
                            {/* Search Panel */}
                            <div className={classNames('search_panel', { active: this.state.searchItem === 4 })}>
                                <form action="#" id="search_form_5" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                    <div className="search_item">
                                        <div>destination</div>
                                        <input type="text" className="destination search_input" required="required" />
                                    </div>
                                    <div className="search_item">
                                        <div>check in</div>
                                        <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                                    </div>
                                    <div className="search_item">
                                        <div>check out</div>
                                        <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                                    </div>
                                    <div className="search_item">
                                        <div>adults</div>
                                        <select name="adults" id="adults_5" className="dropdown_item_select search_input">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                    </div>
                                    <div className="search_item">
                                        <div>children</div>
                                        <select name="children" id="children_5" className="dropdown_item_select search_input">
                                            <option>0</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                    </div>
                                    <button className="button search_button">search<span /><span /><span /></button>
                                </form>
                            </div>
                            {/* Search Panel */}
                            <div className={classNames('search_panel', { active: this.state.searchItem === 5 })}>
                                <form action="#" id="search_form_6" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                    <div className="search_item">
                                        <div>destination</div>
                                        <input type="text" className="destination search_input" required="required" />
                                    </div>
                                    <div className="search_item">
                                        <div>check in</div>
                                        <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
                                    </div>
                                    <div className="search_item">
                                        <div>check out</div>
                                        <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
                                    </div>
                                    <div className="search_item">
                                        <div>adults</div>
                                        <select name="adults" id="adults_6" className="dropdown_item_select search_input">
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                    </div>
                                    <div className="search_item">
                                        <div>children</div>
                                        <select name="children" id="children_6" className="dropdown_item_select search_input">
                                            <option>0</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                    </div>
                                    <button className="button search_button">search<span /><span /><span /></button>
                                </form>
                            </div>
                            {/* end here */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;