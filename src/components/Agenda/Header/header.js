import React from "react";
import styles from "./header.module.css"

const Header = ({ startingPointTime, prevHandler, todayHandler, nextHandler }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.currentDate}>
                    <div className={styles.currentDateText}>
                        {startingPointTime.clone().startOf('week').add(1, 'day').format('D MMM')} - {startingPointTime.clone().endOf('week').add(1, 'day').format('D MMM YYYY')}
                    </div>
                </div>
                <div>
                    <button className={styles.btnChangeDay} onClick={() => prevHandler()}> &lt; </button>
                    <button className={`${styles.btnChangeDay} ${styles.btnChangeDayToday}`} onClick={() => todayHandler()}>Current week</button>
                    <button className={styles.btnChangeDay} onClick={() => nextHandler()}> &gt; </button>
                </div>
                <div className={styles.agendaTextWrapper}>
                    <div className={styles.agendaText}>Agenda</div>
                </div>
            </div>
        </div>
    )
}

export { Header }