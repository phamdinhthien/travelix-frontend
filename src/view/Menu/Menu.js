import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import './css/responsive.css';
var classNames = require('classnames');

const menus = [
  { label: "Home", to: "/", exact: true },
  { label: "Offers", to: "/offers", exact: false },
  { label: "News", to: "/news", exact: false },
  { label: "About Us", to: "/about", exact: false },
  { label: "Contact", to: "/contact", exact: false }
]

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMenu: false,
      isHideTopBar: false,
      isOpenSearch: false,
      contentSearch: ''
    }
  }
  /*------------handle click outside-----------------*/
  componentWillMount() {
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleOutsideClick = (event) => {
    if (!this.refs.megaMenu.contains(event.target)) {
      this.setState({
        isOpenSearch: false
      });
    }
  }
  /*--------------------------------------------*/

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    var scrollTop = Math.floor(window.scrollY);
    if (scrollTop > 100) {
      this.setState({
        isHideTopBar: true
      })
    }
    else {
      this.setState({
        isHideTopBar: false
      })
    }
  }

  onShowMenu = () => {
    this.setState({
      isShowMenu: true
    })

  }

  onOpenMenu = () => {
    this.setState({
      isShowMenu: true
    })
  }

  onCloseMenu = () => {
    this.setState({
      isShowMenu: false
    })
  }

  onOpenSearch = () => {
    this.setState({
      isOpenSearch: !this.state.isOpenSearch
    })
  }

  onChangeContentSearch = (e) => {
    var target = e.target;
    var value = target.value;
    this.setState({
      contentSearch: value
    })
  }

  render() {
    return (
      <div>
        <header className={classNames('header', { scrolled: this.state.isHideTopBar })} >
          {/* Top Bar */}
          <div className='top_bar'>
            <div className="container">
              <div className="row">
                <div className="col d-flex flex-row">
                  <div className="phone">+45 345 3324 56789</div>
                  <div className="social">
                    <ul className="social_list">
                      <li className="social_list_item"><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                      <li className="social_list_item"><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                      <li className="social_list_item"><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                      <li className="social_list_item"><a href="#"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                      <li className="social_list_item"><a href="#"><i className="fa fa-behance" aria-hidden="true" /></a></li>
                      <li className="social_list_item"><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                  <div className="user_box ml-auto">
                    <div className="user_box_login user_box_link"><a href="#">login</a></div>
                    <div className="user_box_register user_box_link"><a href="#">register</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main Navigation */}
          <nav className="main_nav">
            <div className="container">
              <div className="row">
                <div className="col main_nav_col d-flex flex-row align-items-center justify-content-start">
                  <div className="logo_container">
                    <div className="logo"><a href="#"><img src={require("../../images/logo.png")} alt="" />travelix</a></div>
                  </div>
                  <div className="main_nav_container ml-auto">
                    <ul className="main_nav_list">
                      {
                        menus.map((m, index) => {
                          return <Link key={index} to={m.to} className="main_nav_item" style={{ textTransform: "uppercase" }}>{m.label}</Link>
                        })
                      }
                    </ul>
                  </div>
                  <div className="content_search ml-lg-0 ml-auto" ref="megaMenu">
                    {this.state.isOpenSearch ?
                      <input type="text" className="form-control" required="required" value={this.state.contentSearch} onChange={this.onChangeContentSearch} />
                      :
                      null
                    }
                    <i className="fa fa-search ml-2" aria-hidden="true" style={{ fontSize: "20px", color: "#fa9e1b" }} onClick={this.onOpenSearch}></i>
                  </div>
                </div>
                <div className="hamburger" onClick={this.onOpenMenu}>
                  <i className="fa fa-bars trans_200" />
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className={classNames('menu', 'trans_500', { active: this.state.isShowMenu })}>
          <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
            <div className="menu_close_container" onClick={this.onCloseMenu}>
              <div className="menu_close" />
            </div>
            <div className="logo menu_logo"><a href="#"><img src="images/logo.png" alt="" /></a></div>
            <ul>
              {
                menus.map((m, index) => {
                  return <Link key={index} to={m.to} className="main_nav_item" onClick={() => this.setState({ isShowMenu: false })}>{m.label}</Link>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
