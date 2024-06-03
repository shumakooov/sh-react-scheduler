"use strict";(self.webpackChunksh_react_scheduler=self.webpackChunksh_react_scheduler||[]).push([[626],{"./src/stories/Timeline.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,FullTimeScale:()=>FullTimeScale,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Timeline_stories});var react=__webpack_require__("./node_modules/react/index.js");const index_module_wrapper="Timeline_wrapper__7zADN",index_module_dayWrapper="Timeline_dayWrapper__Fl-qb",header_module_wrapper="header_wrapper__sbZ-L",header_module_container="header_container__IzOU2",header_module_btnChangeDay="header_btnChangeDay__U+VCy",header_module_btnChangeDayToday="header_btnChangeDayToday__T2MA+",header_module_agendaTextWrapper="header_agendaTextWrapper__W75Su",header_module_agendaText="header_agendaText__2avvg",header_module_currentDate="header_currentDate__-47vQ",header_module_currentDateText="header_currentDateText__sHYF6";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Header=_ref=>{let{startingPointTime,prevHandler,todayHandler,nextHandler}=_ref;return(0,jsx_runtime.jsx)("div",{className:header_module_wrapper,children:(0,jsx_runtime.jsxs)("div",{className:header_module_container,children:[(0,jsx_runtime.jsx)("div",{className:header_module_currentDate,children:(0,jsx_runtime.jsx)("div",{className:header_module_currentDateText,children:startingPointTime.clone().format("D MMMM YYYY")})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{className:header_module_btnChangeDay,onClick:()=>prevHandler(),children:" < "}),(0,jsx_runtime.jsx)("button",{className:"".concat(header_module_btnChangeDay," ").concat(header_module_btnChangeDayToday),onClick:()=>todayHandler(),children:"Current day"}),(0,jsx_runtime.jsx)("button",{className:header_module_btnChangeDay,onClick:()=>nextHandler(),children:" > "})]}),(0,jsx_runtime.jsx)("div",{className:header_module_agendaTextWrapper,children:(0,jsx_runtime.jsx)("div",{className:header_module_agendaText,children:"Timeline"})})]})})};Header.__docgenInfo={description:"",methods:[],displayName:"Header"};var moment=__webpack_require__("./node_modules/moment/moment.js"),moment_default=__webpack_require__.n(moment);const day_module_wrapper="day_wrapper__otoEQ",day_module_eventsListWrapper="day_eventsListWrapper__1lz4+",day_module_timelineWrapper="day_timelineWrapper__TJXf9",day_module_weekCellsWrapper="day_weekCellsWrapper__WAyH9",day_module_weekDayColumn="day_weekDayColumn__wEkyj",time_cells_module_dayCellWrapper="time-cells_dayCellWrapper__eAH-g",time_cells_module_timeCanva="time-cells_timeCanva__o5RD5",time_cells_module_eventsCanvaWrapper="time-cells_eventsCanvaWrapper__psOdf",time_cells_module_eventsCanva="time-cells_eventsCanva__Y4rig",time_cells_module_timeCellWrapper="time-cells_timeCellWrapper__A+96x",time_cells_module_resourceWrapper="time-cells_resourceWrapper__f8-sg",time_cells_module_eventTitle="time-cells_eventTitle__4waiJ",time_cells_module_eventTime="time-cells_eventTime__VeTyt",colors={0:"#8E7AB5",1:"#5C8984",2:"#867070",3:"#96B6C5",4:"#A87676",5:"#3EB489",6:"#ACB78E",7:"#65647C",8:"#96B6C5",9:"#A79277",10:"#B0C5A4",11:"#5F9EA0"},TimeCells=_ref=>{let{countOfHours,resources,updateEventByDragAndDrop,currentDayEvents,fullTimeScale,openModal,openFormHandler,startingPointTime,setDroppedHour,HEIGHT_DAY_CELL,onEventClick,onResourceClick}=_ref;const hoursScale=fullTimeScale?[...Array(countOfHours).keys()]:[...Array(countOfHours).keys()].slice(6,21),onDragOverHandler=e=>{console.log(e),e.preventDefault()};return(0,jsx_runtime.jsxs)("div",{className:time_cells_module_dayCellWrapper,children:[(0,jsx_runtime.jsxs)("div",{className:time_cells_module_timeCanva,children:[(0,jsx_runtime.jsx)("div",{className:time_cells_module_timeCellWrapper}),hoursScale.map((i=>(0,jsx_runtime.jsxs)("div",{className:time_cells_module_timeCellWrapper,style:{height:HEIGHT_DAY_CELL},onDoubleClick:()=>openFormHandler("Create",null,startingPointTime,i),children:["".concat(i).padStart(2,"0"),":00"]})))]}),(0,jsx_runtime.jsx)("div",{className:time_cells_module_eventsCanvaWrapper,children:(0,jsx_runtime.jsx)("div",{children:resources.map(((resource,colorIndex)=>(0,jsx_runtime.jsxs)("div",{className:time_cells_module_eventsCanva,children:[(0,jsx_runtime.jsx)("div",{className:time_cells_module_resourceWrapper,onClick:()=>onResourceClick&&onResourceClick(resource),children:(0,jsx_runtime.jsx)("div",{children:resource.resource})}),hoursScale.map((i=>(0,jsx_runtime.jsx)("div",{className:time_cells_module_resourceWrapper,onDrop:e=>((e,i)=>{console.log(i),e.preventDefault(),setDroppedHour(i)})(e,i),onDragOver:onDragOverHandler}))),null==currentDayEvents?void 0:currentDayEvents.filter((event=>null==event.resourceId||(null==event?void 0:event.resourceId)===(null==resource?void 0:resource.id))).map((event=>{let EVENT_LEFT,EVENT_WIDTH,startTime=moment_default()(event.start),endTime=moment_default()(event.end),duration=moment_default().duration(endTime.diff(startTime));const lastColorId=Object.keys(colors).at(-1);return EVENT_LEFT=fullTimeScale?100*startTime.hours()+100/60*startTime.minutes()+100:100*startTime.clone().subtract(6,"hours").hours()+100/60*startTime.minutes()+100,EVENT_WIDTH=fullTimeScale||endTime.isBefore(endTime.clone().hours(21).minutes(0),"hour")?100*duration.hours()+100/60*duration.minutes():100*moment_default().duration(endTime.clone().hours(21).minutes(0).diff(startTime)).hours(),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("div",{style:{left:EVENT_LEFT,width:EVENT_WIDTH-1,height:70,backgroundColor:colors[colorIndex]?colors[colorIndex]:colors[colorIndex-lastColorId-1]},className:time_cells_module_eventTitle,onDoubleClick:()=>openModal(event),name:"event",draggable:!0,onDragEnd:e=>((e,event)=>{updateEventByDragAndDrop(event)})(0,event),onClick:()=>onEventClick&&onEventClick(event),children:[event.title,(0,jsx_runtime.jsxs)("div",{className:time_cells_module_eventTime,children:[moment_default()(event.start).format("HH:mm")," - ",moment_default()(event.end).format("HH:mm")]})]})})}))]})))})})]})};TimeCells.__docgenInfo={description:"",methods:[],displayName:"TimeCells"};var helpers=__webpack_require__("./src/utils/helpers.js");const Day=_ref=>{let{events,resources,startingPointTime,fullTimeScale,updateEventByDragAndDrop,setDroppedHour,openModal,onEventClick,onResourceClick}=_ref;const currentDayEvents=null==events?void 0:events.filter((event=>(0,helpers.rB)(event,startingPointTime)));return(0,jsx_runtime.jsx)("div",{className:day_module_wrapper,children:(0,jsx_runtime.jsx)("div",{className:day_module_eventsListWrapper,children:(0,jsx_runtime.jsx)("div",{className:day_module_timelineWrapper,children:(0,jsx_runtime.jsx)("div",{className:day_module_weekCellsWrapper,children:(0,jsx_runtime.jsx)("div",{className:day_module_weekDayColumn,children:(0,jsx_runtime.jsx)(TimeCells,{countOfHours:24,resources,updateEventByDragAndDrop,currentDayEvents,fullTimeScale,openModal,setDroppedHour,onEventClick,onResourceClick})})})})})})};Day.__docgenInfo={description:"",methods:[],displayName:"Day"};var modal=__webpack_require__("./src/components/Agenda/Modal/modal.js");function Timeline(_ref){let{events,resources,fullTimeScale,onEventClick,onResourceClick,onEventDrag,onRangeChange,onTodayClick,onEventUpdate,onEventCreate,onEventDelete}=_ref;const[startingPointTime,setStartingPointTime]=(0,react.useState)(moment_default()()),[droppedHour,setDroppedHour]=(0,react.useState)(null),[isShowModal,setShowModal]=(0,react.useState)(!1),[event,setEvent]=(0,react.useState)(null);return(0,jsx_runtime.jsxs)("div",{className:index_module_wrapper,children:[(0,jsx_runtime.jsx)(Header,{startingPointTime,prevHandler:()=>{setStartingPointTime((prev=>prev.clone().subtract(1,"day"))),onRangeChange&&onRangeChange(startingPointTime.clone().subtract(1,"day").startOf("day").format(),startingPointTime.clone().subtract(1,"day").endOf("day").format())},todayHandler:()=>{setStartingPointTime(moment_default()()),onTodayClick&&onTodayClick(moment_default()().format())},nextHandler:()=>{setStartingPointTime((prev=>prev.clone().add(1,"day"))),onRangeChange&&onRangeChange(startingPointTime.clone().add(1,"day").startOf("day").format(),startingPointTime.clone().add(1,"day").endOf("day").format())}}),(0,jsx_runtime.jsx)("div",{className:index_module_dayWrapper,children:(0,jsx_runtime.jsx)(Day,{events,resources,startingPointTime,fullTimeScale,updateEventByDragAndDrop:eventToUpdate=>{let oldEndTime=moment_default()(eventToUpdate.end),oldStartTime=moment_default()(eventToUpdate.start),duration=moment_default().duration(oldEndTime.diff(oldStartTime)),newStart=oldStartTime.hours(droppedHour).minutes(0),newEnd=newStart.clone().add(duration),globalEventForUpdate=events.find((eventGlobal=>eventGlobal.id===eventToUpdate.id));globalEventForUpdate.start=newStart,globalEventForUpdate.end=newEnd,onEventDrag&&onEventDrag(eventToUpdate),setDroppedHour(null)},setDroppedHour,openModal:event=>{setShowModal(!0),setEvent(event)},onEventClick,onResourceClick})}),(0,jsx_runtime.jsx)(modal.a,{cancelButtonHandler:()=>{setShowModal(!1),setEvent(null)},isShowModal,event,changeEventHandler:(value,field)=>{setEvent((prevState=>({...prevState,[field]:value})))},updateEventHandler:()=>{let globalEventForUpdate=events.find((eventGlobal=>eventGlobal.id===event.id));globalEventForUpdate.title=event.title,globalEventForUpdate.start=event.start,globalEventForUpdate.end=event.end,globalEventForUpdate.allDay=event.allDay,globalEventForUpdate.assignee=event.assignee,globalEventForUpdate.resourceId=event.resourceId,onEventUpdate&&onEventUpdate(event),setShowModal(!1),setEvent(null)},modalView:"Timeline",resources})]})}const components_Timeline=Timeline;Timeline.__docgenInfo={description:"",methods:[],displayName:"Timeline"};const agendaEvents=[{id:4,title:"Сделать уборку",start:new Date("2024-04-17T14:00"),end:new Date("2024-04-17T15:30"),assignee:"Samantha Bright",priority:"medium",allDay:!1,repeat:!0,resourceId:2},{id:41,title:"Купить овощей",start:new Date("2024-04-17T14:00"),end:new Date("2024-04-17T16:00"),assignee:"Samantha Bright",priority:"high",allDay:!1,repeat:!0,resourceId:2},{id:42,title:"Проверить почту",start:new Date("2024-04-16T08:00"),end:new Date("2024-04-16T08:40"),assignee:"Todd Hoffman",priority:"low",allDay:!1,repeat:!1,resourceId:1},{id:43,title:"Согласовать дизайн",start:new Date("2024-04-16T12:00"),end:new Date("2024-04-16T13:00"),assignee:"Todd Hoffman",priority:"high",allDay:!0,repeat:!1,resourceId:2},{id:5,title:"Сходить в филармонию",start:new Date("2024-04-21T20:00"),end:new Date("2024-04-21T22:30"),assignee:"John Heart",priority:"medium",allDay:!1,repeat:!1,resourceId:1},{id:6,title:"Пить много воды (целый день)",start:new Date("2024-04-20T17:00"),end:new Date("2024-04-20T17:30"),assignee:"John Heart",priority:"high",allDay:!0,repeat:!1,resourceId:1},{id:7,title:"Убраться в комнате",start:new Date("2024-04-20T17:00"),end:new Date("2024-04-20T18:00"),assignee:"Todd Hoffman",priority:"low",allDay:!1,repeat:!1,resourceId:2},{id:8,title:"Приготовить ужин",start:new Date("2024-04-20T18:00"),end:new Date("2024-04-20T21:50"),assignee:"Sandra Johnson",priority:"medium",allDay:!1,repeat:!1,resourceId:3}],resources=[{id:1,resource:"Окно 1"},{id:2,resource:"Окно 2"},{id:3,resource:"Окно 3"},{id:4,resource:"Окно 4"},{id:5,resource:"Окно 5"}],Timeline_stories={title:"Example/Timeline",component:components_Timeline},Basic={render:args=>(0,jsx_runtime.jsx)(components_Timeline,{...args}),args:{events:agendaEvents,resources}},FullTimeScale={render:args=>(0,jsx_runtime.jsx)(components_Timeline,{...args}),args:{fullTimeScale:!0,events:agendaEvents,resources}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  render: args => <Timeline {...args} />,\n  args: {\n    events: agendaEvents,\n    resources: resources\n  }\n}",...Basic.parameters?.docs?.source}}},FullTimeScale.parameters={...FullTimeScale.parameters,docs:{...FullTimeScale.parameters?.docs,source:{originalSource:"{\n  render: args => <Timeline {...args} />,\n  args: {\n    fullTimeScale: true,\n    events: agendaEvents,\n    resources: resources\n  }\n}",...FullTimeScale.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","FullTimeScale"]},"./src/components/Agenda/Modal/modal.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Modal});__webpack_require__("./node_modules/react/index.js");const modal_module={modalPositionWrapper:"modal_modalPositionWrapper__7zQ0n",modalWrapper:"modal_modalWrapper__bww-K",infoWrapper:"modal_infoWrapper__FvIdR",repeatWrapper:"modal_repeatWrapper__lgjDl",titleWrapper:"modal_titleWrapper__kDsup",titleInput:"modal_titleInput__osXwF",container:"modal_container__wP0zm",containerRepeat:"modal_containerRepeat__2J+N0",containerRadio:"modal_containerRadio__DJchc",checkboxItem:"modal_checkboxItem__7-UN1",buttonsWrapper:"modal_buttonsWrapper__rh5Tj",button:"modal_button__aeZgl",selectOption:"modal_selectOption__lHdEl",text:"modal_text__IJnLn",textHeader:"modal_textHeader__ILmpc",inputNumber:"modal_inputNumber__9NEi6"};var moment=__webpack_require__("./node_modules/moment/moment.js"),moment_default=__webpack_require__.n(moment),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const priorities=[{high:"Высокий"},{medium:"Средний"},{low:"Низкий"}],Modal=_ref=>{let{cancelButtonHandler,isShowModal,event,changeEventHandler,updateEventHandler,modalView,resources}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:isShowModal?(0,jsx_runtime.jsx)("div",{className:modal_module.modalPositionWrapper,onClick:()=>cancelButtonHandler(),children:(0,jsx_runtime.jsx)("div",{className:modal_module.modalWrapper,onClick:e=>e.stopPropagation(),children:(0,jsx_runtime.jsxs)("div",{className:modal_module.infoWrapper,children:[(0,jsx_runtime.jsxs)("div",{className:modal_module.titleWrapper,children:[(0,jsx_runtime.jsx)("div",{className:modal_module.text,children:"Title"}),(0,jsx_runtime.jsx)("input",{className:modal_module.titleInput,placeholder:"Title",value:event.title,onChange:e=>{changeEventHandler(e.target.value,"title")}})]}),(0,jsx_runtime.jsxs)("div",{className:modal_module.container,children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:modal_module.text,children:"Start Date"}),(0,jsx_runtime.jsx)("input",{type:"datetime-local",defaultValue:moment_default()(event.start).format("YYYY-MM-DDTHH:mm"),onChange:e=>{changeEventHandler(e.target.value,"start")}})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:modal_module.text,children:"End Date"}),(0,jsx_runtime.jsx)("input",{type:"datetime-local",defaultValue:moment_default()(event.end).format("YYYY-MM-DDTHH:mm"),onChange:e=>{changeEventHandler(e.target.value,"end")}})]})]}),(0,jsx_runtime.jsx)("div",{className:modal_module.container,children:(0,jsx_runtime.jsxs)("div",{className:modal_module.checkboxItem,children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",defaultChecked:event.allDay,onChange:e=>{changeEventHandler(e.target.checked,"allDay")}}),(0,jsx_runtime.jsx)("div",{className:modal_module.text,children:"All day"})]})}),(0,jsx_runtime.jsxs)("div",{className:modal_module.container,children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:modal_module.text,children:"Assignee"}),(0,jsx_runtime.jsx)("input",{placeholder:"Assignee",value:event.assignee,onChange:e=>{changeEventHandler(e.target.value,"assignee")}})]}),"agenda"===modalView?(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:modal_module.text,children:"Priority"}),(0,jsx_runtime.jsx)("select",{className:modal_module.select,onChange:e=>{changeEventHandler(e.target.value,"priority")},value:event.priority,children:priorities.map(((priority,i)=>(0,jsx_runtime.jsx)("option",{className:modal_module.selectOption,value:Object.keys(priority),children:Object.values(priority)})))})]}):null,"Timeline"===modalView?(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:modal_module.text,children:"Resource"}),(0,jsx_runtime.jsx)("select",{className:modal_module.select,onChange:e=>{changeEventHandler(resources.find((resource=>resource.resource==e.target.value)).id,"resourceId")},defaultValue:resources.find((resource=>resource.id==event.resourceId)).resource,children:resources.map(((resource,i)=>(0,jsx_runtime.jsx)("option",{className:modal_module.selectOption,value:resource.resource,children:resource.resource})))})]}):null]}),(0,jsx_runtime.jsxs)("div",{className:modal_module.buttonsWrapper,children:[(0,jsx_runtime.jsx)("button",{className:modal_module.button,onClick:()=>updateEventHandler(),children:"DONE"}),(0,jsx_runtime.jsx)("button",{className:modal_module.button,onClick:()=>cancelButtonHandler(),children:"CANCEL"})]})]})})}):null})};Modal.__docgenInfo={description:"",methods:[],displayName:"Modal"}},"./src/utils/helpers.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fw:()=>isWeekContainEvent,Ui:()=>isSelectedMonth,YR:()=>isDayContainCurrentTimestamp,qm:()=>isCurrentDay,rB:()=>isDayContainEvent});var moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/moment/moment.js"),moment__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);const isCurrentDay=day=>moment__WEBPACK_IMPORTED_MODULE_0___default()().isSame(day,"day"),isSelectedMonth=(day,startingPointTime)=>startingPointTime.isSame(day,"month"),isDayContainCurrentTimestamp=(a,b)=>a.format("X")>=b.startOf("day").format("X")&&a.format("X")<b.clone().endOf("day").format("X"),isDayContainEvent=(event,dayItem)=>moment__WEBPACK_IMPORTED_MODULE_0___default()(event.start).format("X")>=moment__WEBPACK_IMPORTED_MODULE_0___default()(dayItem).startOf("day").format("X")&&moment__WEBPACK_IMPORTED_MODULE_0___default()(event.end).format("X")<moment__WEBPACK_IMPORTED_MODULE_0___default()(dayItem).clone().endOf("day").format("X"),isWeekContainEvent=(event,dayItem)=>moment__WEBPACK_IMPORTED_MODULE_0___default()(event.start).format("X")>=moment__WEBPACK_IMPORTED_MODULE_0___default()(dayItem).clone().startOf("week").add(1,"day").format("X")&&moment__WEBPACK_IMPORTED_MODULE_0___default()(event.end).format("X")<moment__WEBPACK_IMPORTED_MODULE_0___default()(dayItem).clone().endOf("week").add(1,"day").format("X")}}]);