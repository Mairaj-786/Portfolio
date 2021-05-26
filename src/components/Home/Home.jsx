import React, { useState } from 'react'
import './home.css';
import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';
import Banner from '../Banner/Banner';
import Portfolio from '../Portfolio/Portfolio';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';


const Home = () => {
    const [showHide, setShowHide] = useState(false);

    return (
        <div className="home">
            <Header showHide={showHide} setShowHide={setShowHide} />
            <SideNav showHide={showHide} setShowHide={setShowHide} />
            <Banner />
            <Portfolio />
            <Testimonial />
            <Contact />
        </div>
    )
}

export default Home
