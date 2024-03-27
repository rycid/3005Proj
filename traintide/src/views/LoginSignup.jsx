import React, {useState, useEffect} from "react";
import './styles/LoginSignup.scss';

const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <p>Welcome back to TrainTide!</p>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

const Signup = () => {
    return (
        <div className="signup">
            <h1>Signup</h1>
            <p>Join TrainTide today!</p>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

const LoginSignup = () => {

    const [selectedForm, setSelectedForm] = useState("Login");
    return (
        <div className="loginSignup">
            <h1>Login/Signup</h1>
            <div className="form-selector">
                <div className={`form-option ${selectedForm === "Login" ? "selected" : ""}`} onClick={() => setSelectedForm("Login")}>
                    Login
                </div>
                <div className={`form-option ${selectedForm === "Signup" ? "selected" : ""}`} onClick={() => setSelectedForm("Signup")}>
                    Signup
                </div>
            </div>
            {selectedForm === "Login" ? <Login /> : <Signup />}
        </div>
    );
}

export default LoginSignup;