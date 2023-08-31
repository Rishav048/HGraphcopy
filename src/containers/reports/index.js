import React, { useEffect } from "react";
import PageList from "../../reusable_components/pageList";
import Navbar from "../../layouts/navbar";
import ProductAnalytics from "./productAnalytics";
import BottomNavbar from "../../layouts/bottomNavbar";
import veryLongArrow from "../../assets/images/icons/icon-very-long-arrow.svg";
import gradLeaf from "../../assets/images/icons/icon-grad-leaf.svg";
import downloadCloudGradient from "../../assets/images/icons/icon-download-cloud-gradient.svg";
import calendar from "../../assets/images/icons/icon-calendar.svg";
import SingleListings from "./singleListings";
import { Link } from "react-router-dom";

export default function Report() {
  useEffect(() => {
    let script = document.createElement("script");
    script.id = "scriptId";
    script.src = "/assets/scripts/datepicker.js";
    let script2chart = document.createElement("script");
    script2chart.id = "scriptcharts";
    script2chart.src = "/assets/scripts/charts.js";
    document.body.append(script);
    document.body.append(script2chart);

    return () => {
      const scriptElement = document.getElementById("scriptId");
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
      const scriptElement1 = document.getElementById("scriptcharts");
      if (scriptElement1) {
        document.body.removeChild(scriptElement1);
      }
    };
  }, []);
  return (
    <div class="paye-layout">
      <PageList />
      <div class="content-layout">
        <Navbar />
        <div class="block-wavy-dark page-desc-content page-desc-content-noImage">
          <div class="left">
            <h3 class="mb-0 d-inline-flex gradientText--radial">
              <img src={gradLeaf} alt="" />
              <span class="ms-1 fw600 fz24">Reports</span>
            </h3>
            <p class="fz12 mb-0 text-white">
              <img class="left-arrow-long" src={veryLongArrow} alt="" />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy
            </p>
          </div>

          <div class="btn-top-group">
            <Link to="" class="btn btn-cta--outlined btn-fab-outlined-gradient">
              <div class="fw400 fz14">
                <div class="gradientText--radial">
                  <span>
                    <img src={downloadCloudGradient} alt="" />
                  </span>
                </div>
              </div>
            </Link>

            <button
              id="datepicker-btn-reports-01"
              className="position-relative btn btn-fab btn-fab--pink"
              type="button"
            >
              <img src={calendar} alt="" />
            </button>
            <div
              id="datepicker-container-reports-01"
              className="wrapper_datepicker"
            ></div>
          </div>
        </div>
        <ProductAnalytics />
        <SingleListings />
      </div>
      <BottomNavbar />
    </div>
  );
}
