import React from "react";
import './styles/Profile.scss';
const Profile = () => {
    return (
        <div className="profile">
            <div className="profileTop">
                <div className="profileBanner">
                    <img src="https://via.placeholder.com/150" alt="banner" />
                </div>
                <div className="profilePic">
                    <img src="https://via.placeholder.com/150" alt="profile" />
                </div>
            </div>
            <div className="profileInfo">
                <div className="identity">
                    <h1 className="name">John Doe</h1>
                    <h3 className="title">Personal Trainer</h3>
                    <h5 className="gym">Gym Name</h5>
                </div>
                <div className="additional">
                    <p className="stat age">Age: 25</p>
                    <p className="stat location">Location: New York, NY</p>
                    <p className="stat journey">Journey: 1 year</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;