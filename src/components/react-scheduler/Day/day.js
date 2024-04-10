import React from "react";
import styles from './day.module.css'
import { isDayContainEvent } from "../../../utils/helpers";
import { RedLine } from "../RedLine/redLine";
import { Form } from "../Form/form";
import { AllDayEventsCell } from "../AllDayEventsCell/all-day-events-cell";
import { DayCell } from "../DayCell/day-cell";

export const Day = ({ events, startingPointTime, selectedEvent, method, cancelButtonHandler, eventAction, removeButtonHandler, changeEventHandler, openFormHandler, updateEventByDragAndDrop }) => {
    const currentDayEvents = events.filter(event => isDayContainEvent(event, startingPointTime));
    const countOfHours = 24;

    return (
        <div className={styles.wrapper}>
            <div className={styles.eventsListWrapper}>
                <div className={styles.timelineWrapper}>

                    <AllDayEventsCell
                        currentDayEvents={currentDayEvents}
                        openFormHandler={openFormHandler}
                    />

                    <RedLine startingPointTime={startingPointTime} />

                    <DayCell
                        countOfHours={countOfHours}
                        updateEventByDragAndDrop={updateEventByDragAndDrop}
                        currentDayEvents={currentDayEvents}
                        openFormHandler={openFormHandler}
                    />

                </div>
            </div>


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
            />
        </div>
    )
}