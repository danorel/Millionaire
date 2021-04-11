import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Counter } from "./features/counter/Counter"
import { PlayComponent } from "./features/play/Play"
import { StartComponent } from "./features/start/Start"

const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={Counter} />
                <Route path={"/start"} component={StartComponent} />
                <Route path={"/play"} component={PlayComponent} />
            </Switch>
        </BrowserRouter>
    </>
)

export default App
