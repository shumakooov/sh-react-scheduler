import Scheduler from "../components/react-scheduler";

const myEvents = [
    {
        id: 1,
        title: "Поужинать в Вилка Ложка",
        start: new Date("2024-04-07T19:30"),
        end: new Date("2024-04-07T21:00"),
        allDay: false,
    },
    {
        id: 2,
        title: "Встретиться с друзьями",
        start: new Date("2024-04-27T21:01"),
        end: new Date("2024-04-27T23:00"),
        allDay: false,
    },
    {
        id: 3,
        title: "Лечь спать",
        start: new Date("2024-04-07T23:01"),
        end: new Date("2024-04-07T23:30"),
        allDay: false,
    },
    {
        id: 13,
        title: "Сделать уроки",
        start: new Date("2024-04-07T14:00"),
        end: new Date("2024-04-07T16:30"),
        allDay: false,
    },
    {
        id: 14,
        title: "Пить воду",
        start: new Date("2024-04-07T14:00"),
        end: new Date("2024-04-07T16:30"),
        allDay: false,
    },
    {
        id: 4,
        title: "Купить овощей",
        start: new Date("2024-04-20T14:00"),
        end: new Date("2024-04-20T15:00"),
    },
    {
        id: 5,
        title: "Сходить в филармонию",
        start: new Date("2024-04-21T20:00"),
        end: new Date("2024-04-21T22:30"),
    },
    {
        id: 6,
        title: "Пить много воды (целый день)",
        start: new Date("2024-04-26"),
        end: new Date("2024-04-26T21:00"),
        allDay: true,
    },
    {
        id: 7,
        title: "Убраться в комнате",
        start: new Date("2024-04-26T17:00"),
        end: new Date("2024-04-26T18:00"),
    },
    {
        id: 8,
        title: "Приготовить ужин",
        start: new Date("2024-04-26T18:00"),
        end: new Date("2024-04-26T19:00"),
    },
]

const resources = [
    {
        id: 1,
        resource: 'Окно 1'
    },
    {
        id: 2,
        resource: 'Окно 2'
    },
    {
        id: 3,
        resource: 'Окно 3'
    },
    {
        id: 4,
        resource: 'Окно 4'
    },
    {
        id: 5,
        resource: 'Окно 5'
    },
]

export default {
    title: 'Example/Scheduler',
    component: Scheduler,
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