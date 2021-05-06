import { Button } from '@material-ui/core';
import React,{useState} from 'react';
import Search from '../search/Search';
import './banner.css';

const Banner = () => {
    const [showSearch,setShowSearch] = useState(false)
    const switchMode=()=>{
        setShowSearch((prevShowSearch)=> !prevShowSearch);

    }
    return (
        <div>
            
            <div className="banner">
            <div className="banner_search">
            {showSearch && <Search/>}
                <Button className="banner_searchButton"
                variant="outlined" onClick={switchMode}>
                 {showSearch ? 'Hide Calendar' : 'Search Dates'}   
                </Button>
            </div>
            <div className="banner_info" style={{padding:'15px'}}>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway
                    to uncover the hidden gems near you.
                </h5>
                <Button variant="outlined">
                    Explore Nearby
                </Button>
            </div>
            


        </div>
        </div>
       
    );
}

export default Banner;
