import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import './stylesheets/index.scss';


import App from "./containers/AppContainer/App";

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,    
    document.getElementById("root")
);