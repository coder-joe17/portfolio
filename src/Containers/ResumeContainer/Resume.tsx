import * as React from "react";
import {hot} from "react-hot-loader";
import './Resume.scss'
// import { Welcome } from '../../Components/ResumeComponents/WelcomeComponent/Welcome'

class Resume extends React.Component{
    render() {
        return (
            <div className='resumeContainer'>
                <div className='innerResumeContainer'>
                    Hello!
                </div>
            </div>
        )
    }
}

export default hot(module)(Resume)