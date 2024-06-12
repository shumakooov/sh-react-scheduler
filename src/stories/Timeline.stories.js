import Timeline from "../components/Timeline";
import moment from "moment";
import { ArgTypes, Canvas, Description, Source, Story, Title } from "@storybook/blocks";

const agendaEvents = [
    {
        id: 4,
        title: "Стратегическое планирование",
        start: new Date(moment().add(1, 'day')).setHours(13, 0),
        end: new Date(moment().add(1, 'day')).setHours(16, 30),
        assignee: 'Samantha Bright',
        priority: 'medium',
        allDay: false,
        resourceId: 5,
    },
    {
        id: 41,
        title: "Кадровая встреча",
        start: new Date(moment().add(1, 'day')).setHours(14, 0),
        end: new Date(moment().add(1, 'day')).setHours(16, 0),
        assignee: 'Samantha Bright',
        priority: 'high',
        allDay: false,
        resourceId: 2,
    },
    {
        id: 42,
        title: "Технический обзор",
        start: new Date().setHours(8, 0),
        end: new Date().setHours(9, 40),
        assignee: 'Todd Hoffman',
        priority: 'low',
        allDay: false,
        resourceId: 1,
    },
    {
        id: 43,
        title: "Финансовый анализ",
        start: new Date().setHours(8, 0),
        end: new Date().setHours(13, 0),
        assignee: 'Todd Hoffman',
        priority: 'high',
        allDay: true,
        resourceId: 2,
    },
    {
        id: 5,
        title: "Финансовый анализ",
        start: new Date().setHours(20, 0),
        end: new Date().setHours(22, 30),
        assignee: 'John Heart',
        priority: 'medium',
        allDay: false,
        resourceId: 4,
    },
    {
        id: 6,
        title: "Креативный брифинг",
        start: new Date().setHours(17, 0),
        end: new Date().setHours(18, 30),
        assignee: 'John Heart',
        priority: 'high',
        allDay: true,
        resourceId: 3,
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
    title: 'Example/Timeline',
    component: Timeline,
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
    render: (args) => <Timeline {...args} />,
    args: {
        events: agendaEvents,
        resources: resources,
    }
}

export const FullTimeScale = {
    render: (args) => <Timeline {...args} />,
    args: {
        fullTimeScale: true,
        events: agendaEvents,
        resources: resources,
    }
}
