import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { webPortFolio, featuredPortFolio, mobilePortFolio } from '../data';


const PortTab = () => {
    const [active, setActive] = useState('features')
    const [data, setData] = useState([]);

    useEffect(() => {
        switch (active) {
            case "features":
                setData(featuredPortFolio);
                break;
            case "mobile":
                setData(mobilePortFolio);
                break;
            case "web":
                setData(webPortFolio);
                break;
            default:
                setData(featuredPortFolio);

        }

    }, [active])

    const list = [
        {
            id: 'features',
            title: "Features"
        },
        {
            id: 'mobile',
            title: "Mobile App"
        },
        {
            id: 'web',
            title: "Web App"
        },
    ];
    return (
        <>
            <div className="tab_IMG" >
                <div className="tabs">
                    <ul>
                        {
                            list.map((link) => (
                                <li className={active === link.id ? 'active' : ''} onClick={() => setActive(link.id)}>{link.title}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="IMG">
                    <div className='row'>
                        {data.map((d => (
                            <div className="col-lg-4 col-md-4 col-6 ">
                                <div className="img_card">
                                    <a href={d.url}>
                                        <img src={`/images/${d.img}`} />
                                    </a>
                                </div>
                            </div>
                        )))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortTab
