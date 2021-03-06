import * as React from "react"

import {Route, Link, Switch } from "react-router-dom"
import Home from '../../Containers/HomeContainer/Home'
import About from '../../Containers/AboutContainer/About'
import Resume from '../../Containers/ResumeContainer/Resume'
import Contact from '../../Containers/ContactContainer/Contact'
import './router.scss'


const AppRouter = () => (

        <div className='routerContainer'>
            <div className='navigationContainer'>
                <nav> 
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/resume/education">Resume</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/resume" component={Resume} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Home} />
                <Route exact path="/contact" component={Contact} />
            </Switch>

        </div>

)


export default AppRouter;