import React, { useEffect, useRef, useState } from "react";
import styles from './day-cell.module.css'
import moment from "moment";
import { eventMapper } from "../../../utils/eventMapper";
import { views } from "../../../utils/constants";

export const DayCell = ({ countOfHours, updateEventByDragAndDrop, currentDayEvents, currentResourceAndDayEvents, openFormHandler, startingPointTime, setStartingPointTime, setDroppedHour, HEIGHT_DAY_CELL, resource, view, setView, onEventClick }) => {
    const [eventWidth, setEventWidth] = useState(0);
    let showViewMore = false;
    let isShowViewMoreCalculated = false;
    let eventTopForViewMore = 0;
    let startingPointTimeToShowMore = null;
    let countOfShowMore = 0;

    const ref = useRef(null);

    const eventsToMap = currentResourceAndDayEvents ? currentResourceAndDayEvents : currentDayEvents;

    const mappedEvents = eventMapper(eventsToMap.filter(event => event.allDay !== true));

    const mappedEventsArray = [];
    mappedEvents.forEach((column, rank) => {
        column.forEach((event) => {
            mappedEventsArray.push({ ...event, rank })
        })
    });

    useEffect(() => {
        setEventWidth((ref.current.clientWidth - 20) / (showViewMore ? 2 : mappedEvents.size))
    }, [ref, mappedEvents]);

    const onDragEndHandler = (e, event) => {
        updateEventByDragAndDrop(event)
    }

    const onDropHandler = (e, i) => {
        e.preventDefault();
        setDroppedHour(i);
    }

    const onDragOverHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.dayCellWrapper} ref={ref}>
            <div className={styles.timeCanvas}>
                {
                    [...Array(countOfHours)].map((_, i) => (
                        <div className={styles.timelineCellWrapper}
                            style={{ height: HEIGHT_DAY_CELL }}
                            onDrop={(e) => onDropHandler(e, i)}
                            onDragOver={onDragOverHandler}
                            onDoubleClick={() => openFormHandler('Create', null, startingPointTime, i, resource)}
                        >
                            <div className={styles.cellEventWrapper} />
                        </div>
                    ))
                }

            </div>
            {
                mappedEventsArray?.filter(event => event.allDay === false || event.allDay === undefined).map((event, i) => {
                    let startTime = moment(event.start);
                    let endTime = moment(event.end);
                    let duration = moment.duration(endTime.diff(startTime));

                    const EVENT_TOP = startTime.hours() * HEIGHT_DAY_CELL + startTime.minutes() / (60 / HEIGHT_DAY_CELL);
                    const EVENT_HEIGHT = duration.hours() * HEIGHT_DAY_CELL + duration.minutes() / (60 / HEIGHT_DAY_CELL);

                    if (event.rank > 1 && view == views.WEEK) {
                        countOfShowMore++;
                        if (!isShowViewMoreCalculated) {
                            showViewMore = true;
                            eventTopForViewMore = startTime.hours() * HEIGHT_DAY_CELL + startTime.minutes() / 2;
                            startingPointTimeToShowMore = startTime;
                            isShowViewMoreCalculated = true;
                        }
                        return;
                    }

                    return (
                        <div style={{ width: eventWidth - 2, left: eventWidth * event?.rank, top: EVENT_TOP, height: EVENT_HEIGHT - 1 }}
                            className={styles.eventTitle}
                            onClick={() => { openFormHandler('Update', event, null, null); onEventClick && onEventClick(event) }}
                            name="event"
                            draggable
                            onDragEnd={(e) => onDragEndHandler(e, event)}
                        >
                            {event.title}
                            {
                                EVENT_HEIGHT >= 40 ? (
                                    <div className={styles.eventTime}>
                                        {moment(event.start).format('HH:mm')}-{moment(event.end).format('HH:mm')}
                                    </div>
                                ) : null
                            }
                        </div>
                    )
                })
            }

            {
                showViewMore && view == views.WEEK ? (
                    <div className={styles.showMoreTitle} style={{ top: eventTopForViewMore }} onClick={() => { setView(views.DAY); setStartingPointTime(startingPointTimeToShowMore) }}>
                        +{countOfShowMore}
                    </div>
                ) : null
            }
        </div>
    )
}