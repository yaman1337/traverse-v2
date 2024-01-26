"use client"

import { Typography } from "antd";
const { Title, Text  } = Typography;
import PaymentMethod from "./paymentMethod.svg"

import "./Footer.style.css"

const url = "";

export default function Footer() {
    return (
        <footer className="footer-distributed" id="traverse-footer">
          <div className="footer-inside">
            <div className="footer-center">
              <div className="footer-center-wrapper">
                <div className="newsletter">
                  <Title level={3}>Newsletter</Title>
                    <Text 
                    style={{fontSize: 14}}
                    type="secondary">
                    Join our newsletter for more awesome places to visit on your next trip
                    </Text>
                    <div className="input-wrapper">
                        <input type="text" placeholder="Email" />
                        <button type="submit"><i className="bi bi-send"></i></button>
                    </div>
                </div>
    
                <div>
                  <span>Home</span>
                    <ul>
                        <li><a href="/">Tarverse</a></li>
                        <li><a href="/favourites">Favourites</a></li>
                        <li><a href="/shareTrip">Share Trip</a></li>
                        <li><a href="/contribute">Contribute</a></li>
                    </ul>
                </div>
    
                <div>
                  <span>Profile</span>
                    <ul>
                        <li><a href="/dashboard">Dashbaord</a></li>
                        <li><a href="/changePassword">Change Password</a></li>
                        <li><a href="/reviews">My Reviews</a></li>
                    </ul>
                </div>
              </div>
            </div>
    
            <div className="footer-right">
              <span>About us</span>
              <p className="footer-company-about">
              Welcome to Traverse! 
              We are dedicated to providing seamless and delightful travel experiences. 
              Discover hidden gems and embark on stress-free exploration with our trusted travel companion. 
              Join us today and unlock the secrets to unforgettable and hassle-free journeys.
              </p>
              <div className="footer-icons">
                <a href={url} data-toggle="tooltip" title="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook icons" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                  </svg>
                </a>
                <a href={url} data-toggle="tooltip" title="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icons bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                  </svg>
                </a>
                <a href={url} data-toggle="tooltip" title="Linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icons bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                  </svg>
                </a>
                <a href={url} data-toggle="tooltip" title="Github">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icons bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div>
              <button data-toggle="tooltip" title="Location">
                <i className="bi bi-geo-alt"></i>
              </button>
              <p>
                <span>Thapathali</span> Kathmandu, Nepal
              </p>
            </div>
            <div>
              <button data-toggle="tooltip" title="Contact">
                <i className="bi bi-telephone"></i>
              </button>
              <p>+977 9827314543</p>
            </div>
            <div>
              <button data-toggle="tooltip" title="E-mail">
                <i className="bi bi-envelope"></i>
              </button>
              <p>
                <a href="mailto:contact@traverse.com.np">contact@traverse.com.np</a>
              </p>
            </div>
            <div>
              <p className="footer-company-name">Traverse &copy; 2023</p>
            </div>
            <div className="payment-method">
              <img src={PaymentMethod} alt="payment method" />
            </div>
          </div>
        </footer>
      );
}
