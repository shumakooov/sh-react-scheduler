import React from "react";
import styles from './modal.module.css'

export const Modal = ({ cancelButtonHandler, isShowModal }) => {

    return (
        <>
            {
                isShowModal ? (
                    <div className={styles.modalPositionWrapper} onClick={() => cancelButtonHandler()}>
                        <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
                            <div className={styles.titleWrapper}>
                                <input className={styles.titleInput} placeholder="Title" />
                            </div>
                            <div className={styles.dateWrapper}>
                                <div>
                                    Start Date
                                    <input type="time" />
                                    <input type="date" />
                                </div>
                                <div>
                                    End Date
                                </div>
                            </div>
                            <div className={styles.checkboxWrapper}>
                                <div>
                                    <input type="checkbox" />
                                    All day
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    Repeat
                                </div>
                            </div>
                            <div className={styles.infoWrapper}>
                                <div>
                                    <input placeholder="Assignee" />
                                </div>
                                <div>
                                    Priority
                                    <select>

                                    </select>
                                </div>
                            </div>
                            <div className={styles.buttonsWrapper}>
                                <button className={styles.button}>DONE</button>
                                <button className={styles.button}>CANCEL</button>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}