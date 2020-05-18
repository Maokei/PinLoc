import { createContext } from 'react'

export type InitialStateType = {
	lang: string;
}

const initialState = {
	lang: 'eng'
};

//const appContext = createContext({ lang: "eng"});
const appContext = createContext<InitialStateType>(initialState);
export {
	appContext
};
