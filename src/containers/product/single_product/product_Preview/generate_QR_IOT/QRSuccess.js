import React, { useEffect, useState } from "react";
import PageList from "../../../../../reusable_components/pageList";
import Navbar from "../../../../../layouts/navbar";
import darkLongArrow from "../../../../../assets/images/icons/icon-dark-long-arrow.svg";
import barCode from "../../../../../assets/images/Bar_code.svg";
import trustedShield from "../../../../../assets/images/icons/icon-trusted-shield.svg";
import successpage from "../../../../../assets/images/successpage-background.svg";
import downloadCloud from "../../../../../assets/images/icons/icon-download-cloud.svg";
import { GET_QR } from "../../../../../services/Api";
import { IMAGE_PROXY_URL } from "../../../../../services/Api";
import axios from "axios";

export default function QRSuccess() {
  const [QRCodePath, setQRCodePath] = useState("");

  let LsData = JSON.parse(localStorage.getItem("added_product")) || null;
  let id = LsData.id;
  useEffect(() => {
    if (id) {
      getQRCode();
    }
  }, []);

  const getQRCode = () => {
    const headers = {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      "Content-Type": "application/json",
    };
    try {
      axios.get(`${GET_QR}/${id}`, { headers }).then((resp) => {
        if (resp?.data?.msg?.includes("image generated")) {
          let pathURL = resp?.data?.path;
          setQRCodePath(pathURL);
          localStorage.setItem('QRCode', JSON.stringify(pathURL));
          
        } else {
          console.log("error");
        }
      });
    } catch (err) {
      console.log("error");
    }
  };

  const downloadQR = async () => {
    const originalImage = `${IMAGE_PROXY_URL}/${QRCodePath}`;
    console.log(originalImage, "originalImage");
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
      <div className="pb-0 content-layout">
        <Navbar />
        <div className="outer-container">
          <a href="/single-product-listings">
            <span className="dashboard_header">
              View Product
              <img className="dark_r_arrow" src={darkLongArrow} alt="arrow" />
            </span>
          </a>
          <div className="content">
            <div className="success-heading1">New Product Added</div>
            <div className="success-heading2">Successfully!</div>
            <div className="success-card">
              <div className="fir">
                {QRCodePath && (
                  <img src={`${IMAGE_PROXY_URL}/${QRCodePath}`} alt="barcode" />
                )}
              </div>
              <div className="text-white sec">
                <div>
                  <span className="sc_title">Product ID:</span>
                  {LsData.id && <span className="sc_value">{id}</span>}
                </div>
                <div>
                  <span className="sc_title">Product Name:</span>
                  {LsData.name && (
                    <span className="sc_value">{LsData.name}</span>
                  )}
                </div>
                <div>
                  <span className="sc_title">Brand Name:</span>
                  {LsData.brand && (
                    <button className="brnd_btn">{LsData.brand}</button>
                  )}
                  <img
                    className="trusted_sheild"
                    src={trustedShield}
                    alt="trusted_logo"
                  />
                </div>
                <button className="download-btn dwnld_btn" onClick={downloadQR}>
                  <img src={downloadCloud} alt="Download_button" />
                </button>
              </div>
            </div>
            <img
              className="success_bg"
              src={successpage}
              alt="BackgroungImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
