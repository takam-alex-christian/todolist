
import { useState, useEffect, useContext} from "react"

import { toDoContext } from "@/lib/todoContext";

import { Checkbox } from "@nextui-org/checkbox";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { ToDo } from "@/types";


function ToDoItem(props: {
    toDo: ToDo
}) {

    const [isCompleted, setCompleteState] = useState(props.toDo.completed)

    const {state: toDoState, dispatch: toDoDispatch} = useContext(toDoContext)


    return (
        <Checkbox isSelected={isCompleted} onValueChange={(isCompleted) => {
            
            setCompleteState(true)

            toDoDispatch({type: "completed", payload: {id: props.toDo.id}})

        }} classNames={{label: "w-full"}} >
            <Card>
                <CardBody>
                    {props.toDo.text}
                </CardBody>
            </Card>
        </Checkbox>
    );
}

export { ToDoItem }