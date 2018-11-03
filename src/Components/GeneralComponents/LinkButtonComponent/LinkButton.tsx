import * as React from "react";
import {Route, Link, Switch } from "react-router-dom"
import './LinkButton.scss'

export interface LinkButtonProps { linkText: string; linkTo: string; }

export class LinkButton extends React.Component<LinkButtonProps, {}> {
    render() {
        return (
            <div className='linkButtonContainer'>
                <Link to={this.props.linkTo}>
                    <div className='linkButtonTextContainer'>
                        {this.props.linkText}
                    </div>
                </Link>
            </div>
        )
    }
}