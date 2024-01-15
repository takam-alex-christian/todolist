
import { createContext } from "react";



const toDoContext = createContext<{
    state: any,
    dispatch: any
}>({
    state: {},
    dispatch: null
})

export {toDoContext}