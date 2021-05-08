import { Button } from '@material-ui/core';
import React,{useState} from 'react';
import Search from '../search/Search';
import './banner.css';
import {useHistory} from 'react-router-dom';

const Banner = () => {
    const history = useHistory();
    const [showSearch,setShowSearch] = useState(false)
    const switchMode=()=>{
        setShowSearch((prevShowSearch)=> !prevShowSearch);

    }
    return (
 
            
            <div className="banner">
                <div className="banner__search">
                {showSearch && <Search/>}
                    <Button className="banner__searchButton"
                    variant="outlined" onClick={switchMode}>
                    {showSearch ? 'Hide Calendar' : 'Search Dates'}   
                    </Button>
                </div>
                <div className="banner__info" style={{padding:'15px'}}>
                    <h1>Get out and stretch your imagination</h1>
                    <h5>
                        Plan a different kind of getaway
                        to uncover the hidden gems near you.
                    </h5>
                    <Button variant="outlined" onClick={()=>
                        history.push('/search')
                        }>
                        Explore Nearby
                    </Button>
                </div>
        </div>
     
       
    );
}

export default Banner;
