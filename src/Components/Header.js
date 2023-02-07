import React from "react";
import './Header.scss';
import { Link } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { RiMenu2Fill } from 'react-icons/ri';
import BoatLogo from '../assests/boat_logo_small.png';
import SearchComponent from "./SearchComponent";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";


function Header() {
  return <header className="main-header">
    <div className="header-content">
      <div className="left">
        <Link to='/'><img src={BoatLogo}/></Link>
      </div>

      <div className="center">
      <RiMenu2Fill className="mobile-menu" />
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/category/:id'>Categories</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>

      <div className="right">
        <TbSearch/>
        {/* <SearchComponent/> */}
        <AiOutlineHeart />
        <span className="cart-icon">
          <CgShoppingCart />
          <span>5</span>
        </span>
        <li><Link to='/login'><AiOutlineUser/></Link></li>
        {/* <li><Link to='/signup'><AiOutlineUserAdd/></Link></li> */}
      </div>
    </div>
  </header>
}

export default Header;