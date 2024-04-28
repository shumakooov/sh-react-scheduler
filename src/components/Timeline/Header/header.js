import React from "react";
import styles from "./header.module.css"

const Header = ({ startingPointTime, prevHandler, todayHandler, nextHandler }) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.currentDate}>
                    <div className={styles.currentDateText}>
                        {startingPointTime.clone().format('D MMMM YYYY')}
                    </div>
                </div>
                <div>
                    <button className={styles.btnChangeDay} onClick={() => prevHandler()}> &lt; </button>
                    <button className={`${styles.btnChangeDay} ${styles.btnChangeDayToday}`} onClick={() => todayHandler()}>Current day</button>
                    <button className={styles.btnChangeDay} onClick={() => nextHandler()}> &gt; </button>
                </div>
                <div className={styles.agendaTextWrapper}>
                    <div className={styles.agendaText}>Timeline</div>
                </div>
            </div>
        </div>
    )
}

export { Header }