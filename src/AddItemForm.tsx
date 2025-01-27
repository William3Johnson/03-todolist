import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from "./AddItemForm.module.css"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {IconButton, TextField} from "@material-ui/core";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {
    const [input, setInput] = useState("")
    const [error, setError] = useState<boolean>(false)
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setInput(event.currentTarget.value)
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.ctrlKey && e.key === 'Enter' && addTask()
    }
    const addTask = () => {
        const mInput = input.trim()
        mInput ? props.addItem(mInput) : setError(true)
        setInput("")
    }

    return <div className={s.titleInput}>
        <TextField
            variant={"outlined"}
            size={"small"}
            placeholder={"Title..."}
            className={error ? "error" : ""}
            value={input}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
            error={error}
            helperText={error && "Title is required"}
        />
        <IconButton
            onClick={addTask}>
            <AddCircleIcon style={{color: "#9fc4c0"}}/>
        </IconButton>

    </div>
}