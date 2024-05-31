"use strict";(self.webpackChunkreact_scheduler=self.webpackChunkreact_scheduler||[]).push([[518],{"./src/stories/Scheduler.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,CustomCellsHeight:()=>CustomCellsHeight,Resources:()=>Resources,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Scheduler_stories});var react=__webpack_require__("./node_modules/react/index.js");const header_module_wrapper="header_wrapper__GuzL9",header_module_container="header_container__6F7Jb",header_module_btnChangeDay="header_btnChangeDay__QPMDW",header_module_btnChangeDayToday="header_btnChangeDayToday__Parqy",header_module_btnSwitchMode="header_btnSwitchMode__UOJVB",header_module_btnSwitchMode_unpressed="header_btnSwitchMode_unpressed__qToo-",header_module_currentDate="header_currentDate__5tTHO",header_module_currentDateText="header_currentDateText__la2rp",views_MONTH="month",views_WEEK="week",views_DAY="day";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Header=_ref=>{let{startingPointTime,prevHandler,todayHandler,nextHandler,setView,view,resources,onViewChange}=_ref;return(0,jsx_runtime.jsx)("div",{className:header_module_wrapper,children:(0,jsx_runtime.jsxs)("div",{className:header_module_container,children:[(0,jsx_runtime.jsx)("div",{className:header_module_currentDate,children:view===views_WEEK?(0,jsx_runtime.jsxs)("div",{className:header_module_currentDateText,children:[startingPointTime.clone().startOf("week").add(1,"day").format("D MMM")," - ",startingPointTime.clone().endOf("week").add(1,"day").format("D MMM YYYY")]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[view===views_DAY?(0,jsx_runtime.jsxs)("div",{className:header_module_currentDateText,children:[startingPointTime.format("D")," "]}):null,(0,jsx_runtime.jsx)("div",{className:header_module_currentDateText,children:startingPointTime.format("MMMM YYYY")})]})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{className:header_module_btnChangeDay,onClick:()=>prevHandler(),children:" < "}),(0,jsx_runtime.jsx)("button",{className:"".concat(header_module_btnChangeDay," ").concat(header_module_btnChangeDayToday),onClick:()=>todayHandler(),children:"Today"}),(0,jsx_runtime.jsx)("button",{className:header_module_btnChangeDay,onClick:()=>nextHandler(),children:" > "})]}),resources?null:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{className:view===views_MONTH?"".concat(header_module_btnSwitchMode," ").concat(header_module_btnSwitchMode_unpressed):header_module_btnSwitchMode,onClick:()=>{setView(views_MONTH),onViewChange&&onViewChange(views_MONTH)},children:"Month"}),(0,jsx_runtime.jsx)("button",{className:view===views_WEEK?"".concat(header_module_btnSwitchMode," ").concat(header_module_btnSwitchMode_unpressed):header_module_btnSwitchMode,onClick:()=>{setView(views_WEEK),onViewChange&&onViewChange(views_WEEK)},children:"Week"}),(0,jsx_runtime.jsx)("button",{className:view===views_DAY?"".concat(header_module_btnSwitchMode," ").concat(header_module_btnSwitchMode_unpressed):header_module_btnSwitchMode,onClick:()=>{setView(views_DAY),onViewChange&&onViewChange(views_DAY)},children:"Day"})]})]})})};Header.__docgenInfo={description:"",methods:[],displayName:"Header"};var moment=__webpack_require__("./node_modules/moment/moment.js"),moment_default=__webpack_require__.n(moment);const index_module_wrapper="Scheduler_wrapper__6VmAo",index_module_monthWrapper="Scheduler_monthWrapper__x2jVR",index_module_modalPositionWrapper="Scheduler_modalPositionWrapper__EfZmA",index_module_modalWrapper="Scheduler_modalWrapper__9I2qE",index_module_modalInputTitle="Scheduler_modalInputTitle__tYN6O",index_module_modalButtonsWrapper="Scheduler_modalButtonsWrapper__xRyPi",index_module_button="Scheduler_button__lZlHe",index_module_removeButton="Scheduler_removeButton__ytbzP",day_module_wrapper="day_wrapper__wd8nI",day_module_eventsListWrapper="day_eventsListWrapper__oPWMW",day_module_timelineWrapper="day_timelineWrapper__NjSnA",day_module_headerWrapper="day_headerWrapper__Y3k0V",day_module_header="day_header__bCHPo",day_module_emptySquareInHeader="day_emptySquareInHeader__TCdIL",day_module_allDayWrapper="day_allDayWrapper__SCGuu",day_module_allDay="day_allDay__1Fbyc",day_module_eventsCanva="day_eventsCanva__0BkpJ",day_module_cellTimeWrapper="day_cellTimeWrapper__AvEac",day_module_allDayText="day_allDayText__bSrJh";var helpers=__webpack_require__("./src/utils/helpers.js");const redLine_module_redLine="redLine_redLine__9YUND",RedLine=startingPointTime=>{const[,setCounter]=(0,react.useState)(0);(0,react.useEffect)((()=>{const timerId=setInterval((()=>{setCounter((prevState=>prevState+1))}),1e3);return()=>clearInterval(timerId)}),[]);return(0,helpers.YR)(moment_default()(),startingPointTime.startingPointTime.startOf("day"))?(0,jsx_runtime.jsx)("div",{className:redLine_module_redLine,style:{top:"".concat((moment_default()().format("X")-startingPointTime.startingPointTime.startOf("day").format("X"))/86400*100,"%")}}):null};RedLine.__docgenInfo={description:"",methods:[],displayName:"RedLine"};const form_module={formWrapper:"form_formWrapper__M+ehK",inputWrapper:"form_inputWrapper__6hd0d",inputTitle:"form_inputTitle__aT2na",selectTimeWrapper:"form_selectTimeWrapper__qwJcX",dateWrapper:"form_dateWrapper__BDo0I",timeWrapper:"form_timeWrapper__H7EZE",listOfHoursStart:"form_listOfHoursStart__MUrKR",listOfHoursEnd:"form_listOfHoursEnd__8eEGy",buttonsWrapper:"form_buttonsWrapper__KvBuo",button:"form_button__Qogr2",removeButton:"form_removeButton__31CP4",createBtnWrapper:"form_createBtnWrapper__ktrWK",noEventMessage:"form_noEventMessage__ymOmp"},Form=_ref=>{var _resources$find;let{startingPointTime,selectedEvent,changeEventHandler,cancelButtonHandler,eventAction,method,removeButtonHandler,openFormHandler,resources}=_ref;return(0,jsx_runtime.jsx)("div",{className:form_module.formWrapper,children:selectedEvent?(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:form_module.inputWrapper,children:(0,jsx_runtime.jsx)("input",{className:form_module.inputTitle,value:selectedEvent.title,onChange:e=>{changeEventHandler(e.target.value,"title")},placeholder:"Title"})}),(0,jsx_runtime.jsxs)("div",{className:form_module.selectTimeWrapper,children:[(0,jsx_runtime.jsxs)("div",{className:form_module.dateWrapper,children:[(0,jsx_runtime.jsx)("span",{children:"Start:"}),(0,jsx_runtime.jsx)("input",{type:"datetime-local",defaultValue:moment_default()(selectedEvent.start).format("YYYY-MM-DDTHH:mm"),onChange:e=>{changeEventHandler(e.target.value,"start")}})]}),(0,jsx_runtime.jsxs)("div",{className:form_module.dateWrapper,children:[(0,jsx_runtime.jsx)("span",{children:"End:"}),(0,jsx_runtime.jsx)("input",{type:"datetime-local",defaultValue:moment_default()(selectedEvent.end).format("YYYY-MM-DDTHH:mm"),onChange:e=>{changeEventHandler(e.target.value,"end")}})]})]}),(0,jsx_runtime.jsx)("div",{children:resources?(0,jsx_runtime.jsxs)("div",{className:form_module.dateWrapper,children:[(0,jsx_runtime.jsx)("span",{children:"Resource:"}),(0,jsx_runtime.jsx)("select",{onChange:e=>{changeEventHandler(resources.find((resource=>resource.resource==e.target.value)).id,"resourceId")},defaultValue:null===(_resources$find=resources.find((resource=>resource.id==selectedEvent.resourceId)))||void 0===_resources$find?void 0:_resources$find.resource,children:resources.map(((resource,i)=>(0,jsx_runtime.jsx)("option",{className:form_module.selectOption,value:resource.resource,children:resource.resource})))})]}):null}),(0,jsx_runtime.jsxs)("div",{className:form_module.buttonsWrapper,children:[(0,jsx_runtime.jsx)("button",{onClick:()=>cancelButtonHandler(),className:form_module.button,children:"Cancel"}),(0,jsx_runtime.jsx)("button",{onClick:()=>eventAction(selectedEvent),className:form_module.button,children:method}),(0,jsx_runtime.jsx)("button",{onClick:()=>removeButtonHandler(selectedEvent),className:"".concat(form_module.button," ").concat(form_module.removeButton),children:"Remove"})]})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:form_module.createBtnWrapper,children:(0,jsx_runtime.jsx)("button",{className:form_module.button,onClick:()=>openFormHandler("Create",null,startingPointTime),children:"Create new event"})}),(0,jsx_runtime.jsx)("div",{className:form_module.noEventMessage,children:"No event selected"})]})})};Form.__docgenInfo={description:"",methods:[],displayName:"Form"};const all_day_events_cell_module_alldayCellWrapper="all-day-events-cell_alldayCellWrapper__hZ9su",all_day_events_cell_module_alldayCellEventWrapper="all-day-events-cell_alldayCellEventWrapper__v9B13",all_day_events_cell_module_eventTitle="all-day-events-cell_eventTitle__ZsR2M",AllDayEventsCell=_ref=>{var _eventsToMap;let eventsToMap,{currentDayEvents,currentResourceAndDayEvents,openFormHandler,view,HEIGHT_DAY_CELL}=_ref;return eventsToMap=currentResourceAndDayEvents?null==currentResourceAndDayEvents?void 0:currentResourceAndDayEvents.filter((event=>!0===event.allDay)):null==currentDayEvents?void 0:currentDayEvents.filter((event=>!0===event.allDay)),(0,jsx_runtime.jsx)("div",{className:all_day_events_cell_module_alldayCellWrapper,style:{height:HEIGHT_DAY_CELL},children:(0,jsx_runtime.jsx)("div",{className:all_day_events_cell_module_alldayCellEventWrapper,children:null===(_eventsToMap=eventsToMap)||void 0===_eventsToMap?void 0:_eventsToMap.map((event=>(0,jsx_runtime.jsx)("div",{className:all_day_events_cell_module_eventTitle,onClick:()=>openFormHandler("Update",event),children:event.title})))})})};AllDayEventsCell.__docgenInfo={description:"",methods:[],displayName:"AllDayEventsCell"};const day_cell_module_dayCellWrapper="day-cell_dayCellWrapper__Njz7s",day_cell_module_timeCanvas="day-cell_timeCanvas__9UjyB",day_cell_module_timelineCellWrapper="day-cell_timelineCellWrapper__RzX6T",day_cell_module_cellEventWrapper="day-cell_cellEventWrapper__YHarK",day_cell_module_eventTitle="day-cell_eventTitle__9Cmzh",day_cell_module_eventTime="day-cell_eventTime__Y-nsX",day_cell_module_showMoreTitle="day-cell_showMoreTitle__1WRLQ",DayCell=_ref=>{let{countOfHours,updateEventByDragAndDrop,currentDayEvents,currentResourceAndDayEvents,openFormHandler,startingPointTime,setStartingPointTime,setDroppedHour,HEIGHT_DAY_CELL,resource,view,setView,onEventClick}=_ref;const[eventWidth,setEventWidth]=(0,react.useState)(0);let showViewMore=!1,isShowViewMoreCalculated=!1,eventTopForViewMore=0,startingPointTimeToShowMore=null,countOfShowMore=0;const ref=(0,react.useRef)(null),mappedEvents=(events=>{const rowHours=new Map([...Array(24)].map(((_,i)=>[i,new Map])));events.sort(((a,b)=>moment_default()(a.start).diff(moment_default()(a.end))-moment_default()(b.start).diff(moment_default()(b.end)))).forEach((e=>{rowHours.get(moment_default()(e.start).hour()).set(e.id,e)}));let rowNumber=0,columnNumber=0;const columnsEventsGroups=new Map;columnsEventsGroups.set(columnNumber,new Map);let emptyRowsCount=0;for(;;){if(rowHours.size===emptyRowsCount){columnsEventsGroups.delete(columnNumber);break}rowNumber>rowHours.size-1&&(rowNumber=0,columnNumber++,columnsEventsGroups.set(columnNumber,new Map),emptyRowsCount=0);const rowAsHourData=rowHours.get(rowNumber);if(0===rowAsHourData.size){rowNumber++,emptyRowsCount++;continue}const key=rowAsHourData.keys().next().value,firstEventInRowAsHourData=rowAsHourData.get(key);rowAsHourData.delete(key),columnsEventsGroups.get(columnNumber).set(key,firstEventInRowAsHourData),rowNumber+=Math.ceil(moment_default()(firstEventInRowAsHourData.end).diff(moment_default()(firstEventInRowAsHourData.start),"h",!0))}return columnsEventsGroups})((currentResourceAndDayEvents||currentDayEvents).filter((event=>!0!==event.allDay))),mappedEventsArray=[];mappedEvents.forEach(((column,rank)=>{column.forEach((event=>{mappedEventsArray.push({...event,rank})}))})),(0,react.useEffect)((()=>{setEventWidth((ref.current.clientWidth-20)/(showViewMore?2:mappedEvents.size))}),[ref,mappedEvents]);const onDragOverHandler=e=>{e.preventDefault()};return(0,jsx_runtime.jsxs)("div",{className:day_cell_module_dayCellWrapper,ref,children:[(0,jsx_runtime.jsx)("div",{className:day_cell_module_timeCanvas,children:[...Array(countOfHours)].map(((_,i)=>(0,jsx_runtime.jsx)("div",{className:day_cell_module_timelineCellWrapper,style:{height:HEIGHT_DAY_CELL},onDrop:e=>((e,i)=>{e.preventDefault(),setDroppedHour(i)})(e,i),onDragOver:onDragOverHandler,onDoubleClick:()=>openFormHandler("Create",null,startingPointTime,i,resource),children:(0,jsx_runtime.jsx)("div",{className:day_cell_module_cellEventWrapper})})))}),null==mappedEventsArray?void 0:mappedEventsArray.filter((event=>!1===event.allDay||void 0===event.allDay)).map(((event,i)=>{let startTime=moment_default()(event.start),endTime=moment_default()(event.end),duration=moment_default().duration(endTime.diff(startTime));const EVENT_TOP=startTime.hours()*HEIGHT_DAY_CELL+startTime.minutes()/(60/HEIGHT_DAY_CELL),EVENT_HEIGHT=duration.hours()*HEIGHT_DAY_CELL+duration.minutes()/(60/HEIGHT_DAY_CELL);return event.rank>1&&view==views_WEEK?(countOfShowMore++,void(isShowViewMoreCalculated||(showViewMore=!0,eventTopForViewMore=startTime.hours()*HEIGHT_DAY_CELL+startTime.minutes()/2,startingPointTimeToShowMore=startTime,isShowViewMoreCalculated=!0))):(0,jsx_runtime.jsxs)("div",{style:{width:eventWidth-2,left:eventWidth*(null==event?void 0:event.rank),top:EVENT_TOP,height:EVENT_HEIGHT-1},className:day_cell_module_eventTitle,onClick:()=>{openFormHandler("Update",event,null,null),onEventClick&&onEventClick(event)},name:"event",draggable:!0,onDragEnd:e=>((e,event)=>{updateEventByDragAndDrop(event)})(0,event),children:[event.title,EVENT_HEIGHT>=40?(0,jsx_runtime.jsxs)("div",{className:day_cell_module_eventTime,children:[moment_default()(event.start).format("HH:mm"),"-",moment_default()(event.end).format("HH:mm")]}):null]})})),showViewMore&&view==views_WEEK?(0,jsx_runtime.jsxs)("div",{className:day_cell_module_showMoreTitle,style:{top:eventTopForViewMore},onClick:()=>{setView(views_DAY),setStartingPointTime(startingPointTimeToShowMore)},children:["+",countOfShowMore]}):null]})};DayCell.__docgenInfo={description:"",methods:[],displayName:"DayCell"};const day_header_module_resourceWrapper="day-header_resourceWrapper__1LLMs",day_header_module_resourceText="day-header_resourceText__TIGoI",DayHeader=_ref=>{let{resources,onResourceClick}=_ref;return null==resources?void 0:resources.map(((resource,i)=>(0,jsx_runtime.jsx)("div",{className:day_header_module_resourceWrapper,children:(0,jsx_runtime.jsx)("div",{className:day_header_module_resourceText,onClick:()=>onResourceClick&&onResourceClick(resource),children:resource.resource})},moment_default()().day(i+1).unix())))},Day=_ref=>{let{events,startingPointTime,selectedEvent,method,cancelButtonHandler,eventAction,removeButtonHandler,changeEventHandler,openFormHandler,updateEventByDragAndDrop,setDroppedHour,HEIGHT_DAY_CELL,resources,onEventClick,onResourceClick}=_ref;const currentDayEvents=null==events?void 0:events.filter((event=>(0,helpers.rB)(event,startingPointTime)));return(0,jsx_runtime.jsxs)("div",{className:day_module_wrapper,children:[(0,jsx_runtime.jsx)("div",{className:day_module_eventsListWrapper,children:(0,jsx_runtime.jsxs)("div",{className:day_module_timelineWrapper,children:[resources?(0,jsx_runtime.jsxs)("div",{className:day_module_headerWrapper,children:[(0,jsx_runtime.jsx)("div",{className:day_module_emptySquareInHeader}),(0,jsx_runtime.jsx)("div",{className:day_module_header,children:(0,jsx_runtime.jsx)(DayHeader,{resources,onResourceClick})})]}):null,resources?(0,jsx_runtime.jsxs)("div",{className:day_module_allDayWrapper,children:[(0,jsx_runtime.jsx)("div",{className:day_module_allDayText,style:{height:HEIGHT_DAY_CELL},children:"All day"}),(0,jsx_runtime.jsx)("div",{className:day_module_allDay,children:resources.map((resource=>{let currentResourceAndDayEvents=events.filter((event=>event.resourceId==(null==resource?void 0:resource.id)&&(0,helpers.rB)(event,startingPointTime)));return(0,jsx_runtime.jsx)(AllDayEventsCell,{currentDayEvents,currentResourceAndDayEvents,openFormHandler,HEIGHT_DAY_CELL})}))})]}):(0,jsx_runtime.jsxs)("div",{className:day_module_allDayWrapper,children:[(0,jsx_runtime.jsx)("div",{className:day_module_allDayText,style:{height:HEIGHT_DAY_CELL},children:"All day"}),(0,jsx_runtime.jsx)(AllDayEventsCell,{currentDayEvents,openFormHandler,HEIGHT_DAY_CELL})]}),(0,jsx_runtime.jsxs)("div",{className:day_module_eventsCanva,children:[(0,jsx_runtime.jsx)(RedLine,{startingPointTime}),(0,jsx_runtime.jsx)("div",{children:[...Array(24)].map(((_,i)=>(0,jsx_runtime.jsxs)("div",{className:day_module_cellTimeWrapper,style:{height:HEIGHT_DAY_CELL},children:["".concat(i).padStart(2,"0"),":00"]})))}),resources?resources.map((resource=>{let currentResourceAndDayEvents=events.filter((event=>event.resourceId==(null==resource?void 0:resource.id)&&(0,helpers.rB)(event,startingPointTime)));return(0,jsx_runtime.jsx)(DayCell,{countOfHours:24,updateEventByDragAndDrop,currentDayEvents,currentResourceAndDayEvents,openFormHandler,startingPointTime,setDroppedHour,HEIGHT_DAY_CELL,resource,onEventClick})})):(0,jsx_runtime.jsx)(DayCell,{countOfHours:24,updateEventByDragAndDrop,currentDayEvents,openFormHandler,startingPointTime,setDroppedHour,HEIGHT_DAY_CELL,onEventClick})]})]})}),selectedEvent?(0,jsx_runtime.jsx)(Form,{startingPointTime,selectedEvent,changeEventHandler,countOfHours:24,cancelButtonHandler,eventAction,method,removeButtonHandler,openFormHandler,resources}):null]})};Day.__docgenInfo={description:"",methods:[],displayName:"Day"};const month_cell_module_cellWrapper="month-cell_cellWrapper__04dOG",month_cell_module_cellWrapper_weekend="month-cell_cellWrapper_weekend__3bKGe",month_cell_module_rowInCell="month-cell_rowInCell__ctAA7",month_cell_module_dayWrapper="month-cell_dayWrapper__d6uro",month_cell_module_selectedMonthColor="month-cell_selectedMonthColor__RIkKV",month_cell_module_currentDay="month-cell_currentDay__s3nbi",month_cell_module_eventWrapper="month-cell_eventWrapper__AzcXG",month_cell_module_eventTitle="month-cell_eventTitle__7DMt4",month_cell_module_showMoreTitle="month-cell_showMoreTitle__0TdFa",MonthCell=_ref=>{let{dayItem,events,startingPointTime,setView,setStartingPointTime,openModalHandler,onEventClick}=_ref;return(0,jsx_runtime.jsxs)("div",{className:6===dayItem.day()||0===dayItem.day()?"".concat(month_cell_module_cellWrapper," ").concat(month_cell_module_cellWrapper_weekend):month_cell_module_cellWrapper,children:[(0,jsx_runtime.jsxs)("div",{className:month_cell_module_rowInCell,children:[(0,jsx_runtime.jsx)("div",{className:(0,helpers.Ui)(dayItem,startingPointTime)?"".concat(month_cell_module_dayWrapper," ").concat(month_cell_module_selectedMonthColor):month_cell_module_dayWrapper,onClick:()=>openModalHandler("Create",null,dayItem),children:(0,jsx_runtime.jsx)("div",{className:(0,helpers.qm)(dayItem)?month_cell_module_currentDay:"",children:dayItem.format("D")})}),(null==events?void 0:events.length)>2?(0,jsx_runtime.jsxs)("div",{className:month_cell_module_showMoreTitle,onClick:()=>{setView(views_DAY),setStartingPointTime(dayItem)},children:["+ ",events.length-2," more"]}):null]}),(0,jsx_runtime.jsx)("div",{className:month_cell_module_eventWrapper,children:null==events?void 0:events.slice(0,2).map((event=>(0,jsx_runtime.jsx)("div",{className:month_cell_module_eventTitle,title:event.title,onClick:()=>{openModalHandler("Update",event),onEventClick&&onEventClick(event)},children:event.title})))})]},dayItem.unix())};MonthCell.__docgenInfo={description:"",methods:[],displayName:"MonthCell"};const month_header_module_daysOfWeek="month-header_daysOfWeek__2UUGO",month_header_module_daysOfWeekText="month-header_daysOfWeekText__mGRdR",MonthHeader=()=>[...Array(7)].map(((_,i)=>(0,jsx_runtime.jsx)("div",{className:month_header_module_daysOfWeek,children:(0,jsx_runtime.jsx)("div",{className:month_header_module_daysOfWeekText,children:moment_default()().day(i+1).format("ddd")})},moment_default()().day(i+1).unix()))),Month=_ref=>{let{startDay,events,startingPointTime,setView,setStartingPointTime,openModalHandler,onEventClick}=_ref;const day=startDay.clone(),daysArray=[...Array(42)].map((()=>day.add(1,"day").clone()));return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(MonthHeader,{}),daysArray.map((dayItem=>(0,jsx_runtime.jsx)(MonthCell,{setView,dayItem,events:null==events?void 0:events.filter((event=>(0,helpers.rB)(event,dayItem))),startingPointTime,setStartingPointTime,openModalHandler,onEventClick},dayItem.unix())))]})};Month.__docgenInfo={description:"",methods:[],displayName:"Month"};const week_module_wrapper="week_wrapper__HV-K-",week_module_eventsListWrapper="week_eventsListWrapper__KYdh3",week_module_timelineWrapper="week_timelineWrapper__h+oAI",week_module_weekCellsWrapper="week_weekCellsWrapper__lPAoA",week_module_wrapperWeekHeader="week_wrapperWeekHeader__0w0wL",week_module_weekHeader="week_weekHeader__RMRK2",week_module_emptySquareInHeader="week_emptySquareInHeader__C48Iv",week_module_weekDayColumn="week_weekDayColumn__0RDZ7",week_module_hoursCellsWrapper="week_hoursCellsWrapper__JbPzW",week_module_cellTimeWrapper="week_cellTimeWrapper__Ng7fe",week_header_module_daysOfWeek="week-header_daysOfWeek__5RVWM",week_header_module_daysOfWeekText="week-header_daysOfWeekText__VWacJ",week_header_module_daysOfWeekNumber="week-header_daysOfWeekNumber__1Fh9o",week_header_module_currentDay="week-header_currentDay__b2DId",WeekHeader=_ref=>{let{startingPointTime}=_ref;return[...Array(7)].map(((_,i)=>(0,jsx_runtime.jsxs)("div",{className:week_header_module_daysOfWeek,children:[(0,jsx_runtime.jsxs)("div",{className:week_header_module_daysOfWeekText,children:[startingPointTime.clone().day(i+1).format("ddd")," "]}),(0,jsx_runtime.jsx)("div",{className:(0,helpers.qm)(startingPointTime.clone().day(i+1))?week_header_module_currentDay:"",children:(0,jsx_runtime.jsx)("div",{className:week_header_module_daysOfWeekNumber,children:startingPointTime.clone().day(i+1).format("D")})})]},moment_default()().day(i+1).unix())))},Week=_ref=>{let{startingPointTime,events,selectedEvent,method,cancelButtonHandler,eventAction,removeButtonHandler,changeEventHandler,openFormHandler,updateEventByDragAndDrop,view,setView,setDroppedHour,HEIGHT_DAY_CELL,setStartingPointTime,onEventClick}=_ref;return(0,jsx_runtime.jsxs)("div",{className:week_module_wrapper,children:[(0,jsx_runtime.jsx)("div",{className:week_module_eventsListWrapper,children:(0,jsx_runtime.jsxs)("div",{className:week_module_timelineWrapper,children:[(0,jsx_runtime.jsxs)("div",{className:week_module_wrapperWeekHeader,children:[(0,jsx_runtime.jsx)("div",{className:week_module_emptySquareInHeader}),(0,jsx_runtime.jsx)("div",{className:week_module_weekHeader,children:(0,jsx_runtime.jsx)(WeekHeader,{startingPointTime})})]}),(0,jsx_runtime.jsxs)("div",{className:week_module_weekCellsWrapper,children:[(0,jsx_runtime.jsxs)("div",{className:week_module_hoursCellsWrapper,children:[(0,jsx_runtime.jsx)("div",{className:week_module_cellTimeWrapper,style:{height:HEIGHT_DAY_CELL},children:"All day"}),[...Array(24)].map(((_,i)=>(0,jsx_runtime.jsxs)("div",{className:week_module_cellTimeWrapper,style:{height:HEIGHT_DAY_CELL},children:["".concat(i).padStart(2,"0"),":00"]})))]}),(0,jsx_runtime.jsx)(RedLine,{startingPointTime}),[...Array(7)].map(((_,i)=>{let currentDayEvents=null==events?void 0:events.filter((event=>(0,helpers.rB)(event,startingPointTime.clone().startOf("week").add(i+1,"day"))));return(0,jsx_runtime.jsxs)("div",{className:week_module_weekDayColumn,children:[(0,jsx_runtime.jsx)(AllDayEventsCell,{currentDayEvents,openFormHandler,view,HEIGHT_DAY_CELL}),(0,jsx_runtime.jsx)(DayCell,{countOfHours:24,updateEventByDragAndDrop,currentDayEvents,openFormHandler,view,startingPointTime:startingPointTime.clone().startOf("week").add(i+1,"day"),setDroppedHour,HEIGHT_DAY_CELL,setStartingPointTime,setView,onEventClick})]})}))]})]})}),selectedEvent?(0,jsx_runtime.jsx)(Form,{startingPointTime,selectedEvent,changeEventHandler,cancelButtonHandler,eventAction,method,removeButtonHandler,openFormHandler}):null]})};function getRandomIdInRange(min,max){return Math.floor(Math.random()*(max-min+1))+min}Week.__docgenInfo={description:"",methods:[],displayName:"Week"};const defaultEvent={title:"",start:moment_default()(),end:moment_default()().add(1,"hour")},defaultEvents=[];function Scheduler(_ref){let{events,cellsHeight,resources,onEventClick,onResourceClick,onEventDrag,onRangeChange,onViewChange,onTodayClick,onEventUpdate,onEventCreate,onEventDelete}=_ref,HEIGHT_DAY_CELL=30;void 0===events&&(events=defaultEvents),void 0!==cellsHeight&&(HEIGHT_DAY_CELL=cellsHeight);const[view,setView]=(0,react.useState)(resources?views_DAY:views_MONTH),[event,setEvent]=(0,react.useState)(null),[startingPointTime,setStartingPointTime]=(0,react.useState)(moment_default()()),[isShowModal,setShowModal]=(0,react.useState)(!1),[method,setMethod]=(0,react.useState)(null),[droppedHour,setDroppedHour]=(0,react.useState)(null),startDay=startingPointTime.clone().startOf("month").startOf("week"),openFormHandler=function(methodName,eventForUpdate,dayItem){let clickedHour=arguments.length>3&&void 0!==arguments[3]?arguments[3]:dayItem.hours(),resource=arguments.length>4?arguments[4]:void 0;setMethod(methodName),setEvent(eventForUpdate||{...defaultEvent,id:getRandomIdInRange(0,1e4),start:dayItem.clone().hours(clickedHour),end:dayItem.clone().hours(clickedHour).add(1,"hour"),resourceId:null==resource?void 0:resource.id})},cancelButtonHandler=()=>{setShowModal(!1),setEvent(null)},removeButtonHandler=eventToRemove=>{onEventDelete&&onEventDelete(eventToRemove),delete eventToRemove.rank,console.log(eventToRemove),console.log(events);const index=events.indexOf(eventToRemove);console.log(index),index>-1&&(events.splice(index,1),console.log(events)),setShowModal(!1),setEvent(null)},changeEventHandler=(text,field)=>{setEvent((prevState=>({...prevState,[field]:text})))},eventAction=eventToUpdate=>{"Create"===method&&(events.push(event),onEventCreate&&onEventCreate(event),setShowModal(!1),setEvent(null)),"Update"===method&&(events.find((eventGlobal=>eventGlobal.id===eventToUpdate.id)).title=event.title,events.find((eventGlobal=>eventGlobal.id===eventToUpdate.id)).start=event.start,events.find((eventGlobal=>eventGlobal.id===eventToUpdate.id)).end=event.end,events.find((eventGlobal=>eventGlobal.id===eventToUpdate.id)).resourceId=event.resourceId,onEventUpdate&&onEventUpdate(event),setShowModal(!1),setEvent(null))},updateEventByDragAndDrop=eventToUpdate=>{let oldEndTime=moment_default()(eventToUpdate.end),oldStartTime=moment_default()(eventToUpdate.start),duration=moment_default().duration(oldEndTime.diff(oldStartTime)),newStart=oldStartTime.hours(droppedHour).minutes(0),newEnd=newStart.clone().add(duration),globalEventForUpdate=events.find((eventGlobal=>eventGlobal.id===eventToUpdate.id));globalEventForUpdate.start=newStart,globalEventForUpdate.end=newEnd,onEventDrag&&onEventDrag(eventToUpdate),setDroppedHour(null)};return(0,jsx_runtime.jsxs)("div",{className:index_module_wrapper,children:[(0,jsx_runtime.jsx)(Header,{startingPointTime,prevHandler:()=>{setStartingPointTime((prev=>prev.clone().subtract(1,view))),onRangeChange&&("week"==view?onRangeChange(startingPointTime.clone().subtract(1,view).startOf("isoWeek").format(),startingPointTime.clone().subtract(1,view).endOf("isoWeek").format()):onRangeChange(startingPointTime.clone().subtract(1,view).startOf(view).format(),startingPointTime.clone().subtract(1,view).endOf(view).format()))},todayHandler:()=>{setStartingPointTime(view===views_WEEK?moment_default()().subtract(1,"day"):moment_default()()),onTodayClick&&onTodayClick(moment_default()().format())},nextHandler:()=>{setStartingPointTime((prev=>prev.clone().add(1,view))),onRangeChange&&("week"==view?onRangeChange(startingPointTime.clone().add(1,view).startOf("isoWeek").format(),startingPointTime.clone().add(1,view).endOf("isoWeek").format()):onRangeChange(startingPointTime.clone().add(1,view).startOf(view).format(),startingPointTime.clone().add(1,view).endOf(view).format()))},setView,view,resources,onViewChange}),view===views_MONTH?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[isShowModal?(0,jsx_runtime.jsx)("div",{className:index_module_modalPositionWrapper,onClick:()=>cancelButtonHandler(),children:(0,jsx_runtime.jsxs)("div",{className:index_module_modalWrapper,onClick:e=>e.stopPropagation(),children:[(0,jsx_runtime.jsx)("input",{className:index_module_modalInputTitle,value:event.title,onChange:e=>{changeEventHandler(e.target.value,"title")},placeholder:"Title"}),(0,jsx_runtime.jsxs)("div",{className:index_module_modalButtonsWrapper,children:[(0,jsx_runtime.jsx)("button",{onClick:()=>cancelButtonHandler(),className:index_module_button,children:"Cancel"}),(0,jsx_runtime.jsx)("button",{onClick:()=>eventAction(event),className:index_module_button,children:method}),(0,jsx_runtime.jsx)("button",{onClick:()=>removeButtonHandler(event),className:"".concat(index_module_button," ").concat(index_module_removeButton),children:"Remove"})]})]})}):null,(0,jsx_runtime.jsx)("div",{className:index_module_monthWrapper,children:(0,jsx_runtime.jsx)(Month,{startDay,events,startingPointTime,setStartingPointTime,setView,openModalHandler:(methodName,eventForUpdate,dayItem)=>{setShowModal(!0),setMethod(methodName),setEvent(eventForUpdate||{...defaultEvent,id:getRandomIdInRange(0,1e4),start:dayItem.startOf("hour").clone(),end:dayItem.startOf("hour").clone().add(1,"hour")})},onEventClick})})]}):null,view===views_WEEK?(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Week,{startingPointTime,setStartingPointTime,events,selectedEvent:event,method,cancelButtonHandler,eventAction,removeButtonHandler,changeEventHandler,openFormHandler,updateEventByDragAndDrop,view,setDroppedHour,HEIGHT_DAY_CELL,setView,onEventClick})}):null,view===views_DAY?(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Day,{startingPointTime,events,selectedEvent:event,method,cancelButtonHandler,eventAction,removeButtonHandler,changeEventHandler,openFormHandler,updateEventByDragAndDrop,setDroppedHour,HEIGHT_DAY_CELL,resources,onEventClick,onResourceClick})}):null]})}const components_Scheduler=Scheduler;Scheduler.__docgenInfo={description:"",methods:[],displayName:"Scheduler"};const myEvents=[{id:1,title:"Поужинать в Вилка Ложка",start:new Date("2024-04-27T19:30"),end:new Date("2024-04-27T21:00"),allDay:!1},{id:2,title:"Встретиться с друзьями",start:new Date("2024-04-27T21:01"),end:new Date("2024-04-27T23:00"),allDay:!1},{id:3,title:"Лечь спать",start:new Date("2024-04-27T23:01"),end:new Date("2024-04-27T23:30"),allDay:!1},{id:13,title:"Сделать уроки",start:new Date("2024-04-27T14:00"),end:new Date("2024-04-27T16:30"),allDay:!1},{id:14,title:"Пить воду",start:new Date("2024-04-27T14:00"),end:new Date("2024-04-27T16:30"),allDay:!1},{id:4,title:"Купить овощей",start:new Date("2024-04-20T14:00"),end:new Date("2024-04-20T15:00")},{id:5,title:"Сходить в филармонию",start:new Date("2024-04-21T20:00"),end:new Date("2024-04-21T22:30")},{id:6,title:"Пить много воды (целый день)",start:new Date("2024-04-26"),end:new Date("2024-04-26T21:00"),allDay:!0},{id:7,title:"Убраться в комнате",start:new Date("2024-04-26T17:00"),end:new Date("2024-04-26T18:00")},{id:8,title:"Приготовить ужин",start:new Date("2024-04-26T18:00"),end:new Date("2024-04-26T19:00")}],Scheduler_stories={title:"Example/Scheduler",component:components_Scheduler},Basic={render:args=>(0,jsx_runtime.jsx)(components_Scheduler,{...args}),args:{events:myEvents}},Resources={render:args=>(0,jsx_runtime.jsx)(components_Scheduler,{...args}),args:{events:myEvents,resources:[{id:1,resource:"Окно 1"},{id:2,resource:"Окно 2"},{id:3,resource:"Окно 3"},{id:4,resource:"Окно 4"},{id:5,resource:"Окно 5"}]}},CustomCellsHeight={render:args=>(0,jsx_runtime.jsx)(components_Scheduler,{...args}),args:{cellsHeight:60,events:myEvents}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  render: args => <Scheduler {...args} />,\n  args: {\n    events: myEvents\n  }\n}",...Basic.parameters?.docs?.source}}},Resources.parameters={...Resources.parameters,docs:{...Resources.parameters?.docs,source:{originalSource:"{\n  render: args => <Scheduler {...args} />,\n  args: {\n    events: myEvents,\n    resources: resources\n  }\n}",...Resources.parameters?.docs?.source}}},CustomCellsHeight.parameters={...CustomCellsHeight.parameters,docs:{...CustomCellsHeight.parameters?.docs,source:{originalSource:"{\n  render: args => <Scheduler {...args} />,\n  args: {\n    cellsHeight: 60,\n    events: myEvents\n  }\n}",...CustomCellsHeight.parameters?.docs?.source}}};const __namedExportsOrder=["Basic","Resources","CustomCellsHeight"]},"./src/utils/helpers.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fw:()=>isWeekContainEvent,Ui:()=>isSelectedMonth,YR:()=>isDayContainCurrentTimestamp,qm:()=>isCurrentDay,rB:()=>isDayContainEvent});var moment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/moment/moment.js"),moment__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);const isCurrentDay=day=>moment__WEBPACK_IMPORTED_MODULE_0___default()().isSame(day,"day"),isSelectedMonth=(day,startingPointTime)=>startingPointTime.isSame(day,"month"),isDayContainCurrentTimestamp=(a,b)=>a.format("X")>=b.startOf("day").format("X")&&a.format("X")<b.clone().endOf("day").format("X"),isDayContainEvent=(event,dayItem)=>moment__WEBPACK_IMPORTED_MODULE_0___default()(event.start).format("X")>=moment__WEBPACK_IMPORTED_MODULE_0___default()(dayItem).startOf("day").format("X")&&moment__WEBPACK_IMPORTED_MODULE_0___default()(event.end).format("X")<moment__WEBPACK_IMPORTED_MODULE_0___default()(dayItem).clone().endOf("day").format("X"),isWeekContainEvent=(event,dayItem)=>moment__WEBPACK_IMPORTED_MODULE_0___default()(event.start).format("X")>=moment__WEBPACK_IMPORTED_MODULE_0___default()(dayItem).clone().startOf("week").add(1,"day").format("X")&&moment__WEBPACK_IMPORTED_MODULE_0___default()(event.end).format("X")<moment__WEBPACK_IMPORTED_MODULE_0___default()(dayItem).clone().endOf("week").add(1,"day").format("X")}}]);