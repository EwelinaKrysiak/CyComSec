import React from "react";
import headerSrc from "../../Images/grafiki/3.1.png";
import Waves from "./Waves/waves.js"
import "./banner.scss"

function Banner (props){
    return (
        <div className='banner-container' id={props.id}>
            <div className="banner-subcontainer">
                <div className='banner-text-box'>
                    <h1>Cyber Security Solutions</h1>
                    <span className='text-header'> An innovative hub for digital solutions in Telco and IT.  Our unique services and solutions can secure Your future and boost Your growth.</span>
                </div>

                <div className= 'banner-img-box'>
                    <img className= 'banner-img' src={headerSrc} alt={'CyComSec Designed by fullvector / Freepik'}/>
                </div>
            </div>
            
            <Waves/>

        </div>
    )
}
export default Banner;