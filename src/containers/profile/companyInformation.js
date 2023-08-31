import React, { useState } from "react";
import BottomNavbar from "../../layouts/bottomNavbar";
import ContactUs from "../../layouts/contactUs";
import PageList from "../../reusable_components/pageList";
import Navbar from "../../layouts/navbar";
import gradLeaf from "../../assets/images/icons/icon-grad-leaf.svg";
import darkLongArrow from "../../assets/images/icons/icon-dark-long-arrow.svg";
import locationMarker from "../../assets/images/icons/icon-location-marker.svg";
import { Link } from "react-router-dom";

export default function CompanyInformation() {

  const [companyName , setCompanyName] = useState("")
  const [role , setRole] = useState("")
  const [website , setWebsite] = useState("")
  const [address , setAddress] = useState("")

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
            <div className="profile-wrapper mt-3 border-white-2 bdrs10 main-shadow block-widget product-screen__form overflow-auto">
              <form action="" className="h-100 holograf-form">
                <ul className="list-inline profile-tabs">
                  <li className="main-shadow">
                    <Link to="/company-information">
                      <div className="border-white-2 profile-tabs-content">
                        <h3 className="fw600">Company Information</h3>
                        <p className="fz14 fw400">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat.
                        </p>
                        <img
                          src={darkLongArrow}
                          alt=""
                          className="profile-tab-arrow"
                        />
                      </div>
                    </Link>
                  </li>
                </ul>
                <div className="row g-4">
                  <div className="col-12 col-lg-6">
                    <div className="form-group">
                      <label for="" className="fw500 fz14 label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="fz14 fw500 form-control"
                        placeholder="Name"
                        value={companyName}
                        onChange={(e)=>setCompanyName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group">
                      <label for="" className="fw500 fz14 label">
                        Role
                      </label>
                      <input
                        type="text"
                        className="fz14 fw500 form-control"
                        placeholder="http://"
                        value={role}
                        onChange={(e)=>setRole(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-12 col-lg-6">
                    <div className="form-group">
                      <label for="" className="fw500 fz14 label">
                        Website
                      </label>
                      <input
                        type="text"
                        className="fz14 fw500 form-control"
                        placeholder="http://"
                        value={website}
                        onChange={(e)=>setWebsite(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="position-relative form-group">
                      <label className="fw500 fz14 label">Address </label>

                      <input
                        type="text"
                        className="fz14 fw500 form-control"
                        placeholder="1800 0900 9000"
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                      />
                      <button
                        type="button"
                        className="position-absolute btn btn-fab btn-fab--dark location-btn"
                      >
                        <img src={locationMarker} alt="" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-end mt-auto">
                  <Link
                    to="/dashboard"
                    className="btn my-2 fz14 btn-dark-outlined black-default"
                  >
                    <p className="m-0 fz14 gradientText--radial fw400">Next</p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <ContactUs />
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
