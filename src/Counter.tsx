import React, {useState} from 'react';
import './App.css';
import {ButtonComponent} from "./ButtonComponent";
import {Display} from "./Display";

type CounterPropsType = {
    minCount: number
    maxCount:number
    disSet:boolean
    activeCounter:boolean

}

function Counter(props:CounterPropsType) {
    const [count, setCount] = useState<number>(props.minCount)
    let disInt = (count === props.maxCount) || !props.disSet || !props.activeCounter
    let disReset = (count === props.minCount) || !props.disSet || !props.activeCounter
    let changeCount = () => {
        if (count < props.maxCount) {
            setCount(count + 1)
        }
    }
    let resetCount = () => setCount(props.minCount)
    return (
        <div>
            <div className="App">

                <div className="Counter">
                    <div className="Display">
                        {!props.disSet ?
                            <div className="error">Incorrect value</div>
                            : props.activeCounter ? <Display
                                    count={count} maxCount={props.maxCount}/>
                                : <div className="display2">Enter values and pres SET</div>}
                    </div>
                    <div className="displayButton">
                        <ButtonComponent
                            dis={disInt}
                            id={1}
                            count={count}
                            title={"INT"}
                            changeCount={changeCount}

                        />
                        <ButtonComponent
                            id={2}
                            count={count}
                            title={"RESET"}
                            changeCount={resetCount}
                            dis={disReset}

                        />
                    </div>
                </div>

            </div>

            </div>
    );
}

export default Counter;
