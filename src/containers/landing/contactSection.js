import React from "react";
import contactImage from "../../assets/images/landing/contact/img1.svg";

export default function ContactSection() {
  return (
    <section className="contactSec" id="chat">
      <div className="container">
        <div className="contactSec__flex">
          <div className="contactSec__left">
            <div className="contactSec__head">
              <h2 className="head1 fade-in">Write to us!</h2>
              <p className="desc fade-in">
                We are here to assist you 24/7. Email us so we can reach you out
                as soon as possible.
              </p>
            </div>
            <form>
              <div className="input-wrapper">
                <div className="input-label">What should we call you?</div>
                <input type="text" name="name" placeholder="Full name" />
              </div>

              <div className="input-wrapper">
                <div className="input-label">How to contact you?</div>
                <input type="text" name="email" placeholder="Email address" />
              </div>

              <div className="input-wrapper">
                <div className="input-label">What’s on your mind?</div>
                <textarea
                  name="message"
                  placeholder="Tell us about your issues we will contact you as soon as possible."
                ></textarea>
              </div>

              <div className="text-center">
                <button className="button-dark" type="submit">
                  <span className="hgt">Send query</span>
                </button>
              </div>
            </form>
          </div>
          <div className="contactSec__right">
            <h2 className="head1 fade-in">
              <span className="hgt">24/7</span>
            </h2>
            <p className="desc2 fade-in">Assisstance at your service</p>
            <div
              className="contactSec__img replaceWithSVG"
              data-src={contactImage}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
