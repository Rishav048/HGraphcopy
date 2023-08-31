import React, { useEffect, useState } from "react";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import Preview from "./preview";
import holographicSquare from "../../../../assets/images/holographic-image-square.svg";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  GET_PRODUCT_DETAILS,
  GET_PRODUCT,
  GET_COLOR,
  GET_CATEGORY,
} from "../../../../services/Api";
import Loader from "../../../../reusable_components/loader";
//console.log("product_id", product_id, "productDetails_id", productDetails_id);

export default function ProductPreview() {
  const [product, setProduct] = useState(null);
  const [productDetails, setproductDetails] = useState(null);
  const [colorsData, setColorsData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);

  const headers = {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    "Content-Type": "application/json",
  };
  let product_id;
  let productDetails_id;
  let Product_LsData;
  let ProductDetails_LsData;
  useEffect(() => {
    Product_LsData = JSON.parse(localStorage.getItem("added_product")) || null;
    ProductDetails_LsData =
      JSON.parse(localStorage.getItem("product_details")) || null;

    if (Product_LsData) {
      product_id = Product_LsData.id;
    }
    if (ProductDetails_LsData) {
      productDetails_id = ProductDetails_LsData.id;
    }

    if (product_id && productDetails_id) {
      getProductDetails();
    }
  }, []);

  const getProductDetails = async () => {
    try {
      const urls = [
        `${GET_PRODUCT}/${product_id}`,
        `${GET_PRODUCT_DETAILS}/${productDetails_id}`,
        `${GET_COLOR}`,
        `${GET_CATEGORY}`,
      ];

      const responses = await Promise.all(
        urls.map((url) => axios.get(url, { headers }))
      );
      const product = responses[0].data;
      const product_details = responses[1].data;
      const color_details = responses[2].data;
      const category_details = responses[3].data;

      setProduct(product);
      setproductDetails(product_details);
      let colorArr = color_details.filter((el) => {
        if (el.value < 10) {
          return el.value === `0${Product_LsData.color}`;
        } else {
          return el.value === Product_LsData.color;
        }
      });

      let categoryArr = category_details.filter(
        (el) => el.id == Product_LsData.category
      );
      setColorsData(colorArr[0]);
      setCategoryData(categoryArr[0]);
    } catch (err) {
      console.log({ Error: err });
    }
  };
  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />
        {product && colorsData && categoryData ? (
          <section className="product-screen">
            <div className="border-white-2 bdrs10 main-shadow block-widget product-screen__form">
              <form action="" className="holograf-form">
                <div className="block-wavy-dark header-block">
                  <div className="header-block__inner">
                    <div className="justify-content-between a-content">
                      <div className="">
                        <h2 className="fz16 mb-0 fw700 gradientText">
                          <span>Select what you want us to do!</span>
                        </h2>
                        <p className="fz12 m-0 text-white">
                          You can generate QR or tag your product!
                        </p>
                      </div>
                      <div className="right-content">
                        <div className="btnGroup">
                          <Link
                            to="/QR-generated"
                            className="me-1 btn btn-cta--outlined"
                          >
                            <div className="fw400 fz14">
                              <div className="gradientText--radial">
                                <span>Generate QR</span>
                              </div>
                            </div>
                          </Link>
                          <Link
                            to="/IOT-generated"
                            className="btn btn-cta--gradient"
                          >
                            <div className="fw400 fz14">
                              <div className="primaryText">
                                <span>Tag IOT Device</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="preview-image-block">
                  <div className="border-white-2 main-shadow position-relative img-wrapper">
                    <img
                      className="h-100 w-100 bdrs10"
                      src={holographicSquare}
                      alt=""
                    />
                  </div>
                  <div className="preview-fields">
                    <ul className="list-inline m-0 h-100 view-info">
                      <li>
                        <div className="fw500 fz14 view-pair">
                          <div className="fst-italic grayText label">
                            Product name
                          </div>
                          <div className="value">{product.name}</div>
                        </div>
                      </li>
                      <li>
                        <div className="fw500 fz14 view-pair">
                          <div className="fst-italic grayText label">
                            SKU number
                          </div>
                          <div className="value">{product.sku}</div>
                        </div>
                      </li>
                      <li>
                        <div className="fw500 fz14 view-pair">
                          <div className="fst-italic grayText label">
                            Manufacturing date
                          </div>
                          <div className="value">
                            {product.manufacturing_date &&
                              product.manufacturing_date.split("-").join(" - ")}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="fw500 fz14 view-pair">
                          <div className="fst-italic grayText label">
                            Category
                          </div>
                          <div className="value">{categoryData.name}</div>
                        </div>
                      </li>
                      <li>
                        <div className="fw500 fz14 view-pair">
                          <div className="fst-italic grayText label">
                            Product brand
                          </div>
                          <div className="value">{product.brand}</div>
                        </div>
                      </li>
                      <li>
                        <div className="fw500 fz14 view-pair">
                          <div className="fst-italic grayText label">
                            Warranty
                          </div>
                          <div className="value">
                            {product.warranty &&
                              product.warranty.split("-").join(" - ")}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="fw500 fz14 view-pair">
                          <div className="fst-italic grayText label">
                            Expiry date
                          </div>
                          <div className="value">
                            {product.expire &&
                              product.expire.split("-").join(" - ")}
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="fw500 fz14 view-pair">
                          <div className="fst-italic grayText label">
                            Product color
                          </div>
                          <div className="value">
                            {/* <!-- If the color is selected, then show this div or else the above --> */}
                            <div className="selected-color color-cover">
                              <div
                                className={`color color--${colorsData.value} active`}
                              >
                                <span></span>
                              </div>
                              <div className="fz14 text">{colorsData.name}</div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-12 col-lg-12">
                    <div className="form-group">
                      <label for="" className="fw500 fz14 label">
                        Product detail
                      </label>
                      <div className="w-100 fz12 border-white-2 translucentBg bdrs10 main-shadow text-area">
                        <h2 className="fz24 fw500">
                          Essential things to think about before starting
                        </h2>
                        <p className="lh-1-2">{productDetails.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <Preview />
          </section>
        ) : (
          <Loader />
        )}
      </div>
      <BottomNavbar />
    </div>
  );
}
