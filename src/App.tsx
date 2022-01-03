import React, {useState} from 'react';
import classes from './App.module.css'
import {Settings} from "./Settings/Settings";
import {Counter} from "./Counter/Counter";


function App() {

    let [number, setNumber] = useState<number | string>(0)

    let [startValue, setStartValue] = useState<number>(1)

    let [maxValue, setMaxValue] = useState<number>(5)

    return (

        <div className={classes.information}>
            <Settings
                number={number}
                setNumber={setNumber}
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
            />
            <Counter
                number={number}
                setNumber={setNumber}
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
            />
        </div>
    )
}

export default App;
