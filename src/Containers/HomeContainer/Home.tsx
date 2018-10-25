import * as React from "react";
import {hot} from "react-hot-loader";


class Home extends React.Component{
    render() {
        return <h1>Hello World From Home!</h1>;
    }
}

export default hot(module)(Home)