import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import blackLeafIcon from "../../../../assets/images/black-leaf.svg";
import Card1_Image from "../../../../assets/images/inventory-pl01-card-1.svg";
import Card2_Image from "../../../../assets/images/inventory-pl01-card-2.svg";

import InventoryStepsTracker from "../../../../reusable_components/Inventory_stepsTracker";


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
  basic_pakagingDetails: false,
  addProducts: false,
  warehouseType: false,
  basic_warehouseDetails: false,
  logisticType: false,
  basic_logisticDetails: false,
};

export default function PakageInformation() {
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
          <div className="w-100 border-white-2 bdrs10 main-shadow block-widget custom-widget-inventory">
            <div className=" ">
              <div className="heading-top-div">
                <h6 className="mb-1 fz20 fw700">Package Information</h6>
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
                        Inhouse Packaging
                      </span>
                      <div className="card-details-wapper">
                        <p className="fz12 card-details">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam.
                        </p>
                      </div>
                      <Link
                        to="/pakaging-basic-details"
                        className="btn my-2 me-1 fz14 btn-dark-outlined black-default"
                      >
                        <span className="fz14 gradientText--radial">
                          Select
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="down-card1">
                    <img
                      className="bdrs10"
                      src={Card1_Image}
                      alt="card one image"
                    />
                  </div>
                </div>
                <div className="bdrs10 border-white-2 pl-01-cards">
                  <div className="up-card">
                    <div className="content-inner">
                      <span className="fw600 fz24 card-tite">
                        <img className="me-1" src={blackLeafIcon} alt="" />
                        Outsource Packaging
                      </span>
                      <div className="card-details-wapper">
                        <p className="fz12 card-details">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam.
                        </p>
                      </div>
                      <Link
                        to="/pakaging-outsourcing-details"
                        className="btn my-2 me-1 fz14 btn-dark-outlined black-default"
                      >
                        <span className="fz14 gradientText--radial">
                          Select
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="down-card2">
                    <img className="bdrs10" src={Card2_Image} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InventoryStepsTracker
            buttonText={"Next"}
            stepperActiveLayout={stepperActiveLayout}
            route={"/pakaging-basic-details"}
          />
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
