import React from "react";

const ApplicationHero = () => {
  return (
    <section class="hero-area bg-white pt-50px pb-10px">
      <span class="stroke-shape stroke-shape-1"></span>
      <span class="stroke-shape stroke-shape-2"></span>
      <span class="stroke-shape stroke-shape-3"></span>
      <span class="stroke-shape stroke-shape-4"></span>
      <span class="stroke-shape stroke-shape-5"></span>
      <span class="stroke-shape stroke-shape-6"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="hero-content">
              <div class="media media-card align-items-center shadow-none p-0 mb-0 rounded-0">
                <div class="media-img media--img">
                  <img src="images/company-logo2.png" alt="avatar" />
                </div>
                <div class="media-body">
                  <h5 class="fs-24">Canva Labs</h5>
                  <p class="pt-2 lh-20">Love your work. Create an impact.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="hero-btn-box text-end py-3">
              <button
                class="btn theme-btn theme-btn-sm me-2"
                type="submit"
                title="By selecting follow, you are opting in to receive an email digest from the companies you follow. Don't worry, your information isn't shared."
              >
                <i class="la la-plus me-1"></i> Follow
              </button>
              <button
                type="button"
                class="popover-trigger btn border"
                data-container="body"
                data-bs-toggle="popover"
                data-placement="bottom"
              >
                <svg
                  aria-hidden="true"
                  class="svg-icon-color-gray"
                  width="18"
                  height="18"
                >
                  <path d="M4.5 10a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM13 8.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"></path>
                </svg>
              </button>
              <div class="generic-popover d-none">
                <ul class="generic-list-item">
                  <li class="lh-18 text-black-50">
                    <a href="#">
                      <i class="la la-envelope me-1"></i> Share via email
                    </a>
                  </li>
                  <li class="lh-18 text-black-50">
                    <a href="#">
                      <i class="la la-twitter me-1"></i> Share via Twitter
                    </a>
                  </li>
                  <li class="lh-18 text-black-50">
                    <a href="#">
                      <i class="la la-facebook me-1"></i> Share via Facebook
                    </a>
                  </li>
                  <li class="lh-18 text-black-50">
                    <a href="#">
                      <i class="la la-instagram me-1"></i> Share via Instagram
                    </a>
                  </li>
                  <li class="lh-18 text-black-50 mb-0">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#reportModal"
                    >
                      <i class="la la-flag me-1"></i> Report
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationHero;
