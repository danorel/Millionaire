import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Counter } from "./features/counter/Counter"
import { PlayComponent } from "./features/play/Play"
import "./App.css"

const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={Counter} />
                <Route path={"/play"} component={PlayComponent} />
            </Switch>
        </BrowserRouter>
    </>
)

export default App
