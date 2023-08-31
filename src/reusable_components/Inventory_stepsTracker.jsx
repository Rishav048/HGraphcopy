import React from "react";
import { Link } from "react-router-dom";
import gradLeafIcon from "../assets/images/icons/icon-grad-leaf.svg";
import cartonColoredIcon from "../assets/images/icons/icon-carton-colored.svg";
import warehouseIcon from "../assets/images/icons/warehouse-icon.svg";
import ownerDetailsIcon from "../assets/images/icons/owner-details-icon.svg";
import transportIcon from "../assets/images/icons/transport-icon.svg";
import curvedArrowIcon from "../assets/images/icons/icon-curved-arrow.svg";
import gradArrowIcon from "../assets/images/icons/icon-grad-arrow.svg";
import exclamatoryIcon from "../assets/images/icons/exclamatory-icon.svg";

function InventoryStepsTracker({ buttonText, stepperActiveLayout, route }) {
  const {
    step1,
    step2,
    step3,
    step4,
    sub_step1,
    sub_step2,
    sub_step4,
    packagingType,
    basic_pakagingDetails,
    addProducts,
    warehouseType,
    basic_warehouseDetails,
    logisticType,
    basic_logisticDetails,
  } = stepperActiveLayout;

  return (
    <>
      <div className="block-wavy-dark product-screen__graphics overflow-auto">
        <div className="dark-block-content">
          <h3 className="fz24 mb-0 fw600 gradientText--radial">
            <img src={gradLeafIcon} alt="" />
            <span>Inventory Management</span>
          </h3>
          <p className="fz12 text-white">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy.
          </p>

          <div
            className={`right-stepper position-relative  ${
              step4 && sub_step4 ? "right-stepper-modified" : ""
            }`}
          >
            <div className="dot"></div>
            <div className="steps steps-wrapper steps-modified">
              <ul className="mb-0 list-inline fz12">
                <li>
                  <div className={`li-wrapper step ${step1 ? "active" : ""}`}>
                    <div className="horizontal-line"></div>
                    <div className="vertical-line"></div>
                    <div className="w-100 completed">
                      <div className="status mb-0">
                        <img
                          src={cartonColoredIcon}
                          alt=""
                          className="status__completion"
                        />
                        <div className="stepper-head">
                          <p className="m-0 fw400 fz12">Step 1</p>
                          <p className="m-0 mb-0 fw400 fz12 stepper-heading">
                            Packaging Details.
                          </p>
                        </div>
                      </div>
                      <div className="fw400 text stepper-details">
                        <span>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`li-bottom ${
                      !step1 || !sub_step1 ? "hide-me" : ""
                    }`}
                  >
                    <div
                      className={`li-bottom-child ${
                        sub_step1 && !packagingType ? "step" : ""
                      }`}
                    >
                      <img src={curvedArrowIcon} alt="side-curve-arrow" />
                      <span className="fz12 gradientText--radial">
                        Packaging Type
                      </span>
                    </div>
                    <div
                      className={`li-bottom-child ${
                        sub_step1 && !basic_pakagingDetails ? "step" : ""
                      }`}
                    >
                      <img src={gradArrowIcon} alt="arrow" />
                      <span className="fz12 gradientText--radial">
                        Basic Packaging Details
                      </span>
                    </div>
                    <div
                      className={`li-bottom-child ${
                        sub_step1 && !addProducts ? "step" : ""
                      }`}
                    >
                      <img src={gradArrowIcon} alt="arrow" />
                      <span className="fz12 gradientText--radial">
                        Add Products
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={`li-wrapper step ${step2 ? "active" : ""}`}>
                    <div className="horizontal-line"></div>
                    <div className="vertical-line"></div>
                    <div className="w-100">
                      <div className="status mb-0">
                        <img
                          src={warehouseIcon}
                          alt=""
                          className="status__completion"
                        />
                        <div className="stepper-head">
                          <p className="m-0 fw400 fz12">Step 2</p>
                          <p className="m-0 mb-0 fw400 fz12">
                            Warehouse Details.
                          </p>
                        </div>
                      </div>
                      <div className="fw400 text stepper-details">
                        <span>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`li-bottom ${
                      !step2 || !sub_step2 ? "hide-me" : ""
                    }`}
                  >
                    <div
                      className={`li-bottom-child ${
                        sub_step2 && !warehouseType ? "step" : ""
                      }`}
                    >
                      <img src={curvedArrowIcon} alt="side-curve-arrow" />
                      <span className="fz12 gradientText--radial">
                        Warehouse Type
                      </span>
                    </div>
                    <div
                      className={`li-bottom-child ${
                        sub_step2 && !basic_warehouseDetails ? "step" : ""
                      }`}
                    >
                      <img src={gradArrowIcon} alt="arrow" />
                      <span className="fz12 gradientText--radial">
                        Basic Warehouse Details
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={`li-wrapper step ${step3 ? "active" : ""}`}>
                    <div className="horizontal-line"></div>
                    <div className="vertical-line"></div>
                    <div className="w-100 completed">
                      <div className="status mb-0">
                        <img
                          src={ownerDetailsIcon}
                          alt=""
                          className="status__completion"
                        />
                        <div className="stepper-head">
                          <p className="m-0 fw400 fz12">Step 3</p>
                          <p className="m-0 mb-0 fw500 fz12 ">
                            Next Owner Details.
                          </p>
                        </div>
                      </div>
                      <div className="fw400 text stepper-details">
                        <span>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy.
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={`li-wrapper step ${step4 ? "active" : ""}`}>
                    <div className="horizontal-line"></div>
                    <div className="vertical-line"></div>
                    <div className="w-100 completed">
                      <div className="status mb-0">
                        <img
                          src={transportIcon}
                          alt=""
                          className="status__completion"
                        />
                        <div className="stepper-head">
                          <p className="m-0 fw400 fz12">Step 4</p>
                          <p className="m-0 mb-0 fw500 fz12 gradientText--radial">
                            Transportaion Details.
                          </p>
                        </div>
                      </div>
                      <div className="fw400 text stepper-details">
                        <span>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`li-bottom ${
                      !step4 || !sub_step4 ? "hide-me" : ""
                    }`}
                  >
                    <div
                      className={`li-bottom-child ${
                        sub_step4 && !logisticType ? "step" : ""
                      }`}
                    >
                      <img src={curvedArrowIcon} alt="side-curve-arrow" />
                      <span className="fz12 gradientText--radial">
                        Logistic Type
                      </span>
                    </div>
                    <div
                      className={`li-bottom-child ${
                        sub_step4 && !basic_logisticDetails ? "step" : ""
                      }`}
                    >
                      <img src={gradArrowIcon} alt="arrow" />
                      <span className="fz12 gradientText--radial">
                        Basic logistic Details
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cta-row d-flex g-3">
          <button
            className="btn btn-cta--outlined"
            data-bs-toggle="modal"
            data-bs-target="#sureModal"
          >
            <div className="fw400 fz14">
              <div className="gradientText--radial">
                <span>Cancel Process</span>
              </div>
            </div>
          </button>
          <Link to={route} className="btn btn-cta--outlined">
            <div className="fw400 fz14">
              <div className="gradientText--radial">
                <span>{buttonText}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Modal */}

      <div
        className="modal fade"
        id="sureModal"
        tabIndex="-1"
        aria-labelledby="sureModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="border-0 modal-content">
            <div className="modal_wrapper border-white-2 bdrs10 main-shadow">
              <div className="main-block">
                <div className="content-inner">
                  <img src={exclamatoryIcon} alt="" className="mx-auto" />

                  <div className="inner-text">
                    <h3 className="fz60 fw300">Are You Sure!</h3>
                    <p className="fz46 mb-0 lh-1 fw600">
                      You want to cancel the process?
                    </p>
                  </div>

                  <div className="btn-row">
                    <button
                      data-bs-dismiss="modal"
                      className="btn my-2 fz14 bdrs10 btn-dark-outlined black-default"
                    >
                      <span className="fz14 gradientText--radial fw400">
                        No!
                      </span>
                    </button>

                    <a
                      href="/dashboard"
                      className="btn my-2 fz14 bdrs10 btn-dark-outlined modal-confirm-btn"
                    >
                      <span className="fz14">Yes</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InventoryStepsTracker;
