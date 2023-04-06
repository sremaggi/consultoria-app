import React from "react";
import { formatDate, Calendar } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import momentTimezonePlugin from "@fullcalendar/moment-timezone";
import { INITIAL_EVENTS, createEventId } from "../../utils/initEvents";
import { RangeDates } from "../../utils/time";

export default class DemoApp extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
  };

  render() {
    return (
      <div className="w-full">
        <div className="text-sm lg:text-lg text-black bg-white rounded-md">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              momentTimezonePlugin,
            ]}
            timeZone={"America/Santiago"}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "",
            }}
            firstDay={1}
            themeSystem="Minty"
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            dragScroll={true}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            titleFormat={{ year: "numeric", month: "short" }}
            eventAdd={function (e) {
              console.log(`SE HA AÑADIDO UN EVENTO ${e.event.title}`);
              console.log(e);
            }}
            eventChange={function (e) {
              console.log(`SE HA CAMBIADO UN EVENTO ${e}`);
              console.log(e);
            }}
            eventRemove={function (e) {
              console.log(`SE HA ELIMINADO UN EVENTO ${e}`);
              console.log(e);
            }}
          />
        </div>
      </div>
    );
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    });
  };

  handleDateSelect = (selectInfo) => {
    INITIAL_EVENTS.forEach((event) => {
      RangeDates(event.start, event.end).forEach((book) => {
        RangeDates(selectInfo.startStr, selectInfo.endStr).forEach(
          (selected) => {
            if (book == selected) {
              alert("NO SE PUEDE SELECCIONAR ESTA FECHA");
            }
          }
        );
      });
    });
    let title = prompt("Please enter a new title for your event");
    console.log(selectInfo);
    let calendarApi = selectInfo.view.calendar;
    console.log("HEIGHT", window.screen.height);
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        color: "red",
      });
    }
  };

  handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  handleEvents = (events) => {
    this.setState({
      currentEvents: events,
    });
  };
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}
