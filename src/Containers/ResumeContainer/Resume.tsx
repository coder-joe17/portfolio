import * as React from "react";
import {hot} from "react-hot-loader";
import './Resume.scss'
import { ResumeSidebar } from '../../Components/ResumeComponents/ResumeSidebarComponent/ResumeSidebar'
import { ResumeDetails } from '../../Components/ResumeComponents/ResumeDetailsComponent/ResumeDetails'

class Resume extends React.Component{
    render() {
        return (
            <div className='resumeContainer'>
                <div className='innerResumeContainer'>
                    <ResumeSidebar />
                    <ResumeDetails />
                </div>
            </div>
        )
    }
}

export default hot(module)(Resume)