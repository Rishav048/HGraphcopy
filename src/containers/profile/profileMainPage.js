import React from "react";
import ContactUs from "../../layouts/contactUs";
import BottomNavbar from "../../layouts/bottomNavbar";
import gradLeaf from "../../assets/images/icons/icon-grad-leaf.svg";
import darkLongArrow from "../../assets/images/icons/icon-dark-long-arrow.svg";
import uploadCloud from "../../assets/images/icons/icon-upload-cloud.svg";
import PageList from "../../reusable_components/pageList";
import Navbar from "../../layouts/navbar";
import { Link } from "react-router-dom";

export default function ProfileMainPage() {
  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />
        <section className="product-screen">
          <div className="product-screen__form">
            <div className="block-wavy-dark page-desc-content page-desc-content-noImage activity-topbar">
              <div className="left">
                <h3 className="mb-0 d-inline-flex gradientText--radial">
                  <img src={gradLeaf} alt="" />
                  <span className="ms-1 fw600 fz24">Settings</span>
                </h3>
                <p className="fz12 mb-0 text-white">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
            </div>
            <div className="mt-3 bdrs10 main-shadow border-white-2 block-widget profile-wrapper overflow-auto">
              <ul className="list-inline profile-tabs">
                <li className="main-shadow">
                  <Link to="/basic-information">
                    <div className="border-white-2 profile-tabs-content">
                      <h3 className="fw600">Basic Profile Information</h3>
                      <p className="fz14 fw400">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                      <img
                        src={darkLongArrow}
                        alt=""
                        className="profile-tab-arrow"
                      />
                    </div>
                  </Link>
                </li>
                <li className="main-shadow">
                  <Link to="/company-information">
                    <div className="border-white-2 profile-tabs-content">
                      <h3 className="fw600">Company Information</h3>
                      <p className="fz14 fw400">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                      <img
                        src={darkLongArrow}
                        alt=""
                        className="profile-tab-arrow"
                      />
                    </div>
                  </Link>
                </li>
                <li className="main-shadow">
                  <div className="border-white-2 profile-tabs-content">
                    <h3 className="fw600">Certification or Accreditation</h3>
                    <p className="fz14 fw400">
                      Any certifications or accreditations that the user has
                      obtained in the supply chain or related fields
                    </p>
                    <div className="d-flex justify-content-end position-relative upload-click profile-tabs-upload">
                      <button className="btn btn-fab btn-fab--dark">
                        <input type="file" />
                        <img src={uploadCloud} alt="" />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <ContactUs />
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
