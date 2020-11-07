import React, {useState} from 'react';
import './App.css';
import {ButtonComponent} from "./ButtonComponent";
import {Display} from "./Display";
import {Input} from "./Input";

type SetValueForCounterPropsType = {
    minCount: number
    maxCount:number
    disSet:boolean
    activeCounter:boolean

}

function SetValueForCounter(props:SetValueForCounterPropsType) {



    return (
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
    );
}

export default SetValueForCounter;
