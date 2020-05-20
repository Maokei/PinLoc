import { createContext } from 'react'

export type InitialStateType = {
	lang: string;
	authenticated: boolean;
}

const initialState = {
	lang: 'eng',
	authenticated: false
};

const AppContext = createContext<InitialStateType>(initialState);

export {
	AppContext
};
