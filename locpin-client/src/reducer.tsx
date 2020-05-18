import React from 'react'
import { InitialStateType } from "./context"

type Action = "test";

export const appReducer = (state: InitialStateType, action: Action) => {
	switch(action) {
		default:
		return state;
	}
}
