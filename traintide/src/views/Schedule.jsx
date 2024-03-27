import React, {useState, useEffect} from "react";
import './styles/Schedule.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Schedule = () => {
    const [value, onChange] = useState(new Date());

    const onClickDay = (value) => {
        console.log(value);
    }

    return (
        <div className="schedule">
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
        </div>
    );
}

export default Schedule;