import React, { useEffect, useState } from "react";
import userDp from "../assets/images/user-dp.png";
import iconSearch from "../assets/images/icons/icon-search.svg";
import iconCog from "../assets/images/icons/icon-cog.svg";
import iconNotify from "../assets/images/icons/icon-notify.svg";
import iconLogout from "../assets/images/icons/icon-logout.svg";
import { GET_ALL_REQUEST, APPROVE_OWNERSHIP } from "../services/Api";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const headers = {
  Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
  "Content-Type": "application/json",
};
export default function Navbar() {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [requestArr, setRequestArr] = useState([]);
  const [requestedUser, setRequestedUser] = useState(null);

  useEffect(() => {
    getAllRequests();
  }, []);

  const getAllRequests = async () => {
    try {
      let res = await axios.get(`${GET_ALL_REQUEST}`, { headers });
      setRequestArr(res.data.requests);
    } catch (err) {
      console.log({ Error: err });
    }
  };

  const toggleNotification = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };

  const handleApproveRequest = async (id) => {
    try {
      let res = await axios.post(
        `${APPROVE_OWNERSHIP}`,
        { request_id: id },
        { headers }
      );
      if (res.data) {
        toast.success("Ownership Approved...!", {
          position: toast.POSITION.TOP_CENTER,
        });
        getAllRequests();
      }
    } catch (err) {
      console.log({ Error: err });
    }
  };

  return (
    <header className="page-header">
      <div className="page-header__user-info">
        <div className="rounded-circle user-img">
          <span className="rounded-circle">
            <img src={userDp} alt="User Image - Holograf" />
          </span>
        </div>
        <div className="user-detail">
          <div className="user-detail__name">
            <div className="fz30 fw600">Jeromin Willson</div>
            <div className="dp-points">
              <div className="position-relative font-secondary fz20 fw400 num">
                <span className="gradientText--radial">300</span>
              </div>
              <span className="fz14 fw500 text-uppercase">points</span>
            </div>
          </div>
          <div className="fz20 lh1-2 grayText dp-email">
            jermonwillson@example.com
          </div>
        </div>
      </div>
      <div className="page-header__other-options">
        <div className="position-relative form-group form-group--search">
          <button className="position-absolute icon-wrap">
            <img src={iconSearch} alt="" />
          </button>
          <input
            type="text"
            class="fz14 border-white-2 form-control"
            placeholder="Search anything..."
          />
        </div>
        <button className="btn btn-fab btn-fab--green">
          <img src={iconCog} alt="" />
        </button>
        <button
          id="notificationButton"
          onClick={toggleNotification}
          className="btn btn-fab btn-fab--blue d-none d-md-inline-flex notification-content"
        >
          <img src={iconNotify} alt="" />
        </button>
        {isNotificationVisible && (
          <div id="notificationPanel" className="notification-panel">
            <button
              className="NotificationcloseButton"
              onClick={toggleNotification}
            >
              Close
            </button>
            <h5>All Requests Here</h5>
            {requestArr.length ? (
              <table className="NotificatiionTable">
                <thead>
                  <tr>
                    <th>Product Id</th>
                    <th>Request Date</th>
                    <th>Request From</th>
                    <th>Email Id</th>
                    <th>Approve</th>
                    <th>Reject</th>
                  </tr>
                </thead>
                <tbody>
                  {requestArr.map((user, index) => (
                    <tr key={index}>
                      <td>{user.product}</td>
                      <td>{user.request_date}</td>
                      <td>{user.new_owner.fullname}</td>
                      <td>{user.new_owner.email}</td>
                      <td>
                        <button
                          className="approvebtn"
                          onClick={() => handleApproveRequest(user.id)}
                        >
                          Approve
                        </button>
                      </td>
                      <td>
                        <button className="rejectbtn">Reject</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No Pending Request...!</p>
            )}
          </div>
        )}

        <button className="btn btn-fab btn-fab--pink">
          <img src={iconLogout} alt="" />
        </button>
      </div>
    </header>
  );
}
