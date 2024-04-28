import React, { useState } from "react";
import styles from './index.module.css'
import { Header } from "./Header/header";
import moment from "moment";
import { Day } from "./Day/day";
import { Modal } from "../Agenda/Modal/modal";

function Timeline({ events, resources, fullTimeScale }) {
    const [startingPointTime, setStartingPointTime] = useState(moment());
    const [droppedHour, setDroppedHour] = useState(null);
    const [isShowModal, setShowModal] = useState(false);
    const [event, setEvent] = useState(null);

    const prevHandler = () => {
        setStartingPointTime(prev => prev.clone().subtract(1, 'day'));
    }

    const todayHandler = () => {
        setStartingPointTime(moment());
    }

    const nextHandler = () => {
        setStartingPointTime(prev => prev.clone().add(1, 'day'));
    }

    const cancelButtonHandler = () => {
        setShowModal(false);
        setEvent(null);
    }

    const openModal = (event) => {
        setShowModal(true);
        setEvent(event)
    }

    const updateEventByDragAndDrop = (eventToUpdate) => {
        console.log(droppedHour)
        let oldEndTime = moment(eventToUpdate.end);
        let oldStartTime = moment(eventToUpdate.start);
        let duration = moment.duration(oldEndTime.diff(oldStartTime));
        let newStart = oldStartTime.hours(droppedHour).minutes(0);
        let newEnd = newStart.clone().add(duration);

        let globalEventForUpdate = events.find(eventGlobal => eventGlobal.id === eventToUpdate.id);

        globalEventForUpdate.start = newStart;
        globalEventForUpdate.end = newEnd;
        setDroppedHour(null);
    }

    const updateEventHandler = () => {
        let globalEventForUpdate = events.find(eventGlobal => eventGlobal.id === event.id);

        globalEventForUpdate.title = event.title;
        globalEventForUpdate.start = event.start;
        globalEventForUpdate.end = event.end;
        globalEventForUpdate.allDay = event.allDay;
        // globalEventForUpdate.repeat = event.repeat;
        globalEventForUpdate.assignee = event.assignee;
        globalEventForUpdate.resourceId = event.resourceId;
        setShowModal(false);
        setEvent(null);
    }

    const changeEventHandler = (value, field) => {
        setEvent(prevState => ({
            ...prevState,
            [field]: value
        }))
    }

    return (
        <div className={styles.wrapper}>
            <Header
                startingPointTime={startingPointTime}
                prevHandler={prevHandler}
                todayHandler={todayHandler}
                nextHandler={nextHandler}
            />

            <div className={styles.dayWrapper}>
                <Day
                    events={events}
                    resources={resources}
                    startingPointTime={startingPointTime}
                    fullTimeScale={fullTimeScale}
                    updateEventByDragAndDrop={updateEventByDragAndDrop}
                    setDroppedHour={setDroppedHour}
                    openModal={openModal}
                />
            </div>

            <Modal
                cancelButtonHandler={cancelButtonHandler}
                isShowModal={isShowModal}
                event={event}
                changeEventHandler={changeEventHandler}
                updateEventHandler={updateEventHandler}
                modalView={'Timeline'}
                resources={resources}
            />
        </div>
    )
}

export default Timeline;