import React from "react";
import './styles/Premium.scss';

const Premium = () => {
    return (
        <div className="premium">
            <h1>Premium</h1>
            <p>Upgrade to TrainTide Premium today!</p>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="payment">Payment</label>
                <input type="text" id="payment" name="payment" />
                <button type="submit">Upgrade</button>
            </form>
        </div>
    );
}

export default Premium;