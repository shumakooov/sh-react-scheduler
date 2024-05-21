import React from "react";
import styles from './modal.module.css'
import moment from "moment";

const priorities = [
    { high: 'Высокий' },
    { medium: 'Средний' },
    { low: 'Низкий' },
]

const repeatItems = [
    // { 'Hourly': 'hour(s)' },
    { 'Daily': 'day(s)' },
    { 'Weekly': 'week(s)' },
    { 'Monthly': 'month(s)' },
    // { 'Yearly': 'year(s)' },
]

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export const Modal = ({ cancelButtonHandler, isShowModal, event, changeEventHandler, updateEventHandler, modalView, resources }) => {
    return (
        <>
            {
                isShowModal ? (
                    <div className={styles.modalPositionWrapper} onClick={() => cancelButtonHandler()}>
                        <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
                            <div className={styles.infoWrapper}>
                                <div className={styles.titleWrapper}>
                                    <div className={styles.text}>Title</div>
                                    <input className={styles.titleInput} placeholder="Title" value={event.title} onChange={(e) => { changeEventHandler(e.target.value, 'title') }} />
                                </div>
                                <div className={styles.container}>
                                    <div>
                                        <div className={styles.text}>Start Date</div>
                                        <input type="datetime-local" defaultValue={moment(event.start).format('YYYY-MM-DDTHH:mm')} onChange={(e) => { changeEventHandler(e.target.value, 'start') }} />
                                    </div>
                                    <div>
                                        <div className={styles.text}>End Date</div>
                                        <input type="datetime-local" defaultValue={moment(event.end).format('YYYY-MM-DDTHH:mm')} onChange={(e) => { changeEventHandler(e.target.value, 'end') }} />
                                    </div>
                                </div>
                                <div className={styles.container}>
                                    <div className={styles.checkboxItem}>
                                        <input type="checkbox" defaultChecked={event.allDay} onChange={(e) => { changeEventHandler(e.target.checked, 'allDay') }} />
                                        <div className={styles.text}>All day</div>
                                    </div>
                                    {/* <div className={styles.checkboxItem}>
                                        <input type="checkbox" defaultChecked={event.repeat} onChange={(e) => { changeEventHandler(e.target.checked, 'repeat') }} />
                                        <div className={styles.text}>Repeat</div>
                                    </div> */}
                                </div>
                                <div className={styles.container}>
                                    <div>
                                        <div className={styles.text}>Assignee</div>
                                        <input placeholder="Assignee" value={event.assignee} onChange={(e) => { changeEventHandler(e.target.value, 'assignee') }} />
                                    </div>
                                    {
                                        modalView === 'agenda' ? (
                                            <div>
                                                <div className={styles.text}>Priority</div>
                                                <select
                                                    className={styles.select}
                                                    onChange={(e) => { changeEventHandler(e.target.value, 'priority') }}
                                                    value={event.priority}
                                                >
                                                    {
                                                        priorities.map((priority, i) => (
                                                            <option
                                                                className={styles.selectOption}
                                                                value={Object.keys(priority)}
                                                            >
                                                                {Object.values(priority)}
                                                            </option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        modalView === 'Timeline' ? (
                                            <div>
                                                <div className={styles.text}>Resource</div>
                                                <select
                                                    className={styles.select}
                                                    onChange={(e) => { changeEventHandler(resources.find((resource) => resource.resource == e.target.value).id, 'resourceId') }}
                                                    defaultValue={resources.find((resource) => resource.id == event.resourceId).resource}
                                                >
                                                    {
                                                        resources.map((resource, i) => (
                                                            <option
                                                                className={styles.selectOption}
                                                                value={resource.resource}
                                                            >
                                                                {resource.resource}
                                                            </option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className={styles.buttonsWrapper}>
                                    <button className={styles.button} onClick={() => updateEventHandler()}>DONE</button>
                                    <button className={styles.button} onClick={() => cancelButtonHandler()}>CANCEL</button>
                                </div>
                            </div>
                            {/* {
                                event.repeat ? (
                                    <div className={styles.repeatWrapper}>
                                        <div>
                                            <div className={`${styles.text} ${styles.textHeader}`}>Repeat</div>
                                            <div className={styles.containerRepeat}>
                                                <select
                                                    className={styles.select}
                                                    onChange={(e) => { changeEventHandler(e.target.value, 'repeat') }}
                                                    defaultValue={'Daily'}
                                                >
                                                    {
                                                        repeatItems.map((repeatItem) => (
                                                            <option
                                                                className={styles.selectOption}
                                                                value={Object.keys(repeatItem)}
                                                            >
                                                                {Object.keys(repeatItem)}
                                                            </option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <div className={`${styles.text} ${styles.textHeader}`}>Repeat every</div>
                                            <div className={styles.containerRepeat}>
                                                <input type="number" className={styles.inputNumber} onChange={(e) => { changeEventHandler(e.target.value, 'repeatEvery') }} />
                                                <div className={styles.text}>
                                                    {
                                                        Object.values(repeatItems.find(item => { Object.keys(item) === event.repeat }))
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className={`${styles.text} ${styles.textHeader}`}>Repeat on</div>
                                            <div className={styles.containerRepeat}>
                                                <select
                                                    className={styles.select}
                                                    multiple
                                                    onChange={(e) => { changeEventHandler(e.target.value, 'repeatOn') }}
                                                >
                                                    {
                                                        daysOfWeek.map((day) => (
                                                            <option
                                                                className={styles.selectOption}
                                                                value={day}
                                                            >
                                                                {day}
                                                            </option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <div className={`${styles.text} ${styles.textHeader}`}>End repeat</div>
                                            <div className={`${styles.containerRepeat} ${styles.containerRadio}`}>
                                                <input type="radio" />
                                                <div className={styles.text}>Never</div>
                                            </div>
                                            <div className={`${styles.containerRepeat} ${styles.containerRadio}`}>
                                                <input type="radio" />
                                                <div className={styles.text}>On</div>
                                                <input type="date" />
                                            </div>
                                            <div className={`${styles.containerRepeat} ${styles.containerRadio}`}>
                                                <input type="radio" />
                                                <div className={styles.text}>After</div>
                                                <input type="number" className={styles.inputNumber} />
                                                <div className={styles.text}>occurrence(s)</div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            } */}
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}