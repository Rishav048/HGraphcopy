import React, { useEffect, useState } from "react";
import BottomNavbar from "../../layouts/bottomNavbar";
import PageList from "../../reusable_components/pageList";
import Navbar from "../../layouts/navbar";
import gradLeaf from "../../assets/images/icons/icon-grad-leaf.svg";
import mapWithData from "../../assets/images/map-withdata.svg";
import userDp from "../../assets/images/user-dp.png";
import trustedShield from "../../assets/images/icons/icon-trusted-shield.svg";
import msg from "../../assets/images/icons/icon-msg.svg";
import search from "../../assets/images/icons/icon-search.svg";
import GoogleMap from "./googleMapComponent";
import uploadCloud from "../../assets/images/icons/icon-upload-cloud.svg";
import calendar from "../../assets/images/icons/icon-calendar.svg";
import goldenCrown from "../../assets/images/golden-crown.svg";
import trackingNullBig from "../../assets/images/tracking-null-bg.svg";
import downloadCloudGradient from "../../assets/images/icons/icon-download-cloud-gradient.svg";

import {
  GET_OWNER,
  GET_USER_DETAILS,
  GET_PRODUCT,
  REQUEST_OWNERSHIP,
  GET_OWNERSHIP_STATUS,
  UPLOAD_QR,
  GET_ALL_SENT_REQUEST,
} from "../../services/Api";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const headers = {
  Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
  "Content-Type": "application/json",
};

let RequestID = JSON.parse(localStorage.getItem("request_id")) || null;
export default function OwnershipFlow() {
  const [searchedProductId, setSearchedProductId] = useState("");
  const [ownerActive, setOwnerActive] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [ProductDetails, setProductDetails] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [requestStatus, setRequestStatus] = useState("");

  const { QRcode } = useParams();
  useEffect(() => {
    let script = document.createElement("script");
    script.id = "scriptId";
    script.src = "/assets/scripts/datepicker.js";
    document.body.append(script);

    if (QRcode) {
      let urlId = QRcode;
      checkForPreviousRequest(urlId);
      handleSearchOwners(urlId);
    }

    return () => {
      const scriptElement = document.getElementById("scriptId");
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  const handleStatusChange = () => {
    if (searchedProductId == "") {
      handleSearchOwners(QRcode);
    } else {
      handleSearchOwners(searchedProductId);
    }
  };
  const headers = {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    "Content-Type": "application/json",
  };

  const checkForPreviousRequest = async (id) => {
    const headers = {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      "Content-Type": "application/json",
    };
    try {
      let res = await axios.get(`${GET_ALL_SENT_REQUEST}`, {
        headers,
      });
      let data = res?.data;

      let rqst_id_array = data?.filter((el) => {
        if (el.product?.id == id) {
          let status = el.status;
          setRequestStatus(status);
        }
      });
    } catch (err) {
      console.log({ Error: err });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      checkForPreviousRequest(searchedProductId);
      handleSearchOwners(searchedProductId);
    }
  };

  const handleProductId = (e) => {
    setSearchedProductId(e.target.value);
  };

  const handleSearchOwners = async (id) => {
    setRequestStatus("");
    checkForPreviousRequest(id);
    const headers = {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      "Content-Type": "application/json",
    };
    try {
      let res = await axios.get(`${GET_OWNER}/${id}`, {
        headers,
      });
      let res2 = await axios.get(`${GET_PRODUCT}/${id}`, {
        headers,
      });
      let ownerID = res.data.owners[0].owner;
      getOwnerDetails(ownerID);
      setProductDetails(res2.data);

      if (RequestID) {
        getRequestStatus(RequestID);
      }
    } catch (err) {
      toast.error("Please enter a valid ID..! ", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log({ Error: err });
      setSearchedProductId("");
    }
  };

  const selectQR = async (e) => {
    setSelectedImage(e.target.files[0]);
    const headers = {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    };
    if (e.target.files[0]) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      try {
        await axios.post(UPLOAD_QR, formData, { headers }).then((resp) => {
          if (resp) {
            let id = resp?.data?.product;
            // setSearchedProductId(id);
            handleSearchOwners(id);
          }
        });
      } catch (err) {
        console.log({ "error msg": err });
      }
    }
  };

  const getOwnerDetails = async (id) => {
    const headers = {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      "Content-Type": "application/json",
    };
    try {
      let res = await axios.get(`${GET_USER_DETAILS}/${id}`, {
        headers,
      });
      let ownerDetails = res.data;
      setUserDetails(ownerDetails);
      let activeUser = JSON.parse(localStorage.getItem("userData"));
      if (activeUser.email == ownerDetails.email) {
        setOwnerActive(true);
      } else {
        setOwnerActive(false);
      }
    } catch (err) {
      console.log({ EROOR: err });
    }
  };

  const handleOwnershipRequest = async (id) => {
    const headers = {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      "Content-Type": "application/json",
    };
    try {
      let res = await axios.post(
        `${REQUEST_OWNERSHIP}`,
        { product: id },
        { headers }
      );

      localStorage.setItem("request_id", JSON.stringify(res.data.request_id));
      getRequestStatus(res.data.request_id);
      handleSearchOwners(id);
    } catch (err) {
      console.log({ Error: err });
    }
  };

  const getRequestStatus = async (id) => {
    const headers = {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      "Content-Type": "application/json",
    };
    try {
      let res = await axios.get(`${GET_OWNERSHIP_STATUS}/${id}`, { headers });
      let status = res.data.owners.status;
    } catch (err) {
      console.log({ Error: err });
    }
  };

  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />
        <div className="row">
          <div className="col-5 border-white-2 tracker-wrapper">
            <section className="tracker-bg">
              <div className="dark-block-content page-desc-content">
                <h3 className="fz24 mb-0 fw600 gradientText--radial">
                  <img src={gradLeaf} alt="" />
                  <span>Product ID {ProductDetails?.id}</span>
                </h3>
                <p className="mb-0 fz12 text-white d-flex">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy
                  <img
                    src="./assets/images/icons/icon-very-long-arrow.svg"
                    alt=""
                  />
                </p>
              </div>
              <div className="map">
                {ProductDetails && (
                  <GoogleMap location={ProductDetails.location} />
                )}
              </div>
            </section>
          </div>
          <div className="col-7">
            <div className="tracking-status border-white-2">
              <h3 className="mb-3 fw500 fz14 div-hidden">
                Product Tracking Status
              </h3>

              <div className="w-100 page-header__other-options div-hidden">
                <div className="w-100 pe-auto position-relative form-group form-group--search">
                  <div
                    onClick={() => handleSearchOwners(searchedProductId)}
                    className="position-absolute icon-wrap"
                  >
                    <img src={search} alt="" />
                  </div>
                  <input
                    type="text"
                    className="fz14 border-white-2 form-control"
                    placeholder="Enter product ID or upload QR"
                    value={searchedProductId}
                    onChange={handleProductId}
                    onKeyUp={handleKeyPress}
                  />
                  <div className="position-absolute upload-click">
                    <button className="position-relative btn btn-fab btn-fab--dark">
                      <input type="file" accept="image/*" onChange={selectQR} />
                      <img src={uploadCloud} alt="" />
                    </button>
                  </div>
                </div>
                <button
                  id="datepicker-btn-tc-01"
                  className="flex-shrink-0 position-relative btn-fab btn-fab--pink"
                  type="button"
                >
                  <img src={calendar} alt="" />
                </button>
                <div
                  id="datepicker-container-tc-01"
                  className="wrapper_datepicker"
                ></div>
              </div>

              <>
                {userDetails && ProductDetails ? (
                  <>
                    {ownerActive ? (
                      <div className="tracker-product-details">
                        <div className="tracker-info-wrapper">
                          <div className="d-grid gap-2">
                            <button
                              className="tracking-btn fz14 fw400"
                              type="button"
                            >
                              Product Details
                            </button>
                            <button
                              className="tracking-btn tracking-btn-disabled fz14 fw600"
                              type="button"
                            >
                              Hide ownership flow
                            </button>
                          </div>

                          <div className="d-flex">
                            <div className="p-2 w-100">
                              <div className="list-unstyled detail-cards">
                                <div className="p-0">
                                  <div className="card-inner">
                                    <div className="fz12 card__text">
                                      <div className="text-pair">
                                        <div className="label">Product ID:</div>
                                        <div className="fw600 value">
                                          {ProductDetails.id}
                                        </div>
                                      </div>
                                      <div className="text-pair">
                                        <div className="label">
                                          Product Name:
                                        </div>
                                        <div className="fw600 value">
                                          {ProductDetails.name}
                                        </div>
                                      </div>
                                      <div className="text-pair">
                                        <div className="label">Brand Name:</div>
                                        <div className="fw600 value">
                                          <div className="brnd_btn_black">
                                            <span>{ProductDetails.brand}</span>
                                          </div>
                                          <img
                                            className="trusted_sheild"
                                            src={trustedShield}
                                            alt="trusted_logo"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-2 flex-shrink-1">
                              <ul className="list-inline mt-2 mb-0 preview-tags">
                                <li>
                                  <button className="bdrs10 p-tag download-qr download-btn-wrapper">
                                    <span className="fz12 text-nowrap gradientText--radial">
                                      Download QR
                                    </span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="tracker-info">
                            <div className="tracker-user-card-wrapper">
                              <div className="user-card-dot"></div>
                              <div className="tracker-user-card position-relative">
                                <span className="tagBefore">
                                  <span className="fw600 fz14 gradientText--radial">
                                    P1
                                  </span>
                                </span>
                                <div className="user-tracking-pic d-flex">
                                  <div className="page-header__user-info round_pf_pic">
                                    <div className="rounded-circle user-img">
                                      <span className="rounded-circle">
                                        <img
                                          src={userDp}
                                          alt="User Image - Holograf"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <div className="user-tracking-info">
                                    <h3 className="m-0 fw600 fz16">
                                      {userDetails.fullname}
                                    </h3>
                                    <p className="d-flex align-items-center trusted-user">
                                      <img src={trustedShield} alt="" />
                                      <span className="fw500 fz12">
                                        Trusted Owner
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-end tracking-date-tag">
                                  <span className="date_btn">
                                    {ProductDetails.manufacturing_date}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="tracker-product-details">
                        <div className="tracker-info-wrapper">
                          <div className="d-grid gap-2">
                            <button
                              className="tracking-btn fz14 fw400"
                              type="button"
                            >
                              Product Details
                            </button>
                            <button
                              className="tracking-btn tracking-btn-disabled fz14 fw600"
                              type="button"
                            >
                              Hide ownership flow
                            </button>
                          </div>
                          <div className="d-flex">
                            <div className="p-2 w-100">
                              <div className="list-unstyled detail-cards">
                                <div className="p-0">
                                  <div className="card-inner">
                                    <div className="fz12 card__text">
                                      <div className="text-pair">
                                        <div className="label">Product ID:</div>
                                        <div className="fw600 value">
                                          {ProductDetails.id}
                                        </div>
                                      </div>
                                      <div className="text-pair">
                                        <div className="label">
                                          Product Name:
                                        </div>
                                        <div className="fw600 value">
                                          {ProductDetails.name}
                                        </div>
                                      </div>
                                      <div className="text-pair">
                                        <div className="label">Brand Name:</div>
                                        <div className="fw600 value">
                                          <div className="brnd_btn_black">
                                            <span>{ProductDetails.brand}</span>
                                          </div>
                                          <img
                                            className="trusted_sheild"
                                            src={trustedShield}
                                            alt="trusted_logo"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-2 flex-shrink-1">
                              <ul className="list-inline mt-2 mb-0 preview-tags">
                                <li>
                                  <button className="bdrs10 p-tag download-qr download-btn-wrapper">
                                    <span className="fz12 text-nowrap gradientText--radial">
                                      Download QR
                                    </span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="tracker-info">
                            <div className="tracker-user-card-wrapper">
                              <div className="user-card-dot"></div>
                              <div className="tracker-user-card position-relative">
                                <span className="tagBefore">
                                  <span className="fw600 fz14 gradientText--radial">
                                    P2
                                  </span>
                                </span>
                                <div className="d-flex justify-content-between">
                                  <div className="user-tracking-pic d-flex">
                                    <div className="page-header__user-info round_pf_pic">
                                      <div className="rounded-circle user-img">
                                        <span className="rounded-circle">
                                          <img
                                            src={userDp}
                                            alt="User Image - Holograf"
                                          />
                                        </span>
                                      </div>
                                      <div className="position-absolute crown-wrapper">
                                        <img src={goldenCrown} alt="" />
                                      </div>
                                    </div>
                                    <div className="user-tracking-info">
                                      <h3 className="m-0 fw600 fz16">
                                        {userDetails.fullname}
                                      </h3>
                                      <p className="m-0 fw500 fz12">
                                        Contact info:
                                        <span className="fw400 fz12">
                                          {userDetails.email}
                                        </span>
                                      </p>
                                      <p className="d-flex align-items-center trusted-user">
                                        <img src={trustedShield} alt="" />
                                        <span className="fw500 fz12">
                                          Trusted Owner
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="message">
                                    <button className="btn btn-fab btn-fab--green">
                                      <img src={msg} alt="" />
                                    </button>
                                  </div>
                                </div>

                                <div className="row mt-3 mb-3">
                                  <div className="col-6">
                                    <div className="d-flex agreement-wrapper">
                                      <div className="page-header__other-options">
                                        <button className="btn btn-fab btn-fab--dark">
                                          <img
                                            src={downloadCloudGradient}
                                            alt=""
                                          />
                                        </button>
                                      </div>
                                      <div className="download-content">
                                        <h3 className="fz14 fw500">
                                          Aggrement.pdf
                                        </h3>
                                        <p className="fz12 fw400">
                                          To request ownership of product both
                                          parties need to e-sign agreement.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="d-flex agreement-wrapper">
                                      <div className="page-header__other-options">
                                        <button className="btn btn-fab btn-fab--dark">
                                          <img src={uploadCloud} alt="" />
                                        </button>
                                      </div>
                                      <div className="download-content">
                                        <h3 className="fz14 fw500">
                                          Upload e-sign agreement.
                                        </h3>
                                        <p className="fz12 fw400">
                                          You can upload your e-sign agreement
                                          here to request ownership of product.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <ul className="mb-3 list-inline mt-2 mb-0 preview-tags tracking-downline">
                                  <li
                                    // onClick={handleStatusChange}
                                    onClick={() =>
                                      handleOwnershipRequest(ProductDetails.id)
                                    }
                                    className={
                                      requestStatus == "" ? "" : "disabledLi"
                                    }
                                  >
                                    <div className="bdrs10 p-tag download-qr">
                                      <span className="dot"></span>
                                      <span className="fz12 fw400 font-secondary text-nowrap text-uppercase gradientText--radial">
                                        Request Product Ownership
                                      </span>
                                    </div>
                                  </li>

                                  <li
                                    onClick={handleStatusChange}
                                    className={
                                      requestStatus == "request"
                                        ? ""
                                        : "disabledLi"
                                    }
                                  >
                                    <div className="bdrs10 p-tag download-qr">
                                      <span className="dot"></span>
                                      <span className="fz12 fw400 font-secondary text-nowrap text-uppercase gradientText--radial">
                                        Waiting For Response From Owner
                                      </span>
                                    </div>
                                  </li>

                                  <li
                                    onClick={handleStatusChange}
                                    className={
                                      requestStatus == "approved"
                                        ? ""
                                        : "disabledLi"
                                    }
                                  >
                                    <div className="bdrs10 p-tag download-qr">
                                      <span className="dot"></span>
                                      <span className="fz12 fw400 font-secondary text-nowrap text-uppercase gradientText--radial">
                                        Request Approved/Reject
                                      </span>
                                    </div>
                                  </li>
                                </ul>

                                <div className="d-flex justify-content-end tracking-date-tag">
                                  <span className="date_btn">
                                    {ProductDetails.manufacturing_date}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* <div className="tracker-info">
                    <div className="tracker-user-card-wrapper">
                      <div className="user-card-dot"></div>
                      <div className="tracker-user-card position-relative">
                        <span className="tagBefore">
                          <span className="fw600 fz14 gradientText--radial">
                            P3
                          </span>
                        </span>
                        <div className="d-flex justify-content-between">
                          <div className="user-tracking-pic d-flex">
                            <div className="page-header__user-info round_pf_pic">
                              <div className="rounded-circle user-img">
                                <span className="rounded-circle">
                                  <img
                                    src={userDp}
                                    alt="User Image - Holograf"
                                  />
                                </span>
                              </div>
                              <div className="position-absolute crown-wrapper">
                                <img src={goldenCrown} alt="" />
                              </div>
                            </div>
                            <div className="user-tracking-info">
                              <h3 className="m-0 fw600 fz16">
                                Jeromin Willson (You)
                              </h3>
                              <p className="m-0 fw500 fz12">
                                Contact info:
                                <span className="fw400 fz12">
                                  jermonwillson@example.com
                                </span>
                              </p>
                              <p className="d-flex align-items-center trusted-user">
                                <img src={trustedShield} alt="" />
                                <span className="fw500 fz12">
                                  Trusted Owner
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="row mt-3 mb-3">
                          <ul className="list-inline mt-3 mb-0 product-stats">
                            <li>
                              <div className="stat">
                                <div className="position-relative stat--noLine">
                                  <div className="font-secondary fw400 fz30 num">
                                    1030k
                                  </div>
                                </div>
                                <div className="fz12 lh-1 text">
                                  All Products
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="stat">
                                <div className="position-relative stat--purpleLine">
                                  <div className="font-secondary fw400 fz30 num">
                                    200
                                  </div>
                                </div>
                                <div className="fz12 lh-1 text">
                                  Single Products
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="stat">
                                <div className="position-relative stat--peachLine">
                                  <div className="font-secondary fw400 fz30 num">
                                    009
                                  </div>
                                </div>
                                <div className="fz12 lh-1 text">
                                  Inventories
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="d-flex justify-content-end tracking-date-tag">
                          <span className="date_btn">01 March 2023</span>
                        </div>
                      </div>
                    </div>
                  </div> */}

                    <span className="tracker-info-wrapper-dot"></span>
                  </>
                ) : (
                  <div className="h-100 mw-100 mh-100 border-white-2 main-shadow scroll-div-right null-sc-div">
                    <div className="headlines_div">
                      <p>To start Tracking</p>
                      <h2> Enter product id or upload QR.</h2>
                    </div>
                    <div className="right-img-wrapper">
                      <img src={trackingNullBig} alt="null-img" />
                    </div>
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
      <BottomNavbar />
      <ToastContainer />
    </div>
  );
}
