import React from 'react';
import logo from '../../../images/airbnb.png';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar} from '@material-ui/core';


const Header = () => {
    return (
        <div className="header">
          
            <img  className="header_logo" src={logo} alt="logo"/>
            <div className="header_center">
                <input type="text"/><SearchIcon/>
            </div>
            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </div>
    );
}

export default Header;
