import React, { useEffect, useRef, useState } from "react";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import BasicInformation from "./basicInformation";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import boxGradient from "../../../../assets/images/box-gradient-image.svg";
import veryLongArrow from "../../../../assets/images/icons/icon-very-long-arrow.svg";
import holographic from "../../../../assets/images/holographic-image.svg";
import uploadCloud from "../../../../assets/images/icons/icon-upload-cloud.svg";
import calendar from "../../../../assets/images/icons/icon-calendar.svg";
import dropdownArrow from "../../../../assets/images/icons/icon-dropdown-arrow.svg";
import technologyRobo from "../../../../assets/images/icons/icon-technology-robo.svg";
import plantsLeaf from "../../../../assets/images/icons/icon-plants-leaf.svg";
import automobileToyota from "../../../../assets/images/icons/icon-automobile-toyota.svg";
import educationCap from "../../../../assets/images/icons/icon-education-cap.svg";
import toysBat from "../../../../assets/images/icons/icon-toys-bat.svg";
import healthBriefCase from "../../../../assets/images/icons/icon-health-briefcase.svg";
import longArrow from "../../../../assets/images/icons/icon-long-arrow.svg";
import locationMarkerDark from "../../../../assets/images/icons/icon-location-marker-dark.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ADD_PRODUCT, GET_CATEGORY, GET_COLOR } from "../../../../services/Api";

const initialState = {
  name: "",
  brand: "",
  sku: "",
  warranty: "",
  expire: "",
  category: "",
  color: "",
  manufacturing_date: "",
  location: "",
};

export default function AddProduct() {
  const [formState, setFormState] = useState(initialState);
  const [activeColor, setActiveColor] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  const { name, brand, sku, warranty, expire, category, color, location } =
    formState;
  const warrantyDateRef = useRef(null);
  const manufacturingDateRef = useRef(null);
  const expiryDateRef = useRef(null);
  const Navigate = useNavigate();
  const headers = {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    "Content-Type": "application/json",
  };

  useEffect(() => {
    let script = document.createElement("script");
    script.id = "scriptId";
    script.src = "/assets/scripts/datepicker.js";
    document.body.append(script);
    getCategory();
    getColor();
    return () => {
      const scriptElement = document.getElementById("scriptId");
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  const getCategory = async () => {
    try {
      let response = await axios.get(GET_CATEGORY, { headers });
      setCategoryList(response.data);
    } catch (err) {
      console.log({ "error msg": err });
    }
  };

  const getColor = async () => {
    try {
      let response = await axios.get(GET_COLOR, { headers });
      setColorList(response.data);
    } catch (err) {
      console.log({ "error msg": err });
    }
  };
  // Fetching Location;
  const fetchLocation = (e) => {
    e.preventDefault();
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition(`${latitude}&${longitude}`);
          toast.success("Location Successfully Added", {
            position: toast.POSITION.TOP_CENTER,
          });
          setError(null);
        },
        (error) => {
          if (error.code === 1) {
            // User granted permission, try fetching location again
            retryFetchLocation();
          } else {
            setError(error.message);
            toast.error("Please allow location permission..! ", {
              position: toast.POSITION.TOP_CENTER,
            });
            console.error("Error fetching location:", error.message);
          }
        }
      );
    } else {
      setError("Geolocation is not available in this browser.");
      console.error("Geolocation is not available in this browser.");
    }
  };

  const retryFetchLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPosition(`${latitude}&${longitude}`);
        toast.success("Location Successfully Added", {
          position: toast.POSITION.TOP_CENTER,
        });
        setError(null);
      },
      (error) => {
        setError(error.message);
        console.error("Error fetching location:", error.message);
      }
    );
  };

  //Changing Location Format to sample (23°38'2.4"N 86°11'32.3"E) Format
  //   const changeLocationFormat = (latitude, longitude) => {

  // function decimalToDMS() {
  //   function convertToDMS(coord, coordType) {
  //     const absCoord = Math.abs(coord);
  //     const degrees = Math.floor(absCoord);
  //     const minutesFloat = (absCoord - degrees) * 60;
  //     const minutes = Math.floor(minutesFloat);
  //     const seconds = (minutesFloat - minutes) * 60;
  //     const direction =
  //       coordType === "latitude" && coord >= 0
  //         ? 'N'
  //         : coordType === "latitude"
  //         ? 'S'        : coord >= 0
  //         ? 'E'
  //         : 'W';
  //     return `${degrees}°${minutes}'${seconds.toFixed(1)}"${direction}`;
  //   }

  //   const latitudeDMS = convertToDMS(latitude, "latitude");
  //   const longitudeDMS = convertToDMS(longitude, "longitude");
  //   return `${latitudeDMS} ${longitudeDMS}`;
  // }
  //     const value = decimalToDMS(latitude, longitude);
  //     setPosition(value);
  //   };

  const handleFormChange = (e) => {
    let value = e.target.value;
    if (e.target.name == "category" && e.target.checked) {
      const val = value.split("-");
      document.getElementById("category-label").innerText = val[1];
      setFormState({ ...formState, category: val[0] });
    } else {
      setFormState({ ...formState, [e.target.name]: value });
    }
  };

  const handleColorChange = (value, name) => {
    document.getElementById("color-label").innerText = name;
    setFormState({ ...formState, color: value });
    setActiveColor(value);
  };

  const handleFormSumbit = () => {
    if (manufacturingDateRef.current.value >= expiryDateRef.current.value) {
      toast.error(
        "Expiry Date should be greater than Manufacturing Date ...!",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return;
    }

    let updatedState = {
      ...formState,
      warranty: warrantyDateRef.current.value,
      expire: expiryDateRef.current.value,
      manufacturing_date: manufacturingDateRef.current.value,
      location: position,
    };
    setFormState(updatedState);
    if (position) {
      AddProductsValues(updatedState);
    } else {
      toast.error("Please add location..!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const AddProductsValues = (data) => {
    axios
      .post(ADD_PRODUCT, data, { headers })
      .then((response) => {
        // Handle response
        localStorage.setItem(
          "added_product",
          JSON.stringify(response.data.product)
        );
        if (response.data) {
          Navigate("/add-product/detailed-information");
        }
      })
      .catch((err) => {
        // Handle errors
        console.error("Error sending data:", err);
      });
  };

  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />
        <section className="product-screen">
          <div className="border-white-2 bdrs10 main-shadow block-widget product-screen__form">
            <form action="" class="holograf-form">
              <Link to="/csv" className="mb-1 block-wavy-dark header-block">
                <div className="header-block__inner">
                  <div className="a-content">
                    <img src={boxGradient} alt="" />
                    <div className="">
                      <h2 className="fz16 mb-0 fw700 gradientText">
                        <span>Wanted to add Bulk products at once?</span>
                      </h2>
                      <p className="fz12 m-0 text-white">
                        You can add numbers of product by following simple
                        steps.
                      </p>
                    </div>
                  </div>
                  <img src={veryLongArrow} alt="" />
                </div>
              </Link>

              <div>
                <h3 className="fz20 mb-1 fw700">Add your product</h3>
                <p className="fz16 mb-2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut.
                </p>
                <div className="h-100 d-flex border-white-1 bdrs10 main-shadow block-widget translucentBg upload-block">
                  <div className="border-white-2 main-shadow img-wrapper">
                    <img className="h-100" src={holographic} alt="" />
                  </div>
                  <div className="position-relative text">
                    <h6 className="mb-0 fz16 fw700">
                      Upload your product image to provide best look.
                    </h6>
                    <p className="mb-0 fz14 fw600">
                      <span class="fw300">Type:</span> png, jpg, jpeg, webp
                    </p>
                    <p className="mb-0 fz14 fw600">
                      <span class="fw300">Ratio:</span> 1200px - 800px
                    </p>
                    <p className="mb-0 fz14 fw600">
                      <span class="fw300">Max size:</span> 1MB
                    </p>
                    <div className="position-absolute upload-click">
                      <button className="position-relative btn btn-fab btn-fab--dark">
                        <input type="file" />
                        <img src={uploadCloud} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label for="" className="fw500 fz14 label">
                      Product Name
                    </label>
                    <input
                      name="name"
                      value={name}
                      onChange={handleFormChange}
                      type="text"
                      class="form-control"
                      placeholder="Name of your product"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label for="" class="fw500 fz14 label">
                      Product Brand
                    </label>
                    <input
                      name="brand"
                      value={brand}
                      onChange={handleFormChange}
                      type="text"
                      className="form-control"
                      placeholder="Identify your product brand"
                    />
                  </div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label
                      for="date-picker1-product-s1"
                      className="fw500 fz14 label"
                    >
                      SKU
                    </label>
                    <input
                      name="sku"
                      value={sku}
                      onChange={handleFormChange}
                      type="text"
                      class="form-control"
                      placeholder="SKU"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label
                      for="date-picker1-product-s1"
                      className="fw500 fz14 label"
                    >
                      Warranty
                    </label>
                    <div className="position-relative date-div">
                      <input
                        id="date-picker1-product-s1"
                        name="warranty"
                        type="text"
                        ref={warrantyDateRef}
                        className="fz12 form-control"
                        placeholder="Warranty date"
                      />
                      <button
                        type="button"
                        className="position-absolute btn btn-fab btn-fab--pink open-button"
                      >
                        <img src={calendar} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label
                      for="date-picker2-product-s1"
                      className="fw500 fz14 label"
                    >
                      Manufacturing date
                    </label>
                    <div className="position-relative date-div">
                      <input
                        id="date-picker2-product-s1"
                        type="text"
                        ref={manufacturingDateRef}
                        name="manufacturing"
                        className="fz12 form-control"
                        placeholder="Manufacturing date"
                      />
                      <button
                        type="button"
                        className="position-absolute btn btn-fab btn-fab--pink open-button"
                      >
                        <img src={calendar} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label
                      for="date-picker3-product-s1"
                      className="fw500 fz14 label"
                    >
                      Expiry date
                    </label>
                    <div className="position-relative date-div">
                      <input
                        id="date-picker3-product-s1"
                        type="text"
                        name="expire"
                        ref={expiryDateRef}
                        className="fz12 form-control"
                        placeholder="Expiry date"
                      />
                      <button className="position-absolute btn btn-fab btn-fab--pink open-button">
                        <img src={calendar} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label for="" className="fw500 fz14 label">
                      Category
                    </label>
                    <div className="dropdown">
                      <Link
                        id="category-dropdown"
                        className="position-relative form-control select-div"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span
                          id="category-label"
                          className="fw400 fz12 grayText fst-italic"
                        >
                          Select category of your product, max 04
                        </span>
                        <div className="position-absolute btn btn-fab btn-fab--green">
                          <img src={dropdownArrow} alt="" />
                        </div>
                      </Link>

                      <div className="w-100 dropdown-menu border-white-2 dropdown-menu-holograf">
                        <ul className="list-inline mb-0 category-list">
                          {categoryList.length > 0 &&
                            categoryList.map((category, index) => (
                              <li key={category.id}>
                                <div className="check-select-cover">
                                  <input
                                    type="checkbox"
                                    name="category"
                                    value={`${category.id}-${category.name}`}
                                    onChange={handleFormChange}
                                  />
                                  <label
                                    for={`category${category.id}`}
                                    className="t04 block-wavy-dark bdrs10 itemToCheck"
                                  >
                                    <img src={technologyRobo} alt="" />
                                    <span className="fw700 text-white fz14">
                                      {category.value}
                                    </span>
                                  </label>
                                </div>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="form-group">
                    <label for="" className="fw500 fz14 label">
                      Product Color
                    </label>
                    <div class="dropdown">
                      <Link
                        className="position-relative form-control select-div"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span
                          id="color-label"
                          className="fw400 fz12 grayText fst-italic selected-color"
                        >
                          Select product color
                        </span>

                        <div className="position-absolute btn btn-fab btn-fab--green">
                          <img src={dropdownArrow} alt="" />
                        </div>
                      </Link>

                      <div className="w-100 dropdown-menu border-white-2 dropdown-menu-holograf">
                        <ul className="list-inline m-0 dd-menu-colors">
                          {colorList.length > 0 &&
                            colorList.map((color, index) => (
                              <li
                                key={color.id}
                                onClick={() =>
                                  handleColorChange(
                                    `${color.value}`,
                                    color.name
                                  )
                                }
                              >
                                <Link
                                  to=""
                                  className={`rounded-circle color color--${
                                    color.value
                                  } ${
                                    activeColor === color.value ? "active" : ""
                                  }`}
                                >
                                  <span></span>
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12 m-0">
                  <ul className="list-inline mt-3 mb-3 preview-tags">
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="row g-4">
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
                          <span class="fw300 fz12"> Type:</span> pdf, docx, doc
                        </p>
                        <p className="mb-0 fz12 fw600 grayText">
                          <span class="fw300 fz12">Max size:</span> 1MB
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
                    <div
                      onClick={fetchLocation}
                      className="position-absolute upload-click"
                    >
                      <button className="btn btn-fab bg-white">
                        <img src={locationMarkerDark} alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                <ToastContainer />
              </div>
            </form>
          </div>
          <BasicInformation handleFormSumbit={handleFormSumbit} />
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
