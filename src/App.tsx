import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ButtonComponent} from "./ButtonComponent";
import {Display} from "./Display";

function App() {
    const maxCount = 7
    const minCount = 4
    let [count, setCount] = useState<number>(minCount)


    let changeCount = () => {
        if (count < maxCount) {
            setCount(count + 1)
        }
    }
    let resetCount = () => setCount(minCount)

    return (
        <div className="App">

            <Display
                count={count} maxCount={maxCount}/>
            <div className={"displayButton"}>
                <ButtonComponent
                    id={1}
                    count={count}
                    title={"INT"}
                    changeCount={changeCount}
                    maxCount={maxCount}
                    minCount={minCount}

                />
                <ButtonComponent
                    id={2}
                    count={count}
                    title={"RESET"}
                    changeCount={resetCount}
                    maxCount={maxCount}
                    minCount={minCount}
                />
            </div>
        </div>
    );
}

export default App;
