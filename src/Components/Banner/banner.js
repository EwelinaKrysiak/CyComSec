import React from "react";
import headerSrc from "../../Images/grafiki/3.1.png";
import Waves from "./Waves/waves.js"
import "./banner.scss"

function Banner (props){
    return (
        <div className='banner-container' id={props.id}>
            <div className="banner-subcontainer">
                <div className='banner-text-box'>
                    <h1> Civil Works Partner  </h1>
                    <span className='text-header'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.   </span>
                    <button className='btn-header'> check our services </button>
                </div>

                <div className= 'banner-img-box'>
                    <img className= 'banner-img' src={headerSrc}/>
                </div>
            </div>
            
            <Waves/>

        </div>
    )
}
export default Banner;