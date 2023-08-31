import React from "react";
import globe from '../assets/images/globe.svg'
import logoBlack from '../assets/images/logo-black.svg'
import gradLeaf from '../assets/images/icons/icon-grad-leaf.svg'
import animateLoader from '../assets/images/animate-loader.svg'
import illustrateLoginLeft from '../assets/images/illustration-login-left.svg'
import illustrateLoginRight from '../assets/images/illustration-login-right.svg'
import PageList from "./pageList";
import { Link } from "react-router-dom";
export default function Loader() {
  return (
    <div className="paye-layout">
      <PageList />

      <div className="content-layout">
        <div className="container-wrapper">
          <div className="logo-bar">
            <div className="logo">
              <img src={logoBlack} alt="" />
            </div>
            <Link className="globe-icon" to="./index.html">
              <img src={globe} alt="" />
            </Link>
          </div>

          <div className="loader-screen">
            <div className="block-wavy-dark w-100 form-nav">
              <h3 className="mb-0 d-inline-flex gradientText--radial">
                <img src={gradLeaf} alt="" />
                <span className="ms-1 fw600 fz24">
                  Please wait a moment we are loading!
                </span>
              </h3>
            </div>

            <div className="loader">
              <img src={animateLoader} alt="" />
            </div>
          </div>

          <div className="group-left1">
            <img src={illustrateLoginLeft} alt="" />
          </div>
          <div className="group-right1">
            <img src={illustrateLoginRight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
