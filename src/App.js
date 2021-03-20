import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Container from "./Container/Container";


const App=()=>{
    return(
        <BrowserRouter>
            <Route path="/" exact component={Container}/>
        </BrowserRouter>
    )
}
export default App;
