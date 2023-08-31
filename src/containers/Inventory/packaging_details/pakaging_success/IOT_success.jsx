import React from "react";
import { Link } from "react-router-dom";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import darkArrowIcon from "../../../../assets/images/icons/icon-dark-long-arrow.svg";
import rfidImage from "../../../../assets/images/rfid-image.svg";
import trustedLogo from "../../../../assets/images/icons/icon-trusted-shield.svg";
import backgroundImage from "../../../../assets/images/successpage-background.svg";

export default function PackagingIOTSuccess() {
  return (
    <div className="paye-layout">
      <PageList />
      <div className="pb-0 content-layout">
        <Navbar />
        <div className="outer-container">
          <a href="/single-product-listings">
            <span className="dashboard_header">
              View Product
              <img className="dark_r_arrow" src={darkArrowIcon} alt="arrow" />
            </span>
          </a>
          <div className="content">
            <div className="success-heading1">Package Tagged</div>
            <div className="success-heading2">Successfully!</div>
            <div className="success-card rfid-success">
              <div className="rfid">
                <img src={rfidImage} alt="barcode" />
              </div>
              <div className="text-white sec">
                <div>
                  <span className="sc_title">Package ID</span>
                  <span className="sc_value">0c8970BFG</span>
                </div>
                <div>
                  <span className="sc_title">Product Name:</span>
                  <span className="sc_value">HOB - WATCH - 0x Model.</span>
                </div>
                <div>
                  <span className="sc_title">Brand Name:</span>
                  <button className="brnd_btn">HOB</button>
                  <img
                    className="trusted_sheild"
                    src={trustedLogo}
                    alt="trusted_logo"
                  />
                </div>
                {/* <button className="download-btn dwnld_btn">
              <img src={cloudIcon} alt="Download_button" />
            </button> */}
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
