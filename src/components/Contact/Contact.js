import React, { useState } from 'react'
import './contact.css';
import Validation from '../../utils/Validation'
const Contact = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })


    const handleInputs = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }



    return (
        <div className="contact__1">
            <div className="contact__1_left_side">
                <img src="/images/hand.png" />
            </div>
            <div className="contact__1_right_side">
                <div className="inputs text-center">
                    <form >
                        <div class="form-group">
                            <strong>GET IN TOUCH</strong>
                        </div>
                        <div class="form-group">
                            <input type="text" name="name" value={state.name} onChange={handleInputs} placeholder="Your Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" value={state.email} onChange={handleInputs} placeholder="Email Address" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="subject" value={state.subject} onChange={handleInputs} placeholder="Subject" className="form-control" />
                        </div>
                        <div className="form-group">
                            <textarea name="message" value={state.message} className="form-control" onChange={handleInputs} placeholder="Your Message" />
                        </div>
                        <div className="form-group">
                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
