import * as React from "react";
import './Welcome.scss'
import { LinkButton } from '../../GeneralComponents/LinkButtonComponent/LinkButton'


export class Welcome extends React.Component {
    render() { 
        return (
            <div className='welcomeContainer'>
                <div className='centerContainer'>
                    <div className='nameContainer'>
                        <h1>Joseph Bingham</h1>
                    </div>
                    <div className='subTitleContainer'>
                        <h2 className='subheadingText'>Developer. Traveler. Learner.</h2>
                    </div>
                    <div className='buttonContainer'>
                        <LinkButton linkText='About' linkTo='/about'></LinkButton>
                        <LinkButton linkText='Resume' linkTo='/resume/education'></LinkButton>
                        <LinkButton linkText='Contact' linkTo='/contact'></LinkButton>                        
                    </div>
                </div>
            </div>
        )
    }
}