import React from 'react'
import './sidenav.css'
import { Link } from 'react-scroll'

const SideNav = (props) => {
    return (
        <div className={props.showHide ? 'show' : 'sidenav'}>
            <ul >
                <li><Link onClick={() => props.setShowHide(!props.showHide)} exact activeClass="act" to="home" spy={true} offset={0} duration={1300} smooth={true} className="nav-link">Home</Link></li>
                <li><Link onClick={() => props.setShowHide(!props.showHide)} exact activeClass="act" to="portfolio" spy={true} offset={0} duration={1300} smooth={true} className="nav-link">Portfolio</Link></li>
                <li><Link onClick={() => props.setShowHide(!props.showHide)} exact activeClass="act" to="testimonial" spy={true} offset={0} duration={1300} smooth={true} className="nav-link">Testimonial</Link></li>
                <li><Link onClick={() => props.setShowHide(!props.showHide)} exact activeClass="act" to="del" spy={true} offset={0} duration={1300} smooth={true} className="nav-link">DEL</Link></li>
            </ul>
        </div>
    )
}

export default SideNav
