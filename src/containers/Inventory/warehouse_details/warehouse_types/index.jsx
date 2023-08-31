import React from "react";
import { Link } from "react-router-dom";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import blackLeafIcon from "../../../../assets/images/black-leaf.svg";
import warehouseCard1 from "../../../../assets/images/inventory-step2-sc1-warehouse-card1.svg";
import warehouseCard2 from "../../../../assets/images/inventory-step2-sc1-warehouse-card2.svg";

import InventoryStepsTracker from "../../../../reusable_components/Inventory_stepsTracker";

// Maintainig Stepper layout Active/Blurr
const stepperActiveLayout = {
  step1: true,
  step2: true,
  step3: false,
  step4: false,
  sub_step1: false,
  sub_step2: true,
  sub_step4: false,
  packagingType: false,
  basic_pakagingDetails: false,
  addProducts: false,
  warehouseType: true,
  basic_warehouseDetails: false,
  logisticType: false,
  basic_logisticDetails: false,
};

export default function WarehouseTypes() {
  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />

        <section className="product-screen">
          <div className="w-100 border-white-2 bdrs10 main-shadow block-widget custom-widget-inventory">
            <div className=" ">
              <div className="heading-top-div">
                <h6 className="mb-1 fz20 fw700">Warehouse Type</h6>
                <p className="fz16">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam.
                </p>
              </div>
              <div className="plcards-wrapper-div">
                <div className="bdrs10 border-white-2 pl-01-cards">
                  <div className="up-card">
                    <div className="content-inner">
                      <span className="fw600 fz24 card-tite">
                        <img className="me-1" src={blackLeafIcon} alt="" />
                        Inhouse Warehouse
                      </span>
                      <div className="card-details-wapper">
                        <p className="fz12 card-details">
                          ipsum dolor sit amet, consectetuer adipiscing elit,
                          sed diam nonummy nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat
                        </p>
                      </div>
                      <Link
                        to="/warehouse-basic-details"
                        className="btn my-2 me-1 fz14 btn-dark-outlined black-default"
                      >
                        <span className="fz14 gradientText--radial">
                          Select
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="down-card1 down-card1-overridden">
                    <img className="bdrs10" src={warehouseCard1} alt="" />
                  </div>
                </div>
                <div className="bdrs10 border-white-2 pl-01-cards">
                  <div className="up-card">
                    <div className="content-inner">
                      <span className="fw600 fz24 card-tite">
                        <img className="me-1" src={blackLeafIcon} alt="" />
                        Outsource Warehouse
                      </span>
                      <div className="card-details-wapper">
                        <p className="fz12 card-details">
                          ipsum dolor sit amet, consectetuer adipiscing elit,
                          sed diam nonummy nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat
                        </p>
                      </div>
                      <Link
                        to="/warehouse-basic-details"
                        className="btn my-2 me-1 fz14 btn-dark-outlined black-default"
                      >
                        <span className="fz14 gradientText--radial">
                          Select
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="down-card2 down-card2-overidden">
                    <img className="bdrs10" src={warehouseCard2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InventoryStepsTracker
            buttonText={"Next"}
            stepperActiveLayout={stepperActiveLayout}
            route={"/warehouse-basic-details"}
          />
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
