import React, { useContext, useReducer } from 'react';
import Button from '@material-ui/core/Button'; 
import { appContext } from "./context";
import { appReducer } from "./reducer";

function App() {
	const initialState = useContext(appContext)
	const [ state, dispatch ] = useReducer(appReducer, initialState)
	// <Context.Provider value={{ state, dispatch }}>
  return (
    <Button variant="contained" color="primary">
      Hello World { state.lang }
    </Button>

  );
}

export default App;
