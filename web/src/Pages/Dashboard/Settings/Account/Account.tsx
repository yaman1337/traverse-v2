

import { useState } from "react";
import "./Account.css"
import ProfileMenuCard from "./Profile Menu Card/ProfileMenuCard";

export default function Accounts() {
  // user data
  const [data, setData] = useState({
    username: "bibekshhh",
    full_name: "Bibek Shah",
    email: "bibekshah563@gmail.com"
  })

  return (
    <>
    <div className="dashboard-content about">
      <div className="content">
        <div className="profile-section">
          
          <div className="profile-content">
            <div className="change-about-section">
              <div className="input-group">
                <p className="text-muted"> Username </p>
                <input
                  type="text"
                  className="username"
                  value={data.username}
                  onChange={(e) => {
                    return e;
                  }}
                  disabled
                />

                <p className="text-muted"> Name </p>
                <input
                  type="text"
                  className="name"
                  placeholder="Enter your full name"
                  value={data.full_name}
                  onChange={(e) => {
                    return e;
                  }}
                />

                <div className="inner-input-group">
                  <div className="item">
                    <p className="text-muted"> Email </p>
                    <input
                      type="email"
                      className="email"
                      placeholder="Enter your email"
                      value={data.email}
                      onChange={(e) => {
                        return e;
                      }}
                    />
                  </div>
                </div>

                {/* <button
                  type="submit"
                  className="dashboard-form-submit-btn mt-4 flex flex-row gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy2" viewBox="0 0 16 16">
                    <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v3.5A1.5 1.5 0 0 1 11.5 6h-7A1.5 1.5 0 0 1 3 4.5V1H1.5a.5.5 0 0 0-.5.5m9.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
                  </svg> Save details
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
