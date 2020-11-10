import React, {useState} from 'react';
import './App.css';

import Counter from "./Counter";
import SetValueForCounter from "./SetValueForCounter";

function App() {

    let min = Number(localStorage.getItem("minCount")) ?
        Number(localStorage.getItem("minCount"))
        : 5
    let max = Number(localStorage.getItem("maxCount")) ?
        Number(localStorage.getItem("maxCount"))
        : 10

    const [maxCount, setMaxCount] = useState<number>(max)
    const [minCount, setMinCount] = useState<number>(min)

    const [activeCounter, setActiveCounter] = useState<boolean>(true)
    const [disButtons, setDisButtons] = useState<boolean>(false)
    const [errorSetCount, setErrorSetCount] = useState<boolean>(false)


    let changeCountInitState = (timeMaxCount: number, timeMinCount: number) => {
        setMaxCount(timeMaxCount)
        localStorage.setItem("maxCount", timeMaxCount.toString())
        setMinCount(timeMinCount)
        localStorage.setItem("minCount", timeMinCount.toString())
        setActiveCounter(true)
    }
    let changActiveCounter = (x: boolean) => {
        setActiveCounter(x)
    }
    let changErrorSetCount = (x: boolean) => {
        setErrorSetCount(x)
    }
    return (
        <div>
            <div>
                current minValue = {minCount}
            </div>
            <div>
                current maxValue = {maxCount}
            </div>
            <Counter minCount={minCount}
                     maxCount={maxCount}
                     disButtons={disButtons}
                     activeCounter={activeCounter}
                     errorSetCount={errorSetCount}/>

            <SetValueForCounter minCount={minCount}
                                maxCount={maxCount}
                                changeCountInitState={changeCountInitState}
                                changActiveCounter={changActiveCounter}

                                changErrorSetCount={changErrorSetCount}
            />
        </div>
    )
}

export default App;
