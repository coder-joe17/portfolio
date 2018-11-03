import * as React from "react";
import './Details.scss'


export class Education extends React.Component {
    render() {
        return (
            <div className='resumeDetailsContainer'>

                <div className='resumeHeading'>
                    <h1 className='resumeHeadingTitle'>Education</h1>
                    <h2 className='resumeHeadingSubTitle'>Degrees, Certificates, Coursework</h2>
                </div>

                <div className='resumeBody'>

                    <div className='resumeBodyRow resumeDetailsCollege'>
                        <div className='resumeBodyRowTitle'>
                            <div className='resumeBodyRowTitleText'>
                                B.S. Computer Information Systems (CIS)
                            </div>
                            <div className='resumeBodyRowTitleDate'>
                                08/2015 - 05/2019 (Expected)
                            </div>
                            
                        </div>
                        <div className='resumeBodyRowSubTitle'>
                            Degree - Arizona State University
                        </div>
                        <div className='resumeBodyRowDetails'>
                            ASU's CIS program is all about where technology and business meet. The curriculum not only covers fundamental business concepts (accounting, management, marketing, supply chain), but also goes into software development (C#, .Net, JavaScript, SQL). Additional coursework covers ERP systems and fundamental IT.
                        </div>
                    </div>

                    <div className='resumeBodyRow resumeDetailsCollege'>
                        <div className='resumeBodyRowTitle'>
                            <div className='resumeBodyRowTitleText'>
                                B.S. Business Data Analytics (BDA)
                            </div>
                            <div className='resumeBodyRowTitleDate'>
                                08/2015 - 05/2019 (Expected)
                            </div>
                            
                        </div>
                        <div className='resumeBodyRowSubTitle'>
                            Degree - Arizona State University
                        </div>
                        <div className='resumeBodyRowDetails'>
                            ASU's BDA program covers a variety of data related concepts. Concepts such as data storage and flow (Data Warehouses / Data Marts, Slowly Changing Dimensions) are stressed early on. Upper divension content is more focused on analyzing large amounts of data through analytics algorithms (utilizing Python, SAP, Docker, Hadoop).
                        </div>
                    </div>

                    <div className='resumeBodyRow resumeDetailsCollege'>
                        <div className='resumeBodyRowTitle'>
                            <div className='resumeBodyRowTitleText'>
                                B.S. Software Engineering
                            </div>
                            <div className='resumeBodyRowTitleDate'>
                                08/2018 - Ongoing
                            </div>
                            
                        </div>
                        <div className='resumeBodyRowSubTitle'>
                            Degree - Arizona State University
                        </div>
                        <div className='resumeBodyRowDetails'>
                            While I am primarily majoring in CIS and BDA, over the fall 2018 semester I began pursuing the software engineering curriculum because of my desire to strengthen my fundamental engineering knowledge. While I plan on graduating in Spring 2019 with my two degrees, I intend to continue pursuing the software engineering curriculum online on a part time basis after graduation. <br/><br/>

                            The specifics of the curriculum include discrete mathmatics, exposure to fundamental digital design, formal education in a variety of programming languages and paradigms (C, C++, LISP, Java). Besides core engineering, the software engineering program also focuses on software development project management and team projects. 
                        </div>
                    </div>

                    <div className='resumeBodyRow resumeDetailsCertificate'>
                        <div className='resumeBodyRowTitle'>
                            <div className='resumeBodyRowTitleText'>
                                Cross Sector Leadership
                            </div>
                            <div className='resumeBodyRowTitleDate'>
                                01/2016 - 05/2019 (Expected)
                            </div>
                            
                        </div>
                        <div className='resumeBodyRowSubTitle'>
                            Certificate - Arizona State University
                        </div>
                        <div className='resumeBodyRowDetails'>
                            The Cross Sector Leadership certificate is offered to the limited groups of students who are part of the Next Generation Service Corps (NGSC - See "Leadership"). While closely intertwined to the NGSC, the academic requirements for the certificate program include completing around 15 credits of courses regarding leadership, entrepreneurship, and cross sector collaboration. Those involved with the program are taught how to create value propositions that can bring together the public, private, and non-profit sectors to solve complex problems in the community.
                        </div>
                    </div>

                    <div className='resumeBodyRow resumeDetailsOther'>
                        <div className='resumeBodyRowTitle'>
                            <div className='resumeBodyRowTitleText'>
                                JavaScript Courses
                            </div>
                            <div className='resumeBodyRowTitleDate'>
                                Ongoing
                            </div>
                            
                        </div>
                        <div className='resumeBodyRowSubTitle'>
                            TylerMcGinnis.com
                        </div>
                        <div className='resumeBodyRowDetails'>
                            Because of my love for web development, I have supplement my formal knowledge by completing multiple of Tyler McGinnis's JavaScript courses. This includes React Fundamentals, Modern JavaScript, Advanced JavaScript, and Redux. 
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}