import React, { useEffect } from "react";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import locationMarkerIcon from "../../../../assets/images/icons/icon-location-marker.svg";
import dropdownArrowIcon from "../../../../assets/images/icons/icon-dropdown-arrow.svg";
import InventoryStepsTracker from "../../../../reusable_components/Inventory_stepsTracker";
import { Link } from "react-router-dom";

// Maintainig Stepper layout Active/Blurr
const stepperActiveLayout = {
  step1: true,
  step2: true,
  step3: true,
  step4: false,
  sub_step1: false,
  sub_step2: false,
  sub_step4: false,
  packagingType: false,
  basic_pakagingDetails: false,
  addProducts: false,
  warehouseType: true,
  basic_warehouseDetails: false,
  logisticType: false,
  basic_logisticDetails: false,
};

export default function BasicNextOwnerDetails() {
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
              <h6 className="mb-1 fz20 fw700">Add next owner details</h6>
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
                      Owner Full Name
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
                      Owner Email Address
                    </label>
                    <input
                      type="url"
                      className="fz12 fst-italic grayText form-control"
                      placeholder="Email Address"
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
                      Incentives
                    </label>
                    <div className="dropdown">
                      <Link
                        className="position-relative form-control select-div"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="fw400 fz12 grayText fst-italic">
                          Discount - <strong className="text-dark">2%</strong>
                        </span>
                        <div className="position-absolute btn btn-fab btn-fab--green">
                          <img src={dropdownArrowIcon} alt="" />
                        </div>
                      </Link>

                      <div className="w-100 dropdown-menu border-white-2 dropdown-menu-holograf">
                        <ul className="list-inline mb-0 product-type-list">
                          <li>
                            <Link to="#" className="typr-pair">
                              {/* <div className="icon">
            <img src="./assets/images/icons/icon-single-product.svg" alt="" />
          </div> */}
                              <span className="fz14">
                                Discount -{" "}
                                <strong className="text-dark">4%</strong>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="typr-pair active">
                              {/* <div className="icon">
            <img src="./assets/images/icons/icon-multiple-product.svg" alt="" />
          </div> */}
                              <span className="fz14">
                                Discount -{" "}
                                <strong className="text-dark">6%</strong>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="typr-pair">
                              {/* <div className="icon">
            <img src="./assets/images/icons/icon-inventory.svg" alt="" />
          </div> */}
                              <span className="fz14">
                                Discount -{" "}
                                <strong className="text-dark">8%</strong>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="typr-pair">
                              {/* <div className="icon">
            <img src="./assets/images/icons/icon-multiple-inventory.svg" alt="" />
          </div> */}
                              <span className="fz14">
                                Discount -{" "}
                                <strong className="text-dark">10%</strong>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-12">
                  <div className="position-relative form-group">
                    <label htmlFor="" className="fw500 fz14 label">
                      Owner Location
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
                      placeholder="Fetch location or add here"
                    />
                  </div>
                </div>
              </div>
              <div className="fz14 ckeditorSection">
                <h6 className="fz20 mb-2 fw700">
                  Detail Information.{" "}
                  <span className="fz16 fw400">(if any)</span>
                </h6>
                {/* CKEditor component can be added here */}
                <div id="editorTnc"></div>
              </div>
            </form>
          </div>
          <InventoryStepsTracker
            buttonText={"Next"}
            stepperActiveLayout={stepperActiveLayout}
            route={"/transportation-types"}
          />
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
