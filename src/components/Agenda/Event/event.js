import React, { useRef } from "react";
import styles from './event.module.css'
import Tooltip from "../../Tooltip/tooltip";
import moment from "moment";

export const Event = ({ event, parentRef, openModal }) => {
    const eventRef = useRef(null);

    const priorities = {
        high: '#E4717A',
        medium: '#E6D690',
        low: '#A8E4A0',
    }

    return (
        <>
            {/* <Tooltip elementRef={eventRef} parentRef={parentRef}>
                <div>Im a tooltip</div>
            </Tooltip> */}
            <div className={styles.eventWrapper} onDoubleClick={() => openModal(event)} ref={eventRef}>
                <div className={styles.eventPoint} style={{ background: priorities[event.priority] }}></div>
                <div>
                    <div className={styles.eventTitle}>
                        {event.title}
                    </div>
                    <div className={styles.infoWrapper}>
                        <div className={styles.infoItem}>
                            {
                                event.allDay ? (
                                    <div>All day</div>
                                ) : (
                                    <div>{moment(event.start).format('HH:mm')} - {moment(event.end).format('HH:mm')}</div>
                                )
                            }
                        </div>
                        <div className={styles.infoItem}>
                            Assignee: {event.assignee}
                        </div>
                        <div className={styles.infoItem}>
                            Priority: {event.priority}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}