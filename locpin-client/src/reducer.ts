import React from 'react'
import { InitialStateType } from "./context"

//export type Action = "test";

export enum ActionType {
	USER_LOGIN,
	USER_LOGOUT
}
 

interface Action {
	type: ActionType;
	payload: any;
}

export const appReducer = (state: InitialStateType, action: Action) => {
	switch(action.type) {
		case ActionType.USER_LOGIN:
			return {
				...state,
				lang: "swe"
			}
		case ActionType.USER_LOGOUT:
			return {
				...state,
				lang: "out"
			}
		//case "LOGIN_USER":
		//	return state
		default:
		return state;
	}
}
