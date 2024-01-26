import { Link } from "react-router-dom";

// login assets
import LoginArt from "./login-art.svg";
import "./Login.css";

// arco-design components
import { Spin, Typography } from "@arco-design/web-react";
import { useState } from "react";
import ForgetPassword from "../ForgetPassword/ForgetPassword";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false)

  return (
    <>
      <div className="login-form-main-wrapper">
        <div className="img-container">
          <img src={LoginArt} alt="login art" />
        </div>
        <div className="login-form-container">
          <div className="login-form">
            <Typography.Text 
              type="primary"
              className="my-3"
              style={{fontSize: 22}}
              bold
              >
                Login to continue..
            </Typography.Text>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-email"
              placeholder="Phone number, user or email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-password"
              placeholder="Password"
            />

            <Spin
              delay={500}
              loading={loading}
              style={{ width: "100%", color: "white", marginRight: 5 }}
            >
              <button
                style={{ width: "100%" }}
                // onClick={(e) => loginHandle(e)}
                type="submit"
                className="submit-btn"
              >
                Login
              </button>
            </Spin>

            <div className="hr-container">
              <hr className="or-hr" data-content="OR" />
            </div>

            <ForgetPassword />
          </div>
          <div className="signup-div">
            <p>
              Don't have an account? <Link style={{ textDecoration: "none", color: "black" }} to="/signup">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};