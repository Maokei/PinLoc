import * as React from "react";
import { useContext, useReducer } from "react";
import { AppContext } from "../context";
import { ActionType, AppReducer } from "../reducer";
import Button from "@material-ui/core/Button";

function Buttons() {
	const initialState = useContext(AppContext);
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<>
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
		</>
	);
}

export default Buttons;
