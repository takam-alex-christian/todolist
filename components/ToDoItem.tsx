
import { useState, useEffect } from "react"

import { Checkbox } from "@nextui-org/checkbox";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { ToDo } from "@/types";


function ToDoItem(props: {
    toDo: ToDo
}) {

    const [isSelected, setSelectedState] = useState(false);

    return (
        <Checkbox onValueChange={(isSelected) => {
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