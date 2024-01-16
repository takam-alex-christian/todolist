
"use client"

import { toDoContext } from "@/lib/todoContext";

import { ToDoContianer } from "@/components/ToDoContainer";
import { InputBar } from "@/components/InputBar";

import { useEffect, useReducer } from "react";

import { ToDoState, ToDoReducerActions } from "@/types"

export default function Home() {

	// fetch local todo list
	// put it to context
	function updateStoredState(toDoState: ToDoState) {
		if (toDoState.todos.length != 0) localStorage.setItem("toDoState", JSON.stringify(toDoState))
	}

	function toDoReducer(prevState: ToDoState, action: ToDoReducerActions): ToDoState {

		switch (action.type) {
			case "added": {
				const newState = { ...prevState, todos: [...prevState.todos, { ...action.payload, id: Date.now().toString() }] }

				updateStoredState(newState)

				return newState
			}
			case "completed": {
				const foundToDo = prevState.todos.find(({ id }) => id == action.payload.id ? true : false)

				if (foundToDo) foundToDo.completed = true

				updateStoredState(prevState)

				return prevState
			}
			case "deleted": {

				const newState = { todos: prevState.todos.filter(({ id }) => id !== action.payload.id) }

				updateStoredState(newState)

				return newState
			}
			case "initialized": {
				return action.payload
			}
			default: return prevState
		}
	}


	//initial state
	let initToDoState: ToDoState = {
		todos: []
	}

	const [toDoState, toDoDispatch] = useReducer(toDoReducer, initToDoState)

	useEffect(() => {

		const storedToDoState = localStorage.getItem("toDoState")

		if (storedToDoState) toDoDispatch({ type: "initialized", payload: JSON.parse(storedToDoState) })

	}, [])

	return (
		<toDoContext.Provider value={{ state: toDoState, dispatch: toDoDispatch }}>

			<div className="pb-6 flex flex-row justify-between items-center">
				<h1 className="text-2xl font-light">ToDo</h1>
				<h3 className="text-lg font-bold">{toDoState.todos.length}/8</h3>
			</div>


			<ToDoContianer />

			<InputBar />

		</toDoContext.Provider>
	);
}
