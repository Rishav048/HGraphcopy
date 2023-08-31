import React from "react";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import locationMarkerIcon from "../../../../assets/images/icons/icon-location-marker.svg";

import InventoryStepsTracker from "../../../../reusable_components/Inventory_stepsTracker";


// Maintainig Stepper layout Active/Blurr
const stepperActiveLayout = {
  step1: true,
  step2: true,
  step3: true,
  step4: true,
  sub_step1: false,
  sub_step2: false,
  sub_step4: false,
  packagingType: false,
  basic_pakagingDetails: false,
  addProducts: false,
  warehouseType: false,
  basic_warehouseDetails: false,
  logisticType: false,
  basic_logisticDetails: false,
};

export default function InventoryPreview() {
 
  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />

        <section className="product-screen">
          <div className="w-100 border-white-2 bdrs10 main-shadow block-widget product-screen__form packaging-screen">
            <div className="mb-1">
              <h6 className="mb-1 fz20 fw700">Packaging Details</h6>
            </div>

            <div className="w-100 mt-3 border-white-2 bdrs10 main-shadow packaging-cards-wrapper">
              <div className="packaging-card-header">
                <h3 className="m-0 fz16 fz600">Outsource Packaging</h3>
              </div>
              <div className="packaging-card-info-wrapper">
                <div className="packaging-card-info">
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Company Name</h3>
                    <span className="fz14 fw500">ABC-XYZ Company</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Contact Information</h3>
                    <span className="fz14 fw500">1800 0800 8009</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Company URL</h3>
                    <span className="fz14 fw500">
                      http://www.mycompanyurl.com
                    </span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Location</h3>
                    <span className="fz14 fw500">abc-xyx-location</span>
                  </div>
                </div>
                <div className="packaging-pair pair-full-width">
                  <h3 className="grayText fz14 fw500">Details</h3>
                  <span className="fz14 fw500">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-100 mt-3 border-white-2 bdrs10 main-shadow packaging-cards-wrapper">
              <div className="packaging-card-header">
                <h3 className="m-0 fz16 fz600">Basic Settings</h3>
              </div>
              <div className="packaging-card-info-wrapper">
                <div className="packaging-card-info">
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Level</h3>
                    <span className="fz14 fw500">Level 1</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Brand Name</h3>
                    <span className="fz14 fw500">ABC-XYZ</span>
                  </div>
                  <div className="packaging-pair">
                    <div className="products-added">
                      <h3 className="grayText fz14 fw500">
                        Total Products Added
                      </h3>
                      <button className="btn btn-solid--dark packaging-card-btn">
                        {/* <img src="./assets/images/icons/icon-location-marker.svg" alt=""> */}
                        <div className="fw600 fz14 gradientText--radial text">
                          <span>Show Products</span>
                        </div>
                      </button>
                    </div>
                    <span className="fz14 fw500">300</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Shelf Life</h3>
                    <span className="fz14 fw500">04 Years</span>
                  </div>
                </div>
                <div className="packaging-pair pair-full-width">
                  <h3 className="grayText fz14 fw500">Details</h3>
                  <span className="fz14 fw500">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <h6 className="mb-1 fz20 fw700">Warehouse Details</h6>
            </div>
            <div className="w-100 mt-3 border-white-2 bdrs10 main-shadow packaging-cards-wrapper">
              <div className="packaging-card-header">
                <h3 className="m-0 fz16 fz600">Outsource Warehouse</h3>
              </div>
              <div className="packaging-card-info-wrapper">
                <div className="packaging-card-info">
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Warehouse Name</h3>
                    <span className="fz14 fw500">ABC-XYZ Company</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Contact Information</h3>
                    <span className="fz14 fw500">1800 0800 8009</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Capacity</h3>
                    <span className="fz14 fw500">
                      http://www.mycompanyurl.com
                    </span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Location</h3>
                    <span className="fz14 fw500">abc-xyx-location</span>
                  </div>
                </div>
                <div className="packaging-pair pair-full-width">
                  <h3 className="grayText fz14 fw500">Details</h3>
                  <span className="fz14 fw500">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <h6 className="mb-1 fz20 fw700">Ownership Details</h6>
            </div>
            <div className="w-100 mt-3 border-white-2 bdrs10 main-shadow packaging-cards-wrapper">
              <div className="packaging-card-header">
                <h3 className="m-0 fz16 fz600">Ownership</h3>
              </div>
              <div className="packaging-card-info-wrapper">
                <div className="packaging-card-info">
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Warehouse Name</h3>
                    <span className="fz14 fw500">ABC-XYZ Company</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Contact Information</h3>
                    <span className="fz14 fw500">1800 0800 8009</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Capacity</h3>
                    <span className="fz14 fw500">
                      http://www.mycompanyurl.com
                    </span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Location</h3>
                    <span className="fz14 fw500">abc-xyx-location</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <h6 className="mb-1 fz20 fw700">Transportation Details</h6>
            </div>
            <div className="w-100 mt-3 border-white-2 bdrs10 main-shadow packaging-cards-wrapper">
              <div className="packaging-card-header">
                <h3 className="m-0 fz16 fz600">Outsource Transportation</h3>
              </div>
              <div className="packaging-card-info-wrapper">
                <div className="packaging-card-info">
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Company Full Name</h3>
                    <span className="fz14 fw500">ABC-XYZ Company</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Contact Information</h3>
                    <span className="fz14 fw500">1800 0800 8009</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Company URL</h3>
                    <span className="fz14 fw500">
                      http://www.mycompanyurl.com
                    </span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Location</h3>
                    <span className="fz14 fw500">abc-xyx-location</span>
                  </div>
                </div>
                <div className="packaging-pair pair-full-width">
                  <h3 className="grayText fz14 fw500">Details</h3>
                  <span className="fz14 fw500">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-100 mt-3 border-white-2 bdrs10 main-shadow packaging-cards-wrapper">
              <div className="packaging-card-header">
                <h3 className="m-0 fz16 fz600">Transportation Settings</h3>
              </div>
              <div className="packaging-card-info-wrapper">
                <div className="packaging-card-info">
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Company Full Name</h3>
                    <span className="fz14 fw500">ABC-XYZ Company</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Contact Information</h3>
                    <span className="fz14 fw500">1800 0800 8009</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Company URL</h3>
                    <span className="fz14 fw500">
                      http://www.mycompanyurl.com
                    </span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Location</h3>
                    <span className="fz14 fw500">abc-xyx-location</span>
                  </div>
                </div>
                <h3 className="m-0 fz16 fw700 mt-3 mb-3 packing-inside-heading ">
                  Route 1 Details
                </h3>
                <div className="packaging-card-info">
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Company Full Name</h3>
                    <span className="fz14 fw500">ABC-XYZ Company</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Contact Information</h3>
                    <span className="fz14 fw500">1800 0800 8009</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Company URL</h3>
                    <span className="fz14 fw500">
                      http://www.mycompanyurl.com
                    </span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Location</h3>
                    <span className="fz14 fw500">abc-xyx-location</span>
                  </div>
                </div>
                <h3 className="m-0 fz16 fw700 mt-3 mb-3 packing-inside-heading ">
                  Route 2 Details
                </h3>
                <div className="packaging-card-info">
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Company Full Name</h3>
                    <span className="fz14 fw500">ABC-XYZ Company</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Contact Information</h3>
                    <span className="fz14 fw500">1800 0800 8009</span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Company URL</h3>
                    <span className="fz14 fw500">
                      http://www.mycompanyurl.com
                    </span>
                  </div>
                  <div className="packaging-pair">
                    <h3 className="grayText fz14 fw500">Location</h3>
                    <span className="fz14 fw500">abc-xyx-location</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <InventoryStepsTracker
            buttonText={"Next"}
            stepperActiveLayout={stepperActiveLayout}
            route={"/inventory-success"}
          />
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
