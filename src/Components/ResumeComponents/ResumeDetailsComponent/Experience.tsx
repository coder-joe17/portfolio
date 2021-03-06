import * as React from "react";
import './Details.scss'


export class Experience extends React.Component {
    render() {
        return (
            <div className='resumeDetailsContainer'>

                <div className='resumeHeading'>
                    <h1 className='resumeHeadingTitle'>Experience</h1>
                    <h2 className='resumeHeadingSubTitle'>Internships, Work, Side Projects</h2>
                </div>

                <div className='resumeBody'>

                    <div className='resumeBodyRow resumeDetailsCollege'>
                        <div className='resumeBodyRowTitle'>
                            <div className='resumeBodyRowTitleText'>
                               Full Stack Developer / Business Analyst
                            </div>
                            <div className='resumeBodyRowTitleDate'>
                                07/2017 - Present
                            </div>
                            
                        </div>
                        <div className='resumeBodyRowSubTitle'>
                            Office of University Initiatives (ASU)
                        </div>
                        <div className='resumeBodyRowDetails'>
                            Inherited a custom built web survey system in its MVP stage and grew it into a well-functioning system. Being the only developer on the project, I utilized PHP, JavaScript (jQuery), and MySQL to build out the system and add both data validation and custom UI components. I am also responsible for managing the MySQL database. This involves data cleansing / manipulation, querying, and optimization. At times I work with Tableau to create basic custom visualizations for the dataset. <br/><br/>
                            In addition, I am in the process of building an interface to navigate the newly obtained survey data in more advanced ways. It is still a work in progress, but the live testing page can be found <a href='https://community.asu.edu/test/dashboard-test' target='_blank'>here</a>. Building this interface involves writing complex JavaScript (ES6+) using functional design patterns. To help manage the state, I am using the fundamental design methodology that Redux uses (a central state store that is the constant reference for the UI). I utilize Jest for unit testing and Katalon for testing browser functionality. <br/><br/>
                            Because I am the sole developer on the project, I have learned the skill of managing upward. I am trusted to make basic decisions about the development process, give time projections, and communicate progress. In order to explain decisions to my manager, I have learned how to communicate technical concepts to someone who does not have an engineering background. Part of this is also explaining technical tradeoffs or the value of a technical decision, all without getting into details that cause more confusion than understanding.
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