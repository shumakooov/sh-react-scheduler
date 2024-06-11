# shum-react-scheduler

Scheduler, Timeline and Agenda components created for React.

[Online demo](https://shumakooov.github.io/sh-react-scheduler/?path=/docs/example-agenda--docs) • [npm](https://www.npmjs.com/package/shum-react-scheduler)

## Installation
```bash
# yarn
yarn add shum-react-scheduler
# npm
npm i shum-react-scheduler
```

## Example usage
```ts
import { Agenda, Scheduler, Timeline } from 'shum-react-scheduler';

function App() {
  return (
  <Scheduler
        events={myEvents}
        resources={myResources}
        />
  )
}

const myEvents = [
    {
        id: 1,
        title: "Task 1",
        start: new Date("2024-05-20T09:00"),
        end: new Date("2024-05-20T10:30"),
        resourceId: 1,
      },
      {
        id: 2,
        title: "Task 2",
        start: new Date("2024-05-20T14:00"),
        end: new Date("2024-05-20T16:00"),
        resourceId: 2,
      },
]
const myResources = [
  {
    id: 1,
    resource: 'Resource 1'
  },
  {
    id: 2,
    resource: 'Resource 2'
  },
]
```

### API
##### Properties of all components
| Property Name     | Type       | Arguments                         | Description                                                               | Component                                              |
| ----------------- | ---------- | --------------------------------- | --------------------------------------------------------------------------| ------------------------------------------------------ |
| onEventClick      | `function` | clicked event                     | detects event click                                                       | All                                                    |
| onResourceClick   | `function` | clicked resource                  | detects resource click                                                    | Scheduler, Timeline                                    |
| onEventDrag       | `function` | dragged event                     | runs when the event has been dragged                                      | Scheduler, Timeline                                    |
| onRangeChange     | `function` | startTime, endTime                | runs when the display date has been changed                               | All                                                    |
| onViewChange      | `function` | view                              | runs when the display mode was changed                                    | Scheduler                                              |
| onTodayClick      | `function` | todayTime                         | detects a click on the button to transfer the date to the current one     | All                                                    |
| onEventUpdate     | `function` | newEvent                          | detects a change in the event                                             | All                                                    |
| onEventCreate     | `function` | createdEvent                      | detects the creation of a new event                                       | Scheduler, Timeline                                    |
| onEventDelete     | `function` | deletedEvent                      | detects event deletion                                                    | Scheduler, Timeline                                    |
| cellsHeight       | `int`      | -                                 | changes the height of the cells                                           | Scheduler                                              |
| fullTimeScale     | `boolean`  | -                                 | if true, the timeline is shortened and events are displayed in the time range from 6 a.m. to 8p.m.| Timeline                       |

#### Scheduler Data
| Property Name | Type | Description |
| -------- | --------------------- | -------------------------------- |
| id | `int` | unique row id |
| title | `string` | title that will be displayed on event tile |
| start | `Date` | date for calculating start position for resource |
| end | `Date` | date for calculating end position for resource |
| allDay | `boolean` | determines whether the event lasts all day. It will be displayed in a separate line |
| resourceId | `int` | if resources are transferred to the component, this item determines whether the event belongs to the resource |

#### Agenda Data
| Property Name | Type | Description |
| -------- | --------------------- | -------------------------------- |
| id | `int` | unique row id |
| title | `string` | title that will be displayed on event tile |
| start | `Date` | date for calculating start position for resource |
| end | `Date` | date for calculating end position for resource |
| assignee | `string` | the owner of the task that will be displayed on event tile |
| priority | `string` | defines the priority of the task. `low`, `medium` or `high` |
| allDay | `boolean` | determines whether the event lasts all day |

#### Timeline Data
| Property Name | Type | Description |
| -------- | --------------------- | -------------------------------- |
| id | `int` | unique row id |
| title | `string` | title that will be displayed on event tile |
| start | `Date` | date for calculating start position for resource |
| end | `Date` | date for calculating end position for resource |
| allDay | `boolean` | determines whether the event lasts all day |
| assignee | `string` | the owner of the task |
| resourceId | `int` | if resources are transferred to the component, this item determines whether the event belongs to the resource |

#### Resource Item
| Property Name | Type | Description |
| -------- | --------------------- | -------------------------------- |
| id | `int` | unique row id |
| resource | `string` | title of resource |

### How to contribute

- **Reporting Issues**: If you come across any bugs, glitches, or have any suggestions for improvements, please [open an issue](https://github.com/shumakooov/sh-react-scheduler/issues) on our GitHub repository. Provide as much detail as possible, including steps to reproduce the issue.
- **Suggesting Enhancements**: If you have ideas for new features or enhancements, we would love to hear them! You can [open an issue](https://github.com/shumakooov/sh-react-scheduler/issues) on our GitHub repository and clearly describe your suggestion.
- **Submitting Pull Requests**: If you have developed a fix or a new feature that you would like to contribute, you can submit a pull request. Here's a quick overview of the process:
  - Clone the repository and create your own branch: `git checkout -b feat/your-branch-name`.
  - Implement your changes.
  - Test your changes to ensure they work as expected.
  - Commit your changes and push to your forked repository.
  - Open a pull request against our main repository's `main` branch.
    - add at least 1 reviewer
    - link correct issue
