import React, { useEffect, useState } from "react";
import PageListAnimated from "../../../reusable_components/pageList_animated";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import globe from "../../../assets/images/globe.svg";
import logoBlack from "../../../assets/images/logo-black.svg";
import gradLeaf from "../../../assets/images/icons/icon-grad-leaf.svg";
import Illustration from "../../../reusable_components/illustration";
import { POST_LOGIN } from "../../../services/Api";
import axios from "axios";

export default function OTP() {
  const [otpValues, setOtpValues] = useState(Array(5).fill(""));
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  const getDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setEmail(parsedData);
    }
  };

  const handleInputChange = (index, value) => {
    if (value !== "" && value.match(/^\d*$/)) {
      let newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      //Move focus to the next input or stay in the current input
      let inputs = document.getElementsByClassName(`otp-input`);
      if (index < 4 && value !== "") {
        inputs[index + 1].removeAttribute("disabled");
        inputs[index + 1].focus();
      } else {
        inputs[index].blur();
      }
      if (index === 4 && value !== "") {
        const Entered_OTP = Number(newOtpValues.join(""));
        const payLoad = { email: email?.email, otp: Entered_OTP };

        try {
          axios.post(`${POST_LOGIN}`, payLoad).then((resp) => {
            if (resp?.data?.msg?.includes("OTP did't match")) {
              toast.error("Please Enter Valid OTP!");
              setOtpValues(Array(5).fill(""));
            } else {
              localStorage.setItem("token", JSON.stringify(resp?.data?.access));
              navigate("/profile");
            }
          });
        } catch (err) {
          console.log("error");
        }
      }
    }
  };

  return (
    <div className="paye-layout">
      <PageListAnimated />
      <div className="content-layout">
        <div className="container-wrapper">
          <div className="logo-bar">
            <div className="logo">
              <img src={logoBlack} alt="" />
            </div>
            <div className="globe-icon">
              <img src={globe} alt="" />
            </div>
          </div>
          <div className="login-form">
            <div className="block-wavy-dark page-desc-content form-nav">
              <h3 className="mb-0 d-inline-flex gradientText--radial">
                <img src={gradLeaf} alt="" />
                <span className="ms-1 fw600 fz24">Hey there!</span>
              </h3>
            </div>

            <div className="border-white-2 bdrs10 main-shadow block-widget form-content">
              <h2 className="fw600 fz24">OTP sent to email address</h2>
              <p className="fz20 grayText">
                Enter OTP sent to your email address to proceed.
              </p>
              <div className="otp-box-holder">
                <div className="bdrs10 btn-fab--dark">
                  <input
                    maxlength="1"
                    autoFocus
                    type="text"
                    className="btn btn-fab gradientText--radial otp-input"
                    value={otpValues[0]}
                    onChange={(e) => handleInputChange(0, e.target.value)}
                  />
                </div>
                <div className="bdrs10 btn-fab--dark">
                  <input
                    maxlength="1"
                    type="text"
                    disabled
                    className="btn btn-fab gradientText--radial otp-input"
                    value={otpValues[1]}
                    onChange={(e) => handleInputChange(1, e.target.value)}
                  />
                </div>
                <div className="bdrs10 btn-fab--dark">
                  <input
                    maxlength="1"
                    disabled
                    type="text"
                    className="btn btn-fab gradientText--radial otp-input"
                    value={otpValues[2]}
                    onChange={(e) => handleInputChange(2, e.target.value)}
                  />
                </div>
                <div className="bdrs10 btn-fab--dark">
                  <input
                    maxlength="1"
                    type="text"
                    disabled
                    className="btn btn-fab gradientText--radial otp-input"
                    value={otpValues[3]}
                    onChange={(e) => handleInputChange(3, e.target.value)}
                  />
                </div>
                <div className="bdrs10 btn-fab--dark">
                  <input
                    maxlength="1"
                    type="text"
                    disabled
                    className="btn btn-fab gradientText--radial otp-input"
                    value={otpValues[4]}
                    onChange={(e) => handleInputChange(4, e.target.value)}
                  />
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
          <Illustration />
        </div>
      </div>
    </div>
  );
}
