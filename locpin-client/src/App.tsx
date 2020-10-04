import React, { useContext, useReducer } from "react";
import { Router, RouteComponentProps } from "@reach/router";
import Button from "@material-ui/core/Button";
import { AppContext } from "./context";
import { ActionType, AppReducer } from "./reducer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Map from "./components/Map";

function App() {
	const initialState = useContext(AppContext);
	const [state, dispatch] = useReducer(AppReducer, initialState);

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

	/* function App() {
	
	return (
		<div className="app">
			<Button
				variant="contained"
				color="primary"
				onClick={() =>
					dispatch({ type: ActionType.USER_LOGIN, payload: "swe" })
				}>
				Hello World {state.lang}
			</Button>
			<Button
				variant="contained"
				color="primary"
				onClick={() =>
					dispatch({ type: ActionType.USER_LOGOUT, payload: "eng" })
				}>
				Reset
			</Button>
			<Map />
		</div>
	);*/
}

export default App;

const RouterPage = (
	props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
