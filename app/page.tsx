
import { toDoContext } from "@/lib/todoContext";

import { InputBar } from "@/components/InputBar";

import { useReducer } from "react";


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

export default function Home() {

	// fetch local todo list
	// put it to context

	function toDoReducer(prevState: ToDoState, action: {name: "added", payload: Omit<ToDo, "id">} | {name: "completed", payload: {id: string}} | {name: "deleted", payload: {id: string}}): ToDoState {

		switch (action.name){
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
		}
		return {} as ToDoState
	}

	const initToDoState: ToDoState = {
		todos: []
	}

	const [toDoState, toDoDispatch] = useReducer(toDoReducer, initToDoState)


	return (
		<toDoContext.Provider value={{ state: toDoState, dispatch: toDoDispatch }}>
			<main>
				<ToDOContianer />

				<InputBar />
			</main>
		</toDoContext.Provider>
	);
}
