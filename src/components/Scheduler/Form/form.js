import React, { useState } from "react";
import styles from './form.module.css'
import moment from "moment";

export const Form = ({ startingPointTime, selectedEvent, changeEventHandler, cancelButtonHandler, eventAction, method, removeButtonHandler, openFormHandler, resources }) => {

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
                                <span className={styles.textWrapper}>Start:</span>
                                <input type="datetime-local" defaultValue={moment(selectedEvent.start).format('YYYY-MM-DDTHH:mm')} onChange={(e) => { changeEventHandler(e.target.value, 'start') }} />
                            </div>

                            <div className={styles.dateWrapper}>
                                <span className={styles.textWrapper}>End:</span>
                                <input type="datetime-local" defaultValue={moment(selectedEvent.end).format('YYYY-MM-DDTHH:mm')} onChange={(e) => { changeEventHandler(e.target.value, 'end') }} />
                            </div>
                        </div>

                        <div>
                            {
                                resources ? (
                                    <div className={styles.dateWrapper}>
                                        <span className={styles.textWrapper}>Resource:</span>
                                        <select
                                            onChange={(e) => { changeEventHandler(resources.find((resource) => resource.resource == e.target.value).id, 'resourceId') }}
                                            defaultValue={resources.find((resource) => resource.id == selectedEvent.resourceId)?.resource}
                                        >
                                            {
                                                resources.map((resource, i) => (
                                                    <option
                                                        className={styles.selectOption}
                                                        value={resource.resource}
                                                    >
                                                        {resource.resource}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                ) : null
                            }
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