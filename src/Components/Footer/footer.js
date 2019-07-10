import React from "react";
import "./footer.scss"

function Footer (){
    return (
        <div className = 'footer-container'>
            <div className='img-header'> </div>
            <div className = 'footer-text' >
                <span className='footer-copyrights'>Copyright 2019 - Ewelina Krysiak</span>
                <span className='footer-addres'>Ul. Orzycka 48/156.     00-000 Warszawa  NIP 000-000-00-00</span>
            </div>
        </div>
    )
}

export default Footer;