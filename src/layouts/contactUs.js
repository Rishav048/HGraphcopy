import React, { useEffect, useState } from "react";
// import holographicSquare from '../assets/images/holographic-image-square.svg'
import camera from "../assets/images/icons/icon-camera.svg";

export default function ContactUs() {
  const [profileImage, setProfileImage] = useState(null);
  const [emailId, setEmailId] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("profileImage");
    if (storedData) {
      setProfileImage(storedData);
    }
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedData = JSON.parse(userData);
      setEmailId(parsedData?.email);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="block-wavy-dark product-screen__graphics activities-screen-graphics profile-block-content">
      <div className="dark-block-content">
        <div className="profile-right-wrapper">
          <div className="user-img-upload">
            <input type="file" onChange={handleImageUpload} />
            <div className="user-dp">
              <div className="user-dp__inner">
                {profileImage && (
                  <img src={profileImage} alt="User Image - Holograf" />
                )}
              </div>
            </div>
            <button className="btn btn-fab btn-fab--green">
              <img src={camera} alt="" />
            </button>
          </div>
          <div className="user-name">
            <h3 className="fw600 mb-0 fz30 gradientText--radial">
              Welcome User!
            </h3>
            <p className="mb-0 fz20 grayText fw400">{emailId ? emailId : ""}</p>
          </div>
        </div>

        <div className="profile-info">
          <div className="info-row">
            <div className="user-info-content">
              <h3 className="fw600 fz18 lh1-5 mb-1 gradientText--radial text-uppercase">
                Contact us
              </h3>
              <p className="fw400 fz16 m-0 text-white">
                Call us : 1800 137 0011
              </p>
            </div>
            <div className="user-info-content">
              <h3 className="fw600 fz18 lh1-5 mb-1 gradientText--radial text-uppercase">
                Email us
              </h3>
              <p className="fw400 fz16 m-0 text-white">info@hologafs.com</p>
            </div>
          </div>
          <div className="info-row">
            <div className="user-info-content">
              <h3 className="fw600 fz18 lh1-5 mb-1 gradientText--radial text-uppercase">
                Find us
              </h3>
              <p className="fw400 fz16 m-0 text-white">
                2nd floor plot no, 254, Phase IV, Udyog Vihar, Sector 18,
                Gurugram
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
