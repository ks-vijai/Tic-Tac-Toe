import React from "react";
import "../styles/style.css";

/**
 * This function returns the profile card component
 *
 * @param {string} { playerName } - Player Name
 * @param {string} { playerScore } - Current Score of Player
 *
 * @return {component} - Player Profile Card Component
 */
function ProfileCard({ playerName, playerScore }) {
  return (
    <div className="profile-card">
      <div className="profile-content">
        <div>
          <img
            src={require(`../../images/player${playerName}.jpg`)}
            className="profile-image"
            alt="Profile"
          />
        </div>
        <div className="player-name">Player {playerName}</div>
        <div className="player-score">Score : {playerScore}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
