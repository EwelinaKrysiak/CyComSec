import React from "react";
import "./form.scss";
import partnerImg from "../../Images/logo/IMG_1351.png"


function Form() {
    return (

        <div className='form-container'>
            <h1 className='form-header'>Contact Us</h1>
            <div className='form-subcontainer'>
                <div className='form-contact'>
                    <p>
                        <span className='form-name'>Karol Henger - Managing Director</span>
                        <span>karol.henger@cycommsec.com</span>
                    </p>
                    <p><span className='form-name'>Mariusz Sulik - CEO</span>
                        <span>mariusz.sulik@cycommsec.com</span>
                    </p>
                    <div className='form-partners'>
                        <span>Our Partner</span>
                        <img src={partnerImg} alt=""/>
                    </div>
                </div>

            <div className='form-box'>

                <form className='form-body' action="">
                    <input type="text" value="name and surname"/>
                    <input type="text" value="email"/>
                    <input type="text" value="message"/>
                </form>
                <button>Send</button>
            </div>
            </div>
        </div>
    )
}

export default Form;