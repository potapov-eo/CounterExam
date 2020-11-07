import React, {ChangeEvent, useState} from 'react';

type InputPropsType = {
    changTimeMinValue : (newMinCount:number)=>void
    disSet:boolean
    value:number
}

export function Input(props: InputPropsType) {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changTimeMinValue(+e.currentTarget.value)
    }
    let classInput = props.disSet? "input": "input-error"
    return(
    <input onChange={onChangeHandler}  type={"number"} className={classInput} value={props.value}/>
    )
}
