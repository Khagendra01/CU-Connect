import React from "react";
import "../styles/Feedback.css"; // Import the CSS file for styling

function Feedback() {
  return (
    <div className="feed-main">
      <div className="feedback-container">
        <h1 className="feedback-title">Feedback</h1>
        <p className="feedback-description">
          These are the area where you seemed to be weak and you can work on it.
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="feedback" className="form-label">
              Your Feedback:
            </label>
          </div>
          <button type="submit" className="submit-button">
            Practice now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
