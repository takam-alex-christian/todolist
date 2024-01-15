
import React, { useContext, useState} from "react"

import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"


import { toDoContext } from "@/lib/todoContext";


function InputBar() {

    const {state:toDoState, dispatch: toDoDispatch} = useContext(toDoContext)


    const [formState, setFormState] = useState<{
        toDoValue: string,
        status: null | -1 | 0 | 1 // null default, 0 submited, 1 success, -1 failed, 

    }>({
        toDoValue: "",
        status: null
    })



    function toDoSubmit(e: React.FormEvent) {
        e.preventDefault();
        
        // change status

        setFormState((prevState)=>{
            return {...prevState, status: 0}
        })


        toDoDispatch({type: "added", payload: {text: formState.toDoValue, completed: false, completetionDate: null, creationDate: new Date(Date.now()) }})
        
        //reinitialize form state
        setFormState({toDoValue: "", status: null})
    }

    return (
        <div className="absolute bottom-4 w-full ">
            <form onSubmit={toDoSubmit}>
                <div className="flex flex-row gap-4 items-center" >
                    <Input value={formState.toDoValue} onValueChange={(value)=>{setFormState((prevState)=>{return {...prevState, toDoValue: value}})}} placeholder="What will you HOPEFULLY do ? " isDisabled={formState.status == 0} />
                    <Button type="submit" size="lg" color="primary" variant="shadow" isLoading={formState.status == 0? true: false }>{formState.status != 0? "Add" : null}</Button>
                </div>

            </form>

        </div>
    )
}


export { InputBar }