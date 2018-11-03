import * as React from "react";
import {hot} from "react-hot-loader";
import { AboutTop } from '../../Components/AboutComponents/AboutTopComponent/AboutTop'
import './About.scss';

class About extends React.Component{
    render() {
        return (
            <div className='aboutContainer'>
                <AboutTop />
            </div>        
        );
    }
}

export default hot(module)(About)