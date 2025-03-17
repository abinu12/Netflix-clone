import React from "react";
import { FacebookOutlined, Instagram, YouTube } from "@mui/icons-material";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        {/* Social Media Icons */}
        <div className="footer_icons">
          <FacebookOutlined />
          <Instagram />
          <YouTube />
        </div>
        <div></div>
        {/* Footer Links */}
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preference</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Service Code Section */}
        <div className="service_code">
          <p>Service Code</p>
        </div>

        {/* Copyright */}
        <div className="copy-write">&copy; 1997-2024 Netflix, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
