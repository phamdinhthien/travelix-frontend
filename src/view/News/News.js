import React, { Component } from 'react';
import './css/blog_styles.css';
import './css/blog_responsive.css';
import Footer from '../Botttom/Footer';
import CopyRight from '../Botttom/CopyRight';
import Home from './component/Home';
import BlogsContent from './component/BlogsContent';
import Sidebar from './component/Sidebar';

class News extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="super_container">
        {/* Home */}
        <Home />
        {/* Blog */}
        <div className="blog">
          <div className="container">
            <div className="row">
              {/* Blog Content */}
              <BlogsContent />
              {/* Blog Sidebar */}
              <div className="col-lg-4 sidebar_col">
                {/* Sidebar Search */}
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <Footer />
        {/* Copyright */}
        <CopyRight />
      </div>
    )
  }
}

export default News;