import * as React from "react";
import {hot} from "react-hot-loader";
import './Home.scss'
import { Welcome } from '../../Components/HomeComponents/WelcomeComponent/Welcome'

class Home extends React.Component{
    render() {
        return (
            <div className='homeContainer'>
                <Welcome />
            </div>
        )
    }
}

export default hot(module)(Home)