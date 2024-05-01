import moment from "moment";

export const eventMapper = (events) => {
    const HOURS_COUNT = 24;
    const rowHours = new Map([...Array(HOURS_COUNT)].map((_, i) => ([i, new Map])))

    events
        .sort((a, b) => moment(a.start).diff(moment(a.end)) - moment(b.start).diff(moment(b.end)))
        .forEach(e => {
            const rowHourItem = rowHours.get(moment(e.start).hour());
            rowHourItem.set(e.id, e)
        });

    let rowNumber = 0;
    let columnNumber = 0;
    const columnsEventsGroups = new Map();
    columnsEventsGroups.set(columnNumber, new Map());
    let emptyRowsCount = 0;

    while (true) {

        if (rowHours.size === emptyRowsCount) {
            columnsEventsGroups.delete(columnNumber);
            break;
        }

        if (rowNumber > rowHours.size - 1) {
            rowNumber = 0;
            columnNumber++;
            columnsEventsGroups.set(columnNumber, new Map());
            emptyRowsCount = 0;
        }

        const rowAsHourData = rowHours.get(rowNumber);

        if (rowAsHourData.size === 0) {
            rowNumber++;
            emptyRowsCount++;
            continue;
        }

        const iterator = rowAsHourData.keys();
        const key = iterator.next().value;
        const firstEventInRowAsHourData = rowAsHourData.get(key);

        rowAsHourData.delete(key);
        (columnsEventsGroups.get(columnNumber)).set(key, firstEventInRowAsHourData)
        rowNumber = rowNumber + Math.ceil(moment(firstEventInRowAsHourData.end).diff(moment(firstEventInRowAsHourData.start), 'h', true));
    }

    return columnsEventsGroups;
}