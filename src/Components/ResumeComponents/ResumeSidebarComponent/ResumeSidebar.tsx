import * as React from "react";
import './ResumeSidebar.scss'
import { SidebarPersonal } from '../SidebarPersonalComponent/SidebarPersonal'
import { SidebarOption } from '../SidebarOptionComponent/SidebarOption'

export class ResumeSidebar extends React.Component {
    render() {
        return (
            <div className='resumeSidebarContainer'>
                <SidebarPersonal />
                <div className='resumeSidebarOptions'>
                    <SidebarOption linkTo = 'education' displayText = 'Education' />
                    <SidebarOption linkTo = 'experience' displayText = 'Experience' />
                </div>
            </div>
        )
    }
}