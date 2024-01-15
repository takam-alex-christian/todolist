

import {Input} from "@nextui-org/input"
import {Button} from "@nextui-org/button"


import React from "react"


function InputBar(){

    function onToDoAdd(){
        console.log("submit button has been pressed")
    }

    return (
        <div className="flex flex-row gap-4 items-center justify-center fixed bottom-0 w-screen">
            <Input className="w-full" />
            <Button onPress={onToDoAdd}>Add</Button>
        </div>
    )
}


export {InputBar}