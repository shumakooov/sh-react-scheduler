import React from "react";
import styles from './day.module.css'
import { isDayContainEvent } from "../../../utils/helpers";
import { RedLine } from "../RedLine/redLine";
import { Form } from "../Form/form";
import { AllDayEventsCell } from "../AllDayEventsCell/all-day-events-cell";
import { DayCell } from "../DayCell/day-cell";
import { DayHeader } from "../DayHeader/day-header";

export const Day = ({ events, startingPointTime, selectedEvent, method, cancelButtonHandler, eventAction, removeButtonHandler, changeEventHandler, openFormHandler, updateEventByDragAndDrop, setDroppedHour, HEIGHT_DAY_CELL, resources }) => {
    const currentDayEvents = events?.filter(event => isDayContainEvent(event, startingPointTime));
    const countOfHours = 24;

    return (
        <div className={styles.wrapper}>
            <div className={styles.eventsListWrapper}>
                <div className={styles.timelineWrapper}>

                    {
                        resources ? (
                            <div className={styles.headerWrapper}>
                                <div className={styles.emptySquareInHeader} />
                                <div className={styles.header}>
                                    <DayHeader resources={resources} />
                                </div>
                            </div>
                        ) : null
                    }

                    {
                        resources ? (
                            <div className={styles.allDayWrapper}>
                                <div className={styles.allDayText} style={{ height: HEIGHT_DAY_CELL }}>
                                    All day
                                </div>
                                <div className={styles.allDay}>
                                    {
                                        resources.map(resource => {
                                            let currentResourceAndDayEvents = events.filter(event => event.resourceId == resource?.id && isDayContainEvent(event, startingPointTime));
                                            return (
                                                <AllDayEventsCell
                                                    currentDayEvents={currentDayEvents}
                                                    currentResourceAndDayEvents={currentResourceAndDayEvents}
                                                    openFormHandler={openFormHandler}
                                                    HEIGHT_DAY_CELL={HEIGHT_DAY_CELL}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        ) : (
                            <div className={styles.allDayWrapper}>
                                <div className={styles.allDayText} style={{ height: HEIGHT_DAY_CELL }}>
                                    All day
                                </div>
                                <AllDayEventsCell
                                    currentDayEvents={currentDayEvents}
                                    openFormHandler={openFormHandler}
                                    HEIGHT_DAY_CELL={HEIGHT_DAY_CELL}
                                />
                            </div>
                        )
                    }

                    <div className={styles.eventsCanva}>
                        <RedLine startingPointTime={startingPointTime} />

                        <div>
                            {
                                [...Array(countOfHours)].map((_, i) => (
                                    <div className={styles.cellTimeWrapper} style={{ height: HEIGHT_DAY_CELL }}>{`${i}`.padStart(2, '0')}:00</div>
                                ))
                            }
                        </div>

                        {
                            resources ? (
                                resources.map(resource => {
                                    let currentResourceAndDayEvents = events.filter(event => event.resourceId == resource?.id && isDayContainEvent(event, startingPointTime));
                                    return (
                                        <DayCell
                                            countOfHours={countOfHours}
                                            updateEventByDragAndDrop={updateEventByDragAndDrop}
                                            currentDayEvents={currentDayEvents}
                                            currentResourceAndDayEvents={currentResourceAndDayEvents}
                                            openFormHandler={openFormHandler}
                                            startingPointTime={startingPointTime}
                                            setDroppedHour={setDroppedHour}
                                            HEIGHT_DAY_CELL={HEIGHT_DAY_CELL}
                                            resource={resource}
                                        />
                                    )
                                })
                            ) : (
                                <DayCell
                                    countOfHours={countOfHours}
                                    updateEventByDragAndDrop={updateEventByDragAndDrop}
                                    currentDayEvents={currentDayEvents}
                                    openFormHandler={openFormHandler}
                                    startingPointTime={startingPointTime}
                                    setDroppedHour={setDroppedHour}
                                    HEIGHT_DAY_CELL={HEIGHT_DAY_CELL}
                                />
                            )
                        }
                    </div>
                </div>
            </div>


            {
                selectedEvent ? (
                    <Form
                        startingPointTime={startingPointTime}
                        selectedEvent={selectedEvent}
                        changeEventHandler={changeEventHandler}
                        countOfHours={countOfHours}
                        cancelButtonHandler={cancelButtonHandler}
                        eventAction={eventAction}
                        method={method}
                        removeButtonHandler={removeButtonHandler}
                        openFormHandler={openFormHandler}
                        resources={resources}
                    />
                ) : null
            }
        </div>
    )
}