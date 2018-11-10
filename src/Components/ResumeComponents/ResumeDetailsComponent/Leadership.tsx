import * as React from "react";
import './Details.scss'


export class Leadership extends React.Component {
    render() {
        return (
            <div className='resumeDetailsContainer'>

                <div className='resumeHeading'>
                    <h1 className='resumeHeadingTitle'>Extracurriculars</h1>
                    <h2 className='resumeHeadingSubTitle'>Leadership, Clubs, Organizations</h2>
                </div>

                <div className='resumeBody'>

                    <div className='resumeBodyRow resumeDetailsCollege'>
                        <div className='resumeBodyRowTitle'>
                            <div className='resumeBodyRowTitleText'>
                            Member
                            </div>
                            <div className='resumeBodyRowTitleDate'>
                                11/2015 - Current
                            </div>
                            
                        </div>
                        <div className='resumeBodyRowSubTitle'>
                            Next Generation Service Corps (NGSC)
                        </div>
                        <div className='resumeBodyRowDetails'>
                           
                        </div>
                    </div>

                    <div className='resumeBodyRow resumeDetailsCollege'>
                        <div className='resumeBodyRowTitle'>
                            <div className='resumeBodyRowTitleText'>
                                CTO / Lead Engineer
                            </div>
                            <div className='resumeBodyRowTitleDate'>
                                01/2018 - Current
                            </div>
                            
                        </div>
                        <div className='resumeBodyRowSubTitle'>
                            iWaandr
                        </div>
                        <div className='resumeBodyRowDetails'>
                            iWaandr (pronounced I Wander) is a startup based around creating a new way to find authentic experiences at home and abroad. On this project, I am the head developer and CTO using React and Redux to build the front end. The application is database driven, hosted by Firebase and using Firestore’s NoSQL database. We practice Agile methodologies with two week sprints (using Jira for project management) and use Git with Bitbucket for version control.  The URL for iWaandr is: <a href='https://iwaandr.com' target='_blank'>iwaandr.com</a>.
                        </div>
                    </div>

                    <div className='resumeBodyRow  resumeDetailsCertificate'>
                        <div className='resumeBodyRowTitle'>
                            <div className='resumeBodyRowTitleText'>
                                Software Engineering Intern
                            </div>
                            <div className='resumeBodyRowTitleDate'>
                                06/2018 - 08/2018
                            </div>
                            
                        </div>
                        <div className='resumeBodyRowSubTitle'>
                            NASA (Johnson Space Center)
                        </div>
                        <div className='resumeBodyRowDetails'>
                            Worked on a team of 5 to build out a JavaScript (Node / Express / ES6+) platform. The platform was built on a complex server structure that was made to connect to spacecraft telemetry channels (essentially RESTful APIs). The front end displayed the data sent by those channels. We utilized the Shadow DOM and JavaScript classes to build custom HTML elements that could be completely isolated from each other.<br/><br/>
                            The goal of the project was to build a WYSIWYG tool that could manipulate those custom elements such that a non-developer could create a robust, high quality data driven user interface quickly. My role was to assist in building those custom elements along with building custom displays illustrating the power of the elements. To do this, I utilized the power of web workers, Async & Await, and other modern JavaScript tools. <br/><br/>
                            The team relied heavily upon Git (GitKraken was the favorite Git GUI). Over the 10 week internship, I contributed 7,000 lines of code and had my first pull request (a bug fix) merged with master within two weeks of starting.  Part of the role was also to regularly explain and defend my code to other technically skilled individuals. At times this was in the form of a presentation in front of 10+ people and other times it was just a meeting with the lead developer and project manager. 
                        </div>
                    </div>

                    <div className='resumeBodyRow  resumeDetailsCertificate'>
                        <div className='resumeBodyRowTitle'>
                            <div className='resumeBodyRowTitleText'>
                                Web Development & Design Intern
                            </div>
                            <div className='resumeBodyRowTitleDate'>
                                03/2017 - 10/2017
                            </div>
                            
                        </div>
                        <div className='resumeBodyRowSubTitle'>
                        Arizona Department of Water Resources
                        </div>
                        <div className='resumeBodyRowDetails'>
                            Learned about the basics of web development using Drupal. While learning more about the basics of PHP and JavaScript (as well as learning more about HTML and CSS), I also had the opportunity to use Photoshop and Illustrator to help with the web designs, learning about how to design user centered websites and intuitive icons. We used Pantheon for a host and Git (with Pantheon) for version control.
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}