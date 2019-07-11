// import React from "react";
import React, {Component} from "react";
import "./header.scss"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {pageHeader} from "./sticky";


class Header extends Component {
    state = {
        scrolling: false
    }
    componentDidMount() {
        pageHeader()

    }

    componentWillUnmount() {
        pageHeader()
    }

    render() {
        const {id} = this.props;

        return (
            <div className='header-container'  offset='150' onScroll={this.handleScroll}>
                <div className='header-img'>
                    <AnchorLink href='#page-top-'> </AnchorLink>
                </div>
                <div className='header-menu'>
                    <ul className='menu'>
                        <li className='menu-el'>
                            <AnchorLink href='#home'>Home</AnchorLink>
                        </li>
                        <li className='menu-el'>
                            <AnchorLink href='#services' offset={150}>Services</AnchorLink>
                        </li>
                        <li className='menu-el'>
                            <AnchorLink href='#aboutUs'>About Us</AnchorLink>
                        </li>
                        <li className='menu-el'>
                            <AnchorLink href='#contact'>Contact</AnchorLink>
                        </li>
                    </ul>
                </div>

            </div>
        )




    }


}

export default Header;
