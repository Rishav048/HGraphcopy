import React, { useEffect } from "react";
import PageList from "../../../../reusable_components/pageList";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import holographic from "../../../../assets/images/holographic-image.svg";
import uploadCloud from "../../../../assets/images/icons/icon-upload-cloud.svg";
import longArrow from "../../../../assets/images/icons/icon-long-arrow.svg";
import locationMarkerDark from "../../../../assets/images/icons/icon-location-marker-dark.svg";
import Navbar from "../../../../layouts/navbar";
import BasicDataStatus from "./basicDataStatus";


export default function BasicData() {
  useEffect(() => {
    let scriptck = document.createElement("script");
    scriptck.id = "ckeditorid";
    scriptck.src = "/assets/scripts/ckeditor.js";
    document.body.append(scriptck);
  }, []);
  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />
        <section className="product-screen">
          <div className="border-white-2 bdrs10 main-shadow block-widget product-screen__form">
            <div>
              <h6 className="mb-1 fz20 fw700">Add your products image</h6>
              <span className="fz16">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut.
              </span>
            </div>

            <form action="" className="mt-3 holograf-form">
              <div className="h-100 d-flex border-white-1 bdrs10 main-shadow block-widget translucentBg upload-block">
                <div className="border-white-2 main-shadow img-wrapper">
                  <img className="h-100" src={holographic} alt="" />
                </div>
                <div className="position-relative text">
                  <h6 className="mb-0 fz16 fw700">
                    Upload your product image to provide best look.
                  </h6>
                  <p className="mb-0 fz14 fw600">
                    <span className="fw300">Type:</span> png, jpg, jpeg, webp
                  </p>
                  <p className="mb-0 fz14 fw600">
                    <span className="fw300">Ratio:</span> 1200px - 800px
                  </p>
                  <p className="mb-0 fz14 fw600">
                    <span className="fw300">Max size:</span> 1MB
                  </p>
                  <div className="position-absolute upload-click">
                    <button className="position-relative btn btn-fab btn-fab--dark">
                      <input type="file" />
                      <img src={uploadCloud} alt="" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="row mt-2 g-4">
                <div className="col-12 col-lg-6 m-0">
                  <div className="gradient-widget upload-cerfificate">
                    <div className="position-relative outerText">
                      <h6 className="mb-0 fz14 lh1-5 fw500">
                        Upload certification or testing report
                      </h6>

                      <p className="mb-0 fz12 para">
                        You can upload your certification or testing report to
                        secure your product and make it trust worthy.
                      </p>

                      <div className="pair">
                        <p className="mb-0 fz12 fw600 grayText">
                          <span className="fw300 fz12"> Type:</span> pdf, docx,
                          doc
                        </p>
                        <p className="mb-0 fz12 fw600 grayText">
                          <span className="fw300 fz12">Max size:</span> 1MB
                        </p>
                      </div>
                      <div className="position-absolute upload-click">
                        <button className="position-relative btn btn-fab btn-fab--dark">
                          <input type="file" />
                          <img src={uploadCloud} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 m-0">
                  <div className="h-100 position-relative block-wavy-dark location-fetch">
                    <h5 className="fz18 fw500 gradientText--radial">
                      <span>Fetch location</span>
                      <img src={longArrow} alt="" />
                    </h5>
                    <p className="text-white para fz12 mb-0">
                      It will get access of your product location by adding
                      location or pinning the map.
                    </p>
                    <div className="position-absolute upload-click">
                      <button className="btn btn-fab bg-white">
                        <img src={locationMarkerDark} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h6 className="mb-1 fz20 fw700">
                  Detail Information.{" "}
                  <span className="fz16 fw400 fst-italic">(optional)</span>{" "}
                </h6>
                <span className="fz16">
                  Tell us about your product in detail like, package detail,
                  product ingredients, side effect or others...
                </span>
              </div>
              <div className="fz14 ckeditorSection">
                <div id="editorTnc"></div>
              </div>
            </form>
          </div>
          <BasicDataStatus />
        </section>
      </div>

      <BottomNavbar />
    </div>
  );
}
