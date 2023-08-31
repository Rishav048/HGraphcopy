import React, { useEffect, useState } from "react";
import BottomNavbar from "../../layouts/bottomNavbar";
import PageList from "../../reusable_components/pageList";
import Navbar from "../../layouts/navbar";
import gradLeaf from "../../assets/images/icons/icon-grad-leaf.svg";
import rightGreyLongArrow from "../../assets/images/icons/icon-right-grey-long-arrow.svg";
import Barcode from "../../assets/images/barcode-image.svg";

// import mapWithData from "../../assets/images/map-withdata.svg";
import userDp from "../../assets/images/user-dp.png";
import arrowImage from "../../assets/images/icons/icon-d-arrow-long.svg";
import trustedShield from "../../assets/images/icons/icon-trusted-shield.svg";
import msg from "../../assets/images/icons/icon-msg.svg";
import holographic from "../../assets/images/holographic-image.svg";
import downloadCloudGradient from "../../assets/images/icons/icon-download-cloud-gradient.svg";
import downloadCloud from "../../assets/images/icons/icon-download-cloud.svg";
import GoogleMap from "./googleMapComponent";
import { Link } from "react-router-dom";
import Tracking from "./tracking";
import SearchBar from "./searchBar";
import mapNull from "../../assets/images/map-null.svg";
import trackingNullBig from "../../assets/images/tracking-null-bg.svg";
import { GET_PRODUCT_DETAILS, IMAGE_PROXY_URL } from "../../services/Api";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TrackingStatus() {
  const [productID, setProductID] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [detailed, setDetailed] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [QRCode, setQRCode] = useState("");
  const [email, setEmail] = useState("");
  const [latitude, setlatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const { qrCodeId } = useParams();

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
  let qrCode;

  const receiveDataFromChild = (data) => {
    if (data) {
      setProductDetails(data);
    }
  };
  useEffect(() => {
    if (productDetails) {
      qrCode = JSON.parse(localStorage.getItem("QRCode")) || null;
      setQRCode(qrCode);
      setProductID(productDetails?.id);
      if (productDetails?.id) {
        getProductDetails();
      }

      let getEmail = JSON.parse(localStorage.getItem("userData")) || null;
      setEmail(getEmail?.email);

      let digitArray = productDetails?.location?.split("&");
      if (digitArray) {
        setlatitude(digitArray[0]);
        setLongitude(digitArray[1]);
      }

      const dateObject = new Date(productDetails?.created_at);
      const hours = dateObject.getHours();
      const minutes = dateObject.getMinutes();
      const seconds = dateObject.getSeconds();
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      const dateTime = new Date(productDetails?.created_at);
      const year = dateTime.getFullYear();
      const month = dateTime.getMonth() + 1; // Months are 0-based, so add 1
      const day = dateTime.getDate();
      setYear(year);
      setMonth(month);
      setDay(day);
    }
  }, [productDetails, qrCode]);

  const getProductDetails = () => {
    const headers = {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      "Content-Type": "application/json",
    };
    let id = productDetails?.id;
    try {
      axios.get(`${GET_PRODUCT_DETAILS}/${id}`, { headers }).then((resp) => {
        if (resp) {
          setDetailed(resp?.data?.detail);
        } else {
          console.log("error");
        }
      });
    } catch (err) {
      console.log("error");
    }
  };

  const downloadQR = async () => {
    const originalImage = `${IMAGE_PROXY_URL}/${QRCode}`;
    const image = await fetch(originalImage);

    // Split image name
    const nameSplit = originalImage.split("/");
    const duplicateName = nameSplit.pop();

    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "" + duplicateName + "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />
        {productDetails ? (
          <section className="mw-100 product-screen">
            <div className="row product-show-hide">
              <div className="col-6">
                <div className="h-100 other-add-links__left tracking-card-btn-left">
                  <div className="h-100 add-layer-block">
                    <div className="w-100 h-100 gradient-widget clickBtn tracking-card-left">
                      <div>
                        <span className="fz14 lh-1 fw500">
                          Show Product Details
                        </span>
                      </div>
                      <div className="position-absolute tracking-btn-arrow">
                        <img src={arrowImage} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="h-100 other-add-links__middle">
                  <div className="w-100 tracking-card-btn h-100 main-shadow bdrs10">
                    <div className="top tracking-card-left">
                      <h3 className="mb-0 fz12 fw500 gradientText--radial">
                        <span>Show Product Ownership flow</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-white-2 bdrs10 main-shadow block-widget tracking__left">
              <div className="block-widget">
                <div className="map-div">
                  <div className="block-wavy-dark page-desc-content page-desc-content-noImage top-bar-bg">
                    <div className="left">
                      <h3 className="mb-0 d-inline-flex gradientText--radial">
                        <img src={gradLeaf} alt="" />

                        <span className="ms-1 fw600 fz24">
                          Product ID {productDetails?.id}
                        </span>
                      </h3>
                      <p className="fz12 mb-0 text-white">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy
                        <img className="arrow-img" src={rightGreyLongArrow} />
                      </p>
                    </div>
                  </div>
                  <div className="bdrs10 map-wrapper">
                    {/* <img className="map-img" src={mapWithData} alt="null map" /> */}
                    {/* <GoogleMap
                      location={
                        productDetails.location ? productDetails.location : ""
                      }
                    /> */}
                    {productDetails.location && (
                      <GoogleMap location={productDetails.location} />
                    )}
                  </div>

                  {/* <div id="mouse-scroll" className="map-navigation-bar">
       <div className="map-navigation-bar__wrapper">
         <button className="inner-btns">
           <img className="arr_fix" src={rightGreyLongArrow} />
           <div className="gradientText--radial fz14">
             <span>
               Manufacturer's <br />
               Factory
             </span>
           </div>
         </button>
         <button className="inner-btns">
           <img className="arr_fix" src={rightGreyLongArrow} />
           <div className="gradientText--radial fz14">
             <span>
               Manufacturer's <br />
               Warehouse
             </span>
           </div>
         </button>
         <button className="inner-btns">
           <img className="arr_fix" src={rightGreyLongArrow} />
           <div className="gradientText--radial fz14">
             <span>
               Distributor's
               <br />
               Hub
             </span>
           </div>
         </button>

         <button className="inner-btns">
           <img className="arr_fix" src={rightGreyLongArrow} />
           <div className="gradientText--radial fz14">
             <span>
               Regional Distribution <br />
               Centers
             </span>
           </div>
         </button>
         <button className="inner-btns">
           <img className="arr_fix" src={rightGreyLongArrow} />
           <div className="gradientText--radial fz14">
             <span>
               Logistics Partner's <br />
               Hub
             </span>
           </div>
         </button>
         <button className="inner-btns">
           <img className="arr_fix" src={rightGreyLongArrow} />
           <div className="gradientText--radial fz14">
             <span>
               Transporation
               <br />
               Hubs
             </span>
           </div>
         </button>
       </div>
     </div> */}
                </div>
              </div>
              {/* <!-- Below card starts here --> */}
              <div className="cards">
                <div className="position-relative info-card">
                  <div className="page-header__user-info round_pf_pic">
                    <div className="rounded-circle user-img">
                      <span className="rounded-circle">
                        <img src={userDp} alt="User Image - Holograf" />
                      </span>
                    </div>
                  </div>

                  <div className="w-100 ps-2">
                    <nav>
                      <div className="">
                        <p className="m-0 fw600 fz16">Manufacturer’s Factory</p>
                        <p className="m-0 fw500 fz12">
                          Contact info:
                          <span className="fw400 fz12">
                            {email ? email : ""}
                          </span>
                        </p>

                        <p className="m-0 p-0 d-flex align-items-center trusted_text">
                          <img
                            className="ms-0 trusted_sheild"
                            src={trustedShield}
                            alt="trusted_logo"
                          />
                          <span className="ms-1">Trusted owner</span>
                        </p>
                      </div>
                      <button className="btn btn-fab btn-fab--green">
                        <img src={msg} alt="" />
                      </button>
                    </nav>

                    <div className="mt-3 row">
                      <div className="col-6">
                        <p className="mb-0 fw700 fz16">Location - </p>
                        <span className="fz16">
                          {latitude ? latitude : "NA"}"N{" "}
                          {longitude ? longitude : "NA"}"E
                        </span>
                      </div>
                      <div className="col-6">
                        <p className="mb-0 fw700 fz16">Timestamp - </p>
                        <span className="fz16">
                          {hours ? hours : ""}hr:{minutes ? minutes : ""}mins:
                          {seconds ? seconds : ""}secs | {day ? day : ""}-
                          {month ? month : ""}-{year ? year : ""}
                        </span>
                      </div>
                      <div className="col-12 mt-3 margin-media-box">
                        <p className="mb-0 fw700 fz16">Contact number - </p>
                        <span className="fz16">{"NA"}</span>
                      </div>
                    </div>
                    <div className="mt-3 row">
                      <div className="col-12">
                        <p className="mb-0 fw700 fz16">
                          Additional Information -{" "}
                        </p>
                        <span className="fz16">
                          {detailed ? detailed : "NA"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3 border-white-2 bdrs10 main-shadow block-widget trac-right-sec">
              <SearchBar sendDataToParent={receiveDataFromChild} />

              <div className="border-white-2 main-shadow scroll-div-right">
                {/* <!-- card starts --> */}
                <ul className="list-unstyled detail-cards customise_card">
                  <li>
                    <div className="fw600 fz14 show-ownership-div">
                      <Link to={`/ownership/${productID}`}>
                        <span>Show ownership flow</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="fw400 fz14 product-detail-div div-hidden">
                      <span>Product Detail</span>
                    </div>
                  </li>
                  <li>
                    <div className="p-0 card new_card">
                      <div className="gap-0 p-0 card-inner cstm_card_inner">
                        <div className="fz12 border-white-2 main-shadow card__text bg_holo">
                          <img src={holographic} alt="" />
                        </div>
                        <div className="card__barcode custom_card_barcode">
                          <div className="bar-qr-cover">
                            <div className="bdrs10 h-100 overflow-hidden bar_code">
                              <div className="">
                                <img
                                  src={
                                    `${IMAGE_PROXY_URL}/${QRCode}`
                                      ? `${IMAGE_PROXY_URL}/${QRCode}`
                                      : ""
                                  }
                                  alt=""
                                />
                              </div>

                              <span className="font-secondary text-center fz18 fw700">
                                ID: {productDetails.id ? productDetails.id : ""}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="position-relative p-0 card new_card">
                      <button
                        className="location_btn dwnld_qr_btn"
                        onClick={downloadQR}
                      >
                        <span>Download Qr</span>
                      </button>
                      <div className="p-0 card-inner">
                        <div className="fz12 card__text">
                          <div className="text-pair">
                            <div className="label">Product ID:</div>
                            <div className="fw600 value">
                              {productDetails.id ? productDetails.id : ""}
                            </div>
                          </div>
                          <div className="text-pair">
                            <div className="label">Product Name:</div>
                            <div className="fw600 value">
                              {productDetails.name ? productDetails.name : ""}
                            </div>
                          </div>
                          <div className="text-pair">
                            <div className="label">Brand Name:</div>
                            <div className="fw600 value">
                              <div className="brnd_btn_black">
                                <span>
                                  {productDetails.brand
                                    ? productDetails.brand
                                    : ""}
                                </span>
                              </div>
                              <img
                                className="trusted_sheild"
                                src={trustedShield}
                                alt="trusted_logo"
                              />
                            </div>
                          </div>
                          <div className="text-pair">
                            <div className="label">Added:</div>
                            <div className="fw400 value">
                              {day ? day : ""}-{month ? month : ""}-
                              {year ? year : ""} | {hours ? hours : ""}hr:
                              {minutes ? minutes : ""}mins (EST)
                            </div>
                          </div>
                          <div className="text-pair">
                            <div className="label">Product Details</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="m-0 w-100 fz12 border-white-2 translucentBg bdrs10 main-shadow text-area">
                      <h2 className="fz24 fw500">
                        Essential things to think about before starting
                      </h2>
                      <p className="lh-1-2">{detailed ? detailed : ""}</p>
                    </div>
                  </li>

                  <li>
                    <div className="fz12 bdrs10 upload_sec">
                      <div className="border-white-2 card_bg1">
                        <div className="card_wrapper-1">
                          <div className="mt-1 inner_1">
                            <p className="p-0 m-0 pt-2 fw500 fz14">
                              Certification.pdf
                            </p>
                            <p className="P-0 fz12 grayText">200 kB</p>
                            <div className="mt-1 upload-click">
                              <button className="position-relative btn btn-fab btn-fab--dark">
                                <img src={downloadCloudGradient} alt="" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-white-2 card_bg2">
                        <div className="card_wrapper-2">
                          <div className="mt-1 inner_2">
                            <p className="p-0 m-0 pt-2 fw500 fz14">
                              Test-report.pdf
                            </p>
                            <p className="P-0 fz12 grayText">200 kB</p>
                            <div className="mt-1 upload-click">
                              <button className="position-relative btn btn-fab btn-fab--dark">
                                <img src={downloadCloudGradient} alt="" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card_bg3">
                        <div className="card_wrapper-3">
                          <div className="mt-1 inner_3">
                            <p className="p-0 m-0 pt-2 fw500 fz14">
                              Flow-report.pdf
                            </p>
                            <p className="P-0 fz12 grayText">200 kB</p>
                            <div className="mt-1 upload-click">
                              <button className="position-relative btn btn-fab btn-fab--dark white-btn">
                                <input type="file" />
                                <img
                                  src={downloadCloud}
                                  alt=""
                                  // onClick={downloadQR}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        ) : (
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
              <SearchBar sendDataToParent={receiveDataFromChild} />
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
        )}
      </div>
      <BottomNavbar />
    </div>
  );
}
