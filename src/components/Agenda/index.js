import React, { useRef, useState } from "react";
import styles from './index.module.css'
import { Header } from "./Header/header";
import moment from "moment";
import { Cells } from "./Cells/cells";
import { isWeekContainEvent } from "../../utils/helpers";
import { Modal } from "./Modal/modal";

function Agenda({ events }) {
    const [startingPointTime, setStartingPointTime] = useState(moment());
    const [isShowModal, setShowModal] = useState(false);
    const [event, setEvent] = useState(null);

    const parentRef = useRef(null);

    const currentWeekEvents = events?.filter(event => isWeekContainEvent(event, startingPointTime));

    const prevHandler = () => {
        setStartingPointTime(prev => prev.clone().subtract(1, 'week'));
    }

    const todayHandler = () => {
        setStartingPointTime(moment().subtract(1, 'day'));
    }

    const nextHandler = () => {
        setStartingPointTime(prev => prev.clone().add(1, 'week'));
    }

    const openModal = (event) => {
        setShowModal(true);
        setEvent(event)
    }

    const cancelButtonHandler = () => {
        setShowModal(false);
        setEvent(null);
    }

    const updateEventHandler = () => {
        let globalEventForUpdate = events.find(eventGlobal => eventGlobal.id === event.id);

        globalEventForUpdate.title = event.title;
        globalEventForUpdate.start = event.start;
        globalEventForUpdate.end = event.end;
        globalEventForUpdate.allDay = event.allDay;
        // globalEventForUpdate.repeat = event.repeat;
        globalEventForUpdate.assignee = event.assignee;
        globalEventForUpdate.priority = event.priority;
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
        <div className={styles.wrapper} ref={parentRef}>
            <Header
                startingPointTime={startingPointTime}
                prevHandler={prevHandler}
                todayHandler={todayHandler}
                nextHandler={nextHandler}
            />

            <Cells
                currentWeekEvents={currentWeekEvents}
                startingPointTime={startingPointTime}
                openModal={openModal}
                parentRef={parentRef}
            />

            <Modal
                cancelButtonHandler={cancelButtonHandler}
                isShowModal={isShowModal}
                event={event}
                changeEventHandler={changeEventHandler}
                updateEventHandler={updateEventHandler}
            />
        </div>
    );
}

export default Agenda;