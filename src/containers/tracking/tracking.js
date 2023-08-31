import React from "react";
import BottomNavbar from "../../layouts/bottomNavbar";
import gradLeaf from "../../assets/images/icons/icon-grad-leaf.svg";
import rightGreyLongArrow from "../../assets/images/icons/icon-right-grey-long-arrow.svg";
import mapNull from "../../assets/images/map-null.svg";
import trackingNullBig from "../../assets/images/tracking-null-bg.svg";
import SearchBar from "./searchBar";

export default function Tracking() {
  return (
    <div className="paye-layout">
      {/* <PageList /> */}
      <div className="content-layout">
        {/* <Navbar /> */}
        <section className="gap-3 product-screen">
          <div className="border-white-2 bdrs10 main-shadow block-widget product-screen__form">
            <div className="h-100 map-div  custom_mapdiv">
              <div className="block-wavy-dark page-desc-content page-desc-content-noImage top-bar-bg">
                <div className="left">
                  <h3 className="mb-0 d-inline-flex gradientText--radial">
                    <img src={gradLeaf} alt="" />
                    <span className="ms-1 fw600 fz24">
                      Product ID# 0x7t979bjv8909
                    </span>
                  </h3>
                  <p className="fz12 mb-0 text-white">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy
                    <img className="arrow-img" src={rightGreyLongArrow} />
                  </p>
                </div>
              </div>
              <img className="map-img" src={mapNull} alt="null map" />
            </div>
          </div>

          <div className="px-3 border-white-2 bdrs10 main-shadow block-widget trac-right-sec-null">
            <SearchBar />
            <div className="h-100 mw-100 mh-100 border-white-2 main-shadow scroll-div-right null-sc-div">
              <div className="headlines_div">
                <p>To start Tracking</p>
                <h2> Enter product id or upload QR.</h2>
              </div>
              <div className="right-img-wrapper">
                <img src={trackingNullBig} alt="null-img" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
