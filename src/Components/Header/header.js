// import React from "react";
import React, {Component} from "react";
import "./header.scss"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {pageHeader} from "./sticky";


class Header extends Component {
    state = {
        scrolling: false
    };

    componentDidMount() {
        pageHeader()

    }

    componentWillUnmount() {
        pageHeader()
    }

    render() {
        const {id} = this.props;

        return (
            <div className='header-patch'>
                <div className='header-container'>
                    <AnchorLink href='#page-top' offset={200}>
                        <div className='header-img'/>
                    </AnchorLink>
                    <div className='header-menu'>
                        <ul className='menu'>
                            <li className='menu-el'>
                                <AnchorLink href='#home' offset={100}>Home</AnchorLink>
                            </li>
                            <li className='menu-el'>
                                <AnchorLink href='#services' offset={70}>Services</AnchorLink>
                            </li>
                            <li className='menu-el'>
                                <AnchorLink href='#aboutUs' offset={30}>About Us</AnchorLink>
                            </li>
                            <li className='menu-el'>
                                <AnchorLink href='#contact' offset={0}>Contact</AnchorLink>
                            </li>
                        </ul>
                    </div>


                </div>

            </div>
        )


    }


}

export default Header;
