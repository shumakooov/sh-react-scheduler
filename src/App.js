import './App.css';
import Agenda from './components/Agenda';
import Timeline from './components/Timeline';
import Scheduler from './components/Scheduler';

const myEvents = [
  {
    id: 1,
    title: "Поужинать в Вилка Ложка",
    start: new Date("2024-05-07T19:30"),
    end: new Date("2024-05-07T21:00"),
    allDay: false,
  },
  {
    id: 2,
    title: "Встретиться с друзьями",
    start: new Date("2024-05-07T21:01"),
    end: new Date("2024-05-07T23:00"),
    allDay: false,
  },
  {
    id: 3,
    title: "Лечь спать",
    start: new Date("2024-05-07T23:00"),
    end: new Date("2024-05-07T23:59"),
    allDay: false,
  },
  {
    id: 13,
    title: "Сделать уроки",
    start: new Date("2024-05-07T14:00"),
    end: new Date("2024-05-07T16:30"),
    allDay: false,
  },
  {
    id: 14,
    title: "Пить воду",
    start: new Date("2024-05-07T14:00"),
    end: new Date("2024-05-07T16:30"),
    allDay: false,
  },
  {
    id: 4,
    title: "Купить овощей",
    start: new Date("2024-05-20T14:00"),
    end: new Date("2024-05-20T15:00"),
  },
  {
    id: 5,
    title: "Сходить в филармонию",
    start: new Date("2024-05-21T20:00"),
    end: new Date("2024-05-21T22:30"),
  },
  {
    id: 6,
    title: "Пить много воды (целый день)",
    start: new Date("2024-05-26T17:00"),
    end: new Date("2024-05-26T21:00"),
    allDay: true,
  },
  {
    id: 7,
    title: "Убраться в комнате",
    start: new Date("2024-05-26T17:00"),
    end: new Date("2024-05-26T18:00"),
  },
  {
    id: 8,
    title: "Приготовить ужин",
    start: new Date("2024-05-26T18:00"),
    end: new Date("2024-05-26T19:00"),
  },
]


const agendaEvents = [
  {
    id: 4,
    title: "Сделать уборку",
    start: new Date("2024-05-20T14:00"),
    end: new Date("2024-05-20T15:30"),
    assignee: 'Samantha Bright',
    priority: 'medium',
    allDay: false,
    repeat: true,
    resourceId: 5,
  },
  {
    id: 41,
    title: "Купить овощей",
    start: new Date("2024-05-20T14:00"),
    end: new Date("2024-05-20T16:00"),
    assignee: 'Samantha Bright',
    priority: 'high',
    allDay: false,
    repeat: true,
    resourceId: 4,
  },
  {
    id: 42,
    title: "Проверить почту",
    start: new Date("2024-05-20T08:00"),
    end: new Date("2024-05-20T08:40"),
    assignee: 'Todd Hoffman',
    priority: 'low',
    allDay: false,
    repeat: false,
    resourceId: 1,
  },
  {
    id: 43,
    title: "Согласовать дизайн",
    start: new Date("2024-05-20T12:00"),
    end: new Date("2024-05-20T13:00"),
    assignee: 'Todd Hoffman',
    priority: 'high',
    allDay: true,
    repeat: false,
    resourceId: 2,
  },
  {
    id: 5,
    title: "Сходить в филармонию",
    start: new Date("2024-05-20T20:00"),
    end: new Date("2024-05-20T22:30"),
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
    assignee: 'Sandra Johnson',
    priority: 'medium',
    allDay: false,
    repeat: false,
    resourceId: 3,
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

const resourcesMed = [
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
  {
    id: 6,
    resource: 'Кабинет 203'
  },
  {
    id: 7,
    resource: 'Кабинет 222'
  },
  {
    id: 8,
    resource: 'Кабинет 204'
  },
  {
    id: 9,
    resource: 'Кабинет 205'
  },
  {
    id: 10,
    resource: 'Кабинет 212'
  },
]

const resourcesAdress = [
  {
    id: 1,
    resource: 'Ул. Солнечная, 10'
  },
  {
    id: 2,
    resource: 'Проспект Лунный, 5'
  },
  {
    id: 3,
    resource: 'Тротуарная ул., 3,'
  },
  {
    id: 4,
    resource: 'Ул. Лесная, 7'
  },
  {
    id: 5,
    resource: 'Площадь Фантастическая, 8'
  },
]

const resourcesNames = [
  {
    id: 1,
    resource: 'Иванова Ангелина'
  },
  {
    id: 2,
    resource: 'Петров Артемий'
  },
  {
    id: 3,
    resource: 'Сидорова Вероника'
  },
  {
    id: 4,
    resource: 'Кузнецова Дарья'
  },
  {
    id: 5,
    resource: 'Михайлов Арсений'
  },
]

const handleEventClick = (event) => {
  alert('event clicked' + event.title)
}

const handleResourceClick = (resource) => {
  alert('resource clicked' + resource.resource)
}

const handleEventDrag = (event) => {
  alert('event dragged ' + event.title)
}

const handleRangeChange = (startTime, endTime) => {
  alert(startTime + ' ' + endTime)
}

const handleViewChange = (view) => {
  alert('view changed ' + view)
}

const handleTodayClick = (todayTime) => {
  alert('today clicked ' + todayTime)
}

const handleUpdateEvent = (newEvent) => {
  alert('new event title ' + newEvent.title)
}

const handleCreateEvent = (createdEvent) => {
  alert('event created ' + createdEvent.title)
}

const handleDeleteEvent = (deletedEvent) => {
  alert('event deleted ' + deletedEvent.title)
}

function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: 350 }}>
        <Scheduler
          events={myEvents}
        // resources={resourcesAdress}
        // cellsHeight={60}
        // onEventClick={handleEventClick}
        // onResourceClick={handleResourceClick}
        // onEventDrag={handleEventDrag}
        // onRangeChange={handleRangeChange}
        // onViewChange={handleViewChange}
        // onTodayClick={handleTodayClick}
        // onEventUpdate={handleUpdateEvent}
        // onEventCreate={handleCreateEvent}
        // onEventDelete={handleDeleteEvent}
        />
      </div>

      <div style={{ marginBottom: 350 }}>
        <Timeline
          events={agendaEvents}
          resources={resourcesNames}
        // fullTimeScale={true}
        // onEventClick={handleEventClick}
        // onResourceClick={handleResourceClick}
        // onEventDrag={handleEventDrag}
        // onRangeChange={handleRangeChange}
        // onTodayClick={handleTodayClick}
        // onEventUpdate={handleUpdateEvent}
        // onEventCreate={handleCreateEvent}
        // onEventDelete={handleDeleteEvent}
        />
      </div>

      <Agenda
        events={agendaEvents}
      // onEventClick={handleEventClick}
      // onRangeChange={handleRangeChange}
      // onTodayClick={handleTodayClick}
      // onEventUpdate={handleUpdateEvent}
      />
    </div>
  );
}

export default App;
