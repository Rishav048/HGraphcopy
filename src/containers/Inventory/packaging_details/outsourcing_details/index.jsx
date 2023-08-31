import React, { useEffect } from "react";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import locationMarkerIcon from "../../../../assets/images/icons/icon-location-marker.svg";
import InventoryStepsTracker from "../../../../reusable_components/Inventory_stepsTracker";

// Maintainig Stepper layout Active/Blurr
const stepperActiveLayout = {
  step1: true,
  step2: false,
  step3: false,
  step4: false,
  sub_step1: true,
  sub_step2: false,
  sub_step4: false,
  packagingType: true,
  basic_pakagingDetails: true,
  addProducts: true,
  warehouseType: false,
  basic_warehouseDetails: false,
  logisticType: false,
  basic_logisticDetails: false,
};

export default function PackagingOuterSourcingDetails() {
  useEffect(() => {
    let scriptck = document.createElement("script");
    scriptck.id = "ckeditorid";
    scriptck.src = "/assets/scripts/ckeditor.js";
    document.body.append(scriptck);
  }, []);
  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />
        <section className="product-screen">
          <div className="w-100 border-white-2 bdrs10 main-shadow block-widget product-screen__form">
            <div className="mb-1">
              <h6 className="mb-1 fz20 fw700">Add outsourcing details</h6>
              <span className="fz16">
                Tell us about your logistic details like company name, address,
                location.
              </span>
            </div>
            <form action="" className="mt-4 holograf-form">
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="" className="fw500 fz14 label">
                      Company Full Name
                    </label>
                    <input
                      type="text"
                      className="fz12 fst-italic grayText form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="" className="fw500 fz14 label">
                      Company URL
                    </label>
                    <input
                      type="url"
                      className="fz12 fst-italic grayText form-control"
                      placeholder="http://"
                    />
                  </div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="" className="fw500 fz14 label">
                      Contact Information
                    </label>
                    <input
                      type="tel"
                      className="fz12 fst-italic grayText form-control"
                      placeholder="1800 0900 9000"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="" className="fw500 fz14 label">
                      Company verification
                    </label>
                    <input
                      type="tel"
                      className="fz12 fst-italic grayText form-control"
                      placeholder="1800 0900 9000"
                    />
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-12">
                  <div className="position-relative form-group">
                    <label htmlFor="" className="fw500 fz14 label">
                      Company Location
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
                      placeholder="Write company location or fetch from map"
                    />
                  </div>
                </div>
              </div>

              <div className="fz14 ckeditorSection">
                <h6 className="fz20 mb-2 fw700">
                  Detail Information.{" "}
                  <span className="fz16 fw400">(if any)</span>
                </h6>
                <div id="editorTnc"></div>
              </div>
            </form>
          </div>
          <InventoryStepsTracker
            buttonText={"Next"}
            stepperActiveLayout={stepperActiveLayout}
            route={"/pakaging-basic-details"}
          />
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
