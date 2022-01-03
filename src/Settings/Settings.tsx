import React, {ChangeEvent, useState} from "react";
import classes from "./Settings.module.css";
import {Button} from "../components/Button/Button";

export type SettingsPropsType = {
    number: number | string
    setNumber: (number: number) => void
    startValue: number
    setStartValue: (startValue: number) => void
    maxValue: number
    setMaxValue: (maxValue: number) => void
}

export const Settings = (props: SettingsPropsType) => {

    let [disabledSetButton, setDisabledSetButton] = useState<boolean>(false)

    const callBackSettings = ()=> {

    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newMaxValue = JSON.parse(e.currentTarget.value)
        props.setMaxValue(newMaxValue)
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = JSON.parse(e.currentTarget.value)
        if (newStartValue < 0) {
            props.setNumber("Incorrect value")
            setDisabledSetButton(true)
        }
        props.setStartValue(newStartValue)
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
                                className={classes.input}
                                onChange={onChangeMaxValue}
                            /></div>
                        </div>
                        <div className={classes.pair}>
                            <div className={classes.span}><span>start value:</span></div>
                            <div><input
                                type="number"
                                className={classes.input}
                                onChange={onChangeStartValue}

                            /></div>
                        </div>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <Button name='set'
                            callBack={callBackSettings}
                            disabledButton={disabledSetButton}
                            disabled={props.startValue===props.maxValue
                            || props.startValue < 0
                            ||  props.startValue > props.maxValue}
                    />
                </div>
            </div>
        </div>
    )
}