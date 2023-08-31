import React, { useEffect } from "react";
import "../../assets/styles/landing.css"
import Footer from "../../layouts/footer";
import Info from "./info";
import { Link } from "react-router-dom";
import ContactSection from "./contactSection";
import headerLogo from "../../assets/images/landing/header-logo.svg";
import leftDown from "../../assets/images/landing/truck/truck-left-down.svg";
import rightDown from "../../assets/images/landing/truck/truck-right-down.svg";
import leftUp from "../../assets/images/landing/truck/truck-right-up.svg";
import rightUp from "../../assets/images/landing/truck/truck-right-up.svg";
import down from "../../assets/images/landing/truck/truck-down.svg";
import right from "../../assets/images/landing/truck/truck-right.svg";
import upload from "../../assets/images/landing/hero/upload.svg";
import heroArrow from "../../assets/images/landing/hero-arrow.svg";
import img1 from "../../assets/images/landing/partners/img1.svg";
import img2 from "../../assets/images/landing/partners/img2.svg";
import img3 from "../../assets/images/landing/partners/img3.svg";
import img4 from "../../assets/images/landing/partners/img4.svg";
import layer0Tracking from "../../assets/images/landing/tracking/layer0.png";
import layer1Tracking from "../../assets/images/landing/tracking/layer1.png";
import layer2Tracking from "../../assets/images/landing/tracking/layer2.svg";
import arrow from "../../assets/images/landing/features/arrow.svg";
import featureImg1Layer0 from "../../assets/images/landing/features/img1/layer0.png";
import featureImg1Layer1 from "../../assets/images/landing/features/img1/layer1.png";
import featureImg1Layer2 from "../../assets/images/landing/features/img1/layer2.png";
import featureImg3Layer0 from "../../assets/images/landing/features/img3/layer0.png";
import featureImg3Layer1 from "../../assets/images/landing/features/img3/layer1.png";
import featureImg3Layer2 from "../../assets/images/landing/features/img3/layer2.png";
import featureImg2Layer0 from "../../assets/images/landing/features/img4/layer2.png";
import featureImg2Layer1 from "../../assets/images/landing/features/img4/layer2.png";
import featureImg2Layer2 from "../../assets/images/landing/features/img4/layer2.png";
import featureImg4Layer0 from "../../assets/images/landing/features/img4/layer0.png";
import featureImg4Layer1 from "../../assets/images/landing/features/img4/layer1.png";
import featureImg4Layer2 from "../../assets/images/landing/features/img4/layer2.png";
import journeyImg1 from "../../assets/images/landing/journey/img1.png";
import deco1 from "../../assets/images/landing/features/deco1.svg";
import numbersDeco1 from "../../assets/images/landing/numbers/deco1.svg";
import choose from "../../assets/images/landing/choose/img1.png";
import WareHouseAnimatedImage from "../../assets/images/landing/hero/hero-img.svg"


export default function LandingPage() {
useEffect(()=>{
let script = document.createElement('script');
script.id = "scriptId";
script.src = "/assets/scripts/landing.js";
document.body.append(script)

return () => {
    const scriptElement = document.getElementById("scriptId");
    if (scriptElement) {
      document.body.removeChild(scriptElement);
    }
  }
},[])
  return (
    <div className="landing">
      <header className="headerSec">
        <div className="container">
          <nav className="headerSec__inner">
            <Link className="headerSec__logo" to="">
              <img src={headerLogo} alt="logo" />
            </Link>
            <ul className="headerSec__links">
              <li className="active">
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">About Holograf</Link>
              </li>
              <li>
                <Link to="">Unique Values</Link>
              </li>
              <li>
                <Link to="">How it works?</Link>
              </li>
              <li>
                <Link to="">FAQ</Link>
              </li>
              <li>
                <Link to="">Let's have a chat!</Link>
              </li>
            </ul>
            <Link className="headerSec__btn" to="/login">
              <span >SIGN IN</span>
            </Link>
          </nav>
        </div>
      </header>
      <div id="smooth-wrapper">
        <div id="smooth-content" className="position-relative">
          <div className="truckSec downwards">
            <img className="truckSec__left-down" src={leftDown} alt="truck" />
            <img className="truckSec__right-down" src={rightDown} alt="truck" />
            <img className="truckSec__left-up" src={leftUp} alt="truck" />
            <img className="truckSec__right-up" src={rightUp} alt="truck" />
            <img className="truckSec__down" src={down} alt="truck" />
            <img className="truckSec__right" src={right} alt="truck" />
          </div>

          <section className="heroSec" id="home">
            <div className="container">
              <div className="heroSec__content">
                <h1 className="head1 fade-in">
                  A Cutting-Edge Blockchain As A Service
                </h1>
                <p className="desc fade-in">
                  Holograf provides a transparent and secure platform for
                  verifying product authenticity, tracking provenance, and
                  enabling smart ownership.
                </p>
                <div className="search-product fade-in">
                  <div className="search-product__inner">
                    <Link
                      to=""
                      className="search-product__upload prefix"
                    >
                      <img src={upload} alt="upload" />
                    </Link>
                    <input
                      type="text"
                      placeholder="Search product by ID or upload QR.."
                    />
                    <button>
                      <span className="hgt">Search</span>
                    </button>
                  </div>
                </div>
                <div className="heroSec__arrow fade-in">
                  <img src={heroArrow} alt="scroll down" />
                </div>
              </div>
            </div>

            <div
              className="heroSec__img replaceWithSVG fade-in fade-in-delay-0.35"
              data-src={WareHouseAnimatedImage}
            ></div>
          </section>

          <section className="partnersSec">
            <h2 className="splitText viewport-check split-text fade-in">
              Partners we are dealing with
            </h2>
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="partnersSec__single">
                  <div className="partnersSec__img">
                    <img src={img1} />
                  </div>
                  <div className="partnersSec__name">APPLE</div>
                </div>
              </div>
              <div className="item">
                <div className="partnersSec__single">
                  <div className="partnersSec__img">
                    <img src={img2} />
                  </div>
                  <div className="partnersSec__name">AMAZONE</div>
                </div>
              </div>
              <div className="item item-duellex">
                <div className="partnersSec__single">
                  <div className="partnersSec__img">
                    <img src={img3} />
                  </div>
                  <div className="partnersSec__name">COCACOLA</div>
                </div>
              </div>
              <div className="item">
                <div className="partnersSec__single">
                  <div className="partnersSec__img">
                    <img src={img4} />
                  </div>
                  <div className="partnersSec__name">NIKE</div>
                </div>
              </div>
              <div className="item">
                <div className="partnersSec__single">
                  <div className="partnersSec__img">
                    <img src={img1} />
                  </div>
                  <div className="partnersSec__name">APPLE</div>
                </div>
              </div>
              <div className="item">
                <div className="partnersSec__single">
                  <div className="partnersSec__img">
                    <img src={img2} />
                  </div>
                  <div className="partnersSec__name">AMAZONE</div>
                </div>
              </div>
              <div className="item item-duellex">
                <div className="partnersSec__single">
                  <div className="partnersSec__img">
                    <img src={img3} />
                  </div>
                  <div className="partnersSec__name">COCACOLA</div>
                </div>
              </div>
              <div className="item">
                <div className="partnersSec__single">
                  <div className="partnersSec__img">
                    <img src={img4} />
                  </div>
                  <div className="partnersSec__name">NIKE</div>
                </div>
              </div>
              <div className="item">
                <div className="partnersSec__single">
                  <div className="partnersSec__img">
                    <img src={img1} />
                  </div>
                  <div className="partnersSec__name">APPLE</div>
                </div>
              </div>
              <div className="item">
                <div className="partnersSec__single">
                  <div className="partnersSec__img">
                    <img src={img2} />
                  </div>
                  <div className="partnersSec__name">AMAZONE</div>
                </div>
              </div>
              <div className="item item-duellex">
                <div className="partnersSec__single">
                  <div className="partnersSec__img">
                    <img src={img3} />
                  </div>
                  <div className="partnersSec__name">COCACOLA</div>
                </div>
              </div>
              <div className="item">
                <div className="partnersSec__single">
                  <div className="partnersSec__img">
                    <img src={img4} />
                  </div>
                  <div className="partnersSec__name">NIKE</div>
                </div>
              </div>
            </div>
          </section>

          <section className="liveTrackSec" id="about">
            <div className="container">
              <div className="section-title-wrapper">
                <h2 className="head1 fade-in">
                  Live Tracking for your Inventories!
                </h2>
                <p className="desc fade-in">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut.
                </p>
                <div className="button-wrapper fade-in">
                  <Link className="button-dark" to="">
                    <span className="hgt">Let's Start</span>
                  </Link>
                </div>
              </div>

              <div className="liveTrackSec__img">
                <img className="liveTrackSec__layer0" src={layer0Tracking} />
                <img
                  className="liveTrackSec__layer1 fade-in"
                  src={layer1Tracking}
                />
                <img
                  className="liveTrackSec__layer2 fade-in"
                  src={layer2Tracking}
                />
              </div>
            </div>
          </section>

          <section className="featuresSec" id="values">
            <div className="container">
              <h2 className="head1 fade-in">
                Exciting <span className="hgt">Features</span>{" "}
                <img
                  className="d-inline-block"
                  src="./assets/images/landing/subscribe/leaf.svg"
                  alt="..."
                />
              </h2>
              <p className="desc fade-in">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,{" "}
              </p>

              <div className="featuresSec__row">
                <div className="featuresSec__col">
                  <div className="featuresSec__single fade-in">
                    <div className="featuresSec__content">
                      <div className="featuresSec__title">
                        <span className="hgt">INVENTORY MANAGMENT</span>
                      </div>
                      <p className="featuresSec__text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut.
                      </p>
                      <Link className="featuresSec__btn" to="">
                        <img src={arrow} alt="" />
                      </Link>
                    </div>
                    <div className="featuresSec__img img1">
                      <img
                        className="featuresSec__layer0"
                        src={featureImg1Layer0}
                        alt=""
                      />
                      <img
                        className="featuresSec__layer1"
                        src={featureImg1Layer1}
                        alt=""
                      />
                      <img
                        className="featuresSec__layer2"
                        src={featureImg1Layer2}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="featuresSec__single image-left fade-in">
                    <div className="featuresSec__content">
                      <div className="featuresSec__title">
                        <span className="hgt">SECURE DATA SHARE</span>
                      </div>
                      <p className="featuresSec__text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut.
                      </p>
                      <Link className="featuresSec__btn" to="">
                        <img src={arrow} alt="" />
                      </Link>
                    </div>
                    <div className="featuresSec__img img3">
                      <img
                        className="featuresSec__layer0"
                        src={featureImg3Layer0}
                        alt=""
                      />
                      <img
                        className="featuresSec__layer1"
                        src={featureImg3Layer1}
                        alt=""
                      />
                      <img
                        className="featuresSec__layer2"
                        src={featureImg3Layer2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="featuresSec__col">
                  <div className="featuresSec__single fade-in">
                    <div className="featuresSec__content">
                      <div className="featuresSec__title">
                        <span className="hgt">PRODUCT TRACKING</span>
                      </div>
                      <p className="featuresSec__text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut.
                      </p>
                      <Link className="featuresSec__btn" to="">
                        <img src={arrow} alt="" />
                      </Link>
                    </div>
                    <div className="featuresSec__img img2">
                      <img
                        className="featuresSec__layer0"
                        src={featureImg2Layer0}
                        alt=""
                      />
                      <img
                        className="featuresSec__layer1"
                        src={featureImg2Layer1}
                        alt=""
                      />
                      <img
                        className="featuresSec__layer2"
                        src={featureImg2Layer2}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="featuresSec__single image-left fade-in">
                    <div className="featuresSec__content">
                      <div className="featuresSec__title">
                        <span className="hgt">REPORT ANALYTICS</span>
                      </div>
                      <p className="featuresSec__text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut.
                      </p>
                      <Link className="featuresSec__btn" to="">
                        <img src={arrow} alt="" />
                      </Link>
                    </div>
                    <div className="featuresSec__img img4">
                      <img
                        className="featuresSec__layer0"
                        src={featureImg4Layer0}
                        alt=""
                      />
                      <img
                        className="featuresSec__layer1"
                        ssrc={featureImg4Layer1}
                        alt=""
                      />
                      <img
                        className="featuresSec__layer2"
                        src={featureImg4Layer2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="featuresSec__deco1" src={deco1} alt="" />
          </section>

          <section className="journeySec" id="how">
            <div className="container">
              <div className="section-title-wrapper">
                <h2 className="head1 fade-in">
                  Secure and efficient tracking journey!
                </h2>
                <p className="desc fade-in">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut.
                </p>
                <div className="button-wrapper fade-in">
                  <Link className="button-dark" to="">
                    <span className="hgt">Let's Start</span>
                  </Link>
                </div>
              </div>
              <img className="journeySec__img" src={journeyImg1} />
            </div>
          </section>

          <section className="numbersSec">
            <div className="container">
              <div className="numbersSec__flex">
                <div className="numbersSec__single">
                  <div className="numbersSec__count">
                    <span className="hgt">
                      <span className="animate-number">1030</span>+
                    </span>
                  </div>
                  <div className="numbersSec__text">
                    New companies <br />
                    Registered
                  </div>
                </div>
                <div className="numbersSec__single">
                  <div className="numbersSec__count">
                    <span className="hgt">
                      <span className="animate-number">300</span>+
                    </span>
                  </div>
                  <div className="numbersSec__text">
                    Inventories around <br />
                    the globe
                  </div>
                </div>
                <div className="numbersSec__single">
                  <div className="numbersSec__count">
                    <span className="hgt">
                      <span className="animate-number">300</span>+
                    </span>
                  </div>
                  <div className="numbersSec__text">Tracking inprogress</div>
                </div>

                <div className="numbersSec__single">
                  <div className="numbersSec__count">
                    <span className="hgt">
                      <span className="animate-number">300</span>+
                    </span>
                  </div>
                  <div className="numbersSec__text">
                    Inventories around <br />
                    the globe
                  </div>
                </div>
              </div>
            </div>
            <img
              className="numbersSec__deco1"
              src={numbersDeco1}
              alt="decoration"
            />
          </section>

          <section className="whyUsSec" id="why">
            <div className="container">
              <div className="whyUsSec__head">
                <h2 className="head1 fade-in">Why choose us?</h2>
                <p className="desc fade-in">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut adipiscing.Lorem ipsum
                  dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                  nibh euismod tincidunt ut adipiscing.
                </p>
              </div>
              <img className="whyUsSec__img" src={choose} />
            </div>
          </section>
          <ContactSection />
          <Info />
          <Footer />
        </div>
      </div>
    </div>
  );
}
