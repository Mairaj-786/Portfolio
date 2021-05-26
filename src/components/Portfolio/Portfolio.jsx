import React from 'react'
import './portfolio.css'
import PortTab from './PortTab'
const Portfolio = () => {

    return (
        <>

            <div className="portfolio" id="portfolio">
                <div className="port_nav">
                    <h1 className="font-weight-bold  text-center" >Portfolio</h1>
                </div>
                <PortTab />
            </div>
        </>
    )
}

export default Portfolio
