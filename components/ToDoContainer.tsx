
import { motion, AnimatePresence } from "framer-motion"

import { useContext } from "react"

import { toDoContext } from "@/lib/todoContext"

import { ToDoItem } from "./ToDoItem"

function ToDoContianer() {

    const { state: toDoState } = useContext(toDoContext)

    return (
        <div className="flex flex-col gap-2  ">
            <AnimatePresence initial={true}>


                {toDoState.todos.map((eachToDo, index) =>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <ToDoItem toDo={eachToDo} key={index} />
                    </motion.div>)}

                {toDoState.todos.length == 0 && 
                    <motion.div
                        initial={{opacity: 0}}
                        animate= {{opacity: 1}}
                        exit={{opacity: 0}}

                        className="pos"
                    >
                        <div className="flex flex-col gap-2 absolute w-full h-[50%] py-12 items-center justify-center ">
                            <h1 className="font-light text-4xl text-gray-400">You have no todos now</h1>
                            <h3 className="font-medium text-base text-gray-400">Get Started by adding some ✌🏿</h3>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export { ToDoContianer }