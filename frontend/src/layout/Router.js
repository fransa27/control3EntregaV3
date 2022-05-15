import React from "react";
import Flux from "react-flux-dash";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NewComplete from "./components/CompleteNews";
import App from "./layout";


export class Router extends Flux.View {
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Routes>
                        <Route exact path="/" component={App} />
                        <Route exact path="/App" component={App} />
                        <Route exact path="/NewComplete" component={NewComplete} />
                        <Route render={() => <h1>Not found!</h1>} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}