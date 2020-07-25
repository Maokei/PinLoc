import { createContext } from "react";

export type InitialStateType = {
    lang: string;
    loggedIn: boolean;
    accessToken: string;
};

const initialState = {
    lang: "eng",
    loggedIn: false,
    accessToken: "",
};

const AppContext = createContext<InitialStateType>(initialState);

export { AppContext };
