import React from 'react'
import './header.css';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-scroll'

const Header = (props) => {

    return (
        <div className="topNav fixed-top">
            <div className={props.showHide ? 'changeBack' : 'header'}>
                <h2>Genious.</h2>
                <div className="contact">
                    <div className="number">
                        <PersonIcon style={{ fontSize: '20' }} />
                        <span>+92306 2736 080</span>
                    </div>
                    <div className="email">
                        <EmailIcon style={{ fontSize: '20' }} />
                        <span>mairajrind4@gmail.com</span>
                    </div>
                </div>
                <div className="ham" onClick={() => props.setShowHide(!props.showHide)}>
                    {!props.showHide ? < MenuIcon /> : <CloseIcon />}
                </div>
            </div>
        </div>
    )
}

export default Header
