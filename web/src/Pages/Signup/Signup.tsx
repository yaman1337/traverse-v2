import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// signup assets
import SignupArt from "./signup-art.svg";
import "./Signup.css";

// arco-design components
import { Spin, Typography } from "@arco-design/web-react";
import { account } from "../../lib/appwrite";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [name, setFullName] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
    setLoading(true)
    try {
      await account.create(username, email, password, name);
      navigate("/login");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <div className="signup-form-main-wrapper">
        <div className="img-container">
          <img src={SignupArt} alt="signup art" />
        </div>
        <div className="signup-form-container">
          <div className="signup-form">
            <Typography.Text
              type="primary"
              className="my-3"
              style={{ fontSize: 22 }}
              bold
            >
              Explore further. Signup now.
            </Typography.Text>

            <input
              type="text"
              value={name}
              onChange={(e) => setFullName(e.target.value)}
              className="input-fullname"
              placeholder="Full name"
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="input-username"
              placeholder="Username"
            />
            <input
              type="text"
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
                onClick={handleSignup}
                type="submit"
                className="submit-btn mb-3"
              >
                Sign Up
              </button>
            </Spin>
          </div>
          <div className="login-div">
            <p>
              Already have an account?{" "}
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
