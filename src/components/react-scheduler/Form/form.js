import React, { useState } from "react";
import styles from './form.module.css'
import moment from "moment";

export const Form = ({ startingPointTime, selectedEvent, changeEventHandler, countOfHours, cancelButtonHandler, eventAction, method, removeButtonHandler, openFormHandler }) => {
    const [showTimePickerStart, setShowTimePickerStart] = useState(false);
    const [showTimePickerEnd, setShowTimePickerEnd] = useState(false);
    const setTimeStart = (i) => {
        setShowTimePickerStart(false);
        const time = moment(selectedEvent.start).hour(i).format('YYYY-MM-DDTHH:mm')
        changeEventHandler(time, 'start')
    }

    const setTimeEnd = (i) => {
        setShowTimePickerEnd(false);
        const time = moment(selectedEvent.end).hour(i).format('YYYY-MM-DDTHH:mm')
        changeEventHandler(time, 'end')
    }

    return (
        <div className={styles.formWrapper}>
            {
                selectedEvent ? (
                    <div>
                        <div className={styles.inputWrapper}>
                            <input
                                className={styles.inputTitle}
                                value={selectedEvent.title}
                                onChange={(e) => { changeEventHandler(e.target.value, 'title') }}
                                placeholder="Title"
                            />
                        </div>
                        <div className={styles.selectTimeWrapper}>
                            <div className={styles.dateWrapper}>
                                <span>Start:</span>
                                <div>{moment(selectedEvent.start).format('dddd, D MMMM ')}</div>
                                <select
                                    className={styles.select}
                                    onChange={(event) => setTimeStart(event.target.value)}
                                    value={moment(selectedEvent.start).format('H')}
                                >
                                    {
                                        [...new Array(countOfHours)].map((_, i) => (
                                            <option
                                                className={styles.selectOption}
                                                value={i}
                                            >
                                                {`${i}`.padStart(2, '0')}:00
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className={styles.dateWrapper}>
                                <span>End:</span>
                                <div>{moment(selectedEvent.end).format('dddd, D MMMM ')}</div>
                                <select
                                    className={styles.select}
                                    onChange={(event) => setTimeEnd(event.target.value)}
                                    value={moment(selectedEvent.end).format('H')}
                                >
                                    {
                                        [...new Array(countOfHours)].map((_, i) => (
                                            <option
                                                className={styles.selectOption}
                                                value={i}
                                            >
                                                {`${i}`.padStart(2, '0')}:00
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            {/* <div className={styles.timeWrapper}>


                            </div> */}
                        </div>
                        <div className={styles.buttonsWrapper}>
                            <button onClick={() => cancelButtonHandler()} className={styles.button}>Cancel</button>
                            <button onClick={() => eventAction(selectedEvent)} className={styles.button}>{method}</button>
                            <button onClick={() => removeButtonHandler(selectedEvent)} className={`${styles.button} ${styles.removeButton}`}>Remove</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className={styles.createBtnWrapper}>
                            <button
                                className={styles.button}
                                onClick={() => openFormHandler('Create', null, startingPointTime)}
                            >
                                Create new event
                            </button>
                        </div>
                        <div className={styles.noEventMessage}>No event selected</div>
                    </>
                )
            }
        </div>
    )
}