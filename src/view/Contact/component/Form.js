import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="contact_form_section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* Contact Form */}
                            <div className="contact_form_container">
                                <div className="contact_title text-center">get in touch</div>
                                <form action="#" id="contact_form" className="contact_form text-center">
                                    <input type="text" id="contact_form_name" className="contact_form_name input_field" placeholder="Name" required="required" data-error="Name is required." />
                                    <input type="text" id="contact_form_email" className="contact_form_email input_field" placeholder="E-mail" required="required" data-error="Email is required." />
                                    <input type="text" id="contact_form_subject" className="contact_form_subject input_field" placeholder="Subject" required="required" data-error="Subject is required." />
                                    <textarea id="contact_form_message" className="text_field contact_form_message" name="message" rows={4} placeholder="Message" required="required" data-error="Please, write us a message." defaultValue={""} />
                                    <button type="submit" id="form_submit_button" className="form_submit_button button trans_200">send message<span /><span /><span /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form