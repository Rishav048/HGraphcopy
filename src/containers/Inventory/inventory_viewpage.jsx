import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageList from "../../reusable_components/pageList";
import BottomNavbar from "../../layouts/bottomNavbar";
import InventoryDataTable from "./dataTable";
import Navbar from "../../layouts/navbar";
import gradLeaf from "../../assets/images//icons/icon-grad-leaf.svg";
import filterDarkIcon from "../../assets/images/icons/icon-filter-dark.svg";
import singleProductIcon from "../../assets/images/icons/icon-single-product.svg";
import multipleProductIcon from "../../assets/images/icons/icon-multiple-product.svg";
import calendarIcon from "../../assets/images/icons/icon-calendar.svg";
import shipInventoryImage from "../../assets/images/ship-inventory.svg";
import technologyIcon from "../../assets/images/icons/icon-technology-robo-dark.svg";
import automobileIcon from "../../assets/images/icons/icon-automobile-toyota-dark.svg";
import educationIcon from "../../assets/images/icons/icon-education-cap-dark.svg";
import toyIcon from "../../assets/images/icons/icon-toys-bat-dark.svg";
import plantsIcon from "../../assets/images/icons/icon-plants-leaf-dark.svg";
import arrowIcon from "../../assets/images/icons/icon-long-arrow.svg";
import noChartDataImage from "../../assets/images/illustration-no-chart-products.svg";

export default function InventoryView() {
  const [data, setdata] = useState(true); // Dummy value to Show NO-Data page;


  useEffect(() => {
    let script = document.createElement("script");
 let script2 = document.createElement("script");
    script.id = "scriptId";
    script2.id = "chartid";
    script.src = "/assets/scripts/datepicker.js";
    script2.src = "/assets/scripts/charts.js";
    document.body.append(script);
    document.body.append(script2);

    
    return () => {
      const scriptElement = document.getElementById("scriptId");
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
      const scriptElement2 = document.getElementById("chartid");
      if (scriptElement2) {
        document.body.removeChild(scriptElement2);
      }
    };
  }, []);
  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />
        <section className="page-desc">
          <div className="dark-block-content page-desc-content">
            <h3 className="fz24 mb-0 fw600 gradientText--radial">
              <img src={gradLeaf} alt="" />
              <span>Inventory</span>
            </h3>
            <p className="fz12 text-white">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy
            </p>
          </div>
        </section>
        <section className="chart-section chart-section--products">
          <div className="row">
            <div className="col-7">
              <section className="mt-0 chart-area h-100">
                <div className="border-white-2 bdrs10 main-shadow block-widget chart-area__bar">
                  <div className="top-row">
                    <div className="top-row__left">
                      <h3 className="mb-0 fz14 fw500">Inventory Analytics</h3>
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
                          <img src={filterDarkIcon} alt="" />
                        </button>

                        <div className="w-100 dropdown-menu dropdown-menu-end border-white-2 dropdown-menu-holograf">
                          <ul className="list-inline mb-0 filter-list">
                            <li>
                              <Link to="#" className="table-pair">
                                <img src={singleProductIcon} alt="" />
                                <div className="text">
                                  <h4 className="mb-0 fz14 fw500">
                                    Inventories
                                  </h4>
                                  <span className="fw300 lh-1 grayText fst-italic fz10">
                                    Total Inventories: 300k
                                  </span>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="table-pair">
                                <img src={multipleProductIcon} alt="" />

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
                        id="datepicker-btn1-in-viewpage"
                        className="btn btn-fab btn-fab--pink"
                        type="button"
                      >
                        <img src={calendarIcon} alt="" />
                      </button>
                      <div
                        id="datepicker-container1-in-viewpage"
                        className="wrapper_datepicker"
                      ></div>
                    </div>
                  </div>
                  <ul className="list-inline mt-3 mb-0 product-stats">
                    <li>
                      <div className="stat">
                        <div className="position-relative stat--noLine">
                          <div className="bdrs10 line"></div>
                          <div className="font-secondary fw400 fz30 num">
                            1030k
                          </div>
                        </div>
                        <div className="fz12 lh-1 text">Total Inventories</div>
                      </div>
                    </li>
                    <li>
                      <div className="stat">
                        <div className="position-relative stat--purpleLine">
                          <div className="bdrs10 line"></div>
                          <div className="font-secondary fw400 fz30 num">
                            200
                          </div>
                        </div>
                        <div className="fz12 lh-1 text">Active</div>
                      </div>
                    </li>
                    <li>
                      <div className="stat">
                        <div className="position-relative stat--peachLine">
                          <div className="bdrs10 line"></div>
                          <div className="font-secondary fw400 fz30 num">
                            009
                          </div>
                        </div>
                        <div className="fz12 lh-1 text">Draft</div>
                      </div>
                    </li>
                  </ul>
                  {/* // When there's no data, use the div below */}
                  {!data ? (
                    <div className="noData-detail-cards">
                      <h2 className="mb-0 fw300 text-center fz26">
                        No Data Found <br />
                        <span className="fw600">Add Inventory now!</span>
                      </h2>
                      <img src={noChartDataImage} alt="" />
                    </div>
                  ) : (
                    <div className="chart-container">
                      <canvas id="chart_line"></canvas>
                    </div>
                  )}

                  {/* ------------------------- */}
                  {/* When there is some data */}

                  {/*------------------ */}
                </div>
              </section>
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-12">
                  <Link
                    to="/pakage-information"
                    className="block-wavy-dark new-product block-wavy-add-product"
                  >
                    <div className="left-product">
                      <h3 className="mb-0 fw600 fz18 gradientText--radial">
                        <span>Add New Inventory</span>
                        <img
                          className="d-inline-block"
                          src={arrowIcon}
                          alt=""
                        />
                      </h3>
                      <p className="fz14 mb-0 text-white">
                        Upload batch of your products to make your way easy.
                      </p>
                    </div>
                    <div className="right-product">
                      <img src={shipInventoryImage} alt="" />
                    </div>
                  </Link>
                </div>
                {/* <div class="col-6">
                  <Link
                    to="./batch-s1.html"
                    class="gradient-widget h-100 d-flex flex-column justify-content-center product-screen-graphics new-product"
                  >
                    <h3 class="mb-0 fw600 primaryText">
                      <span>Add New Product</span>
                      <img
                        class="d-inline-block"
                        src="./assets/images/icons/icon-dark-long-arrow.svg"
                        alt=""
                      />
                    </h3>
                    <p class="fz12 mb-0 grayText">
                      Manage and keep a record of your inventories all along.
                    </p>
                  </Link>
                </div> */}
                <div className="col-12 mt-2">
                  <div className="block-widget border-white-2 product-screen__form product-chart description-box">
                    <div className="user-detail">
                      <div className="user-detail__name">
                        <div className="fz14 fw500">Category Distribution</div>
                      </div>
                      <div className="fz12 fw300 lh1-2 grayText dp-email">
                        Updated 03hrs:23min ago.
                      </div>
                    </div>
                    <ul className="list-inline category-distribution-listing">
                      <li>
                        <div className="category-group">
                          <div className="bdrs10 bg-white main-shadow icon-wrap">
                            <img src={technologyIcon} alt="" />
                          </div>
                          <div className="category-desc">
                            <div className="fw400 fz16 category-head">
                              Technology
                            </div>
                            <div className="ms-auto fw400 font-secondary fz16 category-number">
                              200
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="category-group">
                          <div className="bdrs10 bg-white main-shadow icon-wrap">
                            <img src={automobileIcon} alt="" />
                          </div>
                          <div className="category-desc">
                            <div className="fw400 fz16 category-head">
                              Automobile
                            </div>
                            <div className="ms-auto fw400 font-secondary fz16 category-number">
                              200
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="category-group">
                          <div className="bdrs10 bg-white main-shadow icon-wrap">
                            <img src={educationIcon} alt="" />
                          </div>
                          <div className="category-desc">
                            <div className="fw400 fz16 category-head">
                              Education
                            </div>
                            <div className="ms-auto fw400 font-secondary fz16 category-number">
                              200
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="category-group">
                          <div className="bdrs10 bg-white main-shadow icon-wrap">
                            <img src={toyIcon} alt="" />
                          </div>
                          <div className="category-desc">
                            <div className="fw400 fz16 category-head">Toy</div>
                            <div className="ms-auto fw400 font-secondary fz16 category-number">
                              200
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="category-group">
                          <div className="bdrs10 bg-white main-shadow icon-wrap">
                            <img src={plantsIcon} alt="" />
                          </div>
                          <div className="category-desc">
                            <div className="fw400 fz16 category-head">
                              Plants
                            </div>
                            <div className="ms-auto fw400 font-secondary fz16 category-number">
                              200
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="category-group">
                          <div className="bdrs10 bg-white main-shadow icon-wrap">
                            <img src={automobileIcon} alt="" />
                          </div>
                          <div className="category-desc">
                            <div className="fw400 fz16 category-head">
                              Automobile
                            </div>
                            <div className="ms-auto fw400 font-secondary fz16 category-number">
                              200
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="category-group">
                          <div className="bdrs10 bg-white main-shadow icon-wrap">
                            <img src={technologyIcon} alt="" />
                          </div>
                          <div className="category-desc">
                            <div className="fw400 fz16 category-head">
                              Technology
                            </div>
                            <div className="ms-auto fw400 font-secondary fz16 category-number">
                              200
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="category-group">
                          <div className="bdrs10 bg-white main-shadow icon-wrap">
                            <img src={educationIcon} alt="" />
                          </div>
                          <div className="category-desc">
                            <div className="fw400 fz16 category-head">
                              Education
                            </div>
                            <div className="ms-auto fw400 font-secondary fz16 category-number">
                              200
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* Repeat similar code for other categories */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <InventoryDataTable />
      </div>
      <BottomNavbar />
    </div>
  );
}
