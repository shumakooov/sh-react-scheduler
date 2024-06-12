import moment from "moment";
import Agenda from "../components/Agenda";
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
        resourceId: 2,
    },
    {
        id: 41,
        title: "Кадровая встреча",
        start: new Date(moment().add(2, 'day')).setHours(14, 0),
        end: new Date(moment().add(2, 'day')).setHours(16, 0),
        assignee: 'Samantha Bright',
        priority: 'high',
        allDay: false,
        resourceId: 2,
    },
    {
        id: 42,
        title: "Технический обзор",
        start: new Date(moment().add(1, 'day')).setHours(8, 0),
        end: new Date(moment().add(1, 'day')).setHours(8, 40),
        assignee: 'Todd Hoffman',
        priority: 'low',
        allDay: false,
        resourceId: 1,
    },
    {
        id: 43,
        title: "Финансовый анализ",
        start: new Date().setHours(12, 0),
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
        resourceId: 1,
    },
    {
        id: 6,
        title: "Креативный брифинг",
        start: new Date().setHours(17, 0),
        end: new Date().setHours(17, 30),
        assignee: 'John Heart',
        priority: 'high',
        allDay: true,
        resourceId: 1,
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

                    <Canvas />
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
