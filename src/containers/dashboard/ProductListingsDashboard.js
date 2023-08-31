import React from "react";
import filterDark from "../../assets/images/icons/icon-filter-dark.svg";
import singleProduct from "../../assets/images/icons/icon-single-product.svg";
import multipleProduct from "../../assets/images/icons/icon-multiple-product.svg";
import calendar from "../../assets/images/icons/icon-calendar.svg";
// import noListDashboard from '../../assets/images/illustration-no-list-dashboard.svg'
import trustedShield from "../../assets/images/icons/icon-trusted-shield.svg";
import locationMarker from "../../assets/images/icons/icon-location-marker.svg";
import barcode from "../../assets/images/barcode-image.svg";
import rfid from "../../assets/images/rfid-rastered-image.svg";
import longArrow from "../../assets/images/icons/icon-long-arrow.svg";
import { Link } from "react-router-dom";

export default function ProductListingsDashboard() {
  return (
    <div className="border-white-2 bdrs10 main-shadow block-widget border-white-2 ts03 listing-cards dashboard-top-area__right">
      <div className="top-row">
        <h3 className="mb-0 fz14 fw500">Product Listing</h3>

        <div className="btn-top-group">
          <div className="dropdown">
            <button
              className="border-0 btn dropdown-toggle btn-fab btn-fab--blue"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={filterDark} alt="" />
            </button>

            <div className="w-100 dropdown-menu dropdown-menu-end border-white-2 dropdown-menu-holograf">
              <ul className="list-inline mb-0 filter-list">
                <li>
                  <Link to="#" className="table-pair">
                    <img src={singleProduct} alt="" />
                    <div className="text">
                      <h4 className="mb-0 fz14 fw500">Products</h4>
                      <span className="fw300 lh-1 grayText fst-italic fz10">
                        Total products: 300k
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="table-pair">
                    <img src={multipleProduct} alt="" />

                    <div className="text">
                      <h4 className="mb-0 fz14 fw500">Groups</h4>
                      <span className="fw300 lh-1 grayText fst-italic fz10">
                        Total products: 300k
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <button
            id="datepicker-btn-index-02"
            className="position-relative btn btn-fab btn-fab--pink"
            type="button"
          >
            <img src={calendar} alt="" />
          </button>
          <div
            id="datepicker-container-index-02"
            className="wrapper_datepicker"
          ></div>
        </div>
      </div>
      <div className="middle-row">
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
      </div>

      {/* <!-- When there's no data, use the div below --> */}
      {/* <!-- <div className="noData-detail-cards">
      <h2 className="mb-0 fw300 text-center fz26">
        No Data Found <br />
        <span className="fw600">Add new product now!</span>
      </h2>
      <img
        src={noListDashboard}
        alt=""
      />
    </div> --> */}

      {/* <!-- When there's some data, use the div below --> */}
      <ul className="list-unstyled detail-cards">
        <li>
          <div className="p-0 border-white-2 main-shadow bdrs10 block-widget block-widget--onHoverGradient card">
            <div className="card-inner">
              <div className="fz12 card__text">
                <div className="text-pair">
                  <div className="label">Package ID:</div>
                  <div className="fw600 value">0c8970BFG</div>
                </div>
                <div className="text-pair">
                  <div className="label">Package Size:</div>
                  <div className="fw600 value">110inch X 210inch(L1)</div>
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
                <div className="bar-qr-cover">
                  <div className="bdrs10 h-100 overflow-hidden bar_code">
                    <div className="">
                      <img src={barcode} alt="" />
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
        <li>
          <div className="p-0 border-white-2 main-shadow bdrs10 block-widget block-widget--onHoverGradient card">
            <div className="card-inner">
              <div className="fz12 card__text">
                <div className="text-pair">
                  <div className="label">Product Name:</div>
                  <div className="fw600 value">HOB - WATCH - 0x Model.</div>
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
              <div className="fz12 text-white block-wavy-dark card__activate">
                <h2 className="mb-0 fz12 fw700">
                  Wants to keep <br />
                  up?
                </h2>
                <Link to="#" className="text-white lh-1">
                  Activate Product
                  <img src={longArrow} className="d-inline-block" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="p-0 border-white-2 main-shadow bdrs10 block-widget block-widget--onHoverGradient card">
            <div className="card-inner">
              <div className="fz12 card__text">
                <div className="text-pair">
                  <div className="label">NFC Id:</div>
                  <div className="fw600 value">0c8970BFG</div>
                </div>
                <div className="text-pair">
                  <div className="label">Package Size:</div>
                  <div className="fw600 value">110inch X 210inch(L1)</div>
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
                      <img src={rfid} alt="" />
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
                  <div className="label">Package ID:</div>
                  <div className="fw600 value">0c8970BFG</div>
                </div>
                <div className="text-pair">
                  <div className="label">Package Size:</div>
                  <div className="fw600 value">110inch X 210inch(L1)</div>
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
                <div className="bar-qr-cover">
                  <div className="bdrs10 h-100 overflow-hidden bar_code">
                    <div className="">
                      <img src={barcode} alt="" />
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
        <li>
          <div className="p-0 border-white-2 main-shadow bdrs10 block-widget block-widget--onHoverGradient card">
            <div className="card-inner">
              <div className="fz12 card__text">
                <div className="text-pair">
                  <div className="label">Product Name:</div>
                  <div className="fw600 value">HOB - WATCH - 0x Model.</div>
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
              <div className="fz12 text-white block-wavy-dark card__activate">
                <h2 className="mb-0 fz12 fw700">
                  Wants to keep <br />
                  up?
                </h2>
                <Link to="#" className="text-white lh-1">
                  Activate Product
                  <img src={longArrow} className="d-inline-block" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="p-0 border-white-2 main-shadow bdrs10 block-widget block-widget--onHoverGradient card">
            <div className="card-inner">
              <div className="fz12 card__text">
                <div className="text-pair">
                  <div className="label">NFC Id:</div>
                  <div className="fw600 value">0c8970BFG</div>
                </div>
                <div className="text-pair">
                  <div className="label">Package Size:</div>
                  <div className="fw600 value">110inch X 210inch(L1)</div>
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
                      <img src={rfid} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
