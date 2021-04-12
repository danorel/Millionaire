import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { PlayComponent } from "./features/play/Play"
import { StartComponent } from "./features/start/Start"
import { OverComponent } from "./features/over/Over"

const App = () => (
    <React.Fragment>
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={StartComponent} />
                <Route path={"/play"} component={PlayComponent} />
                <Route path={"/summary"} component={OverComponent} />
            </Switch>
        </BrowserRouter>
    </React.Fragment>
)

export default App
