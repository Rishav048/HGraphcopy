import React from 'react'
import PageList from '../../../../reusable_components/pageList'
import Navbar from '../../../../layouts/navbar'
import BottomNavbar from '../../../../layouts/bottomNavbar'
import uploadDoc from '../../../../assets/images/upload-doc-img.svg'
import uploadCloud from '../../../../assets/images/icons/icon-upload-cloud.svg'
import uploadCsv from '../../../../assets/images/uploaded-csv-img.svg'
import cut from '../../../../assets/images/icons/icon-cut.svg'
import CsvStatus from './csvStatus'

export default function UploadCSVFile() {
  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
        <Navbar />
        <section className="product-screen">
          <div className="border-white-2 bdrs10 block-widget main-shadow left-sec">
            <h6 className="mb-1 fz20 fw700">Upload your CSV file here.</h6>
            <span className="fz16"
              >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut.</span
            >
            <div
              className="mt-2 border-white-2 bdrs10 block-widget main-shadow block-widget-customised"
            >
              <div className="bdrs10 dashed-box">
                <div className="upload-top-sec">
                  <div className="upload-img-wrapper">
                    <img
                      src={uploadDoc}
                      alt="upload"
                    />
                  </div>
                  <p className="mb-0 fw700 fz20">Select CSV file to upload</p>
                  <p className="mb-0 fw400 fz16">Or drag and drop it here</p>
                  <p className="mb-2 fw700 fz12">MAX Size 1024mb</p>
                  <div className="position-relative upload-click">
                    <button className="btn btn-fab btn-fab--dark">
                      <input type="file" />
                      <img
                        src={uploadCloud}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <div className="uploaded-items-bottom">
                  <div className="ps-3 bdrs10 block-widget main-shadow up-item">
                    <div className="up-icon-div">
                      <img
                        src={uploadCsv}
                        alt="img-upload"
                      />
                    </div>
                    <span className="fz14"
                      >Health_and_care_products.csv - 24mb</span
                    >
                    <button className="cut-btn">
                      <img src={cut} alt="cut" />
                    </button>
                  </div>
                </div>
              </div>

              <p className="mb-2 upload-level">Or upload from URL</p>
              <div
                className="w-100 position-relative bdrs10 form-group form-group--search"
              >
                <input
                  type="url"
                  className="fz14 border-white-2 main-shadow fz12 form-control url-input"
                  placeholder="Paste or write your URL here"
                />
                <div className="position-absolute upload-click">
                  <button
                    className="position-relative btn btn-fab btn-fab--dark upload-btn-grad"
                  >
                    <input type="text" />
                    <span>Upload</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
<CsvStatus />
         
        </section>
      </div>
<BottomNavbar />
    </div>
  )
}
