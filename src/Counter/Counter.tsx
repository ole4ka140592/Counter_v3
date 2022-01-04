import {Button} from "../components/Button/Button";
import React, {useEffect, useState} from "react";
import classes from "./Counter.module.css";

type CounterNEWPropsType = {
    number: number
    setNumber: (number: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
    error: null | string
    setError: (error: null | string) => void



}

export const Counter = (props: CounterNEWPropsType) => {

    let [disabledIncButton, setDisabledIncButton] = useState<boolean>(false)

    let [disabledResetButton, setDisabledResetButton] = useState<boolean>(false)


    const callBackIncrement = () => {
        props.setNumber(props.number + 1)
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
                <div className={props.number === props.maxValue ? classes.numberRed : classes.number}>
                    <span className={props.error ? classes.error : classes.numberNumber}>
                        {props.error ? props.error : props.number}
                    </span>
                </div>
                <div className={classes.buttons}>
                    <Button name='inc'
                            callBack={callBackIncrement}
                            disabledButton={disabledIncButton}
                            disabled={props.startValue === props.maxValue
                            || props.number === props.maxValue
                            || props.startValue < 0
                            || props.maxValue < 0
                            || props.startValue > props.maxValue
                            || props.error === "Incorrect value"
                            || props.error === 'enter values and press "set"'
                            }
                    />
                    <Button name='reset'
                            callBack={callBackReset}
                            disabledButton={disabledResetButton}
                            disabled={props.maxValue === props.startValue
                            || props.number === props.startValue
                            || props.startValue < 0
                            || props.maxValue < 0
                            || props.startValue > props.maxValue
                            || props.error === "Incorrect value"
                            || props.error === 'enter values and press "set"'
                            }
                    />
                </div>
            </div>
        </div>
    )
}