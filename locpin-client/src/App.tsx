import * as React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Map from "./components/Map";

function App() {
	return (
		<div className="app">
			<Router>
				<RouterPage path="/" pageComponent={<Login />} />
				<RouterPage path="/login" pageComponent={<Login />} />
				<RouterPage path="/signup" pageComponent={<Signup />} />
				<RouterPage path="/map" pageComponent={<Map />} />
			</Router>
		</div>
	);
}

export default App;

const RouterPage = (
	props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
