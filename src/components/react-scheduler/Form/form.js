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
                        <input
                            className={styles.inputTitle}
                            value={selectedEvent.title}
                            onChange={(e) => { changeEventHandler(e.target.value, 'title') }}
                            placeholder="Title"
                        />
                        <div className={styles.selectTimeWrapper}>
                            <div className={styles.dateWrapper}>
                                <span>start</span>
                                <span>end</span>
                            </div>
                            <div className={styles.dateWrapper}>
                                <button>{moment(selectedEvent.start).format('dddd, D MMMM ')}</button>
                                <button>{moment(selectedEvent.end).format('dddd, D MMMM ')}</button>
                            </div>
                            <div className={styles.timeWrapper}>
                                <button onClick={() => setShowTimePickerStart(prevState => !prevState)}>{moment(selectedEvent.start).format('HH:mm')}</button>
                                <button onClick={() => setShowTimePickerEnd(prevState => !prevState)}>{moment(selectedEvent.end).format('HH:mm')}</button>
                                {
                                    showTimePickerStart ? (
                                        <ul className={styles.listOfHoursStart}>
                                            {
                                                [...new Array(countOfHours)].map((_, i) => (
                                                    <li>
                                                        <button
                                                            className={styles.hoursButton}
                                                            onClick={() => setTimeStart(i)}
                                                        >
                                                            {`${i}`.padStart(2, '0')}:00
                                                        </button>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    ) : null
                                }
                                {
                                    showTimePickerEnd ? (
                                        <ul className={styles.listOfHoursEnd}>
                                            {
                                                [...new Array(countOfHours)].map((_, i) => (
                                                    <li>
                                                        <button
                                                            className={styles.hoursButton}
                                                            onClick={() => setTimeEnd(i)}
                                                        >
                                                            {`${i}`.padStart(2, '0')}:00
                                                        </button>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    ) : null
                                }
                            </div>
                        </div>
                        <div className={styles.buttonsWrapper}>
                            <button onClick={() => cancelButtonHandler()}>Cancel</button>
                            <button onClick={() => eventAction(selectedEvent)}>{method}</button>
                            <button onClick={() => removeButtonHandler(selectedEvent)}>Remove</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <button onClick={() => openFormHandler('Create', null, startingPointTime)}>Create new event</button>
                        <div className={styles.noEventMessage}>No event selected</div>
                    </>
                )
            }
        </div>
    )
}