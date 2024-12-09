import React, { useState } from "react";
import "./NBAAthleteProfile.css";

function NBAAthleteProfile() {
  const [athlete, setAthlete] = useState("");
  const [careerDescription, setCareerDescription] = useState(
    "This is a placeholder career description. Update it as needed."
  );
  const [pointsPerGame, setPointsPerGame] = useState("");
  const [fieldGoalPercentage, setFieldGoalPercentage] = useState("");
  const [freeThrowPercentage, setFreeThrowPercentage] = useState("");

  return (
    <div className="container">
      {/* Side Panel */}
      <div className="side-panel">
        <h3>Scoring</h3>
        <div className="input-group">
          <label>
            Points per game:
            <input
              type="number"
              value={pointsPerGame}
              onChange={(e) => setPointsPerGame(e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Field goal %:
            <input
              type="number"
              value={fieldGoalPercentage}
              onChange={(e) => setFieldGoalPercentage(e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Free throw %:
            <input
              type="number"
              value={freeThrowPercentage}
              onChange={(e) => setFreeThrowPercentage(e.target.value)}
            />
          </label>
        </div>
      </div>

      {/* Main Section */}
      <div className="main-section">
        <div className="input-group">
          <label>
            NBA Athlete:
            <input
              type="text"
              value={athlete}
              onChange={(e) => setAthlete(e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Career Description:
            <textarea
              value={careerDescription}
              onChange={(e) => setCareerDescription(e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default NBAAthleteProfile;
