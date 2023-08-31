import React, { useState } from "react";
import "../../../assets/styles/main.css";
import PageListAnimated from "../../../reusable_components/pageList_animated";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import globe from "../../../assets/images/globe.svg";
import logoBlack from "../../../assets/images/logo-black.svg";
import gradLeaf from "../../../assets/images/icons/icon-grad-leaf.svg";
import iconSubmit from "../../../assets/images/icons/icon-submit.svg";
import Illustration from "../../../reusable_components/illustration";
import { POST_OTP } from "../../../services/Api";
import axios from "axios";
import Loader from "../../../reusable_components/loader";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otpLoader, setOtpLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3,3})+$/;
    if (regexEmail.test(email)) {
      setOtpLoader(true);
      const payLoad = { email: email };

      try {
        await axios.post(`${POST_OTP}`, payLoad).then((resp) => {
          if (resp) {
            navigate("/otp");
            localStorage.setItem("userData", JSON.stringify(payLoad));
          }
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Please Enter Valid Email!");
    }
  };
  if (otpLoader) {
    return <Loader />;
  }

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
              <div className="right">
                <h3 className="mb-0 d-inline-flex gradientText--radial">
                  <img src={gradLeaf} alt="" />
                  <span className="ms-1 fw600 fz24">Hey there!</span>
                </h3>
              </div>
            </div>

            <div className="border-white-2 bdrs10 main-shadow block-widget form-content">
              <h2 className="fw600 fz24">Welcome onboard!</h2>
              <p className="fz20 grayText">
                Please write your email address to start holograf tracking!
              </p>
              <div className="position-relative form-group form-group--search input-div">
                <input
                  type="text"
                  className="fz14 border-white-2 bdrs10 form-control input-div"
                  placeholder="Email address here"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="position-absolute upload-click">
                  <button className="position-relative btn btn-fab btn-fab--dark">
                    <input type="submit" onClick={handleSubmit} />
                    <img src={iconSubmit} alt="" />
                  </button>
                </div>
                <ToastContainer />
              </div>
            </div>
          </div>
          <Illustration />
        </div>
      </div>
    </div>
  );
}
