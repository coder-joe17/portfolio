import * as React from "react";
import {hot} from "react-hot-loader";
import './About.scss';

class About extends React.Component{
    render() {
        return (
            <div className='aboutContainer'>
                Hello From About!
            </div>        
        );
    }
}

export default hot(module)(About)