import React from "react";
import { MonthCell } from "../MonthCell/month-cell";
import { isDayContainEvent } from "../../../utils/helpers";

export const Month = ({ startDay, events, startingPointTime }) => {
    const day = startDay.clone();

    const totalDays = 42;
    const daysArray = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

    return (
        daysArray.map((dayItem) => (
            <MonthCell dayItem={dayItem} events={events.filter(event => isDayContainEvent(event, dayItem))} startingPointTime={startingPointTime} />
        ))
    )
}