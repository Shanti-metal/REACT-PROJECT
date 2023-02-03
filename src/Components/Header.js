import React from "react";
import './Header.scss';
import { Link } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import {CgShoppingCart} from "react-icons/cg";
import {RiMenu2Fill} from 'react-icons/ri';
function Header() {
    return <header className="main-header">
      <div className="header-content">
      <RiMenu2Fill className="mobile-menu"/>
        <ul className="left">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/category/:id'>Categories</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <div className="center">
          AMAZON SHOP
        </div>
        <div className="right">
          <TbSearch/>
          <AiOutlineHeart/>
          <span className="cart-icon">
            <CgShoppingCart />
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
  }

export default Header;