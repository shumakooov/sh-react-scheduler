import { fn } from "@storybook/test";
import Agenda from "../components/Agenda";
import { ArgTypes, Canvas, Description, Source, Story, Title } from "@storybook/blocks";

const agendaEvents = [
    {
        id: 4,
        title: "Сделать уборку",
        start: new Date("2024-05-17T13:00"),
        end: new Date("2024-05-17T15:30"),
        assignee: 'Samantha Bright',
        priority: 'medium',
        allDay: false,
        repeat: true,
        resourceId: 2,
    },
    {
        id: 41,
        title: "Купить овощей",
        start: new Date("2024-05-17T14:00"),
        end: new Date("2024-05-17T16:00"),
        assignee: 'Samantha Bright',
        priority: 'high',
        allDay: false,
        repeat: true,
        resourceId: 2,
    },
    {
        id: 42,
        title: "Проверить почту",
        start: new Date("2024-05-17T08:00"),
        end: new Date("2024-05-17T08:40"),
        assignee: 'Todd Hoffman',
        priority: 'low',
        allDay: false,
        repeat: false,
        resourceId: 1,
    },
    {
        id: 43,
        title: "Согласовать дизайн",
        start: new Date("2024-05-17T12:00"),
        end: new Date("2024-05-17T13:00"),
        assignee: 'Todd Hoffman',
        priority: 'high',
        allDay: true,
        repeat: false,
        resourceId: 2,
    },
    {
        id: 5,
        title: "Сходить в филармонию",
        start: new Date("2024-05-21T20:00"),
        end: new Date("2024-05-21T22:30"),
        assignee: 'John Heart',
        priority: 'medium',
        allDay: false,
        repeat: false,
        resourceId: 1,
    },
    {
        id: 6,
        title: "Пить много воды (целый день)",
        start: new Date("2024-05-20T17:00"),
        end: new Date("2024-05-20T17:30"),
        assignee: 'John Heart',
        priority: 'high',
        allDay: true,
        repeat: false,
        resourceId: 1,
    },
    {
        id: 7,
        title: "Убраться в комнате",
        start: new Date("2024-05-20T17:00"),
        end: new Date("2024-05-20T18:00"),
        assignee: 'Todd Hoffman',
        priority: 'low',
        allDay: false,
        repeat: false,
        resourceId: 2,
    },
    {
        id: 8,
        title: "Приготовить ужин",
        start: new Date("2024-05-20T18:00"),
        end: new Date("2024-05-20T21:50"),
        assignee: 'Amanda Johnson',
        priority: 'medium',
        allDay: false,
        repeat: false,
        resourceId: 3,
    },
]

export default {
    title: 'Example/Agenda',
    component: Agenda,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Description />

                    <Canvas of={Functions} />
                    <ArgTypes />
                </>
            )
        }
    },
    argTypes: {
        onEventClick: {
            type: 'function',
            description: 'Срабатывает при клике по ивенту',
            control: '-',
        },
        onRangeChange: {
            type: 'function',
            description: 'Срабатывает при изменении диапазона дат',
            control: '-',
        },
        onTodayClick: {
            type: 'function',
            description: 'Срабатывает при переводе календаря на текущую дату',
            control: '-',
        },
        onEventUpdate: {
            type: 'function',
            description: 'Срабатывает при обновлении ивента',
            control: '-',
        },
    }
}

export const Basic = {
    args: {
        events: agendaEvents,
    }
}

export const Functions = {
    args: {
        events: agendaEvents,
        onEventClick: fn(),
        onRangeChange: fn(),
        onTodayClick: fn(),
        onEventUpdate: fn(),
    }
}
