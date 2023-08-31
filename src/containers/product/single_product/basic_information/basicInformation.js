import React from "react";
import veryLongArrow from "../../../../assets/images/icons/icon-very-long-arrow.svg";
import gradLeaf from "../../../../assets/images/icons/icon-grad-leaf.svg";
import tickDone from "../../../../assets/images/icons/icon-tick-done.svg";
import progressBlock3s from "../../../../assets/images/steps-progress-blocks-3s.svg";
import addProductIllustration from "../../../../assets/images/add-product-illustration.svg";
import { Link } from "react-router-dom";

export default function BasicInformation({ handleFormSumbit }) {
  return (
    <div className="block-wavy-dark product-screen__graphics">
      <div className="dark-block-content">
        <h3 className="fz24 mb-0 fw600 gradientText--radial">
          <img src={gradLeaf} alt="" />
          <span>Add basic information.</span>
        </h3>
        <p className="fz12 text-white">
          Add basic information about your product to make it stand out.
          <img src={veryLongArrow} alt="" />
        </p>

        <div className="steps">
          <ul className="mb-0 list-inline fz12">
            <li>
              <div className="step active">
                <div className="status">
                  <img src={tickDone} alt="" className="status__completion" />
                  <span className="">Step 1</span>
                </div>
                <div className="progress-step">
                  <img src={progressBlock3s} alt="" />
                </div>
                <div className="gradientText--radial fw500 text">
                  <span>Basic information</span>
                </div>
              </div>
            </li>
            <li>
              <div className="step">
                <div className="status">
                  <img src={tickDone} alt="" className="status__completion" />
                  <span className="">Step 2</span>
                </div>
                <div className="progress-step">
                  <img src={progressBlock3s} alt="" />
                </div>
                <div className="gradientText--radial fw500 text">
                  <span>Detail information</span>
                </div>
              </div>
            </li>
            <li>
              <div className="step">
                <div className="status">
                  <img src={tickDone} alt="" className="status__completion" />
                  <span className="">Step 3</span>
                </div>
                <div className="progress-step">
                  <img src={progressBlock3s} alt="" />
                </div>
                <div className="gradientText--radial fw500 text">
                  <span>Product Preview</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="illustration">
        <img className="mx-auto" src={addProductIllustration} alt="" />
      </div>
      <div className="cta-row">
        <div className="btn btn-cta--outlined">
          <div onClick={handleFormSumbit} className="fw400 fz14">
            <div className="gradientText--radial">
              <span>Proceed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
