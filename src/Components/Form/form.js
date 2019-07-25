import React, {Component} from "react";
import "./form.scss";


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

            <div className='form-container' id={id}>
                <h1 className='form-header'>Contact Us</h1>
                <div className='form-subcontainer'>
                    <div className='form-contact'>
                        <div className='names-contact space'>
                            <p>
                                <span className='form-bold'>Karol Henger - CEO</span>
                                <span>karol.henger@cycommsec.com</span>
                            </p>
                            <p><span className='form-bold'>Mariusz Sulik - COO</span>
                                <span>mariusz.sulik@cycommsec.com</span>
                            </p>
                        </div>
                        <div className='address-contact space'>
                        <p>
                            <span className='form-bold'>CyCommSec Sp. z o.o.</span>
                            <br/>
                            <span>Ul. Orzycka 48/156</span>
                            <span>02-695 Warszawa</span>
                            <span>NIP 521-368-90-34</span>
                        </p>
                        </div>
                        {/*<div className='partners-contact space'>*/}
                        {/*    <span className='form-bold'>Our Partner:</span>*/}
                        {/*    <img src={partnerImg} alt=""/>*/}
                        {/*</div>*/}
                    </div>

                    {/*<div className='form-box'>*/}

                    {/*    <form className='form-body' action="">*/}
                    {/*        <input type="text" value={this.state.name} onChange={this.handleOnChangeName}/>*/}
                    {/*        <input type="text" value={this.state.email} onChange={this.handleOnChangeEmail}/>*/}
                    {/*        <textarea type="text" value={this.state.message} onChange={this.handleOnChangeMessage}/>*/}
                    {/*    </form>*/}
                    {/*    <button>Send</button>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default Form;