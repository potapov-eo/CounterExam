import React from 'react';

type ButtonComponentType = {
    id: number
    count: number
    title: string
    changeCount: () => void
    minCount: number
    maxCount: number

}

export function ButtonComponent(props: ButtonComponentType) {

    let dis = (props.count === props.maxCount && props.id === 1) ||
        (props.count === props.minCount && props.id === 2)
    let classbutton = dis? "buttonDisabled": "button"



    return <button className={classbutton} disabled={dis} onClick={props.changeCount}>{props.title}</button>
}
