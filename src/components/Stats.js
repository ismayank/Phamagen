import React from "react";
import { FaSearch, FaCalendarAlt } from "react-icons/fa"; // Import icons

import { ReactComponent as PieChart } from "../assets/icons/piechart.svg"; // Import the pie chart SVG
import "../styles/Stats.css";
const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat-box">
        <FaSearch className="search-icon" /> 
        <h3>Searched For</h3>
        <p>Lung Cancer</p>
        <small>
          Searched On:<br />
          <span className="date-highlight">05/12/2024</span>
        </small>
      </div>
      <div className="stat-box">
        <FaCalendarAlt className="calendar-icon" />
        <h3>Start Date End Date</h3>
        <p>
          <span className="date-range">05/12/2024 - 10/12/2024</span>
        </p>
      </div>
      <div className="stat-box">
  <div className="queue-container">
    <div className="queue-item">
      <h3>In Queue</h3>
      <p>
        <span className="queue-number">312</span>
      </p>
    </div>
    <div className="queue-item">
      <h3>Non-English</h3>
      <p>
        <span className="non-english-number">191</span>
      </p>
    </div>
  </div>
  <div className="reviewed">
    <h3>Reviewed</h3>
    <p>
        <span className="queue-number">132</span>
      </p>
  </div>
</div>

      <div className="stat-box">
        <h3>Fetched Data Breakdown</h3>
        <div className="fetched-data-container">
          <div className="fetched-pie">
            <PieChart className="pie-icon" />
          </div>
          <div className="fetched-data">
            <div className="fetched-number">475 Fetched</div>
            <div className="fetched-number">324 AE Suspected</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
