import React, { useState } from "react";
import styles from './index.module.css'
import { Header } from "./Header/header";
import moment from "moment";
import { Cells } from "./Cells/cells";
import { isWeekContainEvent } from "../../utils/helpers";
import { Modal } from "./Modal/modal";

function Agenda({ events }) {
    const [startingPointTime, setStartingPointTime] = useState(moment());
    const [isShowModal, setShowModal] = useState(false);

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

    const openModal = () => {
        setShowModal(true);
    }

    const cancelButtonHandler = () => {
        setShowModal(false);
        // setEvent(null);
    }

    return (
        <div className={styles.wrapper}>
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
            />

            <Modal
                cancelButtonHandler={cancelButtonHandler}
                isShowModal={isShowModal}
            />
        </div>
    );
}

export default Agenda;