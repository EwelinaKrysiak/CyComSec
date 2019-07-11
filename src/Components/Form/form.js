import React, {Component} from "react";
import "./form.scss";
import partnerImg from "../../Images/logo/IMG_1351.png"


class Form extends Component {

    state = {
        name: 'name and surname',
        email: 'email',
        message: 'message'
    };

    handleOnChangeName = (e) => {
        this.setState({name: e.target.value})
    };

    handleOnChangeEmail = (e) => {
        this.setState({email: e.target.value})
    };

    handleOnChangeMessage = (e) => {
        this.setState({message: e.target.value})
    };
    render() {
    const {id} = this.props;

        return (

            <div className='form-container' id={id} offset='100'>
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
                        <p>
                            <span className='footer-addres'>Ul. Orzycka 48/156</span>
                            <span>04-569 Warszawa</span>
                            <span>NIP 000-000-00-00</span>
                        </p>
                        <div className='form-partners'>
                            <span>Our Partner</span>
                            <img src={partnerImg} alt=""/>
                        </div>
                    </div>

                    <div className='form-box'>

                        <form className='form-body' action="">
                            <input type="text" value={this.state.name} onChange={this.handleOnChangeName}/>
                            <input type="text" value={this.state.name} onChange={this.handleOnChangeEmail}/>
                            <textarea type="text" value={this.state.message} onChange={this.handleOnChangeMessage}/>
                        </form>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;