import React from 'react'
import "./Header.css"
import Netflixlogo from "../../assets/imges/1.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
   
       <div className='heder_outr_container'>
      <div className='header_container'>
        <div className='heder_left'>
          <ul>
            <li>
              <img src={Netflixlogo} alt='netflix logo' width="100"/>
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TVShow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Landuage</li>
          </ul>
        </div>
        <div className='icons'>
         <ul>
          <li><SearchIcon /></li> 
<li><NotificationsNoneIcon /></li> 
<li><AccountBoxIcon /></li> 
<li><ArrowDropDownIcon /></li>
</ul>
        </div>
      </div>
    </div>
    
    
  )
}

export default Header


{/* <ul> 
<li><SearchIcon /></li> 
<li><NotificationsNoneIcon /></li> 
<li><AccountBoxIcon /></li> 
<li><ArrowDropDownIcon /></li> 
</ul> */}