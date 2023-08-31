import React from "react";
import Navbar from "../../../../../layouts/navbar";
import PageList from "../../../../../reusable_components/pageList";
import darkLongArrow from "../../../../../assets/images/icons/icon-dark-long-arrow.svg";
import successPage from "../../../../../assets/images/successpage-background.svg";
import { Link } from "react-router-dom";

export default function GenerateBatchIOT() {
  return (
    <div className="paye-layout">
      <PageList />
      <div className="pb-0 content-layout">
        <Navbar />
        <div className="outer-container">
          <a href="/single-product-listings">
            <span className="dashboard_header">
              View Products
              <img className="dark_r_arrow" src={darkLongArrow} alt="arrow" />
            </span>
          </a>
          <div className="pb-0 content content--successCSV">
            <div className="success-heading1">200 Products Tagged</div>
            <div className="success-heading2 mb-0">Successfully!</div>
            <img
              className="success_bg"
              src={successPage}
              alt="BackgroungImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
