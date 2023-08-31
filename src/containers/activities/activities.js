import React, { useEffect } from "react";
import PageList from "../../reusable_components/pageList";
import Navbar from "../../layouts/navbar";
import BottomNavbar from "../../layouts/bottomNavbar";
import gradLeaf from "../../assets/images/icons/icon-grad-leaf.svg";
import calendar from "../../assets/images/icons/icon-calendar.svg";
import newProduct from "../../assets/images/icons/new-product.svg";
import arrow from "../../assets/images/icons/icon-arrow.svg";
import locationMarker from "../../assets/images/icons/icon-location-marker.svg";
import scan from "../../assets/images/icons/scan-icon.svg";
import cartonBox from "../../assets/images/icons/carton-box.svg";
import request from "../../assets/images/icons/request-icon.svg";
import carton from "../../assets/images/icons/icon-carton.svg";
import veryLongArrow from "../../assets/images/icons/icon-very-long-arrow.svg";
import illustration from "../../assets/images/activities-illustration.svg";

export default function Activities() {
  useEffect(() => {
    let script = document.createElement("script");
    script.id = "scriptId";
    script.src = "/assets/scripts/datepicker.js";
    document.body.append(script);

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
          <div className="product-screen__form">
            <div className="block-wavy-dark page-desc-content page-desc-content-noImage activity-topbar">
              <div className="left">
                <h3 className="mb-0 d-inline-flex gradientText--radial">
                  <img src={gradLeaf} alt="" />
                  <span className="ms-1 fw600 fz24">Activities</span>
                </h3>
                <p className="fz12 mb-0 text-white">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>

              <div className="btn-top-group">
                <button
                  id="datepicker-btn-index-01"
                  className="position-relative btn btn-fab btn-fab--pink"
                  type="button"
                >
                  <img src={calendar} alt="" />
                </button>
                <div
                  id="datepicker-container-index-01"
                  className="wrapper_datepicker"
                ></div>
              </div>
            </div>
            <div className="mt-3 border-white-2 bdrs10 block-widget block-widget--activities">
              <div className="p-2 date-time fz14 fw400">
                01-June-2023 | 03hr:55min (EST)
              </div>
              <div className="row g-3 mt-2 cards-holder">
                <div className="col-12 col-lg-6">
                  <div className="p-0 border-white-2 main-shadow bdrs10 block-widget block-widget--onHoverGradient">
                    <div className="inside-content">
                      <div className="d-flex mb-2">
                        <div className="d-flex justifty-content-center layer">
                          <div className="btn-top-group">
                            <button
                              className="btn btn-fab btn-fab--blue"
                              type="button"
                            >
                              <img src={newProduct} alt="" />
                            </button>
                          </div>
                          <div className="fz14 fw600">
                            New Product Added
                            <img
                              src={arrow}
                              alt=""
                              className="activities-card-arrow"
                            />
                          </div>
                        </div>
                        <div className="ms-auto">
                          <button className="btn btn-solid--dark tracking-activity">
                            <img src={locationMarker} alt="" />
                            <div className="fw600 fz14 gradientText--radial text">
                              <span>Track This Product</span>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="activities-content">
                        <div className="list-unstyled detail-cards">
                          <div className="card-inner">
                            <div className="fz12 card__text">
                              <div className="text-pair">
                                <div className="label">Product ID:</div>
                                <div className="fw600 value">
                                  <img src={scan} alt="" />
                                  0c8970BFG
                                </div>
                              </div>
                              <div className="text-pair">
                                <div className="label">Brand className:</div>
                                <div className="fw600 value">
                                  <div className="brnd_btn_black">
                                    <span>HOB</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-pair">
                                <div className="label">Product className:</div>
                                <div className="fw600 value">
                                  HOB - WATCH - 0x...
                                </div>
                              </div>
                              <div className="text-pair">
                                <div className="label">Status:</div>
                                <div className="fw600 value">
                                  <span className="td-status td-status--active">
                                    <span className="fz12 fw400">Active</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="p-0 border-white-2 main-shadow bdrs10 block-widget block-widget--onHoverGradient">
                    <div className="inside-content">
                      <div className="d-flex mb-2">
                        <div className="d-flex justifty-content-center layer">
                          <div className="btn-top-group">
                            <button
                              className="btn btn-fab btn-fab--green"
                              type="button"
                            >
                              <img src={cartonBox} alt="" />
                            </button>
                          </div>
                          <div className="fz14 fw600">
                            Inventory Created
                            <img
                              src={arrow}
                              alt=""
                              className="activities-card-arrow"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="activities-content">
                        <div className="list-unstyled detail-cards">
                          <div className="card-inner">
                            <div className="fz12 card__text">
                              <div className="text-pair">
                                <div className="label">Inventory ID:</div>
                                <div className="fw600 value">
                                  <img src={scan} alt="" />
                                  0c8970BFG
                                </div>
                              </div>
                              <div className="text-pair">
                                <div className="label">Brand className:</div>
                                <div className="fw600 value">
                                  <div className="brnd_btn_black">
                                    <span>HOB</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-pair">
                                <div className="label">Inventory level:</div>
                                <div className="fw600 value">Level 3</div>
                              </div>
                              <div className="text-pair">
                                <div className="label">Status:</div>
                                <div className="fw600 value">
                                  <span className="td-status td-status--active">
                                    <span className="fz12 fw400">Active</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="p-0 border-white-2 main-shadow bdrs10 block-widget block-widget--onHoverGradient">
                    <div className="inside-content">
                      <div className="d-flex mb-2">
                        <div className="d-flex justifty-content-center layer">
                          <div className="btn-top-group">
                            <button
                              className="btn btn-fab btn-fab--pink"
                              type="button"
                            >
                              <img src={carton} alt="" />
                            </button>
                          </div>
                          <div className="fz14 fw600">
                            Bulk Product Uploaded
                            <img
                              src={arrow}
                              alt=""
                              className="activities-card-arrow"
                            />
                          </div>
                        </div>
                        <div className="ms-auto">
                          <button className="btn btn-solid--dark tracking-activity">
                            <div className="fw600 fz14 gradientText--radial text">
                              <span>View Products</span>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="activities-content">
                        <div className="list-unstyled detail-cards">
                          <div className="card-inner">
                            <div className="fz12 card__text">
                              <div className="text-pair">
                                <div className="label">Product Count:</div>
                                <div className="fw600 value">500</div>
                              </div>
                              <div className="text-pair">
                                <div className="label">Brand className:</div>
                                <div className="fw600 value">
                                  <div className="brnd_btn_black">
                                    <span>HOB</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-pair">
                                <div className="label">Status:</div>
                                <div className="fw600 value">
                                  <span className="td-status td-status--active">
                                    <span className="fz12 fw400">Active</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="p-0 border-white-2 main-shadow bdrs10 block-widget block-widget--onHoverGradient">
                    <div className="inside-content">
                      <div className="d-flex mb-2">
                        <div className="d-flex justifty-content-center layer">
                          <div className="btn-top-group">
                            <button
                              className="btn btn-fab btn-fab--peach"
                              type="button"
                            >
                              <img src={request} alt="" />
                            </button>
                          </div>
                          <div className="fz14 fw600">
                            Ownership Request sent
                            <img
                              src={arrow}
                              alt=""
                              className="activities-card-arrow"
                            />
                          </div>
                        </div>
                        <div className="ms-auto">
                          <button className="btn btn-solid--dark tracking-activity">
                            <div className="fw600 fz14 gradientText--radial text">
                              <span>View Status</span>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="activities-content">
                        <div className="list-unstyled detail-cards">
                          <div className="card-inner">
                            <div className="fz12 card__text">
                              <div className="text-pair">
                                <div className="label">Product Id:</div>
                                <div className="fw600 value">
                                  Ocjfhvkphiy708k
                                </div>
                              </div>
                              <div className="text-pair">
                                <div className="label">Brand className:</div>
                                <div className="fw600 value">
                                  <div className="brnd_btn_black">
                                    <span>HOB</span>
                                  </div>
                                </div>
                              </div>
                              <div className="text-pair">
                                <div className="label">Status:</div>
                                <div className="fw600 value">
                                  <span className="td-status td-status--active">
                                    <span className="fz12 fw400">
                                      Johnsmith@example.com
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-6">
                  <div className="p-0 border-white-2 main-shadow bdrs10 block-widget block-widget--onHoverGradient">
                    <div className="inside-content">
                      <div className="d-flex mb-2">
                        <div className="d-flex justifty-content-center layer">
                          <div className="btn-top-group">
                            <button
                              className="btn btn-fab btn-fab--pink"
                              type="button"
                            >
                              <img src={carton} alt="" />
                            </button>
                          </div>
                          <div className="fz14 fw600">
                            Ownership Request sent
                            <img
                              src={arrow}
                              alt=""
                              className="activities-card-arrow"
                            />
                          </div>
                        </div>
                        <div className="ms-auto">
                          <button className="btn btn-solid--dark tracking-activity">
                            <div className="fw600 fz14 gradientText--radial text">
                              <span>View Status</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block-wavy-dark product-screen__graphics activities-screen-graphics">
            <div className="dark-block-content">
              <h3 className="fz24 mb-0 fw600 gradientText--radial">
                <img src={gradLeaf} alt="" />
                <span>Tracking is never been that easy!</span>
              </h3>
              <p className="fz12 mb-0 text-white">
                Learn More
                <img src={veryLongArrow} alt="" />
              </p>
            </div>
            <div className="activities-right-image">
              <img className="mx-auto" src={illustration} alt="" />
            </div>
          </div>
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
