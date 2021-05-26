import React, { useEffect, useState } from 'react'
import './banner.css';
import Typed from 'react-typed';
const Banner = () => {

    const [offset, setOffset] = useState(0);
    const [hide, setHide] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);

        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleHide)
    }, [])

    const handleHide = () => {
        if (window.scrollY > 330) {
            setHide(true)
        } else {
            setHide(false);
        }
    }
    const handleScroll = () => {
        setOffset(window.pageYOffset);
    }
    return (
        <div className="banner" id="home">
            <div className={`container ${hide ? 'hide' : ''}`}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 mx-auto" style={{ transform: `translateY(-${offset * 0.4}px)` }}>
                        <div className="left_side_img" >
                            <img src="/images/banner2.png" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 mx-auto" style={{ transform: `translateY(-${offset * 0.1}px)` }}>
                        <div className="right_side_text_wrapper">
                            <strong>Hi There, I'm</strong>
                            <h1>Mairaj Khan</h1>
                            <h2>

                                <Typed
                                    strings={[
                                        'Freelance Developer',
                                        'Freelance Designer',
                                        'Freelance Developer']}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop >
                                </Typed>
                            </h2>
                            <div className="hire_me">
                                <button id="hire">Hire me</button>
                                <button id="resume">Get Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
