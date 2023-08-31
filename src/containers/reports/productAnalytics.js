import React, { useEffect } from "react";
import filterDark from "../../assets/images/icons/icon-filter-dark.svg";
import singleProduct from "../../assets/images/icons/icon-single-product.svg";
import multipleProduct from "../../assets/images/icons/icon-multiple-product.svg";
import calendar from "../../assets/images/icons/icon-calendar.svg";
import ZoneDistribution from "./zoneDistribution";
import { Link } from "react-router-dom";
export default function ProductAnalytics() {


  return (
    <>
      <section className="chart-area">
        <div className="border-white-2 bdrs10 main-shadow block-widget chart-area__bar">
          <div className="top-row">
            <div className="top-row__left">
              <h3 className="mb-0 fz14 fw500">Product Analytics</h3>
              <p className="mb-0 fst-italic fz12 fw300">
                Updated 03hrs:23min ago.
              </p>
            </div>
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
                id="datepicker-btn-reports-02"
                className="position-relative btn btn-fab btn-fab--pink"
                type="button"
              >
                <img src={calendar} alt="" />
              </button>
              <div
                id="datepicker-container-reports-02"
                className="wrapper_datepicker"
              ></div>
            </div>
          </div>

          {/* <!-- When there's no data, use the div below --> */}
          {/* <!-- <div className="noData-chart_bar">
        <h2 className="fw300 text-center fz26">No Data Found</h2>
        <img
          src="./assets/images/illustration-no-product-report.svg"
          alt=""
        />
      </div> --> */}

          {/* <!-- When there's some data, use the div below --> */}
          <div className="chart-container">
            <canvas id="chart_bar"></canvas>
          </div>

          <ul className="list-inline mt-3 mb-0 product-stats">
            <li>
              <div className="stat">
                <div className="position-relative stat--noLine">
                  <div className="bdrs10 line"></div>
                  <div className="font-secondary fw400 fz30 num">1030k</div>
                </div>
                <div className="fz12 lh-1 text">All Products</div>
              </div>
            </li>
            <li>
              <div className="stat">
                <div className="position-relative stat--purpleLine">
                  <div className="bdrs10 line"></div>
                  <div className="font-secondary fw400 fz30 num">200</div>
                </div>
                <div className="fz12 lh-1 text">Single Products</div>
              </div>
            </li>
            <li>
              <div className="stat">
                <div className="position-relative stat--peachLine">
                  <div className="bdrs10 line"></div>
                  <div className="font-secondary fw400 fz30 num">009</div>
                </div>
                <div className="fz12 lh-1 text">Inventories</div>
              </div>
            </li>
          </ul>
        </div>
        <ZoneDistribution />
      </section>
    </>
  );
}
