import React from "react";
import styles from "./header.module.css"
import { views } from "../../../utils/constants";

const Header = ({ startingPointTime, prevHandler, todayHandler, nextHandler, setView, view }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.currentDate}>
                    {
                        view === views.DAY ? (
                            <div className={styles.currentDateText}>{startingPointTime.format('DD')}&nbsp;</div>
                        ) : null
                    }
                    <div className={styles.currentDateText}>{startingPointTime.format('MMMM YYYY')}</div>
                </div>
                <div>
                    <button className={styles.btnChangeDay} onClick={() => prevHandler()}> &lt; </button>
                    <button className={`${styles.btnChangeDay} ${styles.btnChangeDayToday}`} onClick={() => todayHandler()}>Today</button>
                    <button className={styles.btnChangeDay} onClick={() => nextHandler()}> &gt; </button>
                </div>
                <div>
                    <button className={view === views.MONTH ? `${styles.btnSwitchMode} ${styles.btnSwitchMode_unpressed}` : styles.btnSwitchMode} onClick={() => setView(views.MONTH)}>Month</button>
                    <button className={view === views.WEEK ? `${styles.btnSwitchMode} ${styles.btnSwitchMode_unpressed}` : styles.btnSwitchMode} onClick={() => setView(views.WEEK)}>Week</button>
                    <button className={view === views.DAY ? `${styles.btnSwitchMode} ${styles.btnSwitchMode_unpressed}` : styles.btnSwitchMode} onClick={() => setView(views.DAY)}>Day</button>
                </div>
            </div>
        </div>
    )
}

export { Header }