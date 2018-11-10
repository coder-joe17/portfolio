import * as React from "react";
import {hot} from "react-hot-loader";
import './Contact.scss'
import { ContactMain } from '../../Components/ContactComponents/Contact'

class Contact extends React.Component{
    render() {
        return (
            <div className='contactContainer'>
                <ContactMain />
            </div>
        )
    }
}

export default hot(module)(Contact)