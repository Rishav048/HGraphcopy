import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import mNavLogo from "../assets/images/m-nav-logo.svg";
import mIconNavProductWhite from "../assets/images/icons/m-icon-nav-product-white.svg";
import mIconNavProductGradient from "../assets/images/icons/m-icon-nav-product-gradient.svg";
import mIconNavInventoriesWhite from "../assets/images/icons/m-icon-nav-inventories-white.svg";
import mIconNavInventoriesGradient from "../assets/images/icons/m-icon-nav-inventories-gradient.svg";
import mIconNavTrackingWhite from "../assets/images/icons/m-icon-nav-tracking-white.svg";
import mIconNavTrackingGradient from "../assets/images/icons/m-icon-nav-tracking-gradient.svg";
import mIconNavActivitiesWhite from "../assets/images/icons/m-icon-nav-activities-white.svg";
import mIconNavActivitiesGradient from "../assets/images/icons/m-icon-nav-activities-gradient.svg";
import { Link,useNavigation } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function BottomNavbar() {
  let { pathname } = useLocation();
  const [activePage, setActivePage] = useState("");
  

  useEffect(() => {
    if (dashboardPages.includes(pathname)) {
      setActivePage("dashboard");
    } else if (activitiesPages.includes(pathname)) {
      setActivePage("activities");
    } else if (productPages.includes(pathname)) {
      setActivePage("products");
    } else if (trackingPages.includes(pathname)) {
      setActivePage("tracking");
    } else if (pathname.startsWith("/ownership/")) {
      setActivePage("tracking");
    } else if (inventoryPages.includes(pathname)) {
      setActivePage("inventory");
    } else if (settingPages.includes(pathname)) {
      setActivePage("settings");
    }
  }, [pathname]);

  const dashboardPages = ["/dashboard"];
  const activitiesPages = ["/activities"];
  const productPages = [
    "/add-product",
    "/add-product/detailed-information",
    "/add-product/detailed-information/product-preview",
    "/single-product-listings",
    "/csv",
    "/csv/basic-data",
    "/csv/basic-data/mapping",
    "/csv/basic-data/mapping/preview",
  ];

  const trackingPages = ["/tracking", "/tracking-status", "/ownership"];
  const inventoryPages = [
    "/pakage-information",
    "/pakaging-outsourcing-details",
    "/pakaging-basic-details",
    "/pakaging-details-preview",
    "/warehouse-types",
    "/warehouse-basic-details",
    "/nextowner-basic-details",
    "/transportation-types",
    "/transportation-outsourcing-details",
    "/transportation-mode",
    "/inventory-preview",
    "/inventory-view",
  ];

  const settingPages = [
    "/profile",
    "/basic-information",
    "/company-information",
  ];

  return (
    <nav className="w-100 bottom-nav">
      <div className="h-100 d-none d-md-block bottom-nav__logo">
        <span className="w-100 h-100">
          <img src={logo} alt="" />
        </span>
      </div>
      <ul className="list-inline m-0 h-100 font-tertiary bottom-nav__menu">
        <li>
          <a
            href="/dashboard"
            className={`fz20 nav-links ${
              activePage === "dashboard" ? "active-link" : ""
            }`}
          >
            <img src={mNavLogo} alt="" />
            <span>Dashboard</span>
          </a>
        </li>

        <li>
          <a
            href="/single-product-listings"
            className={`fz20 nav-links ${
              activePage === "products" ? "active-link" : ""
            }`}
          >
            <div className="toggle-image">
              <img className="t-white" src={mIconNavProductWhite} alt="" />
              <img
                className="t-gradient"
                src={mIconNavProductGradient}
                alt=""
              />
            </div>
            <span>Products</span>
          </a>
        </li>
        <li>
          <a
            href="/inventory-view"
            className={`fz20 nav-links ${
              activePage === "inventory" ? "active-link" : ""
            }`}
          >
            <div className="toggle-image">
              <img className="t-white" src={mIconNavInventoriesWhite} alt="" />
              <img
                className="t-gradient"
                src={mIconNavInventoriesGradient}
                alt=""
              />
            </div>
            <span>Inventory</span>
          </a>
        </li>
        <li>
          <Link
            to="/tracking-status"
            className={`fz20 nav-links ${
              activePage === "tracking" ? "active-link" : ""
            }`}
          >
            <div className="toggle-image">
              <img className="t-white" src={mIconNavTrackingWhite} alt="" />
              <img
                className="t-gradient"
                src={mIconNavTrackingGradient}
                alt=""
              />
            </div>
            <span>Tracking</span>
          </Link>
        </li>
        <li>
          <Link
            to="/activities"
            className={`fz20 nav-links ${
              activePage === "activities" ? "active-link" : ""
            }`}
          >
            <div className="toggle-image">
              <img className="t-white" src={mIconNavActivitiesWhite} alt="" />
              <img
                className="t-gradient"
                src={mIconNavActivitiesGradient}
                alt=""
              />
            </div>
            <span>Activities</span>
          </Link>
        </li>
        <li className="d-none d-md-block">
          <Link
            to="/profile"
            className={`fz20 nav-links ${
              activePage === "settings" ? "active-link" : ""
            }`}
          >
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
