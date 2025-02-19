import React from "react";
import logo from "../../img/white_logog_bg.png";
const Footer = () => {
  return (
    <section class="footer-area pt-80px bg-dark position-relative">
      <span class="vertical-bar-shape vertical-bar-shape-1"></span>
      <span class="vertical-bar-shape vertical-bar-shape-2"></span>
      <span class="vertical-bar-shape vertical-bar-shape-3"></span>
      <span class="vertical-bar-shape vertical-bar-shape-4"></span>

      <div class="container">
        <div class="row align-items-center pb-4 copyright-wrap">
          <div class="col-lg-6">
            <a href="index.html" class="d-inline-block">
              <img
                src={logo}
                style={{ width: "30%" }}
                alt="footer logo"
                class="footer-logo"
              />
            </a>
          </div>
          <div class="col-lg-6">
            <p class="copyright-desc text-end fs-14">
              Copyright &copy; <span id="copyright-date"></span>{" "}
              <a href="https://dhruvermafz.vercel.app/">Dhruv Verma</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
