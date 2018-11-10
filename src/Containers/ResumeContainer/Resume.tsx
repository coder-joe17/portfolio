import * as React from "react";
import {hot} from "react-hot-loader";
import {Route, Link, Switch } from "react-router-dom"
import './Resume.scss'
import { ResumeSidebar } from '../../Components/ResumeComponents/ResumeSidebarComponent/ResumeSidebar'
import { Education } from '../../Components/ResumeComponents/ResumeDetailsComponent/Education'
import { Experience } from '../../Components/ResumeComponents/ResumeDetailsComponent/Experience'
import { Leadership } from '../../Components/ResumeComponents/ResumeDetailsComponent/Leadership'

class Resume extends React.Component{
    render() {
        return (
            <div className='resumeContainer'>
                <div className='innerResumeContainer'>
                    <ResumeSidebar />
                    <Route path={`/resume/education`} component={Education}/>
                    <Route path={`/resume/experience`} component={Experience}/>
                    <Route path={`/resume/extracurriculars`} component={Leadership}/>
                </div>


                
            </div>
        )
    }
}

export default hot(module)(Resume) 