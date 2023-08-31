import React from "react";
import { Link } from "react-router-dom";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import darkLongArrowIcon from "../../../../assets/images/icons/icon-dark-long-arrow.svg";
import barCodeIcon from "../../../../assets/images/Bar_code.svg";
import trustedShieldIcon from "../../../../assets/images/icons/icon-trusted-shield.svg";
import downloadCloudIcon from "../../../../assets/images/icons/icon-download-cloud.svg";
import successPageBackground from "../../../../assets/images/successpage-background.svg";
export default function PackagingQRSuccess() {
  return (
    <div className="paye-layout">
      <PageList />
      <div className="pb-0 content-layout">
        <Navbar />
        {/* <div className="outer-container">
          <Link to="/inventory-view">
            <span className="dashboard_header">
              View Inventory
              <img
                className="dark_r_arrow"
                src={iconDarkLongArrow}
                alt="arrow"
              />
            </span>
          </Link>
          <div className="content">
            <div className="mb-2 success-heading1">New Package Created</div>
            <div className="success-heading2">Successfully!</div>
            <div className="success-card success-card-overridden">
              <div className="fir">
                <img src={barcodeImage} alt="barcode" />
              </div>
              <div className="text-white sec">
                <div>
                  <span className="sc_title">Package ID:</span>
                  <span className="sc_value">0c8970BFG</span>
                </div>
                <div>
                  <span className="sc_title">Total Inventory items: </span>
                  <span className="sc_value">300k</span>
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
                <button className="download-btn dwnld_btn dwnld_btn-modified">
                  <img src={iconDownloadCloud} alt="Download_button" />
                </button>
              </div>
              <div className="btnGroup position-absolute adjust-btn">
                <Link
                  to="/warehouse-types"
                  className="me-1 btn btn-cta--outlined"
                >
                  <div className="fw400 fz14">
                    <div className="gradientText--radial">
                      <span>Next</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <img
              className="success_bg"
              src={successBackgroundImage}
              alt="BackgroundImage"
            />
          </div>
        </div> */}
        <div className="outer-container">
          <a href="/inventory-view">
            <span className="dashboard_header">
              View Inventory
              <img
                className="dark_r_arrow"
                src={darkLongArrowIcon}
                alt="arrow"
              />
            </span>
          </a>
          <div className="content">
            <div className="mb-2 success-heading1">New Package Created</div>
            <div className="success-heading2">Successfully!</div>
            <div className="success-card success-card-overidden">
              <div className="fir">
                <img src={barCodeIcon} alt="barcode" />
              </div>
              <div className="text-white sec">
                <div>
                  <span className="sc_title">Package ID:</span>
                  <span className="sc_value">0c8970BFG</span>
                </div>
                <div>
                  <span className="sc_title">Total Inventory items: </span>
                  <span className="sc_value">300k</span>
                </div>
                <div>
                  <span className="sc_title">Brand Name:</span>
                  <button className="brnd_btn">HOB</button>
                  <img
                    className="trusted_sheild"
                    src={trustedShieldIcon}
                    alt="trusted_logo"
                  />
                </div>
                <button className="download-btn dwnld_btn dwnld_btn-modified">
                  <img src={downloadCloudIcon} alt="Download_button" />
                </button>
              </div>
              <div className="btnGroup position-absolute adjust-btn">
                <Link
                  to="/warehouse-types"
                  className="me-1 btn btn-cta--outlined"
                >
                  <div className="fw400 fz14">
                    <div className="gradientText--radial">
                      <span>Next</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <img
              className="success_bg"
              src={successPageBackground}
              alt="BackgroundImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
