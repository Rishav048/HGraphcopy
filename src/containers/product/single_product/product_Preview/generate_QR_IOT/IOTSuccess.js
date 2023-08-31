import React from "react";
import PageList from "../../../../../reusable_components/pageList";
import Navbar from "../../../../../layouts/navbar";
import darkLongArrow from "../../../../../assets/images/icons/icon-dark-long-arrow.svg";
import rfid from "../../../../../assets/images/rfid-image.svg";
import trustedShield from "../../../../../assets/images/icons/icon-trusted-shield.svg";
import successpage from "../../../../../assets/images/successpage-background.svg";
import { Link } from "react-router-dom";

export default function IOTSuccess() {
  return (
    <div class="paye-layout">
      <PageList />
      <div className="pb-0 content-layout">
        <Navbar />
        <div className="outer-container">
          <a href="/single-product-listings">
            <span className="dashboard_header">
              View Product
              <img className="dark_r_arrow" src={darkLongArrow} alt="arrow" />
            </span>
          </a>
          <div className="content">
            <div className="success-heading1">Product Tagged</div>
            <div className="success-heading2">Successfully!</div>
            <div className="success-card rfid-success">
              <div className="rfid">
                <img src={rfid} alt="barcode" />
              </div>
              <div className="text-white sec">
                <div>
                  <span className="sc_title">NFC/RFID</span>
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
                    src={trustedShield}
                    alt="trusted_logo"
                  />
                </div>
              </div>
            </div>
            <img
              className="success_bg"
              src={successpage}
              alt="BackgroungImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
