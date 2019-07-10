import React from 'react';
import Header from './Components/Header/header.js'
import Banner from './Components/Banner/banner.js'
import Waves from './Components/Banner/Waves/waves.js'
import Services from './Components/Services/services.js'
import AboutUs from './Components/AboutUs/aboutUs.js'
import Form from './Components/Form/form.js'
import Footer from './Components/Footer/footer.js'
import "./App.scss"


function App() {
    return (
        <div className="App">
            <div className='container waves'>
                <Waves/>
                <div className='top-container'>
                    <Header/>
                    <Banner/>
                </div>


            </div>
            <div className='container body'>
                <Services/>
                <AboutUs/>
                <Form/>
            </div>

            <Footer/>

        </div>
    );
}

export default App;
