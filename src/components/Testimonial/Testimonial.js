import React from 'react'
import './testmonial.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
const Testimonial = () => {
    return (
        <div className="testimonial" id="testimonial">
            <h2>Testimonials</h2>
            <div className="container">
                <div className="testimonial_card">
                    <div className="row">
                        <div className="col-lg-4 mx-auto">
                            <div className="testimonial_card_wrapper">
                                <div className="testimonial_IMG">
                                    <SubdirectoryArrowRightIcon />
                                    <img src="/images/banner.jpg" />
                                    <FacebookIcon />
                                </div>
                                <p>It is a long established fact that  sometimes on purpose (injected humour and the like)</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mx-auto">
                            <div className="testimonial_card_wrapper">
                                <div className="testimonial_IMG">
                                    <SubdirectoryArrowRightIcon />
                                    <img src="/images/banner.jpg" />
                                    <FacebookIcon />
                                </div>
                                <p>It is a long established fact that  sometimes on purpose (injected humour and the like)</p>
                            </div>
                        </div>
                        <div className="col-lg-4 mx-auto">
                            <div className="testimonial_card_wrapper">
                                <div className="testimonial_IMG">
                                    <SubdirectoryArrowRightIcon />
                                    <img src="/images/banner.jpg" />
                                    <FacebookIcon />
                                </div>
                                <p>It is a long established fact that  sometimes on purpose (injected humour and the like)</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
