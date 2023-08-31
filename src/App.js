import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./containers/product/single_product/basic_information/addProduct";
import AddDetailedInformation from "./containers/product/single_product/detailed_information";
import ProductPreview from "./containers/product/single_product/product_Preview";
import QRSuccess from "./containers/product/single_product/product_Preview/generate_QR_IOT/QRSuccess";
import IOTSuccess from "./containers/product/single_product/product_Preview/generate_QR_IOT/IOTSuccess";
import SingleProductListings from "./containers/product/single_product";
import UploadCSVFile from "./containers/product/multiple_product/upload_csv/uploadCsv";
import Loader from "./reusable_components/loader";
import BadRequest from "./reusable_components/badRequest";
import BasicData from "./containers/product/multiple_product/basic_data/basicData";
import MappingCSV from "./containers/product/multiple_product/mapping/mappingCsv";
import BatchPreview from "./containers/product/multiple_product/preview/batchPreview";
import GenerateBatchQR from "./containers/product/multiple_product/preview/generate_Batch_QR_IOT/generateBatchQR";
import GenerateBatchIOT from "./containers/product/multiple_product/preview/generate_Batch_QR_IOT/generateBatchIOT";
import Tracking from "./containers/tracking/tracking";
import TrackingStatus from "./containers/tracking/trackingStatus";
import OwnershipFlow from "./containers/tracking/ownershipFlow";
import Activities from "./containers/activities/activities";
import Report from "./containers/reports";

import PakageInformation from "./containers/Inventory/packaging_details/pakage_information";
import PackagingOuterSourcingDetails from "./containers/Inventory/packaging_details/outsourcing_details";
import BasicPackagingDetails from "./containers/Inventory/packaging_details/basic_pakaging_details";
import PakagingDetailsPreview from "./containers/Inventory/packaging_details/preview";
import PackagingQRSuccess from "./containers/Inventory/packaging_details/pakaging_success/QR_success";
import WarehouseTypes from "./containers/Inventory/warehouse_details/warehouse_types";
import BasicWarehouseDetails from "./containers/Inventory/warehouse_details/basic_warehouse_details";
import BasicNextOwnerDetails from "./containers/Inventory/next_owner_details/basic_owner_details";
import TransportationTypes from "./containers/Inventory/transportation_details/transportation_types";
import TransportationOuterSourcingDetails from "./containers/Inventory/transportation_details/outsoursing_details";
import TransportationModes from "./containers/Inventory/transportation_details/transpotaion_mode";
import InventoryPreview from "./containers/Inventory/inventory_preview/preview";
import InventorySuccess from "./containers/Inventory/inventory_preview/success/inventory-success";
import PackagingIOTSuccess from "./containers/Inventory/packaging_details/pakaging_success/IOT_success";
import Dashboard from "./containers/dashboard";
import InventoryView from "./containers/Inventory/inventory_viewpage";
import React, { Suspense } from "react";
import LandingPage from "./containers/landing/index";
import OTP from "./containers/authentication/login_page/otp";
import Login from "./containers/authentication/login_page/login";
import ProfileMainPage from "./containers/profile/profileMainPage";
import ProfileBasicInformation from "./containers/profile/profileBasicInformation";
import CompanyInformation from "./containers/profile/companyInformation";
function App() {
  //const LandingPage = React.lazy(() => import('./containers/landing/index'));
  // const Login = React.lazy(() => import('./containers/authentication/login_page/login'));
  // const OTP = React.lazy(() => import('./containers/authentication/login_page/otp'));
  // const ProfileMainPage = React.lazy(() => import('./containers/profile/profileMainPage'));
  // const ProfileBasicInformation = React.lazy(() => import('./containers/profile/profileBasicInformation'));
  // const CompanyInformation = React.lazy(() => import('./containers/profile/companyInformation'));

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OTP />} />
          {/* profile section */}
          <Route path="/profile" element={<ProfileMainPage />} />
          <Route
            path="/basic-information"
            element={<ProfileBasicInformation />}
          />
          <Route path="/company-information" element={<CompanyInformation />} />
          {/* single product */}
          <Route path="/add-product" element={<AddProduct />} />
          <Route
            path="add-product/detailed-information"
            element={<AddDetailedInformation />}
          />
          <Route
            path="add-product/detailed-information/product-preview"
            element={<ProductPreview />}
          />
          <Route path="/QR-generated" element={<QRSuccess />} />
          <Route path="/IOT-generated" element={<IOTSuccess />} />
          <Route
            path="/single-product-listings"
            element={<SingleProductListings />}
          />
          {/* csv upload */}
          <Route path="csv" element={<UploadCSVFile />} />
          <Route path="csv/basic-data" element={<BasicData />} />
          <Route path="csv/basic-data/mapping" element={<MappingCSV />} />
          <Route
            path="csv/basic-data/mapping/preview"
            element={<BatchPreview />}
          />
          <Route path="batch-QR-generated" element={<GenerateBatchQR />} />
          <Route path="batch-IOT-generated" element={<GenerateBatchIOT />} />

          {/* tracking */}
          {/* <Route path="/tracking" element={<Tracking />} /> */}
          <Route path="/tracking-status" element={<TrackingStatus />} />
          <Route path="/ownership/:QRcode" element={<OwnershipFlow />} />

          {/* activities */}
          <Route path="/activities" element={<Activities />} />

          {/* activities */}
          <Route path="/report" element={<Report />} />
          {/* Inventory Pages (Packaging) */}
          <Route path="/pakage-information" element={<PakageInformation />} />
          <Route
            path="/pakaging-outsourcing-details"
            element={<PackagingOuterSourcingDetails />}
          />
          <Route
            path="/pakaging-basic-details"
            element={<BasicPackagingDetails />}
          />
          <Route
            path="/pakaging-details-preview"
            element={<PakagingDetailsPreview />}
          />
          <Route
            path="/pakaging-QR-generated"
            element={<PackagingQRSuccess />}
          />
          <Route
            path="/pakaging-IOT-generated"
            element={<PackagingIOTSuccess />}
          />
          {/* Inventory Pages (Warehouse) */}
          <Route path="/warehouse-types" element={<WarehouseTypes />} />
          <Route
            path="/warehouse-basic-details"
            element={<BasicWarehouseDetails />}
          />

          {/* Inventory Pages (Next Owner) */}
          <Route
            path="/nextowner-basic-details"
            element={<BasicNextOwnerDetails />}
          />

          {/* Inventory Pages (Transportation) */}
          <Route
            path="/transportation-types"
            element={<TransportationTypes />}
          />

          <Route
            path="/transportation-outsourcing-details"
            element={<TransportationOuterSourcingDetails />}
          />

          <Route
            path="/transportation-mode"
            element={<TransportationModes />}
          />

          {/* Inventory(Preview/Success) */}
          <Route path="/inventory-preview" element={<InventoryPreview />} />
          <Route path="/inventory-success" element={<InventorySuccess />} />
          <Route path="/inventory-view" element={<InventoryView />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/loader" element={<Loader />} />
          <Route path="*" element={<BadRequest />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
