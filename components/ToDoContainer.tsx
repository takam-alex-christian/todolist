
import {useContext} from "react"

import { toDoContext } from "@/lib/todoContext"

import { ToDoItem } from "./ToDoItem"

function ToDoContianer() {

    const {state: toDoState} = useContext(toDoContext)

    return (
        <div className="flex flex-col flex-grow gap-2">
            {toDoState.todos.map((eachToDo, index) => <ToDoItem toDo={eachToDo}  key={index} />)}
        </div>
    )
}

export {ToDoContianer}