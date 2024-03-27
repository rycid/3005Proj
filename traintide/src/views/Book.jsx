import React from "react";
import './styles/Book.scss';

const Book = () => {
    return (
        <div className="book">
            <h1>Book</h1>
            <p>Book a session with a trainer today!</p>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" />
                <label htmlFor="time">Time</label>
                <input type="time" id="time" name="time" />
                <button type="submit">Book</button>
            </form>
        </div>
    );
}

export default Book;