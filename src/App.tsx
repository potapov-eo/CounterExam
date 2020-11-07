import React, {useState} from 'react';
import './App.css';
import {ButtonComponent} from "./ButtonComponent";
import {Input} from "./Input";
import Counter from "./Counter";

function App() {
    const [maxCount, setMaxCount] = useState<number>(10)
    const [minCount, setMinCount] = useState<number>(5)
    const [timeMinValue, setTimeMinValue] = useState<number>(minCount)
    const [timeMaxValue, setTimeMaxValue] = useState<number>(maxCount)
    const [activeCounter, setActiveCounter] = useState<boolean>(false)


    let changTimeMinValue = (newMinCount: number) => {
        setTimeMinValue(newMinCount)
        setActiveCounter(false)
    }
    let changTimeMaxValue = (newMinCount: number) => {
        setTimeMaxValue(newMinCount)
        setActiveCounter(false)
    }
    let changeCountInit = () => {
        setMaxCount(timeMaxValue)
        setMinCount(timeMinValue)
     /*   setCount(timeMinValue)*/
        setActiveCounter(true)

    }
    let disSet = (timeMinValue > 0) && (timeMinValue !== 0) &&
        (timeMinValue < timeMaxValue) && (timeMinValue !== timeMaxValue)


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
                     disSet={disSet}
                     activeCounter={activeCounter}/>

            <div className="App">
                <div className="Counter">
                    <div className="display2">
                        <div className="input-field">
                            <span>min value</span>
                            <span>
                                <Input disSet={disSet}
                                       changTimeMinValue={changTimeMinValue}
                                       value={timeMinValue}/>
                            </span>
                        </div>
                        <div>
                            <span>max value</span>
                            <span>
                                <Input disSet={disSet}
                                       changTimeMinValue={changTimeMaxValue}
                                       value={timeMaxValue}/>
                            </span>
                        </div>

                    </div>
                    <div className="displayButton">
                        <ButtonComponent
                            dis={!disSet}
                            id={3}

                            title={"SET"}
                            changeCount={changeCountInit}

                        />

                    </div>
                </div>

            </div>

        </div>
    );
}

export default App;
