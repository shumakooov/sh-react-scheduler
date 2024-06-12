import Scheduler from "../components/Scheduler";
import moment from "moment";
import { ArgTypes, Canvas, Description, Source, Story, Title } from "@storybook/blocks";

const myEvents = [
    {
        id: 1,
        title: "Стратегическое планирование",
        start: new Date().setHours(19, 30),
        end: new Date().setHours(21, 0),
        allDay: false,
    },
    {
        id: 2,
        title: "Креативный брифинг",
        start: new Date(moment().add(1, 'day')).setHours(21, 0),
        end: new Date(moment().add(1, 'day')).setHours(23, 0),
        allDay: false,
    },
    {
        id: 3,
        title: "Координационное совещание",
        start: new Date().setHours(23, 0),
        end: new Date().setHours(23, 50),
        allDay: false,
    },
    {
        id: 13,
        title: "Проектный обзор",
        start: new Date().setHours(14, 0),
        end: new Date().setHours(16, 30),
        allDay: false,
    },
    {
        id: 14,
        title: "Маркетинговый митап",
        start: new Date(moment().add(2, 'day')).setHours(14, 0),
        end: new Date(moment().add(2, 'day')).setHours(16, 30),
        allDay: false,
    },
    {
        id: 4,
        title: "Финансовый анализ",
        start: new Date(moment().add(1, 'day')).setHours(14, 0),
        end: new Date(moment().add(1, 'day')).setHours(15, 0),
    },
    {
        id: 5,
        title: "Технический обзор",
        start: new Date(moment().add(2, 'day')).setHours(20, 0),
        end: new Date(moment().add(2, 'day')).setHours(22, 30),
    },
    {
        id: 6,
        title: "Кадровая встреча",
        start: new Date().setHours(19, 0),
        end: new Date().setHours(21, 0),
        allDay: true,
    },
    {
        id: 7,
        title: "Отчет по продажам",
        start: new Date(moment().subtract(1, 'day')).setHours(17, 0),
        end: new Date(moment().subtract(1, 'day')).setHours(18, 0),
    },
    {
        id: 8,
        title: "Инновационный семинар",
        start: new Date(moment().add(2, 'day')).setHours(15, 0),
        end: new Date(moment().add(2, 'day')).setHours(18, 0),
    },
]

const resources = [
    {
        id: 1,
        resource: 'Кабинет 101'
    },
    {
        id: 2,
        resource: 'Кабинет 111'
    },
    {
        id: 3,
        resource: 'Кабинет 103'
    },
    {
        id: 4,
        resource: 'Кабинет 117'
    },
    {
        id: 5,
        resource: 'Кабинет 201'
    },
]

export default {
    title: 'Example/Scheduler',
    component: Scheduler,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Description />

                    <Canvas />

                </>
            )
        }
    },
}

export const Basic = {
    render: (args) => <Scheduler {...args} />,
    args: {
        events: myEvents
    }
}

export const Resources = {
    render: (args) => <Scheduler {...args} />,
    args: {
        events: myEvents,
        resources: resources,
    }
}

export const CustomCellsHeight = {
    render: (args) => <Scheduler {...args} />,
    args: {
        cellsHeight: 60,
        events: myEvents,
    }
}