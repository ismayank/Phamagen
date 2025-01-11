import React from "react";
import HomeIcon from "../assets/icons/home.png";
import ChartIcon from "../assets/icons/chart.png";
import SettingsIcon from "../assets/icons/settings.png";
import Logo from "../assets/icons/logo1.png"; // Import the logo image
import "../styles/SideTab.css";

const SideTab = () => {
  return (
    <div className="side-tab">
      <div className="side-tab-logo">
        {/* Logo Section */}
        <img src={Logo} alt="Logo" className="side-tab-logo-image" />
      </div>
      <div className="side-tab-menu">
        {/* Menu Items with Custom Imported Icons */}
        <div className="menu-item">
          <img src={HomeIcon} alt="Home" className="menu-icon" />
        </div>
        <div className="menu-item">
          <img src={ChartIcon} alt="Chart" className="menu-icon" />
        </div>
        <div className="menu-item">
          <img src={SettingsIcon} alt="Settings" className="menu-icon" />
        </div>
      </div>
    </div>
  );
};

export default SideTab;
