import React from 'react'
import { InitialStateType } from "./context"

export type Action = "test";


export const appReducer = (state: InitialStateType, action: Action) => {
	switch(action) {
		case "test":
			return {
				...state,
				lang: "swe"
			}
		//case "LOGIN_USER":
		//	return state
		default:
		return state;
	}
}
