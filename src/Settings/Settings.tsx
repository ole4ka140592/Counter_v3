import React, {useState} from "react";
import classes from "./Settings.module.css";
import {Button} from "../components/Button/Button";

export type SettingsPropsType = {
    number: number
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
                            /></div>
                        </div>
                        <div className={classes.pair}>
                            <div className={classes.span}><span>start value:</span></div>
                            <div><input
                                type="number"
                                className={classes.input}

                            /></div>
                        </div>
                    </div>
                </div>
                <div className={classes.buttons}>
                    <Button name='set'
                            callBack={callBackSettings}
                            disabledButton={disabledSetButton}
                            disabled={props.startValue===props.maxValue}
                    />
                </div>
            </div>
        </div>
    )
}