import './App.css';
import Scheduler from './components/react-scheduler';

const myEvents = [
  {
    title: "Поужинать в Вилка Ложка",
    start: new Date("2024-03-19T19:00"),
    end: new Date("2024-03-19T21:00"),
    allDay: false,
  },
  {
    title: "Встретиться с друзьями",
    start: new Date("2024-03-19T21:00"),
    end: new Date("2024-03-19T23:00"),
    allDay: false,
  },
  {
    title: "Лечь спать",
    start: new Date("2024-03-19T23:00"),
    end: new Date("2024-03-19T23:30"),
    allDay: false,
  },
  {
    title: "Купить овощей",
    start: new Date("2024-03-20T14:00"),
    end: new Date("2024-03-20T15:00"),
  },
  {
    title: "Сходить в филармонию",
    start: new Date("2024-03-21T20:00"),
    end: new Date("2024-03-21T22:30"),
  },
  {
    title: "Пить много воды (целый день)",
    start: new Date("2024-03-26"),
    end: new Date("2024-03-26T21:00"),
    allDay: true,
  },
  {
    title: "Убраться в комнате",
    start: new Date("2024-03-26T17:00"),
    end: new Date("2024-03-26T18:00"),
  },
  {
    title: "Приготовить ужин",
    start: new Date("2024-03-26T18:00"),
    end: new Date("2024-03-26T19:00"),
  },
]

function App() {
  return (
    <div className="App">
      <Scheduler events={myEvents} />
    </div>
  );
}

export default App;
