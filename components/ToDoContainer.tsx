
import { motion, AnimatePresence } from "framer-motion"

import { useContext } from "react"

import { toDoContext } from "@/lib/todoContext"

import { ToDoItem } from "./ToDoItem"

function ToDoContianer() {

    const { state: toDoState } = useContext(toDoContext)

    return (
        <div className="flex flex-col flex-grow gap-2">
            <AnimatePresence initial={true}>


                {toDoState.todos.map((eachToDo, index) =>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <ToDoItem toDo={eachToDo} key={index} />
                    </motion.div>)}
            </AnimatePresence>
        </div>
    )
}

export { ToDoContianer }