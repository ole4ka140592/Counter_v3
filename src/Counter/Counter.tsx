import {Button} from "../components/Button/Button";
import React, {useState} from "react";
import classes from "./Counter.module.css";

type CounterNEWPropsType = {
    number: number | string
    setNumber: (number: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
}

export const Counter = (props: CounterNEWPropsType) => {

    let [disabledIncButton, setDisabledIncButton] = useState<boolean>(false)

    let [disabledResetButton, setDisabledResetButton] = useState<boolean>(false)

    const callBackIncrement = () => {
        props.setNumber(props.startValue)
        if (props.number < props.maxValue) {
            props.setNumber(props.number + 1)
        }
        if (props.number === props.maxValue) {
            setDisabledIncButton(true)
        }
    }

    const callBackReset = () => {
        props.setNumber(props.startValue)
        if (props.number === props.startValue) {
            setDisabledResetButton(true)
        }
    }

    return (
        <div>
            <div className={classes.count}>
                <div className={props.number === props.maxValue? classes.numberRed: classes.number}>
                    <span>{props.number}</span>
                </div>
                <div className={classes.buttons}>
                    <Button name='inc'
                            callBack={callBackIncrement}
                            disabledButton={disabledIncButton}
                            disabled={props.number === props.maxValue}
                    />
                    <Button name='reset'
                            callBack={callBackReset}
                            disabledButton={disabledResetButton}
                            disabled={props.number === props.startValue}
                    />
                </div>
            </div>
        </div>
    )
}