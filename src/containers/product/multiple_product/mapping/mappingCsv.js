import React from "react";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import MappingCsvStatus from "./mappingCsvStatus";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import plusGradiant from "../../../../assets/images/icons/icon-plus-gradiant.svg";
import rightDashedVector from "../../../../assets/images/right-dashed-vector.svg";
import verified from "../../../../assets/images/Verified.svg";
import dropdownArrow from "../../../../assets/images/icons/icon-dropdown-arrow.svg";
import error from "../../../../assets/images/Error.svg";
import { Link } from "react-router-dom";
export default function MappingCSV() {
  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />
        <section className="product-screen">
          <div className="border-white-2 bdrs10 block-widget main-shadow product-screen__form">
            <h6 className="mb-1 fz20 fw700">Map your CSV file</h6>
            <span className="fz16">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut.
            </span>

            <div className="mt-3 row gx-0">
              <div className="col-12 col-lg-5 bdrs10 csv-fields">
                <span className="fw700 fz16 gradientText--radial">
                  CSV Fields
                </span>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-12 col-lg-5 bdrs10 select-field">
                <span className="fw700 fz16">Select Field Type</span>
                <div className="position-absolute upload-click add-click">
                  <button className="btn btn-fab btn-fab--dark btn-add">
                    <input type="button" />
                    <img src={plusGradiant} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-3 side-bordered-div">
              <form action="" className="holograf-form map-form">
                <div className="row gx-0">
                  <div className="col-12 col-lg-5 position-relative left-col">
                    <span className="number-tag">
                      <span className="fw600 fz14 gradientText--radial">1</span>
                    </span>
                    <div className="user-card-dot-starting"></div>
                    <div className="d-flex justify-content-center align-items-center pt-1 form-group">
                      <div className="horizontal-line"></div>
                      <input
                        type="text"
                        className="fw500 fz14 form-control form-control_updated"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 d-flex justify-content-center align-items-center middle-arrow">
                    <img src={rightDashedVector} alt="" />
                    <dahiv className="verfied-div">
                      <img src={verified} alt="" />
                    </dahiv>
                  </div>

                  <div className="col-12 col-lg-5">
                    <div className="form-group">
                      <div className="dropdown">
                        <Link
                          className="position-relative form-control form-control_updated select-div"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="fw500 fz14">Product Name</span>
                          <div className="position-absolute btn btn-fab btn-fab--green">
                            <img src={dropdownArrow} alt="" />
                          </div>
                        </Link>

                        <ul className="w-100 dropdown-menu dropdown-menu-holograf drop-down-style">
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Brand
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Color
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Warranty
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Manufacturing Date
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Expiry Date
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Category
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Essential Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row gx-0">
                  <div className="col-12 col-lg-5 position-relative left-col">
                    <span className="number-tag">
                      <span className="fw600 fz14 gradientText--radial">2</span>
                    </span>
                    <div className="user-card-dot-starting"></div>
                    <div className="d-flex justify-content-center align-items-center pt-1 form-group">
                      <div className="horizontal-line"></div>
                      <input
                        type="text"
                        className="fw500 fz14 form-control form-control_updated"
                        placeholder="Category"
                      />
                    </div>
                  </div>

                  <div className="col-lg-2 d-flex justify-content-center align-items-center middle-arrow">
                    <img src={rightDashedVector} alt="" />
                    <div className="verfied-div">
                      <img src={verified} alt="" />
                    </div>
                  </div>

                  <div className="col-12 col-lg-5">
                    <div className="form-group">
                      <div className="dropdown">
                        <Link
                          className="position-relative form-control form-control_updated select-div"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="fw500 fz14">Product Category</span>
                          <div className="position-absolute btn btn-fab btn-fab--green">
                            <img src={dropdownArrow} alt="" />
                          </div>
                        </Link>

                        <ul className="w-100 dropdown-menu dropdown-menu-holograf drop-down-style">
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Brand
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Color
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Warranty
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Manufacturing Date
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Expiry Date
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Category
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Essential Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gx-0">
                  <div className="col-12 col-lg-5 position-relative left-col">
                    <span className="number-tag">
                      <span className="fw600 fz14 gradientText--radial">3</span>
                    </span>
                    <div className="user-card-dot-starting"></div>
                    <div className="d-flex justify-content-center align-items-center pt-1 form-group">
                      <div className="horizontal-line"></div>
                      <input
                        type="text"
                        className="fw500 fz14 form-control form-control_updated"
                        placeholder="Brands"
                      />
                    </div>
                  </div>

                  <div className="col-lg-2 d-flex justify-content-center align-items-center middle-arrow">
                    <img src={rightDashedVector} alt="" />
                    <div className="error-div">
                      <img src={error} alt="" />
                    </div>
                  </div>

                  <div className="col-12 col-lg-5">
                    <div className="form-group">
                      <div className="dropdown">
                        <Link
                          className="position-relative form-control form-control_updated select-div"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="fw500 fz14">Brand Name</span>
                          <div className="position-absolute btn btn-fab btn-fab--green">
                            <img src={dropdownArrow} alt="" />
                          </div>
                        </Link>

                        <ul className="w-100 dropdown-menu dropdown-menu-holograf drop-down-style">
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Brand
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Color
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Warranty
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Manufacturing Date
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Expiry Date
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Category
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Essential Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gx-0">
                  <div className="col-12 col-lg-5 position-relative left-col">
                    <span className="number-tag">
                      <span className="fw600 fz14 gradientText--radial">4</span>
                    </span>
                    <div className="user-card-dot-starting"></div>
                    <div className="d-flex justify-content-center align-items-center pt-1 form-group">
                      <div className="horizontal-line"></div>
                      <input
                        type="text"
                        className="fw500 fz14 form-control form-control_updated"
                        placeholder="MFG"
                      />
                    </div>
                  </div>

                  <div className="col-lg-2 d-flex justify-content-center align-items-center middle-arrow">
                    <img src={rightDashedVector} alt="" />
                    <div className="verfied-div">
                      <img src={verified} alt="" />
                    </div>
                  </div>

                  <div className="col-12 col-lg-5">
                    <div className="form-group">
                      <div className="dropdown">
                        <Link
                          className="position-relative form-control form-control_updated select-div"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="fw500 fz14">Manufacturing Date</span>
                          <div className="position-absolute btn btn-fab btn-fab--green">
                            <img src={dropdownArrow} alt="" />
                          </div>
                        </Link>

                        <ul className="w-100 dropdown-menu dropdown-menu-holograf drop-down-style">
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Brand
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Color
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Warranty
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Manufacturing Date
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Expiry Date
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Category
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Essential Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gx-0">
                  <div className="col-12 col-lg-5 position-relative left-col">
                    <span className="number-tag">
                      <span className="fw600 fz14 gradientText--radial">5</span>
                    </span>
                    <div className="user-card-dot-starting"></div>
                    <div className="d-flex justify-content-center align-items-center pt-1 form-group">
                      <div className="horizontal-line"></div>
                      <input
                        type="text"
                        className="fw500 fz14 form-control form-control_updated"
                        placeholder="EXP"
                      />
                    </div>
                  </div>

                  <div className="col-lg-2 d-flex justify-content-center align-items-center middle-arrow">
                    <img src={rightDashedVector} alt="" />
                    <div className="error-div">
                      <img src={error} alt="" />
                    </div>
                  </div>

                  <div className="col-12 col-lg-5">
                    <div className="form-group">
                      <div className="dropdown">
                        <Link
                          className="position-relative form-control form-control_updated select-div"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="fw500 fz14">Expiry Date</span>
                          <div className="position-absolute btn btn-fab btn-fab--green">
                            <img src={dropdownArrow} alt="" />
                          </div>
                        </Link>

                        <ul className="w-100 dropdown-menu dropdown-menu-holograf drop-down-style">
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Brand
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Color
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Warranty
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Manufacturing Date
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Expiry Date
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Category
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Essential Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gx-0">
                  <div className="col-12 col-lg-5 position-relative left-col">
                    <span className="number-tag">
                      <span className="fw600 fz14 gradientText--radial">6</span>
                    </span>
                    <div className="user-card-dot-starting"></div>
                    <div className="d-flex justify-content-center align-items-center pt-1 form-group">
                      <div className="horizontal-line"></div>
                      <input
                        type="text"
                        className="fw500 fz14 form-control form-control_updated"
                        placeholder="Number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-2 d-flex justify-content-center align-items-center middle-arrow">
                    <img src={rightDashedVector} alt="" />
                    <div className="verfied-div">
                      <img src={verified} alt="" />
                    </div>
                  </div>

                  <div className="col-12 col-lg-5">
                    <div className="form-group">
                      <div className="dropdown">
                        <Link
                          className="position-relative form-control form-control_updated select-div"
                          to="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="fw500 fz14">SKU</span>
                          <div className="position-absolute btn btn-fab btn-fab--green">
                            <img src={dropdownArrow} alt="" />
                          </div>
                        </Link>

                        <ul className="w-100 dropdown-menu dropdown-menu-holograf drop-down-style">
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Brand
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Color
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Warranty
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Manufacturing Date
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Expiry Date
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Category
                            </Link>
                          </li>
                          <li>
                            <Link className="fz14 dropdown-item" to="#">
                              Product Essential Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <MappingCsvStatus />
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
