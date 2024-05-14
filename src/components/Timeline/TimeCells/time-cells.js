import React from "react";
import styles from './time-cells.module.css'
import moment from "moment";
import { colors } from "../../../utils/colors";

export const TimeCells = ({
    countOfHours,
    resources,
    updateEventByDragAndDrop,
    currentDayEvents,
    fullTimeScale,
    openModal,
    openFormHandler,
    startingPointTime,
    setDroppedHour,
    HEIGHT_DAY_CELL
}) => {
    const hoursScale = fullTimeScale ? [...Array(countOfHours).keys()] : [...Array(countOfHours).keys()].slice(6, 21);

    const onDragEndHandler = (e, event) => {
        updateEventByDragAndDrop(event)
    }

    const onDropHandler = (e, i) => {
        console.log(i)
        e.preventDefault();
        setDroppedHour(i);
    }

    const onDragOverHandler = (e) => {
        console.log(e)
        e.preventDefault()
    }

    return (
        <div className={styles.dayCellWrapper}>
            <div className={styles.timeCanva}>
                <div className={styles.timeCellWrapper}></div>
                {
                    hoursScale.map((i) => (
                        <div className={styles.timeCellWrapper}
                            style={{ height: HEIGHT_DAY_CELL }}
                            onDoubleClick={() => openFormHandler('Create', null, startingPointTime, i)}
                        >
                            {`${i}`.padStart(2, '0')}:00
                        </div>
                    ))
                }
            </div>

            <div className={styles.eventsCanvaWrapper}>
                <div>
                    {
                        resources.map((resource, colorIndex) => {
                            return (
                                <div className={styles.eventsCanva}>
                                    <div className={styles.resourceWrapper}>
                                        <div>{resource.resource}</div>
                                    </div>

                                    {
                                        hoursScale.map((i) => (
                                            <div className={styles.resourceWrapper}
                                                onDrop={(e) => onDropHandler(e, i)}
                                                onDragOver={onDragOverHandler}
                                            >

                                            </div>
                                        ))
                                    }

                                    {
                                        currentDayEvents?.filter(event => event.resourceId == undefined ? true : event?.resourceId === resource?.id).map((event) => {
                                            let startTime = moment(event.start);
                                            let endTime = moment(event.end);
                                            let duration = moment.duration(endTime.diff(startTime));
                                            let EVENT_LEFT;
                                            let EVENT_WIDTH;
                                            const lastColorId = Object.keys(colors).at(-1);

                                            fullTimeScale ? EVENT_LEFT = startTime.hours() * 100 + 100 / 60 * startTime.minutes() + 100 : EVENT_LEFT = startTime.clone().subtract(6, 'hours').hours() * 100 + 100 / 60 * startTime.minutes() + 100;

                                            fullTimeScale || endTime.isBefore(endTime.clone().hours(21).minutes(0), 'hour') ? EVENT_WIDTH = duration.hours() * 100 + 100 / 60 * duration.minutes() : EVENT_WIDTH = moment.duration(endTime.clone().hours(21).minutes(0).diff(startTime)).hours() * 100;

                                            return (
                                                <>
                                                    <div style={{ left: EVENT_LEFT, width: EVENT_WIDTH - 1, height: 70, backgroundColor: colors[colorIndex] ? colors[colorIndex] : colors[colorIndex - lastColorId - 1] }}
                                                        className={styles.eventTitle}
                                                        onDoubleClick={() => openModal(event)}
                                                        name="event"
                                                        draggable
                                                        onDragEnd={(e) => onDragEndHandler(e, event)}
                                                    >
                                                        {event.title}
                                                        <div className={styles.eventTime}>
                                                            {moment(event.start).format('HH:mm')} - {moment(event.end).format('HH:mm')}
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}