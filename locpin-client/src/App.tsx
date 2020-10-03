import React, { useContext, useReducer } from "react";
import Button from "@material-ui/core/Button";
import { AppContext } from "./context";
import { ActionType, AppReducer } from "./reducer";
import Map from "./components/Map";

function App() {
	const initialState = useContext(AppContext);
	const [state, dispatch] = useReducer(AppReducer, initialState);
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
	);
}

export default App;
