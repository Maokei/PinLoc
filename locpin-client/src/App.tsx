import React from "react";
import { Router, RouteComponentProps } from "@reach/router";
// import { Switch, Router } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";

function App() {
    return (
        <div>
            <Router>
                <RouterPage path="/" pageComponent={<Login />} />
                <RouterPage path="/signup" pageComponent={<Signup />} />
            </Router>
        </div>
    );
}

export default App;

const RouterPage = (
    props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
