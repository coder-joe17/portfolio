import * as React from "react"
import {Route, Link, Switch } from "react-router-dom"
import './SidebarOption.scss'

export interface SidebarOptionProps { linkTo: string; displayText: string; }

export class SidebarOption extends React.Component<SidebarOptionProps, {}> {
    render() {
        return (
            <div className='sidebarOptionContainer'>
                <Link to={`/resume/${this.props.linkTo}`}>{this.props.displayText}</Link>
            </div>
        )
    }
} 