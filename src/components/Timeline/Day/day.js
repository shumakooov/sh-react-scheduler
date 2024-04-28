import React from "react";
import styles from './day.module.css'
import { TimeCells } from "../TimeCells/time-cells";
import { isDayContainEvent } from "../../../utils/helpers";

export const Day = ({ events, resources, startingPointTime, fullTimeScale, updateEventByDragAndDrop, setDroppedHour, openModal }) => {
    const countOfHours = 24;
    const currentDayEvents = events?.filter(event => isDayContainEvent(event, startingPointTime));

    return (
        <div className={styles.wrapper}>
            <div className={styles.eventsListWrapper}>
                <div className={styles.timelineWrapper}>
                    <div className={styles.weekCellsWrapper}>
                        <div className={styles.weekDayColumn}>
                            <TimeCells
                                countOfHours={countOfHours}
                                resources={resources}
                                updateEventByDragAndDrop={updateEventByDragAndDrop}
                                currentDayEvents={currentDayEvents}
                                fullTimeScale={fullTimeScale}
                                openModal={openModal}
                                // startingPointTime={startingPointTime.clone().startOf('week').add(i + 1, 'day')}
                                setDroppedHour={setDroppedHour}
                            // HEIGHT_DAY_CELL={HEIGHT_DAY_CELL}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}