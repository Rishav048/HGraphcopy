import React, { useEffect } from "react";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import gradLeaf from "../../../../assets/images/icons/icon-grad-leaf.svg";
import trustedShield from "../../../../assets/images/icons/icon-trusted-shield.svg";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import { Link } from "react-router-dom";

export default function BatchPreview() {

  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />
        <section className="product-screen">
          <div className="w-100 border-white-2 bdrs10 main-shadow block-widget custom-data-table">
            <div className="block-wavy-dark header-block">
              <div className="m-3">
                <div className="justify-content-between a-content">
                  <div className="left-topbar-sec">
                    <h2 className="d-inline-flex fz16 mb-0 fw700 gradientText">
                      <img src={gradLeaf} alt="" />
                      <span className="ms-1 fw600 fz24">Preview</span>
                    </h2>
                    <p className="fz12 m-0 text-white">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt
                    </p>
                  </div>
                  <div className="right-content right-topbar-sec">
                    <p className="mb-1 fz12 text-white">
                      You can generate QR or tag your product!
                    </p>
                    {/* <!-- <p>** NFCID Field missing against your products!Add field to tag your products!</p> --> */}
                    <div className="btnGroup">
                      <Link
                        to="/batch-QR-generated"
                        className="me-1 btn btn-cta--outlined"
                      >
                        <div className="fw400 fz14">
                          <div className="gradientText--radial">
                            <span>Generate QR</span>
                          </div>
                        </div>
                      </Link>
                      <Link
                        to="/batch-IOT-generated"
                        className="btn btn-cta--gradient"
                      >
                        <div className="fw400 fz14">
                          <div className="primaryText">
                            <span>Tag IOT Devices</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-3 top-row">
              <div className="cdt-length top-row__left">
                <h6 className="mb-1 fz20 fw700">Batch Products Preview</h6>
                <span className="fz16">Total products - 200</span>
              </div>

              <Link
                to=""
                className="btn my-2 me-1 fz14 btn-dark-outlined black-default"
              >
                Edit
              </Link>
            </div>

            <div className="table-responsive">
              <table className="w-100 table holograf-table hover">
                <thead>
                  <tr>
                    <th>
                      <span className="fz14 fw500">SKU</span>
                    </th>
                    <th>
                      <span className="fz14 fw500">Product name</span>
                    </th>
                    <th>
                      <span className="fz14 fw500">Product Brand</span>
                    </th>
                    <th>
                      <span className="fz14 fw500">Shelf Life</span>
                    </th>
                    <th>
                      <span className="fz14 fw500">Description</span>
                    </th>
                    <th>
                      <span className="fz14 fw500">Category</span>
                    </th>
                    <th>
                      <span className="fz14 fw500">Date Added</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="fz12 id_cell">
                        #80906hfj86onvh9y0...
                      </span>
                    </td>
                    <td>
                      <span className="d-block">
                        MAC-Pro-System- Version 3.0
                      </span>
                    </td>
                    <td>
                      <div className="brnd_btn_black">
                        <span>HOB</span>
                      </div>
                      <img
                        className="trusted_sheild"
                        src={trustedShield}
                        alt="trusted_logo"
                      />
                    </td>
                    <td>
                      <div className="fw700">04 years</div>
                    </td>
                    <td>
                      <p className="mb-0 prod_desc">
                        Lorem ipsum dolor sit amet, consectetuer adi piscing
                        elit, sed diam nonummy.
                      </p>
                    </td>
                    <td>
                      <ul className="list-inline mb-0 td-tag-list">
                        <li>
                          <div className="text-uppercase td-tag">
                            Technology
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Health and Care
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Technology
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Health and Care
                          </div>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span className="d-block mb-2">01-June-2023 </span>
                      <span className="d-block">03hr:55min (EST)</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fz12 id_cell">
                        #80906hfj86onvh9y0...
                      </span>
                    </td>
                    <td>
                      <span className="d-block">
                        MAC-Pro-System- Version 3.0
                      </span>
                    </td>
                    <td>
                      <div className="brnd_btn_black">
                        <span>HOB</span>
                      </div>
                      <img
                        className="trusted_sheild"
                        src={trustedShield}
                        alt="trusted_logo"
                      />
                    </td>
                    <td>
                      <div className="fw700">04 years</div>
                    </td>
                    <td>
                      <p className="mb-0 prod_desc">
                        Lorem ipsum dolor sit amet, consectetuer adi piscing
                        elit, sed diam nonummy.
                      </p>
                    </td>
                    <td>
                      <ul className="list-inline mb-0 td-tag-list">
                        <li>
                          <div className="text-uppercase td-tag">
                            Technology
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Health and Care
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Technology
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Health and Care
                          </div>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span className="d-block mb-2">01-June-2023 </span>
                      <span className="d-block">03hr:55min (EST)</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fz12 id_cell">
                        #80906hfj86onvh9y0...
                      </span>
                    </td>
                    <td>
                      <span className="d-block">MAC-Pro- Version 3.0</span>
                    </td>
                    <td>
                      <div className="brnd_btn_black">
                        <span>HOB</span>
                      </div>
                      <img
                        className="trusted_sheild"
                        src={trustedShield}
                        alt="trusted_logo"
                      />
                    </td>
                    <td>
                      <div className="fw700">04 years</div>
                    </td>
                    <td>
                      <p className="mb-0 prod_desc">
                        Lorem ipsum dolor sit amet, consectetuer adi piscing
                        elit, sed diam nonummy.
                      </p>
                    </td>
                    <td>
                      <ul className="list-inline mb-0 td-tag-list">
                        <li>
                          <div className="text-uppercase td-tag">
                            Technology
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Health and Care
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Technology
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Health and Care
                          </div>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span className="d-block mb-2">01-June-2023 </span>
                      <span className="d-block">03hr:55min (EST)</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fz12 id_cell">
                        #80906hfj86onvh9y0...
                      </span>
                    </td>
                    <td>
                      <span className="d-block">MAC-System- Version 2.0</span>
                    </td>
                    <td>
                      <div className="brnd_btn_black">
                        <span>HOB</span>
                      </div>
                      <img
                        className="trusted_sheild"
                        src={trustedShield}
                        alt="trusted_logo"
                      />
                    </td>
                    <td>
                      <div className="fw700">04 years</div>
                    </td>
                    <td>
                      <p className="mb-0 prod_desc">
                        Lorem ipsum dolor sit amet, consectetuer adi piscing
                        elit, sed diam nonummy.
                      </p>
                    </td>
                    <td>
                      <ul className="list-inline mb-0 td-tag-list">
                        <li>
                          <div className="text-uppercase td-tag">
                            Technology
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Health and Care
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Technology
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Health and Care
                          </div>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span className="d-block mb-2">01-June-2023 </span>
                      <span className="d-block">03hr:55min (EST)</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fz12 id_cell">
                        #80906hfj86onvh9y0...
                      </span>
                    </td>
                    <td>
                      <span className="d-block">
                        MAC-Pro-System- Version 3.0
                      </span>
                    </td>
                    <td>
                      <div className="brnd_btn_black">
                        <span>HOB</span>
                      </div>
                      <img
                        className="trusted_sheild"
                        src={trustedShield}
                        alt="trusted_logo"
                      />
                    </td>
                    <td>
                      <div className="fw700">04 years</div>
                    </td>
                    <td>
                      <p className="mb-0 prod_desc">
                        Lorem ipsum dolor sit amet, consectetuer adi piscing
                        elit, sed diam nonummy.
                      </p>
                    </td>
                    <td>
                      <ul className="list-inline mb-0 td-tag-list">
                        <li>
                          <div className="text-uppercase td-tag">
                            Technology
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Health and Care
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Technology
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Health and Care
                          </div>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span className="d-block mb-2">01-June-2023 </span>
                      <span className="d-block">03hr:55min (EST)</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fz12 id_cell">
                        #80906hfj86onvh9y0...
                      </span>
                    </td>
                    <td>
                      <span className="d-block">
                        MAC-Pro-System- Version 3.0
                      </span>
                    </td>
                    <td>
                      <div className="brnd_btn_black">
                        <span>HOB</span>
                      </div>
                      <img
                        className="trusted_sheild"
                        src={trustedShield}
                        alt="trusted_logo"
                      />
                    </td>
                    <td>
                      <div className="fw700">04 years</div>
                    </td>
                    <td>
                      <p className="mb-0 prod_desc">
                        Lorem ipsum dolor sit amet, consectetuer adi piscing
                        elit, sed diam nonummy.
                      </p>
                    </td>
                    <td>
                      <ul className="list-inline mb-0 td-tag-list">
                        <li>
                          <div className="text-uppercase td-tag">
                            Technology
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Health and Care
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Technology
                          </div>
                        </li>
                        <li>
                          <div className="text-uppercase td-tag">
                            Health and Care
                          </div>
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span className="d-block mb-2">01-June-2023 </span>
                      <span className="d-block">03hr:55min (EST)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
