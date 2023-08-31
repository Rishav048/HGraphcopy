import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import filterDarkIcon from "../../../../assets/images/icons/icon-filter-dark.svg";
import iconCalendar from "../../../../assets/images/icons/icon-calendar.svg";
import singleProductIcon from "../../../../assets/images/icons/icon-single-product.svg";
import multipleProductIcon from "../../../../assets/images/icons/icon-multiple-product.svg";
import inventoryIcon from "../../../../assets/images/icons/icon-inventory.svg";
import multipleInventoryIcon from "../../../../assets/images/icons/icon-multiple-inventory.svg";
import dropdownArrowIcon from "../../../../assets/images/icons/icon-dropdown-arrow.svg";
import InventoryStepsTracker from "../../../../reusable_components/Inventory_stepsTracker";

import PreviewDataTable from "./preview_dataTable";

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
  addProducts: true,
  warehouseType: false,
  basic_warehouseDetails: false,
  logisticType: false,
  basic_logisticDetails: false,
};

export default function PakagingDetailsPreview() {
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
          <div className="border-white-2 bdrs10 main-shadow block-widget product-screen__form">
            <div className="p-3 block-wavy-dark header-block">
              <div className="header-block__inner">
                <div className="justify-content-between a-content">
                  <div className="">
                    <h2 className="fz16 mb-0 fw700 gradientText">
                      <span>Select what you want us to do!</span>
                    </h2>
                    <p className="fz12 m-0 text-white">
                      You can generate QR or tag your product!
                    </p>
                  </div>
                  <div className="right-content">
                    <div className="btnGroup">
                      <Link
                        to="/pakaging-QR-generated"
                        className="me-1 btn btn-cta--outlined"
                      >
                        <div className="fw400 fz14">
                          <div className="gradientText--radial">
                            <span>Generate QR</span>
                          </div>
                        </div>
                      </Link>
                      <Link
                        to="/pakaging-IOT-generated"
                        className="btn btn-cta--gradient"
                      >
                        <div className="fw400 fz14">
                          <div className="primaryText">
                            <span>Tag IOT Device</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 mt-4">
              <h6 className="mb-1 fz20 fw700">Add products</h6>
              <p className="fz16">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy.
              </p>
            </div>
            <div className="gap-1 form-group holograf-form">
              <label htmlFor="" className="fw500 fz14 label">
                Select type
              </label>
              <div className="dropdown">
                <Link
                  className="position-relative form-control select-div"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="fw400 fz12 grayText fst-italic">
                    Choose product type
                  </span>
                  <div className="position-absolute btn btn-fab btn-fab--green">
                    <img src={dropdownArrowIcon} alt="" />
                  </div>
                </Link>

                <div className="w-100 dropdown-menu border-white-2 dropdown-menu-holograf">
                  <ul className="list-inline mb-0 product-type-list">
                    <li>
                      <Link to="#" className="typr-pair">
                        <div className="icon">
                          <img src={singleProductIcon} alt="" />
                        </div>
                        <span className="fz14">Single products</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="typr-pair active">
                        <div className="icon">
                          <img src={multipleProductIcon} alt="" />
                        </div>
                        <span className="fz14">Group of products</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="typr-pair">
                        <div className="icon">
                          <img src={inventoryIcon} alt="" />
                        </div>
                        <span className="fz14">Batches</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="typr-pair">
                        <div className="icon">
                          <img src={multipleInventoryIcon} alt="" />
                        </div>
                        <span className="fz14">Group of batches</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="table-top-row">
              {/* Table Search */}
              {/* <div className="mb-0 position-relative form-group">
        <input
          className="form-control datatable-search"
          type="search"
          placeholder="Search Here"
        />
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4861 13.8478L19.0553 17.4162L17.8761 18.5953L14.3078 15.0262C12.9801 16.0905 11.3286 16.6694 9.62695 16.667C5.48695 16.667 2.12695 13.307 2.12695 9.16699C2.12695 5.02699 5.48695 1.66699 9.62695 1.66699C13.767 1.66699 17.127 5.02699 17.127 9.16699C17.1294 10.8687 16.5505 12.5201 15.4861 13.8478ZM13.8145 13.2295C14.872 12.1419 15.4627 10.684 15.4603 9.16699C15.4603 5.94366 12.8495 3.33366 9.62695 3.33366C6.40362 3.33366 3.79362 5.94366 3.79362 9.16699C3.79362 12.3895 6.40362 15.0003 9.62695 15.0003C11.144 15.0027 12.6019 14.4121 13.6895 13.3545L13.8145 13.2295Z"
          />
          <rect
            x="0.964052"
            y="0.504091"
            width="18.9918"
            height="18.9918"
            stroke-width="1.00818"
          />
        </svg>
      </div> */}

              {/* <div className="dropdown">
        <button
          className="btn rounded-circle dropdown-toggle download-btn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={iconDownloadCloud} alt="" />
        </button>
        <ul className="dropdown-menu">
          <li>
           <Link className="dropdown-item cdt-copy" to="#">Copy</Link>
          </li>
          <li>
           <Link className="dropdown-item cdt-export-excel" to="#">Excel</Link>
          </li>
          <li>
           <Link className="dropdown-item cdt-export-pdf" to="#">PDF</Link>
          </li>
          <li>
           <Link className="dropdown-item cdt-export-csv" to="#">CSV</Link>
          </li>
        </ul>
      </div> */}

              <div className="cdt-length top-row__left">
                <h2 className="fw500 mb-0 fz14">Products list</h2>
                <span className="fst-italic fz10 fw300">
                  Total products: 300k
                </span>
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
                  id="datepicker-btn1-in-pl03"
                  className="position-relative btn-fab btn-fab--pink"
                  type="button"
                >
                  <img src={iconCalendar} alt="" />
                </button>
                <div
                  id="datepicker-container-in-pl03"
                  className="wrapper_datepicker"
                ></div>
              </div>
            </div>
            <PreviewDataTable />
          </div>
          <InventoryStepsTracker
            buttonText={"Edit product"}
            stepperActiveLayout={stepperActiveLayout}
            route={"/single-product-listings"}
          />
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
