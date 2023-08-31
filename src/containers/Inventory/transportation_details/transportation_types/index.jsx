import React from "react";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import blackLeafIcon from "../../../../assets/images/black-leaf.svg";
import inventoryCard1Icon from "../../../../assets/images/inventory-step2-sc1-card1.svg";
import inventoryCard2Icon from "../../../../assets/images/inventory-step2-sc1-card2.svg";
import { Link } from "react-router-dom";
import InventoryStepsTracker from "../../../../reusable_components/Inventory_stepsTracker";

// Maintainig Stepper layout Active/Blurr
const stepperActiveLayout = {
  step1: true,
  step2: true,
  step3: true,
  step4: true,
  sub_step1: false,
  sub_step2: false,
  sub_step4: true,
  packagingType: false,
  basic_pakagingDetails: false,
  addProducts: false,
  warehouseType: false,
  basic_warehouseDetails: false,
  logisticType: true,
  basic_logisticDetails: false,
};

export default function TransportationTypes() {
  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />

        <section className="product-screen">
          <div className="w-100 border-white-2 bdrs10 main-shadow block-widget custom-widget-inventory">
            <div className=" ">
              <div className="heading-top-div">
                <h6 className="mb-1 fz20 fw700">Transportation Type</h6>
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
                        Inhouse Logistics
                      </span>
                      <div className="card-details-wapper">
                        <p className="fz12 card-details">
                          ipsum dolor sit amet, consectetuer adipiscing elit,
                          sed diam nonummy nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat
                        </p>
                      </div>
                      <Link
                        to="/transportation-mode"
                        className="btn my-2 me-1 fz14 btn-dark-outlined black-default"
                      >
                        <span className="fz14 gradientText--radial">
                          Select
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="down-card1 down-card1-overidden">
                    <img className="bdrs10" src={inventoryCard1Icon} alt="" />
                  </div>
                </div>
                <div className="bdrs10 border-white-2 pl-01-cards">
                  <div className="up-card">
                    <div className="content-inner">
                      <span className="fw600 fz24 card-tite">
                        <img className="me-1" src={blackLeafIcon} alt="" />
                        Outsource Logistics
                      </span>
                      <div className="card-details-wapper">
                        <p className="fz12 card-details">
                          ipsum dolor sit amet, consectetuer adipiscing elit,
                          sed diam nonummy nibh euismod tincidunt ut laoreet
                          dolore magna aliquam erat volutpat
                        </p>
                      </div>
                      <Link
                        to="/transportation-outsourcing-details"
                        className="btn my-2 me-1 fz14 btn-dark-outlined black-default"
                      >
                        <span className="fz14 gradientText--radial">
                          Select
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="down-card2 down-card2-overidden">
                    <img className="bdrs10" src={inventoryCard2Icon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InventoryStepsTracker
            buttonText={"Next"}
            stepperActiveLayout={stepperActiveLayout}
            route={"/transportation-mode"}
          />
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
