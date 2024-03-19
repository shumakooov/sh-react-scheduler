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
    title: "Пить много воды",
    start: new Date("2024-03-22"),
    end: new Date("2024-03-22T21:00"),
    allDay: true,
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
