import React, { useEffect, useState } from "react";
import PageList from "../../../../reusable_components/pageList";
import Navbar from "../../../../layouts/navbar";
import DetailedInformation from "./detailedInformation";
import BottomNavbar from "../../../../layouts/bottomNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ADD_PRODUCT_DETAILS } from "../../../../services/Api";

export default function AddDetailedInformation() {
   const [details, setDetails] = useState("");
   const navigate = useNavigate();
   const headers = {
     Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
     "Content-Type": "application/json",
   };

  useEffect(() => {
    if(!document.getElementById("ckeditorid")) {
      let scriptck = document.createElement("script");
      scriptck.id = "ckeditorid";
      scriptck.src = "/assets/scripts/ckeditor.js";
      document.body.append(scriptck);
    }
  }, []);

  // Catching value of Editor
  const handleSubmit = () => {
   const placeholderElement = document.querySelector(
     '[data-placeholder="Write the details here.."]'
   );
    if (placeholderElement) {
      const innerText = placeholderElement.innerText;
       let updatedState = innerText;
      setDetails(updatedState);
      addDetails(updatedState);
      
    }
     

  };

const addDetails=async(data)=>{
  try{
   
  let response = await axios.post(
    `${ADD_PRODUCT_DETAILS}`,
    { product: 1, detail: data },
    {
      headers,
    }
  );
    localStorage.setItem(
      "product_details",
      JSON.stringify(response.data.productDetail)
    );
    navigate("/add-product/detailed-information/product-preview");
  }
  catch(error){
  console.log({"error":error})
  }
}


  return (
    <div className="paye-layout">
      <PageList />
      <div className="content-layout">
      
        <Navbar />
        <section className="product-screen">
          <div className="border-white-2 bdrs10 main-shadow block-widget product-screen__form">
            <form action="" className="holograf-form">
              <div className="row g-4">
                <div className="col-12 col-lg-12">
                  <div className="form-group">
                    <div>
                      <h3 className="fz20 mb-1 fw700">Detail Information.</h3>
                      <p className="fz16 mb-3">
                        Tell us about your product in detail like, package
                        detail, product ingredients, side effect or others...
                      </p>
                    </div>
                    <div className="fz14 ckeditorSection">
                      <div id="editorTnc"></div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <DetailedInformation handleSubmit={handleSubmit} />
        </section>
      </div>
      <BottomNavbar />
    </div>
  );
}
