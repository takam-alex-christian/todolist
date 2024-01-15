import {SVGProps} from "react";


type ToDo = {
	id: string,
	text: string,
	completed: boolean,
	creationDate: Date,
	completetionDate: Date | null
}

type ToDoState = {
	todos: Array<ToDo>
}

type ToDoReducerActions = {type: "added", payload: Omit<ToDo, "id">} | {type: "completed", payload: {id: string}} | {type: "deleted", payload: {id: string}}


export type {ToDo, ToDoState, ToDoReducerActions}