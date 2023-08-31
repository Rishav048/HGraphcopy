import React from "react";
import PackageListings from "./packageListings";
import downloadCloudGradient from "../../assets/images/icons/icon-download-cloud-gradient.svg";
import calendar from "../../assets/images/icons/icon-calendar.svg";
import trustedShield from "../../assets/images/icons/icon-trusted-shield.svg";
import locationMarker from "../../assets/images/icons/icon-location-marker.svg";
import barCode from "../../assets/images/barcode-image.svg";
import rfidRastered from "../../assets/images/rfid-rastered-image.svg";
import { Link } from "react-router-dom";

export default function SingleListings() {
  return (
    <section className="mt-3 w-100 listing-cards">
      <div className="row g-3">
        <div className="col-12 col-lg-6">
          <div className="w-100 border-white-2 bdrs10 main-shadow block-widget block-widget--left">
            <div className="top-row">
              <h3 className="mb-0 fz14 fw500">Single Listing</h3>
              <Link to="#" className="list-pair line-active">
                <div className="bdrs10 main-shadow bar"></div>
                <div className="lh-1 text">
                  <div className="font-secondary fw400 fz30 num">1030k</div>
                  <span className="fz12">All Single Products</span>
                </div>
              </Link>
              <Link to="#" className="list-pair">
                <div className="bdrs10 main-shadow bar"></div>
                <div className="lh-1 text">
                  <div className="font-secondary fw400 fz30 num">300</div>
                  <span className="fz12">Active</span>
                </div>
              </Link>
              <Link to="#" className="list-pair">
                <div className="bdrs10 main-shadow bar"></div>
                <div className="lh-1 text">
                  <div className="font-secondary fw400 fz30 num">009</div>
                  <span className="fz12">Draft</span>
                </div>
              </Link>
              <div className="btn-top-group">
                <button className="btn btn-fab btn-fab--dark" type="button">
                  <img src={downloadCloudGradient} alt="" />
                </button>
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

            {/* <!-- When there's no data, use the div below --> */}
            {/* <!-- <div className="noData-detail-cards">
            <h2 className="mb-0 fw300 text-center fz26">
              No Data Found <br />
              <span className="fw600">Add Single product now!</span>
            </h2>
            <img
              src="./assets/images/illustration-question-mark.svg"
              alt=""
            />
          </div> --> */}

            {/* <!-- When there's some data, use the 'ul' below --> */}
            <ul className="list-unstyled detail-cards">
              <li>
                <div className="p-0 border-white-2 main-shadow bdrs10 block-widget block-widget--onHoverGradient card">
                  <div className="card-inner">
                    <div className="fz12 card__text">
                      <div className="text-pair">
                        <div className="label">Product ID:</div>
                        <div className="fw600 value">0c8970BFG</div>
                      </div>
                      <div className="text-pair">
                        <div className="label">Product Name:</div>
                        <div className="fw600 value">
                          HOB - WATCH - 0x Model.
                        </div>
                      </div>
                      <div className="text-pair">
                        <div className="label">Brand Name:</div>
                        <div className="fw600 value">
                          <div className="brnd_btn_black">
                            <span>HOB</span>
                          </div>
                          <img
                            className="trusted_sheild"
                            src={trustedShield}
                            alt="trusted_logo"
                          />
                        </div>
                      </div>
                      <div className="text-pair">
                        <div className="label">Added:</div>
                        <div className="fw400 value">
                          01-June-2023 | 03hr:55min (EST)
                        </div>
                      </div>
                      <div className="text-pair">
                        <div className="label">Status:</div>
                        <div className="fw600 value">
                          <span className="td-status td-status--active">
                            <span className="fz12 fw400">Active</span>
                          </span>
                          <button className="btn btn-solid--dark">
                            <img src={locationMarker} alt="" />
                            <div className="fw600 fz12 gradientText--radial text">
                              <span>Track Product</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card__barcode">
                      <button className="btn btn-fab btn-fab--dark">
                        <img src={downloadCloudGradient} alt="" />
                      </button>
                      <div className="bar-qr-cover">
                        <div className="bdrs10 h-100 overflow-hidden bar_code">
                          <div className="">
                            <img src={barCode} alt="" />
                          </div>

                          <span className="font-secondary text-center fz18 fw700">
                            ID: 0c8970BFG
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li></li>
              <li>
                <div className="p-0 border-white-2 main-shadow bdrs10 block-widget block-widget--onHoverGradient card">
                  <div className="card-inner">
                    <div className="fz12 card__text">
                      <div className="text-pair">
                        <div className="label">NFC Id:</div>
                        <div className="fw600 value">0c8970BFG</div>
                      </div>
                      <div className="text-pair">
                        <div className="label">Product Name:</div>
                        <div className="fw600 value">
                          HOB - WATCH - 0x Model.
                        </div>
                      </div>
                      <div className="text-pair">
                        <div className="label">Brand Name:</div>
                        <div className="fw600 value">
                          <div className="brnd_btn_black">
                            <span>HOB</span>
                          </div>
                          <img
                            className="trusted_sheild"
                            src={trustedShield}
                            alt="trusted_logo"
                          />
                        </div>
                      </div>
                      <div className="text-pair">
                        <div className="label">Added:</div>
                        <div className="fw400 value">
                          01-June-2023 | 03hr:55min (EST)
                        </div>
                      </div>
                      <div className="text-pair">
                        <div className="label">Status:</div>
                        <div className="fw600 value">
                          <span className="td-status td-status--active">
                            <span className="fz12 fw400">Active</span>
                          </span>
                          <button className="btn btn-solid--dark">
                            <img src={locationMarker} alt="" />
                            <div className="fw600 fz12 gradientText--radial text">
                              <span>Track Product</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card__rfid">
                      <div className="bar-qr-cover">
                        <div className="bdrs10 h-100 overflow-hidden rfid">
                          <div className="">
                            <img src={rfidRastered} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="p-0 border-white-2 main-shadow bdrs10 block-widget block-widget--onHoverGradient card">
                  <div className="card-inner">
                    <div className="fz12 card__text">
                      <div className="text-pair">
                        <div className="label">Product Name:</div>
                        <div className="fw600 value">
                          HOB - WATCH - 0x Model.
                        </div>
                      </div>
                      <div className="text-pair">
                        <div className="label">Brand Name:</div>
                        <div className="fw600 value">
                          <div className="brnd_btn_black">
                            <span>HOB</span>
                          </div>
                          <img
                            className="trusted_sheild"
                            src={trustedShield}
                            alt="trusted_logo"
                          />
                        </div>
                      </div>
                      <div className="text-pair">
                        <div className="label">Added:</div>
                        <div className="fw400 value">
                          01-June-2023 | 03hr:55min (EST)
                        </div>
                      </div>
                      <div className="text-pair">
                        <div className="label">Status:</div>
                        <div className="fw600 value">
                          <span className="td-status td-status--draft">
                            <span className="fz12 fw400">Draft</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="p-0 border-white-2 main-shadow bdrs10 block-widget block-widget--onHoverGradient card">
                  <div className="card-inner">
                    <div className="fz12 card__text">
                      <div className="text-pair">
                        <div className="label">Product ID:</div>
                        <div className="fw600 value">0c8970BFG</div>
                      </div>
                      <div className="text-pair">
                        <div className="label">Product Name:</div>
                        <div className="fw600 value">
                          HOB - WATCH - 0x Model.
                        </div>
                      </div>
                      <div className="text-pair">
                        <div className="label">Brand Name:</div>
                        <div className="fw600 value">
                          <div className="brnd_btn_black">
                            <span>HOB</span>
                          </div>
                          <img
                            className="trusted_sheild"
                            src={trustedShield}
                            alt="trusted_logo"
                          />
                        </div>
                      </div>
                      <div className="text-pair">
                        <div className="label">Added:</div>
                        <div className="fw400 value">
                          01-June-2023 | 03hr:55min (EST)
                        </div>
                      </div>
                      <div className="text-pair">
                        <div className="label">Status:</div>
                        <div className="fw600 value">
                          <span className="td-status td-status--active">
                            <span className="fz12 fw400">Active</span>
                          </span>
                          <button className="btn btn-solid--dark">
                            <img src={locationMarker} alt="" />
                            <div className="fw600 fz12 gradientText--radial text">
                              <span>Track Product</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card__barcode">
                      <button className="btn btn-fab btn-fab--dark">
                        <img src={downloadCloudGradient} alt="" />
                      </button>
                      <div className="bar-qr-cover">
                        <div className="bdrs10 h-100 overflow-hidden bar_code">
                          <div className="">
                            <img src={barCode} alt="" />
                          </div>

                          <span className="font-secondary text-center fz18 fw700">
                            ID: 0c8970BFG
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <PackageListings />
      </div>
    </section>
  );
}
