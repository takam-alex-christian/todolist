
import { useState, useEffect, useContext} from "react"

import { toDoContext } from "@/lib/todoContext";

import { Checkbox } from "@nextui-org/checkbox";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { ToDo } from "@/types";


function ToDoItem(props: {
    toDo: ToDo
}) {

    const [isSelected, setSelectedState] = useState(false);
    const {state: toDoState, dispatch: toDoDispatch} = useContext(toDoContext)

    useEffect(()=>{

    })

    return (
        <Checkbox isSelected={props.toDo.completed} onValueChange={(isSelected) => {
            setSelectedState(isSelected)
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