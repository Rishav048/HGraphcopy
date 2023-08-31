import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import locationMarkerIcon from "../../../../assets/images/icons/icon-location-marker.svg";
import dropdownArrowIcon from "../../../../assets/images/icons/icon-dropdown-arrow.svg";
import InventoryStepsTracker from "../../../../reusable_components/Inventory_stepsTracker";


// Maintainig Stepper layout Active/Blurr
const stepperActiveLayout = {
  step1: true,
  step2: true,
  step3: false,
  step4: false,
  sub_step1: false,
  sub_step2: true,
  sub_step4: false,
  packagingType: false,
  basic_pakagingDetails: false,
  addProducts: false,
  warehouseType: true,
  basic_warehouseDetails: true,
  logisticType: false,
  basic_logisticDetails: false,
};

export default function BasicWarehouseDetails() {
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
              <h6 className="mb-1 fz20 fw700">Add basic Warehouse details</h6>
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
                      Warehouse Full Name
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
                      Warehouse Capacity
                    </label>
                    <div className="dropdown">
                      <Link
                        className="position-relative form-control form-control_updated select-div"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="fw500 fz12"> 100k-300k </span>
                        <div className="position-absolute btn btn-fab btn-fab--green">
                          <img src={dropdownArrowIcon} alt="" />
                        </div>
                      </Link>

                      <ul className="w-100 dropdown-menu dropdown-menu-holograf drop-down-style">
                        <li>
                          <Link className="fz14 dropdown-item" to="#">
                            100k-300k
                          </Link>
                        </li>
                        <li>
                          <Link className="fz14 dropdown-item" to="#">
                            300k-400k
                          </Link>
                        </li>
                        <li>
                          <Link className="fz14 dropdown-item" to="#">
                            400k-500k
                          </Link>
                        </li>
                        <li>
                          <Link className="fz14 dropdown-item" to="#">
                            500k-600k
                          </Link>
                        </li>
                        <li>
                          <Link className="fz14 dropdown-item" to="#">
                            600k-700k
                          </Link>
                        </li>
                        <li>
                          <Link className="fz14 dropdown-item" to="#">
                            700k-800k
                          </Link>
                        </li>
                        <li>
                          <Link className="fz14 dropdown-item" to="#">
                            800k-900k
                          </Link>
                        </li>
                      </ul>
                    </div>
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
                      Warehouse verification(if any)
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
                      type="text"
                      className="fz12 fst-italic grayText form-control"
                      placeholder="Write company location or fetch from map"
                    />
                  </div>
                </div>
              </div>
              <div className="fz14 ckeditorSection">
                <h6 className="fz20 fw700">Detail Information.</h6>
                {/* CKEditor component can be added here */}
                <div id="editorTnc"></div>
              </div>
            </form>
          </div>
          <InventoryStepsTracker
            buttonText={"Next"}
            stepperActiveLayout={stepperActiveLayout}
            route={"/nextowner-basic-details"}
          />
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
