import React, { useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/images/icons/icon-search.svg";
import uploadCloudIcon from "../../assets/images/icons/icon-upload-cloud.svg";
import downloadCloudIcon from "../../assets/images/icons/icon-download-cloud-gradient.svg";
import filterIcon from "../../assets/images/icons/icon-filter-dark.svg";
import singleProductIcon from "../../assets/images/icons/icon-single-product.svg";
import multipleProductIcon from "../../assets/images/icons/icon-multiple-product.svg";
import calendarIcon from "../../assets/images/icons/icon-calendar.svg";
import dataTableQRIcon from "../../assets/images/icons/icon-datatable-qr.svg";
import trustedShieldIcon from "../../assets/images/icons/icon-trusted-shield.svg";
import longArrowIcon from "../../assets/images/icons/icon-long-arrow.svg";
import illustration from "../../assets/images/illustration-question-mark.svg";

export default function InventoryDataTable() {
  const [data, setData] = useState(true);
  return (
    <section className="products-data-table mt-3">
      <div className="w-100 border-white-2 bdrs10 main-shadow block-widget custom-data-table">
        <div className="top-row">
          <div className="cdt-length top-row__left">
            <h2 className="fw500 mb-0 lh1-5 fz14">Inventory Table</h2>
            <p className="mb-0 fw300 grayText fz12 fst-italic">
              Updated 03hrs:23min ago.
            </p>
          </div>

          <div className="btn-top-group">
            <div className="mb-0 position-relative form-group">
              <input
                className="form-control fz14 datatable-search"
                type="search"
                placeholder="Enter inventory ID or upload QR"
              />
              <div className="bg-white position-absolute icon-wrap main-shadow search-icon">
                <img src={searchIcon} alt="" />
              </div>
              <div className="position-absolute upload-click">
                <button className="position-relative btn btn-fab btn-fab--dark">
                  <input type="file" />
                  <img src={uploadCloudIcon} alt="" />
                </button>
              </div>
            </div>
            <Link
              to="/add-product"
              className="btn btn-solid--dark btn-create-css"
            >
              <span className="fz14 fw500 text-nowrap gradientText--radial">
                Add Products
              </span>
            </Link>
            <Link to="#" className="btn btn-fab btn-fab--dark">
              <img src={downloadCloudIcon} alt="" />
            </Link>
            <div className="dropdown">
              <button
                className="border-0 btn dropdown-toggle btn-fab btn-fab--blue"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={filterIcon} alt="" />
              </button>
              <div className="w-100 dropdown-menu dropdown-menu-end border-white-2 dropdown-menu-holograf">
                <ul className="list-inline mb-0 filter-list">
                  <li>
                    <Link to="#" className="table-pair">
                      <img src={singleProductIcon} alt="" />
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
              id="datepicker-btn2-in-viewpage"
              className="btn btn-fab btn-fab--pink"
              type="button"
            >
              <img src={calendarIcon} alt="" />
            </button>
            <div
              id="datepicker-container2-in-viewpage"
              className="wrapper_datepicker"
            ></div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="w-100 table holograf-table hover">
            <thead>
              <tr>
                <th>
                  <span className="fz14 fw500"> ID</span>
                </th>
                <th>
                  <span className="fz14 fw500">Product name</span>
                </th>
                <th>
                  <span className="fz14 fw500">Product Brand</span>
                </th>
                <th>
                  <span className="fz14 fw500">Shelf Life</span>
                </th>
                <th>
                  <span className="fz14 fw500">Category</span>
                </th>
                <th>
                  <span className="fz14 fw500">Date Added</span>
                </th>
                <th>
                  <span className="fz14 fw500 justify-content-center">
                    Status
                  </span>
                </th>
                <th>
                  <span className="fz14 fw500 justify-content-center">QR</span>
                </th>
                <th>
                  <span className="select-all">
                    <div className="lh-1 checkbox-wrapper">
                      <input id="all-01" type="checkbox" />
                      <label htmlFor="all-01">
                        <span></span>
                        <div>
                          <b className="fw500 fz14">Select All</b>
                        </div>
                      </label>
                    </div>
                  </span>
                </th>
              </tr>
            </thead>
            {data ? (
              <tbody>
                <tr>
                  <td>
                    <span className="fz12 id_cell">#80906hfj86</span>
                  </td>
                  <td>
                    <span className="d-block">MAC-Pro-System-</span>
                  </td>
                  <td>
                    <div className="brnd_btn_black">
                      <span>HOB</span>
                    </div>
                    <img
                      className="trusted_sheild"
                      src={trustedShieldIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="fw700">04 years</div>
                  </td>
                  <td>
                    <ul className="list-inline mb-0 td-tag-list">
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Technology
                        </div>
                      </li>
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Health and Care
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="d-block mb-1">01-June-2023 </span>
                    <span className="d-block">03hr:55min (EST)</span>
                  </td>
                  <td className="text-center">
                    <span className="td-status td-status--active">
                      <span className="fz12 fw400">Active</span>
                    </span>
                  </td>
                  <td>
                    <img
                      className="mx-auto"
                      src={dataTableQRIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="lh-1 d-flex justify-content-center checkbox-wrapper">
                      <input
                        type="checkbox"
                        name="activeStatus"
                        id="action-01"
                      />
                      <label htmlFor="action-01">
                        <span></span>
                      </label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className="fz12 id_cell">#80906hfj86</span>
                  </td>
                  <td>
                    <span className="d-block">MAC-Pro-System-</span>
                  </td>
                  <td>
                    <div className="brnd_btn_black">
                      <span>HOB</span>
                    </div>
                    <img
                      className="trusted_sheild"
                      src={trustedShieldIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="fw700">04 years</div>
                  </td>
                  <td>
                    <ul className="list-inline mb-0 td-tag-list">
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Technology
                        </div>
                      </li>
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Health and Care
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="d-block mb-1">01-June-2023 </span>
                    <span className="d-block">03hr:55min (EST)</span>
                  </td>
                  <td className="text-center">
                    <Link
                      to="/nextowner-basic-details"
                      className="fz12 btn btn-fab bdrs10 btn-fab--dark btn-fab--incomplete"
                    >
                      <span className="text-white">
                        Ownership details missing
                      </span>
                      <img src={longArrowIcon} alt="" />
                    </Link>
                  </td>
                  <td>
                    <img
                      className="mx-auto"
                      src={dataTableQRIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="lh-1 d-flex justify-content-center checkbox-wrapper">
                      <input
                        type="checkbox"
                        name="activeStatus"
                        id="action-02"
                      />
                      <label htmlFor="action-02">
                        <span></span>
                      </label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className="fz12 id_cell">#80906hfj86</span>
                  </td>
                  <td>
                    <span className="d-block">MAC-Pro-System-</span>
                  </td>
                  <td>
                    <div className="brnd_btn_black">
                      <span>HOB</span>
                    </div>
                    <img
                      className="trusted_sheild"
                      src={trustedShieldIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="fw700">04 years</div>
                  </td>
                  <td>
                    <ul className="list-inline mb-0 td-tag-list">
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Technology
                        </div>
                      </li>
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Health and Care
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="d-block mb-1">01-June-2023 </span>
                    <span className="d-block">03hr:55min (EST)</span>
                  </td>
                  <td className="text-center">
                    <Link
                      to="/transportation-types"
                      className="fz12 btn btn-fab bdrs10 btn-fab--dark btn-fab--incomplete"
                    >
                      <span className="text-white">
                        Transportation details missing
                      </span>
                      <img src={longArrowIcon} alt="" />
                    </Link>
                  </td>
                  <td>
                    <img
                      className="mx-auto"
                      src={dataTableQRIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="lh-1 d-flex justify-content-center checkbox-wrapper">
                      <input
                        type="checkbox"
                        name="activeStatus"
                        id="action-03"
                      />
                      <label htmlFor="action-03">
                        <span></span>
                      </label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className="fz12 id_cell">#80906hfj86</span>
                  </td>
                  <td>
                    <span className="d-block">MAC-Pro-System-</span>
                  </td>
                  <td>
                    <div className="brnd_btn_black">
                      <span>HOB</span>
                    </div>
                    <img
                      className="trusted_sheild"
                      src={trustedShieldIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="fw700">04 years</div>
                  </td>
                  <td>
                    <ul className="list-inline mb-0 td-tag-list">
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Technology
                        </div>
                      </li>
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Health and Care
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="d-block mb-1">01-June-2023 </span>
                    <span className="d-block">03hr:55min (EST)</span>
                  </td>
                  <td className="text-center">
                    <span className="td-status td-status--active">
                      <span className="fz12 fw400">Active</span>
                    </span>
                  </td>
                  <td>
                    <img
                      className="mx-auto"
                      src={dataTableQRIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="lh-1 d-flex justify-content-center checkbox-wrapper">
                      <input
                        type="checkbox"
                        name="activeStatus"
                        id="action-4"
                      />
                      <label htmlFor="action-4">
                        <span></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="fz12 id_cell">#80906hfj86</span>
                  </td>
                  <td>
                    <span className="d-block">MAC-Pro-System-</span>
                  </td>
                  <td>
                    <div className="brnd_btn_black">
                      <span>HOB</span>
                    </div>
                    <img
                      className="trusted_sheild"
                      src={trustedShieldIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="fw700">04 years</div>
                  </td>
                  <td>
                    <ul className="list-inline mb-0 td-tag-list">
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Technology
                        </div>
                      </li>
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Health and Care
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="d-block mb-1">01-June-2023 </span>
                    <span className="d-block">03hr:55min (EST)</span>
                  </td>
                  <td className="text-center">
                    <span className="td-status td-status--active">
                      <span className="fz12 fw400">Active</span>
                    </span>
                  </td>
                  <td>
                    <img
                      className="mx-auto"
                      src={dataTableQRIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="lh-1 d-flex justify-content-center checkbox-wrapper">
                      <input
                        type="checkbox"
                        name="activeStatus"
                        id="action-5"
                      />
                      <label htmlFor="action-5">
                        <span></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="fz12 id_cell">#80906hfj86</span>
                  </td>
                  <td>
                    <span className="d-block">MAC-Pro-System-</span>
                  </td>
                  <td>
                    <div className="brnd_btn_black">
                      <span>HOB</span>
                    </div>
                    <img
                      className="trusted_sheild"
                      src={trustedShieldIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="fw700">04 years</div>
                  </td>
                  <td>
                    <ul className="list-inline mb-0 td-tag-list">
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Technology
                        </div>
                      </li>
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Health and Care
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="d-block mb-1">01-June-2023 </span>
                    <span className="d-block">03hr:55min (EST)</span>
                  </td>
                  <td className="text-center">
                    <span className="td-status td-status--active">
                      <span className="fz12 fw400">Active</span>
                    </span>
                  </td>
                  <td>
                    <img
                      className="mx-auto"
                      src={dataTableQRIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="lh-1 d-flex justify-content-center checkbox-wrapper">
                      <input
                        type="checkbox"
                        name="activeStatus"
                        id="action-6"
                      />
                      <label htmlFor="action-6">
                        <span></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="fz12 id_cell">#80906hfj86</span>
                  </td>
                  <td>
                    <span className="d-block">MAC-Pro-System-</span>
                  </td>
                  <td>
                    <div className="brnd_btn_black">
                      <span>HOB</span>
                    </div>
                    <img
                      className="trusted_sheild"
                      src={trustedShieldIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="fw700">04 years</div>
                  </td>
                  <td>
                    <ul className="list-inline mb-0 td-tag-list">
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Technology
                        </div>
                      </li>
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Health and Care
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="d-block mb-1">01-June-2023 </span>
                    <span className="d-block">03hr:55min (EST)</span>
                  </td>
                  <td className="text-center">
                    <span className="td-status td-status--active">
                      <span className="fz12 fw400">Active</span>
                    </span>
                  </td>
                  <td>
                    <img
                      className="mx-auto"
                      src={dataTableQRIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="lh-1 d-flex justify-content-center checkbox-wrapper">
                      <input
                        type="checkbox"
                        name="activeStatus"
                        id="action-7"
                      />
                      <label htmlFor="action-7">
                        <span></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="fz12 id_cell">#80906hfj86</span>
                  </td>
                  <td>
                    <span className="d-block">MAC-Pro-System-</span>
                  </td>
                  <td>
                    <div className="brnd_btn_black">
                      <span>HOB</span>
                    </div>
                    <img
                      className="trusted_sheild"
                      src={trustedShieldIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="fw700">04 years</div>
                  </td>
                  <td>
                    <ul className="list-inline mb-0 td-tag-list">
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Technology
                        </div>
                      </li>
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Health and Care
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="d-block mb-1">01-June-2023 </span>
                    <span className="d-block">03hr:55min (EST)</span>
                  </td>
                  <td className="text-center">
                    <span className="td-status td-status--active">
                      <span className="fz12 fw400">Active</span>
                    </span>
                  </td>
                  <td>
                    <img
                      className="mx-auto"
                      src={dataTableQRIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="lh-1 d-flex justify-content-center checkbox-wrapper">
                      <input
                        type="checkbox"
                        name="activeStatus"
                        id="action-8"
                      />
                      <label htmlFor="action-8">
                        <span></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="fz12 id_cell">#80906hfj86</span>
                  </td>
                  <td>
                    <span className="d-block">MAC-Pro-System-</span>
                  </td>
                  <td>
                    <div className="brnd_btn_black">
                      <span>HOB</span>
                    </div>
                    <img
                      className="trusted_sheild"
                      src={trustedShieldIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="fw700">04 years</div>
                  </td>
                  <td>
                    <ul className="list-inline mb-0 td-tag-list">
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Technology
                        </div>
                      </li>
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Health and Care
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="d-block mb-1">01-June-2023 </span>
                    <span className="d-block">03hr:55min (EST)</span>
                  </td>
                  <td className="text-center">
                    <span className="td-status td-status--active">
                      <span className="fz12 fw400">Active</span>
                    </span>
                  </td>
                  <td>
                    <img
                      className="mx-auto"
                      src={dataTableQRIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="lh-1 d-flex justify-content-center checkbox-wrapper">
                      <input
                        type="checkbox"
                        name="activeStatus"
                        id="action-9"
                      />
                      <label htmlFor="action-9">
                        <span></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="fz12 id_cell">#80906hfj86</span>
                  </td>
                  <td>
                    <span className="d-block">MAC-Pro-System-</span>
                  </td>
                  <td>
                    <div className="brnd_btn_black">
                      <span>HOB</span>
                    </div>
                    <img
                      className="trusted_sheild"
                      src={trustedShieldIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="fw700">04 years</div>
                  </td>
                  <td>
                    <ul className="list-inline mb-0 td-tag-list">
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Technology
                        </div>
                      </li>
                      <li>
                        <div className="text-uppercase fw600 fz10 td-tag">
                          Health and Care
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td>
                    <span className="d-block mb-1">01-June-2023 </span>
                    <span className="d-block">03hr:55min (EST)</span>
                  </td>
                  <td className="text-center">
                    <span className="td-status td-status--active">
                      <span className="fz12 fw400">Active</span>
                    </span>
                  </td>
                  <td>
                    <img
                      className="mx-auto"
                      src={dataTableQRIcon}
                      alt="trusted_logo"
                    />
                  </td>
                  <td>
                    <div className="lh-1 d-flex justify-content-center checkbox-wrapper">
                      <input
                        type="checkbox"
                        name="activeStatus"
                        id="action-10"
                      />
                      <label htmlFor="action-10">
                        <span></span>
                      </label>
                    </div>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td
                    style={{ background: "transparent !important" }}
                    colspan="8"
                  >
                    <div className="noData-detail-cards">
                      <h2 className="mb-0 fw300 text-center fz60">
                        No Data Found
                      </h2>
                      <img src={illustration} alt="" />
                    </div>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
        {/* <div className="bottom">
          <div className="cdt-info"></div>
          <div className="cdt-pagination text-center"></div>
          <div className="cdt-length text-end"></div>
        </div> */}
      </div>
    </section>
  );
}
