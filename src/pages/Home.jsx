import React from "react";
import "./homeStyles.css"; // Import the styles

const Home = () => {
  return (
    <div className="home-page-full">
      <div className="home-container">
        <h2 className="home-title">Welcome to the OKSE League Tracker</h2>
        <p>
          This is the home page of our Esports League website. Explore the
          exciting world of competitive gaming!
        </p>
      </div>

      <div className="rightSidebarInfo">
        <h2 className="rightSidebarInfo-title">What is Esports?</h2>
        <p>
          Esports is a form of competition using video games. Esports often take
          the form of organized, multiplayer video game competitions,
          particularly between professional players, individually or as teams.
        </p>
        <p>
          Although organized competitions have long been a part of video game
          culture, these were largely between amateurs until the late 2000s,
          when participation by professional gamers and spectatorship in these
          events through live streaming saw a large surge in popularity. By the
          2010s, esports was a significant factor in the video game industry,
          with many game developers actively designing toward a professional
          esports subculture.
        </p>
      </div>
    </div>
  );
};

export default Home;
