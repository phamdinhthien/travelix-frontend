import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';

const optionsCLient = {
  loop:true,
  margin: 30,
  autoplay: true,
  smartSpeed: 1200,
  navRewind: false,
  dots:false,
  responsive:
  {
    0: { items: 1 },
    320: { items: 1 },
    480: { items: 1 },
    575: { items: 1 },
    768: { items: 2 },
    992: { items: 3 },
    1199: { items: 3 }
  }
};
const events = {
 
};

class Judge extends Component {
    render() {
        return (
            <div className="testimonials">
              <div className="test_border" />
              <div className="container">
                <div className="row">
                  <div className="col text-center">
                    <h2 className="section_title">what our clients say about us</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    {/* Testimonials Slider */}
                    <div className="test_slider_container">
                      <OwlCarousel ref="client" options={optionsCLient} events={events} className="owl-carousel owl-theme test_slider">
                        {/* Testimonial Item */}
                        <div className="owl-item">
                          <div className="test_item">
                            <div className="test_image"><img src={require("../../../images/test_1.jpg")} alt="https://unsplash.com/@anniegray" /></div>
                            <div className="test_icon"><img src={require("../../../images/backpack.png")} alt="" /></div>
                            <div className="test_content_container">
                              <div className="test_content">
                                <div className="test_item_info">
                                  <div className="test_name">carla smith</div>
                                  <div className="test_date">May 24, 2017</div>
                                </div>
                                <div className="test_quote_title">" Best holliday ever "</div>
                                <p className="test_quote_text">Nullam eu convallis tortor. Suspendisse
                                  potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Testimonial Item */}
                        <div className="owl-item">
                          <div className="test_item">
                            <div className="test_image"><img src={require("../../../images/test_2.jpg")} alt="https://unsplash.com/@tschax" /></div>
                            <div className="test_icon"><img src={require("../../../images/island_t.png")} alt="" /></div>
                            <div className="test_content_container">
                              <div className="test_content">
                                <div className="test_item_info">
                                  <div className="test_name">carla smith</div>
                                  <div className="test_date">May 24, 2017</div>
                                </div>
                                <div className="test_quote_title">" Best holliday ever "</div>
                                <p className="test_quote_text">Nullam eu convallis tortor. Suspendisse
                                  potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Testimonial Item */}
                        <div className="owl-item">
                          <div className="test_item">
                            <div className="test_image"><img src={require("../../../images/test_3.jpg")} alt="https://unsplash.com/@seefromthesky" /></div>
                            <div className="test_icon"><img src={require("../../../images/kayak.png")} alt="" /></div>
                            <div className="test_content_container">
                              <div className="test_content">
                                <div className="test_item_info">
                                  <div className="test_name">carla smith</div>
                                  <div className="test_date">May 24, 2017</div>
                                </div>
                                <div className="test_quote_title">" Best holliday ever "</div>
                                <p className="test_quote_text">Nullam eu convallis tortor. Suspendisse
                                  potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Testimonial Item */}
                        <div className="owl-item">
                          <div className="test_item">
                            <div className="test_image"><img src={require("../../../images/test_2.jpg")} alt="" /></div>
                            <div className="test_icon"><img src={require("../../../images/island_t.png")} alt="" /></div>
                            <div className="test_content_container">
                              <div className="test_content">
                                <div className="test_item_info">
                                  <div className="test_name">carla smith</div>
                                  <div className="test_date">May 24, 2017</div>
                                </div>
                                <div className="test_quote_title">" Best holliday ever "</div>
                                <p className="test_quote_text">Nullam eu convallis tortor. Suspendisse
                                  potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Testimonial Item */}
                        <div className="owl-item">
                          <div className="test_item">
                            <div className="test_image"><img src={require("../../../images/test_1.jpg")} alt="" /></div>
                            <div className="test_icon"><img src={require("../../../images/backpack.png")} alt="" /></div>
                            <div className="test_content_container">
                              <div className="test_content">
                                <div className="test_item_info">
                                  <div className="test_name">carla smith</div>
                                  <div className="test_date">May 24, 2017</div>
                                </div>
                                <div className="test_quote_title">" Best holliday ever "</div>
                                <p className="test_quote_text">Nullam eu convallis tortor. Suspendisse
                                  potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Testimonial Item */}
                        <div className="owl-item">
                          <div className="test_item">
                            <div className="test_image"><img src={require("../../../images/test_3.jpg")} alt="" /></div>
                            <div className="test_icon"><img src={require("../../../images/kayak.png")} alt="" /></div>
                            <div className="test_content_container">
                              <div className="test_content">
                                <div className="test_item_info">
                                  <div className="test_name">carla smith</div>
                                  <div className="test_date">May 24, 2017</div>
                                </div>
                                <div className="test_quote_title">" Best holliday ever "</div>
                                <p className="test_quote_text">Nullam eu convallis tortor. Suspendisse
                                  potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </OwlCarousel>
                      {/* Testimonials Slider Nav - Prev */}
                      <div className="test_slider_nav test_slider_prev" onClick={() => this.refs.client.prev()}>
                        <svg version="1.1" id="Layer_6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                          <defs>
                            <linearGradient id="test_grad_prev">
                              <stop offset="0%" stopColor="#fa9e1b" />
                              <stop offset="100%" stopColor="#8d4fff" />
                            </linearGradient>
                          </defs>
                          <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                                    M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                                    C22.545,2,26,5.541,26,9.909V23.091z" />
                          <polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
                                    11.042,18.219 " />
                        </svg>
                      </div>
                      {/* Testimonials Slider Nav - Next */}
                      <div className="test_slider_nav test_slider_next" onClick={() => this.refs.client.next()}>
                        <svg version="1.1" id="Layer_7" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                          <defs>
                            <linearGradient id="test_grad_next">
                              <stop offset="0%" stopColor="#fa9e1b" />
                              <stop offset="100%" stopColor="#8d4fff" />
                            </linearGradient>
                          </defs>
                          <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                                M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                                C22.545,2,26,5.541,26,9.909V23.091z" />
                          <polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
                                17.046,15.554 " />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
export default Judge;