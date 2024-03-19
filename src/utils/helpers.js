import moment from "moment"

export const isCurrentDay = (day) => {
    return moment().isSame(day, 'day')
}

export const isSelectedMonth = (day, startingPointTime) => {
    return startingPointTime.isSame(day, 'month')
}

export const isDayContainEvent = (event, dayItem) => {
    return moment(event.start).format('x') >= moment(dayItem).format('x') && moment(event.end).format('x') < moment(dayItem).clone().endOf('day').format('x')
}