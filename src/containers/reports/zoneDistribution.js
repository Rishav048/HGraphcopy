import React from "react";
import filterDark from "../../assets/images/icons/icon-filter-dark.svg";
import singleProduct from "../../assets/images/icons/icon-single-product.svg";
import multipleProduct from "../../assets/images/icons/icon-multiple-product.svg";
import calendar from "../../assets/images/icons/icon-calendar.svg";
import darkLongArrow from "../../assets/images/icons/icon-dark-long-arrow.svg";
import { Link } from "react-router-dom";
export default function ZoneDistribution() {
  return (
    <div className="border-white-2 bdrs10 main-shadow block-widget border-white-2 ts03 chart-area__distribution">
      <div className="top-row">
        <div className="top-row__left">
          <h3 className="mb-0 fz14 fw500">Zone Distribution</h3>
          <p className="mb-0 fst-italic fz12 fw300">Updated 03hrs:23min ago.</p>
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
            id="datepicker-btn-reports-03"
            className="position-relative btn btn-fab btn-fab--pink"
            type="button"
          >
            <img src={calendar} alt="" />
          </button>
          <div
            id="datepicker-container-reports-03"
            className="wrapper_datepicker"
          ></div>
        </div>
      </div>

      <div className="mt-3 chart-row">
        {/* <!-- When there's no data, use the div below --> */}
        {/* <!-- <div className="noData-chart_bar">
        <img
          src="./assets/images/illustration-no-zone-distribution.svg"
          alt=""
        />
      </div> --> */}

        {/* <!-- When there's some data, use the div below --> */}
        <div className="chart-container">
          <canvas id="chart_distribution"></canvas>
        </div>
        <ul className="w-100 list-inline distribution-data">
          <li>
            <div className="w-100 gradient-widget h-100">
              <div className="position-relative inner">
                <div className="position-relative title">
                  <span className="position-absolute dot dot--magenta"></span>
                  <h3 className="fz14 fw500 mb-0">
                    Products <br />
                    Distribution
                    <img src={darkLongArrow} alt="" />
                  </h3>
                </div>
                <div className="direction-stat">
                  <div className="pair">
                    <div className="abbr-box">
                      <div className="font-tertiary lh1-2 gradientText--radial fz12 fw700">
                        <span>N</span>
                      </div>
                    </div>
                    <div className="font-secondary fz16 fw700 text">2,990</div>
                  </div>
                  <div className="pair">
                    <div className="abbr-box">
                      <div className="font-tertiary lh1-2 gradientText--radial fz12 fw700">
                        <span>E</span>
                      </div>
                    </div>
                    <div className="font-secondary fz16 fw700 text">70k</div>
                  </div>
                  <div className="pair">
                    <div className="abbr-box">
                      <div className="font-tertiary lh1-2 gradientText--radial fz12 fw700">
                        <span>S</span>
                      </div>
                    </div>
                    <div className="font-secondary fz16 fw700 text">200</div>
                  </div>
                  <div className="pair">
                    <div className="abbr-box">
                      <div className="font-tertiary lh1-2 gradientText--radial fz12 fw700">
                        <span>W</span>
                      </div>
                    </div>
                    <div className="font-secondary fz16 fw700 text">500</div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
