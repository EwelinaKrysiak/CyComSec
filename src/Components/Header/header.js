import React from "react";
import "./header.scss"

function Header (){
    return (
        <div className = 'header-container'>
            <div className='header-img'> </div>
            <div className = 'header-menu' >
                <ul className= 'menu'>
                    <li className='menu-el'>
                        <a href="">Home</a>
                    </li>
                    <li className='menu-el'>
                        <a href="">Services</a>
                    </li>
                    <li className='menu-el'>
                        <a href="">About Us</a>
                    </li>
                    <li className='menu-el'>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Header;

