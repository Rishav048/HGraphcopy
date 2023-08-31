import React, { useState } from "react";
import search from "../../assets/images/icons/icon-search.svg";
import uploadCloud from "../../assets/images/icons/icon-upload-cloud.svg";
import calendar from "../../assets/images/icons/icon-calendar.svg";
import axios from "axios";
import { ADD_PRODUCT, GET_PRODUCT, UPLOAD_QR } from "../../services/Api";
import { ToastContainer, toast } from "react-toastify";

export default function SearchBar({ sendDataToParent }) {
  const [productId, setProductId] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [productData, setProductData] = useState(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchProduct();
    }
  };
  const handleInputChange = (e) => {
    setProductId(e.target.value);
  };

  const searchProduct = () => {
    const headers = {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      "Content-Type": "application/json",
    };
    try {
      axios.get(`${GET_PRODUCT}/${productId}`, { headers }).then((resp) => {
        if (resp?.data?.msg?.includes("Invalid Product id")) {
          toast.error("Please enter valid product ID");
        } else {
          setProductData(resp.data);
          sendDataToParent(resp.data);
        }
      });
    } catch (err) {
      console.log("error");
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
            const headers = {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,

              "Content-Type": "application/json",
            };
            try {
              axios.get(`${GET_PRODUCT}/${id}`, { headers }).then((resp) => {
                if (resp?.data?.msg?.includes("Invalid Product or QR Code")) {
                  toast.error("please upload valid QR code");
                } else {
                  setProductData(resp?.data);
                  sendDataToParent(resp.data);
                }
              });
            } catch (err) {
              console.log("error");
            }
          }
        });
      } catch (err) {
        console.log({ "error msg": err });
      }
    }
  };

  return (
    <>
      <h4 className="mb-3 fw500 fz14 div-hidden">Product tracking status</h4>
      <div className="w-100 page-header__other-options div-hidden">
        <div className="w-100 position-relative form-group form-group--search">
          <div className="position-absolute icon-wrap">
            <img src={search} alt="" />
          </div>
          <input
            type="text"
            className="fz14 border-white-2 form-control"
            placeholder="Enter product ID or upload QR"
            value={productId}
            onChange={handleInputChange}
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
      <ToastContainer />
    </>
  );
}
