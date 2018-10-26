import * as React from "react"

import {Route, Link, Switch } from "react-router-dom"
import Home from '../../Containers/HomeContainer/Home'
import About from '../../Containers/AboutContainer/About'
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
                    </ul>
                </nav>
            </div>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>

        </div>

)


export default AppRouter;