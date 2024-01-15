
"use client"

import { toDoContext } from "@/lib/todoContext";

import { ToDoContianer } from "@/components/ToDoContainer";
import { InputBar } from "@/components/InputBar";

import { useReducer } from "react";

import {ToDoState, ToDoReducerActions} from "@/types"

export default function Home() {

	// fetch local todo list
	// put it to context

	function toDoReducer(prevState: ToDoState, action: ToDoReducerActions ): ToDoState {

		switch (action.type){
			case "added":  return {...prevState, todos: [...prevState.todos, {...action.payload, id: Date.now().toString()}]}
			case "completed": {
				const foundToDo = prevState.todos.find(({id})=> id == action.payload.id? true : false)

				if (foundToDo) foundToDo.completed = true

				return prevState
			}
			case "deleted": {
				const foundToDo = prevState.todos.find(({id})=> id==action.payload.id? true: false)
				
				return {todos: prevState.todos.filter(({id})=> id !== action.payload.id)}
			}
			default: return prevState
		}
	}


	//initial state
	const initToDoState: ToDoState = {
		todos: []
	}


	const [toDoState, toDoDispatch] = useReducer(toDoReducer, initToDoState)


	return (
		<toDoContext.Provider value={{ state: toDoState, dispatch: toDoDispatch }}>
				<ToDoContianer />

				<InputBar />

		</toDoContext.Provider>
	);
}
