import React from 'react';
import Header from './Components/Header/header.js'
import Banner from './Components/Banner/banner.js'
import Services from './Components/Services/services.js'
import AboutUs from './Components/AboutUs/aboutUs.js'
import Form from './Components/Form/form.js'
import Footer from './Components/Footer/footer.js'
import "./App.scss"


function App() {
    return (
        <div className="App">
            <div  id="page-top"/>
            <div className='container waves'>

                <div className='top-container'>
                    <Header/>
                    <Banner id='home'/>
                </div>

            </div>
            <div className='container body'>
                <Services id='services'/>
            </div>
            <AboutUs id='aboutUs'/>
            <Form id='contact'/>
            <Footer/>

        </div>
    );
}

export default App;

