import * as React from "react";
import './SidebarPersonal.scss'

const resumeImage = require('../../../Images/croppedResumeImageRegular.JPG')



// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class SidebarPersonal extends React.Component {
    render() {
        return (
            <div className='sidebarPersonalContainer'>
                <div className='resumeImageContainer'>
                    <img src={resumeImage} alt='Joseph Bingham Picture' className='resumeImage'/>
                </div>
                <div className ='resumePersonalInfo'>
                    <p>Joseph Bingham</p>
                    <p>Joe@Coder-Joe.com</p>
                    <p><a href='https://www.linkedin.com/in/joseph-bingham-771a9186/' target='_blank' className='secondaryLink'>LinkedIn</a></p>
                </div>
            </div>
        )
    }
} 