import React, { useEffect, useState } from "react";
import { COMPONENT_RERENDER_TIME } from "../../../utils/constants";
import { isDayContainCurrentTimestamp } from "../../../utils/helpers";
import styles from './redLine.module.css'
import moment from "moment";

export const RedLine = (startingPointTime) => {
    const [, setCounter] = useState(0);
    useEffect(() => {
        const timerId = setInterval(() => {
            setCounter(prevState => prevState + 1)
        }, COMPONENT_RERENDER_TIME);

        return () => clearInterval(timerId);
    }, []);

    const getRedLinePosition = () => {
        return ((moment().format('X') - startingPointTime.startingPointTime.startOf('day').format('X')) / 86400) * 100
    }

    return (
        isDayContainCurrentTimestamp(moment(), startingPointTime.startingPointTime.startOf('day')) ? (
            <div className={styles.redLine} style={{ top: `${getRedLinePosition()}%` }}></div>
        ) : null
    )
}