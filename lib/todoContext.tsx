

import { createContext, Dispatch} from "react";

import {ToDoState, ToDoReducerActions} from "@/types"


const toDoContext = createContext<{
    state: ToDoState,
    dispatch: Dispatch<ToDoReducerActions>
}>({
    state: {todos: []},
    dispatch: ()=>{}
})

export {toDoContext}