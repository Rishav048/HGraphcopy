import React, { useEffect } from "react";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import locationMarkerIcon from "../../../../assets/images/icons/icon-location-marker.svg"; 
import plusIcon from "../../../../assets/images/icons/icon-plus.svg"; 

import InventoryStepsTracker from "../../../../reusable_components/Inventory_stepsTracker";

// Maintainig Stepper layout Active/Blurr
const stepperActiveLayout = {
  step1: true,
  step2: true,
  step3: true,
  step4: true,
  sub_step1: false,
  sub_step2: false,
  sub_step4: true,
  packagingType: false,
  basic_pakagingDetails: false,
  addProducts: false,
  warehouseType: false,
  basic_warehouseDetails: false,
  logisticType: true,
  basic_logisticDetails: true,
};

export default function TransportationModes() {
  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />

        <section className="product-screen">
          <div className="w-100 border-white-2 bdrs10 main-shadow block-widget product-screen__form">
            <div className="mb-1">
              <h6 className="mb-1 fz20 fw700">Transportation Mode</h6>
              <span className="fz16">Select source of transportation</span>
            </div>
            <form action="" className="mt-4 holograf-form">
              <div className="upper-card-row">
                <div className="card-item bg-img1">
                  <label className="fw600 fz12 card-top-checkbox-bl">
                    <input checked type="checkbox" />
                    <span className="checkbox-icon-bl"></span>
                  </label>
                  <div className="fw400 gradientText fz14 in-content">
                    <h5 className="mb-0 gradientText--radial fw700 fz18">
                      By Air
                    </h5>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh
                  </div>
                </div>
                <div className="card-item bg-img2">
                  <label className="fw600 fz12 card-top-checkbox-bl">
                    <input checked type="checkbox" />
                    <span className="checkbox-icon-bl"></span>
                  </label>
                  <div className="fw400 gradientText fz14 in-content">
                    <h5 className="mb-0 gradientText--radial fw700 fz18">
                      By Land
                    </h5>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh
                  </div>
                </div>
                <div className="card-item bg-img3">
                  <label className="fw600 fz12 card-top-checkbox-bl">
                    <input checked type="checkbox" />
                    <span className="checkbox-icon-bl"></span>
                  </label>
                  <div className="fw400 gradientText fz14 in-content">
                    <h5 className="mb-0 gradientText--radial fw700 fz18">
                      By Sea
                    </h5>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="" className="fw500 fz14 label">
                      Departure Time
                    </label>
                    <input
                      type="text"
                      className="fz12 fst-italic grayText form-control"
                      placeholder="01 - 23 - 67"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="" className="fw500 fz14 label">
                      Transit Time
                    </label>
                    <input
                      type="text"
                      className="fz12 fst-italic grayText form-control"
                      placeholder="eg 100,200"
                    />
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-12">
                  <div className="position-relative form-group">
                    <label htmlFor="" className="fw500 fz14 label">
                      Delivery Address
                    </label>
                    <div className="position-absolute upload-click">
                      <button className="position-relative btn btn-fab btn-fab--dark">
                        <img
                          className="locotion-img"
                          src={locationMarkerIcon}
                          alt=""
                        />
                      </button>
                    </div>
                    <input
                      type="tel"
                      className="fz12 fst-italic grayText form-control"
                      placeholder="Add delivery address or fetch location"
                    />
                  </div>
                </div>
              </div>
              <div className="dashed-Route-dtails-div">
                <span className="fz20 fw700">Route Details</span>
                <div className="fw500 fz14 right-sec">
                  Add Intermediate Points
                  <div className="main-shadow bg-white icon-wrap">
                    <img src={plusIcon} alt="cart" className="cart-image" />
                  </div>
                </div>
              </div>
            </form>
            <div className="side-bordered-dashed-div">
              <div className="st-end-sec">
                <span className="fz14 fw500 point-tag">Starting Point</span>
                <div className="arrow-to-box"></div>
                <div className="pt-0 bdrs10 border-white-2 time-fields">
                  <div className="arrow-tip"></div>
                  <div className="form-group holograf-form">
                    <input
                      type="tel"
                      className="fz12 fst-italic grayText form-control"
                      placeholder="Name Your Route"
                    />
                  </div>
                  <div className="position-relative form-group holograf-form">
                    <div className="position-absolute upload-click">
                      <button className="position-relative btn btn-fab btn-fab--dark">
                        <img
                          className="locotion-img"
                          src={locationMarkerIcon}
                          alt=""
                        />
                      </button>
                    </div>
                    <input
                      type="tel"
                      className="fz12 fst-italic grayText form-control"
                      placeholder="Add or fetch location of your route"
                    />
                  </div>
                </div>
              </div>
              <div className="st-end-sec">
                <span className="fz14 fw500 point-tag">Ending Point</span>
                <div className="arrow-to-box arrow-to-box-last"></div>
                <div className="pt-0 bdrs10 border-white-2 time-fields">
                  <div className="arrow-tip"></div>
                  <div className="form-group holograf-form">
                    <input
                      type="tel"
                      className="fz12 fst-italic grayText form-control"
                      placeholder="Name Your Route"
                    />
                  </div>
                  <div className="position-relative form-group holograf-form">
                    <div className="position-absolute upload-click">
                      <button className="position-relative btn btn-fab btn-fab--dark">
                        <img
                          className="locotion-img"
                          src={locationMarkerIcon}
                          alt=""
                        />
                      </button>
                    </div>
                    <input
                      type="tel"
                      className="fz12 fst-italic grayText form-control"
                      placeholder="Add or fetch location of your route"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InventoryStepsTracker
            buttonText={"Next"}
            stepperActiveLayout={stepperActiveLayout}
            route={"/inventory-preview"}
          />
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
