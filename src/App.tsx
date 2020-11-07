import React, {useState} from 'react';
import './App.css';

import Counter from "./Counter";
import SetValueForCounter from "./SetValueForCounter";

function App() {

    const [maxCount, setMaxCount] = useState<number>(10)
    const [minCount, setMinCount] = useState<number>(5)

    const [activeCounter, setActiveCounter] = useState<boolean>(true)
    const [disButtons, setDisButtons] = useState<boolean>(false)
    const [errorSetCount, setErrorSetCount] = useState<boolean>(false)


    let changeCountInitState = (timeMaxCount: number, timeMinCount: number) => {
        setMaxCount(timeMaxCount)
        setMinCount(timeMinCount)
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
