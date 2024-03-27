import React, {useState, useEffect} from "react";
import './styles/Schedule.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Schedule = () => {
    const [value, onChange] = useState(new Date());
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);


    const onClickDay = (value) => {
        console.log(value);
    }

    return (
        <div className="schedule">
            <div className="schedule-wrapper-1">
                <h1>Schedule</h1>
                <p>Here is your schedule for the week!</p>
                <Calendar
                    onChange={onChange}
                    value={value}
                    onClickDay={onClickDay}
                    tileClassName={({ date, view }) => {
                        if (date.getDay() === 0 || date.getDay() === 6) {
                            return 'weekend';
                        }
                    }}
                    calendarType="US"
                />
                
                <div className="schedule-actions">
                    <div className="action" onClick={() => onChange(new Date())}>Go to Today</div>
                    <div className="action">Add Event</div>
                  
                </div>
            </div>
            <div className="schedule-wrapper-2">
                <div className="schedule-selected-day">
                    <div className="label">Selected Day</div>
                    <div className="date">{value.toDateString()}</div>
                </div>
                <div className="schedule-list">
                    <div className="list-header">
                        <div className="label">Time</div>
                        <div className="label">Event</div>
                    </div>
                    <div className="schedule-items">
                        <div className="item">
                            <div className="time">10:00 AM</div>
                            <div className="event">Yoga</div>
                        </div>
                        <div className="item">
                            <div className="time">12:00 PM</div>
                            <div className="event">Lunch</div>
                        </div>
                        <div className="item">
                            <div className="time">2:00 PM</div>
                            <div className="event">Meeting</div>
                        </div>
                        <div className="item">
                            <div className="time">5:00 PM</div>
                            <div className="event">Gym</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="schedule-wrapper-3">
                <div className="schedule-selected-event">
                    <div className="label">Selected Event</div>
                    <div className="event">{selectedEvent ? selectedEvent : "No event selected"}</div>
                    {/* will have more details and info about the selected event and allow users to modify their schedule as needed */}
                </div>
            </div>
        </div>
    );
}

export default Schedule;