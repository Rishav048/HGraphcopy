import React from "react";
import leaf from "../../assets/images/landing/subscribe/leaf.svg";
import email from "../../assets/images/landing/subscribe/email.svg";
import deco2 from "../../assets/images/landing/subscribe/deco2.svg";
import deco1 from "../../assets/images/landing/subscribe/deco1.svg";
import location from "../../assets/images/landing/info/location.svg";
import user from "../../assets/images/landing/info/user.svg";

export default function Info() {
  return (
    <>
      <section className="queAnsSec" id="faq">
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="head1 fade-in">
              Let's answers your tricky questions!
            </h2>
            <p className="desc fade-in">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut.
            </p>
          </div>

          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item fade-in">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the first item's accordion body.
                </div>
              </div>
            </div>
            <div className="accordion-item fade-in">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div className="accordion-item fade-in">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
            <div className="accordion-item fade-in">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This
                  is the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subscribeSec">
        <div className="container">
          <div className="subscribeSec__inner">
            <div className="subscribeSec__content">
              <h2 className="head1 fade-in">
                Let's connect to make things better{" "}
                <img className="d-inline-block" src={leaf} alt="..." />
              </h2>
              <p className="fade-in desc">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut.
              </p>
              <form>
                <div className="subscribeSec__emailWrapper fade-in">
                  <input
                    type="email"
                    required
                    placeholder="Enter you email to subscribe"
                  />
                  <button type="submit">
                    <img src={email} alt="..." />
                  </button>
                </div>
              </form>
            </div>
            <img className="subscribeSec__deco1" src={deco1} alt="" />
            <div
              className="subscribeSec__deco2 replaceWithSVG"
              data-src={deco2}
            ></div>
          </div>
        </div>
      </section>

      <section className="infoSec">
        <div className="container fade-in">
          <div className="row">
            <div className="col">
              <div className="infoSec__single">
                <div>
                  <img src={location} alt="..." />
                </div>
                <div className="infoSec__title">FIND US</div>
                <div className="infoSec__text">
                  2nd floor plot no, 254, Phase IV, Udyog Vihar, Sector 18,
                  Gurugram
                </div>
              </div>
            </div>
            <div className="col">
              <div className="infoSec__single">
                <div>
                  <img src={user} alt="..." />
                </div>
                <div className="infoSec__title">Contact US</div>
                <div className="infoSec__text">Call us : 1800 137 0011</div>
              </div>
            </div>
            <div className="col">
              <div className="infoSec__single">
                <div>
                  <img src={email} alt="..." />
                </div>
                <div className="infoSec__title">Email US</div>
                <div className="infoSec__text">Call us : 1800 137 0011</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
