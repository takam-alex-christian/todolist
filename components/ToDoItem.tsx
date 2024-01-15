
import {useState, useEffect} from "react"

import {Checkbox} from "@nextui-org/checkbox";

function ToDoItem(props: {
    text: string
}){

    const [isSelected, setSelectedState] = useState(false);

    useEffect(()=>{
        console.log("checkbox checked")
    }, [isSelected])

    return (
        <div>
            <Checkbox onValueChange={(isSelected)=>{
                setSelectedState(isSelected)
            }} >{props.text}</Checkbox>
        </div>
    );
}

export {ToDoItem}