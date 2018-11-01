import * as React from "react";
import './SidebarPersonal.scss'

// @ts-ignore
const resumeImage = require('../../../../Images/resumeImage.JPG')




// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class SidebarPersonal extends React.Component {
    render() {
        return (
            <div className='sidebarPersonalContainer'>
                <img src={resumeImage} alt='Joseph Bingham Picture' className='resumeImage'/>
               
            </div>
        )
    }
}