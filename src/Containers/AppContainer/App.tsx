import * as React from "react";
import {hot} from "react-hot-loader";
import './App.scss';

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
class App extends React.Component{
    render() {
        return (
        
            <main className='appContainer'>
                
            </main>
        
        );
    }
}

export default hot(module)(App)