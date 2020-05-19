import React, { useContext, useReducer } from 'react';
import Button from '@material-ui/core/Button'; 
import { appContext } from "./context";
import { ActionType, appReducer } from "./reducer";

function App() {
	const initialState = useContext(appContext)
	const [ state, dispatch ] = useReducer(appReducer, initialState)
	//dispatch("test")
	// <Context.Provider value={{ state, dispatch }}>
  return (
    <div>
    <Button variant="contained" color="primary" onClick={() => dispatch({type: ActionType.USER_LOGIN, payload: "swe"})}>
      Hello World { state.lang }
    </Button>
    <Button variant="contained" color="primary" onClick={() => dispatch({type: ActionType.USER_LOGOUT, payload: "eng"})}>
      Reset
    </Button>
</div>
  );
}

export default App;
