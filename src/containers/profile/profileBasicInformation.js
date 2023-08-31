import React, { useEffect, useState } from "react";
import BottomNavbar from "../../layouts/bottomNavbar";
import ContactUs from "../../layouts/contactUs";
import PageList from "../../reusable_components/pageList";
import gradLeaf from "../../assets/images/icons/icon-grad-leaf.svg";
import darkLongArrow from "../../assets/images/icons/icon-dark-long-arrow.svg";
import locationMarker from "../../assets/images/icons/icon-location-marker.svg";
import Navbar from "../../layouts/navbar";
import { Link, Navigate } from "react-router-dom";
import { PATCH_UPDATE_USER } from "../../services/Api";
import axios from "axios";

export default function ProfileBasicInformation() {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [address, setAddress] = useState("");
  const [linkedinId, setLinkedinId] = useState("");
  const [facebookId, setFacebookId] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedData = JSON.parse(userData);
      setEmailAddress(parsedData?.email);
    }
  }, []);

  const handleSubmit = async () => {
    const payLoad = {
      fullname: fullName,
      mobile: contactNo,
      address: address,
      Linkedin: linkedinId,
      facebook: facebookId,
    };
    const headers = {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      "Content-Type": "application/json",
    };

    try {
      await axios
        .patch(`${PATCH_UPDATE_USER}`, payLoad, { headers })
        .then((resp) => {
          if (resp?.data?.msg?.includes("Updated Successful")) {
            Navigate("/dashboard");
          }
        });
    } catch (err) {
      console.log("error");
    }
  };

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
            <div className="mt-3 border-white-2 bdrs10 main-shadow block-widget product-screen__form">
              <form action="" className="holograf-form">
                <ul className="list-inline profile-tabs">
                  <li className="main-shadow">
                    <Link to="/basic-information">
                      <div className="border-white-2 profile-tabs-content">
                        <h3 className="fw600">Basic Profile Information</h3>
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
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="fz14 fw500 form-control"
                        placeholder="Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group">
                      <label for="" className="fw500 fz14 label">
                        Email Address
                      </label>
                      <input
                        type="text"
                        className="fz14 fw500 form-control"
                        placeholder="http://"
                        value={emailAddress ? emailAddress : ""}
                        // onChange={(e)=>setEmailAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-12 col-lg-6">
                    <div className="form-group">
                      <label
                        for="date-picker1-product-s1"
                        className="fw500 fz14 label"
                      >
                        Contact Information
                      </label>
                      <input
                        type="text"
                        className="fz14 fw500 form-control"
                        placeholder="1800 0900 9000"
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
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
                        onChange={(e) => setAddress(e.target.value)}
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

                <div className="row g-4">
                  <div className="col-12 col-lg-6">
                    <div className="form-group">
                      <label for="" className="fw500 fz14 label">
                        Linkedin
                      </label>
                      <input
                        type="text"
                        className="fz14 fw500 form-control"
                        placeholder="1800 0900 9000"
                        value={linkedinId}
                        onChange={(e) => setLinkedinId(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-group">
                      <label for="" className="fw500 fz14 label">
                        Facebook
                      </label>
                      <input
                        type="text"
                        className="fz14 fw500 form-control"
                        placeholder="1800 0900 9000"
                        value={facebookId}
                        onChange={(e) => setFacebookId(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-12">
                    <div className="form-group">
                      <label for="bio" className="fw500 fz14 label">
                        Bio
                      </label>
                      <textarea
                        className="fz14 fw500 form-control form-control--textarea"
                        rows="3"
                        id="bio"
                        placeholder="Tell us about yourself"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-end mt-auto"
                  onClick={handleSubmit}
                >
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
