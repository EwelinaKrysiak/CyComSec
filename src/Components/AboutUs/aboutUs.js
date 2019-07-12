import React from "react";
import "./aboutUs.scss"


function AboutUs(props) {
    return (
        <div className='aboutUs-container' id={props.id} offset='100'>
            <div className='aboutUs-section'>
                <h1 className='aboutUs-header'>About Us</h1>
                <div className='aboutUs-subcontainer'>

                    <div className='aboutUs-text'> For many years we have been professionally engaged in engineering
                        solutions. For us it means not only the successful delivery of projects and its full absorbsion
                        by the customer but also doing our best to foresee the potential issues our clients may have in
                        future and address them in advance. That's why when choosing the solutions, we pay attention to
                        what their purpose is, who they are targeted at, and how they fit to the foreseen future goals
                        and needs. <br/>
                        <br/>
                        The main asset of CyCommSec are people and their competences and capabilities. Secondly we
                        carefully choose our partners. It leads to sustainable business relations with our clients with
                        mutual growth. We look for solution until it rightly supports customer, us and the environment
                        we live in.
                    </div>
                    <div className='aboutUs-logo'></div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs;