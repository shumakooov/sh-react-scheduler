import moment from "moment"

export const isCurrentDay = (day) => {
    return moment().isSame(day, 'day')
}

export const isSelectedMonth = (day, startingPointTime) => {
    return startingPointTime.isSame(day, 'month')
}

export const isDayContainCurrentTimestamp = (a, b) => {
    return a.format('X') >= b.startOf('day').format('X') && a.format('X') < b.clone().endOf('day').format('X')
}

export const isDayContainEvent = (event, dayItem) => {
    return moment(event.start).format('X') >= moment(dayItem).startOf('day').format('X') && moment(event.end).format('X') < moment(dayItem).clone().endOf('day').format('X')
}

export const isWeekContainEvent = (event, dayItem) => {
    return moment(event.start).format('X') >= moment(dayItem).clone().startOf('week').add(1, 'day').format('X') && moment(event.end).format('X') < moment(dayItem).clone().endOf('week').add(1, 'day').format('X')
}