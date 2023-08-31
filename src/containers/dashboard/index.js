import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageList from "../../reusable_components/pageList";
import Navbar from "../../layouts/navbar";
import ProductOverview from "./productOverview";
import ProductListingsDashboard from "./ProductListingsDashboard";
import ActivitiesReports from "./activitiesReports";
import BottomNavbar from "../../layouts/bottomNavbar";
import illustrationEvolution from "../../assets/images/illustration-evolution.svg";
import gradLeaf from "../../assets/images/icons/icon-grad-leaf.svg";
import veryLongArrow from "../../assets/images/icons/icon-very-long-arrow.svg";
import arrow from "../../assets/images/icons/icon-arrow.svg";
import plus from "../../assets/images/icons/icon-plus.svg";
import longArrow from "../../assets/images/icons/icon-long-arrow.svg";
import thickGrayArrow from "../../assets/images/icons/icon-thick-gray-arrow.svg";
import illustrationComputer from "../../assets/images/illustration-computer.svg";
import arrowDashboard from "../../assets/images/icons/icon-arrow-dashboard.svg";
import newProduct from "../../assets/images/illustration-dashboard-new-product.svg";
import trackProduct from "../../assets/images/illustration-dashboard-track-product.svg";
import exploreReport from "../../assets/images/illustration-dashboard-explore-report.svg";


console.log('dashboard')
export default function Dashboard() {
  useEffect(() => {
    let script = document.createElement("script");
    let script2 = document.createElement("script");
    script.id = "scriptid";
    script2.id = "chartid";
    script.src = "/assets/scripts/dashboard_anim_custom.js";
    script2.src = "/assets/scripts/charts.js";
    let script3 = document.createElement("script");
    script3.id = "scriptId3";
    script3.src = "/assets/scripts/datepicker.js";
       document.body.append(script, script2, script3);
    
    return () => {
      const scriptElement = document.getElementById("scriptid");
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
      const scriptElement2 = document.getElementById("chartid");
      if (scriptElement2) {
        document.body.removeChild(scriptElement2);
      }
       const scriptElement3 = document.getElementById("scriptId3");
      if (scriptElement3) {
        document.body.removeChild(scriptElement3);
    };
  }
  }, [])
  return (
    <div className="paye-layout paye-layout--dashboard">
      <PageList />
      <div className="pb-0 content-layout">
        <Navbar />
        <div className="dashboard-screen">
          <section className="w-100 dashboard-top-area">
            <div className="dashboard-top-area__left">
              <div className="block-wavy-dark page-desc-content">
                <div className="title">
                  <img src={gradLeaf} alt="" />
                  <h2 className="fz24 mb-0 fw600 gradientText--radial">
                    <span>Tracking is never been that easy!</span>
                  </h2>
                </div>
                <p className="fz12 mb-0 text-white">
                  Learn More
                  <img className="d-inline-block" src={veryLongArrow} alt="" />
                </p>
              </div>
              <ProductOverview />
              <div className="other-add-links">
                <div className="h-100 other-add-links__left">
                  <div className="h-100 add-layer-block">
                    <Link
                      className="w-100 h-100 gradient-widget clickBtn"
                      to="/add-product"
                      role="button"
                    >
                      <div className="">
                        <div className="main-shadow bg-white icon-wrap">
                          <img src={plus} alt="cart" className="cart-image" />
                        </div>
                        <span className="fz14 lh-1 fw500">
                          Add new product
                          <br />
                          <img
                            src={arrow}
                            alt=""
                            className="d-inline-block mt-1"
                          />
                        </span>
                      </div>
                      <p className="grayText mb-0 fz12">
                        Add your new product and get QR to secure it well.
                      </p>
                    </Link>
                  </div>
                </div>
                <Link
                  to="/pakage-information"
                  class="h-100 other-add-links__middle"
                >
                  <div className="w-100 h-100 main-shadow bdrs10">
                    <div className="top">
                      <h3 className="mb-0 fz18 fw500 gradientText--radial">
                        <span>Inventory Management</span>
                      </h3>
                      <img src={longArrow} alt="" className="" />
                    </div>
                    <p className="text-white mb-0 fz12">
                      Manage and keep a record of your inventories all along.
                    </p>
                  </div>
                </Link>
                <div className="other-add-links__right">
                  <h2 className="fz28 fw700 mb-0">24/7</h2>
                  <h4 className="fz22 mb-0">Assistance.</h4>
                  <p className="grayText w-100 fz12">
                    Reach out
                    <img
                      src={thickGrayArrow}
                      alt="d-inline-block"
                      className=""
                    />
                  </p>
                  <img
                    src={illustrationComputer}
                    alt=""
                    className="computer-img"
                  />
                </div>
              </div>
            </div>
            <ProductListingsDashboard />
          </section>
        </div>
        <ActivitiesReports />
      </div>
      <section className="w-100 full-width-wrapper">
        <div className="d-flex dashboard-anim dashboard-anim--purpleBg">
          <div className="w-100 position-relative dashboard-anim__inner">
            <div className="content-wrap fade-in">
              <h2 className="fw300 fz70">
                <span className="gradientText"> Wants to own a product? </span>
                <br />
                <span className="fw600 fz60 gradientText">Add new product</span>
                <img className="d-inline-block" src={arrowDashboard} alt="" />
              </h2>
              <p className="fz24">
                Implement mechanisms to verify the authenticity of products,
                such as unique identifiers and authentication processes,
                building customer trust
              </p>
              <ul className="list-inline">
                <li>
                  <div className="fst-italic fz24 fw500 pointer">
                    <div className="main-shadow img-icon"></div>
                    <span className="">
                      Lorem ipsum dolor sit amet, consectetuer.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="fst-italic fz24 fw500 pointer">
                    <div className="main-shadow img-icon"></div>
                    <span className="">
                      Lorem ipsum dolor sit amet, consectetuer.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="fst-italic fz24 fw500 pointer">
                    <div className="main-shadow img-icon"></div>
                    <span className="">
                      Lorem ipsum dolor sit amet, consectetuer.
                    </span>
                  </div>
                </li>
              </ul>
              <div className="dark-cta-row">
                <Link to="/add-product" className="btn btn-cta--outlined">
                  <div className="fw400 fz14">
                    <span className="bdrs10"> Add New Product </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="position-absolute anim-image">
              <img className="replaceWithSVG" src={newProduct} alt="" />
            </div>
          </div>
        </div>

        <div className="d-flex dashboard-anim dashboard-anim--greenBg">
          <div className="w-100 position-relative dashboard-anim__inner">
            <div className="content-wrap fade-in">
              <h2 className="fw300 fz70">
                <span className="gradientText">
                  Tracking is just a click away{" "}
                </span>
                <br />
                <span className="fw600 fz60 gradientText">
                  Track your product
                </span>
                <img className="d-inline-block" src={arrowDashboard} alt="" />
              </h2>
              <p className="fz24">
                Implement a system for tracking and tracing products throughout
                the supply chain, ensuring transparency and maintaining product
                integrity
              </p>
              <ul className="list-inline">
                <li>
                  <div className="fst-italic fz24 fw500 pointer">
                    <div className="main-shadow img-icon"></div>
                    <span className="">
                      Lorem ipsum dolor sit amet, consectetuer.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="fst-italic fz24 fw500 pointer">
                    <div className="main-shadow img-icon"></div>
                    <span className="">
                      Lorem ipsum dolor sit amet, consectetuer.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="fst-italic fz24 fw500 pointer">
                    <div className="main-shadow img-icon"></div>
                    <span className="">
                      Lorem ipsum dolor sit amet, consectetuer.
                    </span>
                  </div>
                </li>
              </ul>
              <div className="dark-cta-row">
                <Link to="/tracking-status" className="btn btn-cta--outlined">
                  <div className="fw400 fz14">
                    <span className="bdrs10"> Start tracking </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="position-absolute anim-image">
              <img className="replaceWithSVG" src={trackProduct} alt="" />
            </div>
          </div>
        </div>
        <div className="d-flex dashboard-anim dashboard-anim--blueBg">
          <div className="w-100 position-relative dashboard-anim__inner">
            <div className="content-wrap fade-in">
              <h2 className="fw300 fz70">
                <span className="gradientText">
                  Aligned verson of products{" "}
                </span>
                <br />
                <span className="fw600 fz60 gradientText">
                  Report analytics
                </span>
                <img className="d-inline-block" src={arrowDashboard} alt="" />
              </h2>
              <p className="fz24">
                Integrate analytics capabilities to generate valuable insights,
                enabling data-driven decision-making and process optimization
              </p>
              <ul className="list-inline">
                <li>
                  <div className="fst-italic fz24 fw500 pointer">
                    <div className="main-shadow img-icon"></div>
                    <span className="">
                      Lorem ipsum dolor sit amet, consectetuer.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="fst-italic fz24 fw500 pointer">
                    <div className="main-shadow img-icon"></div>
                    <span className="">
                      Lorem ipsum dolor sit amet, consectetuer.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="fst-italic fz24 fw500 pointer">
                    <div className="main-shadow img-icon"></div>
                    <span className="">
                      Lorem ipsum dolor sit amet, consectetuer.
                    </span>
                  </div>
                </li>
              </ul>
              <div className="dark-cta-row">
                <a href="/report" className="btn btn-cta--outlined">
                  <div className="fw400 fz14">
                    <span className="bdrs10"> Explore Report </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="position-absolute anim-image">
              <img className="replaceWithSVG" src={exploreReport} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="dashboard-evolution">
        <div className="border-white-2 bdrs10 main-shadow">
          <h2 className="fw300 text-center fz60">
            A cutting edge blockchain
            <br />
            <span className="fw600">Service </span>
          </h2>
          <div className="ev-svg-cover">
            <img src={illustrationEvolution} alt="" />
          </div>
          <p className="fz20 text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam
          </p>
        </div>
      </section>
      <BottomNavbar />
    </div>
  );
}
