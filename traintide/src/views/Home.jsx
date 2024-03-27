import React, {useState, useEffect} from "react";
import './styles/Home.scss';

const NewsSection = () => {
    return (
        <div>
            <h2>News</h2>
            <p>Here are the latest news articles from TrainTide!</p>
        </div>
    );
}

const EventsSection = () => {
    return (
        <div>
            <h2>Upcoming Events</h2>
            <p>Here are the upcoming events from TrainTide!</p>
        </div>
    );
}

const TrainersSection = () => {
    return (
        <div>
            <h2>Featured Trainers</h2>
            <p>Here are the featured trainers from TrainTide!</p>
        </div>
    );
}

const RoutinesSection = () => {
    return (
        <div>
            <h2>Featured Routines</h2>
            <p>Here are the featured routines from TrainTide!</p>
        </div>
    );
}



const Home = () => {

    const [selectedSection, setSelectedSection] = useState("News");
    return (
        <div className="home">
            <h1>Home</h1>
            <p>Welcome to TrainTide!</p>
            <div className="section-selector">
                <div className={`section-option ${selectedSection === "News" ? "selected" : ""}`} onClick={() => setSelectedSection("News")}>
                    News
                </div>
                <div className={`section-option ${selectedSection === "Upcoming Events" ? "selected" : ""}`} onClick={() => setSelectedSection("Upcoming Events")}>
                    Upcoming Events
                </div>
                <div className={`section-option ${selectedSection === "Featured Trainers" ? "selected" : ""}`} onClick={() => setSelectedSection("Featured Trainers")}>
                    Featured Trainers
                </div>
                <div className={`section-option ${selectedSection === "Featured Routines" ? "selected" : ""}`} onClick={() => setSelectedSection("Featured Routines")}>
                    Featured Routines
                </div>
            </div>
            <div className="section-content">
                {selectedSection === "News" && <NewsSection />}
                {selectedSection === "Upcoming Events" && <EventsSection />}
                {selectedSection === "Featured Trainers" && <TrainersSection />}
                {selectedSection === "Featured Routines" && <RoutinesSection />}
            </div>


        </div>
    );
}

export default Home;