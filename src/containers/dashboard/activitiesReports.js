import React from "react";
import locationMarker from "../../assets/images/icons/icon-location-marker.svg";
import calendar from "../../assets/images/icons/icon-calendar.svg";
import gradLeaf from "../../assets/images/icons/icon-grad-leaf.svg";
import veryLongArrow from "../../assets/images/icons/icon-very-long-arrow.svg";
import arrow from "../../assets/images/icons/icon-arrow.svg";
import veryVeryLongArrow from "../../assets/images/icons/icon-very-very-long-arrow.svg";
import { Link } from "react-router-dom";
export default function ActivitiesReports() {
  return (
    <div className="row mb-4 g-2">
      <div className="col-12 col-lg-6">
        <div className="border-white-2 bdrs10 main-shadow block-widget activity-report-widget">
          <div className="top-row">
            <div className="top-row__left">
              <h3 className="mb-0 fz14 fw500">Recent Activities</h3>
              <p className="mb-0 fst-italic fz12 fw300">
                Report fetch from year 2000-2010
              </p>
            </div>
            <div className="btn-top-group">
              <button
                id="datepicker-btn-index-03"
                className="position-relative btn btn-fab btn-fab--pink"
                type="button"
              >
                <img src={calendar} alt="" />
              </button>
              <div
                id="datepicker-container-index-03"
                className="wrapper_datepicker"
              ></div>
            </div>
          </div>

          <div className="bdrs10 border-white-2 main-shadow plain-card">
            <div className="me-auto fz12 dotted">
              01-June-2023 | 03hr:55min (EST)
            </div>
            <div className="me-auto fz12 small-tag blue-tag">
              New Product Added
            </div>
            <div className="fz14 last-row">
              <div className="left">
                You enlist a new product (
                <span className="fw700">ID# 0cbvgyhhkbhlig00</span> )
              </div>
              <div className="right">
                <Link to="#" className="btn btn-solid--dark">
                  <img src={locationMarker} alt="" />
                  <span className="fw600 fz12 gradientText--radial">
                    <span>Track Product</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="block-wavy-dark dark-card dark-card__left">
            <div className="title">
              <img src={gradLeaf} alt="" />
              <h3 className="fz24 fw600 mb-0 gradientText--radial">
                <span>Upgrade your holograf</span>
              </h3>
            </div>
            <p className="text-white fz12 mb-0">
              Upgrade your profile to enjoy more exciting features of holograf
              community.
            </p>
            <Link to="#" className="fz12 fw500">
              <span className="gradientText--radial">
                <span>Upgrade Now!</span>
              </span>
              <img className="d-inline-block" src={veryLongArrow} alt="" />
            </Link>
          </div>

          <div className="bdrs10 border-white-2 main-shadow plain-card">
            <div className="me-auto fz12 dotted">
              01-June-2023 | 03hr:55min (EST)
            </div>
            <div className="me-auto fz12 small-tag pink-tag">
              Profile: 30% complete
            </div>
            <div className="fz14 last-row">
              <div className="left">
                Complete your profile to verify you product and secure it well.
              </div>
              <div className="right">
                <Link to="#" className="btn btn-solid--dark">
                  <span className="fw600 fz12 gradientText--radial">
                    <span>Complete Profile</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="border-white-2 bdrs10 main-shadow block-widget activity-report-widget">
          <div className="top-row">
            <div className="top-row__left">
              <h3 className="mb-0 fz14 fw500">Reports</h3>
              <p className="mb-0 fst-italic fz12 fw300">
                Report fetch from year 2000-2010
              </p>
            </div>
            <div className="btn-top-group">
              <button
                id="datepicker-btn-index-04"
                className="position-relative btn btn-fab btn-fab--pink"
                type="button"
              >
                <img src={calendar} alt="" />
              </button>
              <div
                id="datepicker-container-index-04"
                className="wrapper_datepicker"
              ></div>
            </div>
          </div>

          <ul className="w-100 m-0 list-inline other-add-links__left listing-block">
            <li>
              <Link
                className="w-100 h-100 border-0 gradient-widget clickBtn"
                to="#"
                role="button"
              >
                <div className="font-secondary lh-1 fz34">1030k</div>
                <div className="fz16 fw500">Total Units</div>
                <p className="fz12">
                  Manage and keep a record of your inventories all along.
                </p>
                <img src={arrow} alt="" />
              </Link>
            </li>
            <li>
              <Link
                className="w-100 h-100 border-0 gradient-widget clickBtn"
                to="#"
                role="button"
              >
                <div className="font-secondary lh-1 fz34">1030k</div>
                <div className="fz16 fw500">Delivered Units</div>
                <p className="fz12">
                  Manage and keep a record of your inventories all along.
                </p>
                <img src={arrow} alt="" />
              </Link>
            </li>
            <li>
              <Link
                className="w-100 h-100 border-0 gradient-widget clickBtn"
                to="#"
                role="button"
              >
                <div className="font-secondary lh-1 fz34">1030k</div>
                <div className="fz16 fw500">Warehouse Units</div>
                <p className="fz12">
                  Manage and keep a record of your inventories all along.
                </p>
                <img src={arrow} alt="" />
              </Link>
            </li>
          </ul>

          <div className="ms-auto">
            <Link to="#" className="btn btn-solid--dark">
              <span className="fw600 fz12 gradientText--radial">
                <span>Complete Profile</span>
              </span>
            </Link>
          </div>

          <Link to="#" className="block-wavy-dark dark-card">
            <div className="title">
              <h3 className="fz18 fw500 mb-0 gradientText--radial">
                <span>Export report</span>
              </h3>
              <img src={veryVeryLongArrow} alt="" />
            </div>
            <p className="text-white fz12 mb-1">
              We offer you to track you product well by providing you reports.
            </p>
            <div className="fz12 fw500">
              <span className="text-uppercase gradientText--radial">
                <span>24mb, pdf</span>
              </span>
              <img className="d-inline-block" src={veryLongArrow} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
