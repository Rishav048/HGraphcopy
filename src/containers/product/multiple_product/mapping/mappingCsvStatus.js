import React from "react";
import gradLeaf from "../../../../assets/images/icons/icon-grad-leaf.svg";
import tickDone from "../../../../assets/images/icons/icon-tick-done.svg";
import progressBlock from "../../../../assets/images/steps-progress-blocks.svg";
import csvBig from "../../../../assets/images/csv-s1-bg.svg";
import ArrowIcon from "../../../../assets/images/icons/icon-left-arrow-grey.svg";
import { Link } from "react-router-dom";

export default function MappingCsvStatus() {
  return (
    <div className="block-wavy-dark product-screen__graphics">
      <div className="dark-block-content">
        <h3 className="position-relative fz24 mb-0 fw600 gradientText--radial">
          <Link to="/">
            <img className="let_arrow" src={ArrowIcon} alt="let arrow" />
          </Link>
          <img src={gradLeaf} alt="" />
          <span>Match It</span>
        </h3>
        <p className="fz12 text-white">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt
        </p>
        <div className="steps">
          <ul className="mb-0 list-inline fz12">
            <li>
              <div className="step active completed">
                <div className="status">
                  <img src={tickDone} alt="" className="status__completion" />
                  <span className="">Step 1</span>
                </div>
                <div className="progress-step">
                  <img src={progressBlock} alt="" />
                </div>
                <div className="gradientText--radial fw500 text">
                  <span>Upload CSV File</span>
                </div>
              </div>
            </li>
            <li>
              <div className="step active completed">
                <div className="status">
                  <img src={tickDone} alt="" className="status__completion" />
                  <span className="">Step 2</span>
                </div>
                <div className="progress-step">
                  <img src={progressBlock} alt="" />
                </div>
                <div className="gradientText--radial fw500 text">
                  <span>Basic Data</span>
                </div>
              </div>
            </li>
            <li>
              <div className="step active completed">
                <div className="status">
                  <img src={tickDone} alt="" className="status__completion" />
                  <span className="">Step 3</span>
                </div>
                <div className="progress-step">
                  <img src={progressBlock} alt="" />
                </div>
                <div className="gradientText--radial fw500 text">
                  <span>Mapping</span>
                </div>
              </div>
            </li>
            <li>
              <div className="step">
                <div className="status">
                  <img src={tickDone} alt="" className="status__completion" />
                  <span className="">Step 4</span>
                </div>
                <div className="progress-step">
                  <img src={progressBlock} alt="" />
                </div>
                <div className="gradientText--radial fw500 text">
                  <span>Preview</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="illustration illustration--csv">
        <img className="mx-auto csv-bg" src={csvBig} alt="" />
      </div>
      <div className="cta-row">
        <Link to="./preview" className="btn btn-cta--outlined">
          <div className="fw400 fz14">
            <div className="gradientText--radial">
              <span>Proceed</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
