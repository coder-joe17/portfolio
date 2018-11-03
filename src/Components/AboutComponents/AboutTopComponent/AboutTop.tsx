import * as React from "react";
import './AboutTop.scss'
const resumeImage = require('../../../../Images/aboutTop.JPG')

export class AboutTop extends React.Component {
    render() {
        return (
            <div className='aboutTopContainer'>
                <div className='aboutTopPicture'>
                    <img src={resumeImage} alt='Joseph Bingham' className='aboutTopImg' />
                </div>
                <div className='aboutTopIntro'>
                    <div className='aboutTopTextContainer'>
                        <div className='aboutTopSectionIntroOpeningContainer'>
                            <h1>Hi! My name is Joe.</h1>
                            <p>I love software engineering, entrepreneurship, space, and boardgames.</p>
                        </div>

                        <div className='aboutTopSectionIntroProfessionalContainer'>
                            <h1>Who am I?</h1>
                            <p>I am a student at Arizona State University, primarily studying computer information systems and business data analytics. Lately though, I've started taking engineering courses to pick up some robust engineering fundamentals. I'm married to an amazing woman, have an awesome family, and try to stop cat named Podrick Schrödinger Bingham from destroying the world (or my computer cables, at least).</p>
                        </div>

                        <div className='aboutTopSectionIntroProfessionalContainer'>
                            <h1>I love software engineering...</h1>
                            <p>I love software engineerings because of my love for solving problems. You can look at the process of building an application as a series of solving problems - and that process is exciting to me. However, software engineering is about more than that. It's the capability to see a problem that exists for humanity and try to solve it in such a way that is sustainable, scalable, and accessible. It's about surrounding yourself with people who have strengths you don't, and working together to create something new. That's why I love software engineering.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}