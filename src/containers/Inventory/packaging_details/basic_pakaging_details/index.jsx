import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import plusIcon from "../../../../assets/images/icons/icon-plus.svg";
import calendarIcon from "../../../../assets/images/icons/icon-calendar.svg";
import cartonIcon from "../../../../assets/images/icons/icon-carton.svg";
import arrowIcon from "../../../../assets/images/icons/icon-arrow.svg";
import gradBoxIcon from "../../../../assets/images/icons/icon-grad-box.svg";
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
  addProducts: false,
  warehouseType: false,
  basic_warehouseDetails: false,
  logisticType: false,
  basic_logisticDetails: false,
};

export default function BasicPackagingDetails() {
  useEffect(() => {
    let script = document.createElement("script");
    script.id = "scriptId";
    script.src = "/assets/scripts/datepicker.js";
     let scriptck = document.createElement("script");
     scriptck.id = "ckeditorid";
     scriptck.src = "/assets/scripts/ckeditor.js";

     document.body.append(script, scriptck);

    return () => {
      const scriptElement = document.getElementById("scriptId");
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
   
  }, []);
  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />
        <section className="product-screen">
          <div className="w-100 border-white-2 bdrs10 main-shadow block-widget product-screen__form">
            <div className="mb-2">
              <h6 className="mb-1 fz20 fw700">Add basic packaging details</h6>
              <span className="fz16">
                Tell us about your product in detail like, package detail,
                product ingredients, side effect or others...
              </span>
            </div>
            <form action="" className="holograf-form">
              <div className="layer-wapper">
                <div className="position-relative bdrs10 border-white-2 layer-step-gradbg">
                  <label className="fw600 fz12 card-top-checkbox">
                    Selected
                    <input checked type="checkbox" />
                    <span className="checkbox-icon"></span>
                  </label>

                  <div className="ineer-content-box">
                    <div className="g-2 d-flex justifty-content-center layer-modified">
                      <div className="position-relative main-shadow bg-white icon-wrap">
                        <div className="batch-number-pl">
                          <div className="number">
                            <p className="mb-0">1</p>
                          </div>
                        </div>
                        <img
                          src={cartonIcon}
                          alt="cart"
                          className="cart-image"
                        />
                      </div>
                      <div className="level-tag-card">
                        Add level 1 packaging
                        <img src={arrowIcon} alt="" className="layer-arrow" />
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="mb-0 fz12 fw400 details-pl">
                        Add your new product and get QR to secure it well.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bdrs10 layer-steps">
                  <div className="gradientText--radial">
                    Level 2 contains level 1, create level 1 to add level 2
                  </div>
                </div>
                <div className="bdrs10 layer-steps">
                  <div className="fz16 fw500 gradientText--radial">
                    Level 3 contains level 2, create level 2 to add level 3
                  </div>
                </div>
                <div className="border-0 position-relative add-layer-block add-layer">
                  <Link
                    className="bdrs10 w-100 h-100 ts03 clickBtn clickBtn-modified"
                    data-bs-toggle="collapse"
                    to="#layer-add-element"
                    role="button"
                    aria-expanded="false"
                    aria-controls="layer-add-element"
                  >
                    <div className="main-shadow bg-white icon-wrap">
                      <img src={plusIcon} alt="cart" className="cart-image" />
                    </div>
                    <div className="fz14 fw500 text-center">Add New Layer</div>
                    <div>
                      <img src={arrowIcon} alt="" />
                    </div>
                  </Link>
                  <div
                    className="p-0 border-0 position-absolute bg-white layer-description collapse   layer-description-modified"
                    id="layer-add-element"
                  >
                    <ul className="list-inline m-0 layer-list">
                      <li>
                        <Link to="#" className="layer-pair layer-pair-modified">
                          <div className="position-relative main-shadow bg-black icon-wrap">
                            <div className="number-icon">
                              <div className="number">
                                <p className="mb-0">1</p>
                              </div>
                            </div>
                            <img
                              src={gradBoxIcon}
                              alt="cart"
                              className="cart-image"
                            />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="layer-pair layer-pair-modified">
                          <div className="position-relative main-shadow bg-black icon-wrap">
                            <div className="number-icon">
                              <div className="number">
                                <p className="mb-0">2</p>
                              </div>
                            </div>
                            <img
                              src={gradBoxIcon}
                              alt="cart"
                              className="cart-image"
                            />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="layer-pair layer-pair-modified">
                          <div className="position-relative main-shadow bg-black icon-wrap">
                            <div className="number-icon">
                              <div className="number">
                                <p className="mb-0">3</p>
                              </div>
                            </div>
                            <img
                              src={gradBoxIcon}
                              alt="cart"
                              className="cart-image"
                            />
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="layer-pair layer-pair-modified">
                          <div className="position-relative main-shadow bg-black icon-wrap">
                            <div className="number-icon">
                              <div className="number">
                                <p className="mb-0">4</p>
                              </div>
                            </div>
                            <img
                              src={gradBoxIcon}
                              alt="cart"
                              className="cart-image"
                            />
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="" className="fw500 fz14 label">
                      Brand name
                    </label>
                    <input
                      type="text"
                      className="fz12 fst-italic grayText form-control"
                      placeholder="Brand of inventory"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="" className="fw500 fz14 label">
                      Total Products added
                    </label>
                    <input
                      type="tel"
                      className="fz12 fst-italic grayText form-control"
                      placeholder="eg 100,200"
                    />
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label
                      htmlFor="date-picker1-inventorypl02-s2"
                      className="fw500 fz14 label"
                    >
                      Manufacturing date
                    </label>
                    <div className="position-relative date-div">
                      <input
                        id="date-picker1-inventorypl02-s2"
                        type="text"
                        className="fz12 form-control"
                        placeholder="Manufacturing date"
                      />
                      <button
                        type="button"
                        className="position-absolute btn btn-fab btn-fab--pink open-button"
                      >
                        <img src={calendarIcon} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label
                      htmlFor="date-picker2-inventorypl02-s2"
                      className="fw500 fz14 label"
                    >
                      Expiry date
                    </label>
                    <div className="position-relative date-div">
                      <input
                        id="date-picker2-inventorypl02-s2"
                        type="text"
                        className="fz12 form-control"
                        placeholder="Expiry date"
                      />
                      <button
                        type="button"
                        className="position-absolute btn btn-fab btn-fab--pink open-button"
                      >
                        <img src={calendarIcon} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fz14 ckeditorSection">
                <h6 className="mb-1 fz20 fw700">Detail Information.</h6>
                <p className="fz16 mb-2">
                  Tell us about your product in detail like, package detail,
                  product ingredients, side effect or others...
                </p>
                <div id="editorTnc"></div>
              </div>
            </form>
          </div>
          <InventoryStepsTracker
            buttonText={"Next"}
            stepperActiveLayout={stepperActiveLayout}
            route={"/pakaging-details-preview"}
          />
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
