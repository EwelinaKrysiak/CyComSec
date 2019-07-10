import React from "react";
import "./services.scss"
import servicesImg1 from "../../Images/grafiki/5.1.png";
import servicesImg2 from "../../Images/grafiki/2.1.png";
import servicesImg3 from "../../Images/grafiki/4.1.png"


function Services() {
    return (
        <div className='services-container'>
            <div className='services-section'>
                <div className='services-img-box'>
                    <img className='services-img' src={servicesImg1} alt=""/>
                </div>
                <div className="text-box">
                    <h1>Telecommunication</h1>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
                    <button> More Info</button>
                </div>

            </div>
            <div className='services-section'>
                <div className="text-box">
                    <h1>Cyber Security</h1>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
                    <button> More Info</button>
                </div>
                <div>
                    <img className='services-img' src={servicesImg2} alt=""/>
                </div>
            </div>
            <div className='services-section'>
                <div>
                    <img className='services-img' src={servicesImg3} alt=""/>
                </div>
                <div className="text-box">
                    <h1>Digital Transformation</h1>
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
                    <button> More Info</button>
                </div>

            </div>

        </div>
    )
}

export default Services;

