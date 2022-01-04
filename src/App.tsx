import React, {useEffect, useState} from 'react';
import classes from './App.module.css'
import {Settings} from "./Settings/Settings";
import {Counter} from "./Counter/Counter";


function App() {

    let [number, setNumber] = useState<number >(0)

    let [startValue, setStartValue] = useState<number>(0)

    let [maxValue, setMaxValue] = useState<number>(0)

    let [error, setError] = useState<null | string>(null)



    useEffect(() => {
        let newStartNumberString = (localStorage.getItem("startValue"))
        if (newStartNumberString) {
            let newStartNumber = JSON.parse(newStartNumberString)
            setNumber(newStartNumber)
        }
    }, [])





    return (

        <div className={classes.information}>

            <Settings
                number={number}
                setNumber={setNumber}
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                error={error}
                setError={setError}
            />
            <Counter
                number={number}
                setNumber={setNumber}
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                error={error}
                setError={setError}
            />
        </div>
    )
}

export default App;
