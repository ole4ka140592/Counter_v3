import React, {ChangeEvent, useEffect, useState} from "react";
import classes from "./Settings.module.css";
import {Button} from "../components/Button/Button";

export type SettingsPropsType = {
    number: number
    setNumber: (number: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
    error: null | string
    setError: (error: null | string) => void


}

export const Settings = (props: SettingsPropsType) => {

    let [disabledSetButton, setDisabledSetButton] = useState<boolean>(false)

    useEffect(() => {
        let newStartNumberString = (localStorage.getItem("startValue"))
        if (newStartNumberString) {
            let newStartNumber = JSON.parse(newStartNumberString)
            props.setStartValue(newStartNumber)
            props.setNumber(newStartNumber)
        }
    }, [])

    useEffect(() => {
        let newMaxNumberString = (localStorage.getItem("maxValue"))
        if (newMaxNumberString) {
            let newMaxNumber = JSON.parse(newMaxNumberString)
            props.setMaxValue(newMaxNumber)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("startValue", JSON.stringify(props.startValue))

    }, [props.startValue])

    useEffect(() => {

        localStorage.setItem("maxValue", JSON.stringify(props.maxValue))
    }, [props.maxValue])


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = JSON.parse(e.currentTarget.value)
        props.setMaxValue(newMaxValue)
        if (newMaxValue < 0) {
            props.setError("Incorrect value")
            setDisabledSetButton(true)
        } else if (newMaxValue < props.startValue) {
            props.setError("Incorrect value")
            setDisabledSetButton(true)
        } else if (newMaxValue === props.startValue) {
            props.setError("Incorrect value")
            setDisabledSetButton(true)
        } else {
            props.setError('enter values and press "set"')
        }
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = JSON.parse(e.currentTarget.value)
        props.setStartValue(newStartValue)

        if (newStartValue < 0) {
            props.setError("Incorrect value")
            setDisabledSetButton(true)
        } else if (newStartValue > props.maxValue) {
            props.setError("Incorrect value")
            setDisabledSetButton(true)
        } else if (newStartValue === props.maxValue) {
            props.setError("Incorrect value")
            setDisabledSetButton(true)
        } else {
            props.setError('enter values and press "set"')
        }
    }

    const callBackSettings = () => {
        props.setError("")
        localStorage.setItem("maxValue", JSON.stringify(props.maxValue))
        localStorage.setItem("startValue", JSON.stringify(props.startValue))
        let newStartNumberString = (localStorage.getItem("startValue"))
        if (newStartNumberString) {
            let newStartNumber = JSON.parse(newStartNumberString)
            props.setNumber(newStartNumber)
        }
    }


    return (
        <div>
            <div className={classes.count}>
                <div className={classes.number}>
                    <div className={classes.settings}>
                        <div className={classes.pair}>
                            <div className={classes.span}><span>max value:</span></div>
                            <div><input
                                type="number"
                                className={props.maxValue < 0 || props.startValue === props.maxValue
                                || props.startValue > props.maxValue
                                    ? classes.errorInput : classes.input}
                                onChange={onChangeMaxValue}
                                value={props.maxValue}
                            /></div>
                        </div>
                        <div className={classes.pair}>
                            <div className={classes.span}><span>start value:</span></div>
                            <div><input
                                type="number"
                                className={props.startValue < 0 || props.startValue === props.maxValue
                                || props.startValue > props.maxValue
                                    ? classes.errorInput : classes.input}
                                onChange={onChangeStartValue}
                                value={props.startValue}
                            /></div>
                        </div>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <Button name='set'
                            callBack={callBackSettings}
                            disabledButton={disabledSetButton}
                            disabled={
                                props.startValue === props.maxValue
                                || props.startValue < 0
                                || props.startValue > props.maxValue
                                || props.maxValue < 0
                            }
                    />
                </div>
            </div>
        </div>
    )
}