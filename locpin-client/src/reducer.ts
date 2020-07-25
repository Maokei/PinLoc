import { InitialStateType } from "./context";

export enum ActionType {
    USER_LOGIN,
    USER_LOGOUT,
}

interface Action {
    type: ActionType;
    payload: any;
}

export const AppReducer = (state: InitialStateType, action: Action) => {
    switch (action.type) {
        case ActionType.USER_LOGIN:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                loggedIn: true,
                lang: "swe",
            };
        case ActionType.USER_LOGOUT:
            return {
                ...state,
                accessToken: "",
                loggedIn: false,
                lang: "out",
            };
        default:
            return state;
    }
};
