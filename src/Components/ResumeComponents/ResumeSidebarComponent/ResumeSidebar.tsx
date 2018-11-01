import * as React from "react";
import './ResumeSidebar.scss'
import { SidebarPersonal } from '../SidebarPersonalComponent/SidebarPersonal'




// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class ResumeSidebar extends React.Component {
    render() {
        return (
            <div className='resumeSidebarContainer'>
                <SidebarPersonal />
            </div>
        )
    }
}