
import { useState, useEffect, useContext } from "react"

import { motion, AnimatePresence } from 'framer-motion'

import { toDoContext } from "@/lib/todoContext";

import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { ToDo } from "@/types";


function ToDoItem(props: {
    toDo: ToDo
}) {

    const [isCompleted, setCompleteState] = useState(props.toDo.completed)

    const { state: toDoState, dispatch: toDoDispatch } = useContext(toDoContext)

    const [isButtonVisible, setButtonVisibility] = useState(false)


    return (

        <Card
            onMouseEnter={() => { setButtonVisibility(true) }}
            onMouseLeave={() => { setButtonVisibility(false) }}
        >
            <CardBody className="">
                <div className="flex flex-row justify-between items-center h-10">
                    <Checkbox isSelected={isCompleted} onValueChange={(isCompleted) => {

                        setCompleteState(true)

                        toDoDispatch({ type: "completed", payload: { id: props.toDo.id } })

                    }} classNames={{ label: "w-full" }} >
                        {props.toDo.text}
                    </Checkbox>

                    <AnimatePresence initial={true}>
                        {isButtonVisible &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Button onPress={()=>{toDoDispatch({type: "deleted", payload: {id: props.toDo.id}})}} size="sm" isIconOnly>X</Button>
                            </motion.div>}
                    </AnimatePresence>


                </div>
            </CardBody>
        </Card>


    );
}

export { ToDoItem }