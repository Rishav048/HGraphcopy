import React from "react";
import { Link } from "react-router-dom";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import darkArrowIcon from "../../../../assets/images/icons/icon-dark-long-arrow.svg";
import trustedLogo from "../../../../assets/images/icons/icon-trusted-shield.svg";
import cloudIcon from "../../../../assets/images/icons/icon-download-cloud.svg";
import backgroundImage from "../../../../assets/images/successpage-background.svg";

export default function PackagingQRSuccess() {
  return (
    <div className="paye-layout">
      <PageList />
      <div className="pb-0 content-layout">
        <Navbar />
        <div className="outer-container">
          <a href="/inventory-view">
            <span className="dashboard_header">
              View Inventory
              <img className="dark_r_arrow" src={darkArrowIcon} alt="arrow" />
            </span>
          </a>
          <div className="content">
            <div className="success-heading1">Inventory Saved</div>
            <div className="success-heading2">Successfully!</div>
            <div className="success-card inventory-success">
              <div className="text-white sec">
                <div>
                  <span className="sc_title fz16">Inventory ID:</span>
                  <span className="sc_value fz16">0c8970BFG</span>
                </div>
                <div>
                  <span className="sc_title fz16">Brand Name:</span>
                  <button className="brnd_btn fz16">HOB</button>
                  <img
                    className="trusted_sheild"
                    src={trustedLogo}
                    alt="trusted_logo"
                  />
                </div>
                <div>
                  <span className="sc_title fz16">Total Inventory items:</span>
                  <span className="sc_value fz16">300</span>
                </div>
                <button className="download-btn dwnld_btn">
                  <img src={cloudIcon} alt="Download_button" />
                </button>
              </div>
            </div>
            <img
              className="success_bg"
              src={backgroundImage}
              alt="BackgroungImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
