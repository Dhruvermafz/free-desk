import React from "react";

const ProfileHero = () => {
  return (
    <section className="hero-area bg-white shadow-sm overflow-hidden pt-60px">
      <span className="stroke-shape stroke-shape-1"></span>
      <span className="stroke-shape stroke-shape-2"></span>
      <span className="stroke-shape stroke-shape-3"></span>
      <span className="stroke-shape stroke-shape-4"></span>
      <span className="stroke-shape stroke-shape-5"></span>
      <span className="stroke-shape stroke-shape-6"></span>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="hero-content">
              <div className="media media-card align-items-center shadow-none p-0 mb-0 rounded-0 bg-transparent">
                <div className="media-img media--img">
                  <img src="images/img4.jpg" alt="avatar" />
                </div>
                <div className="media-body">
                  <h5>Arden Smith</h5>
                  <small className="meta d-block lh-20 pb-2">
                    <span>United States, member since 11 years ago</span>
                  </small>
                  <div className="stats fs-14 fw-medium d-flex align-items-center lh-18">
                    <span className="text-black pe-2" title="Reputation">
                      224,110
                    </span>
                    <span
                      className="pe-2 d-inline-flex align-items-center"
                      title="Gold"
                    >
                      <span className="ball ms-1 gold"></span>16
                    </span>
                    <span
                      className="pe-2 d-inline-flex align-items-center"
                      title="Silver"
                    >
                      <span className="ball ms-1 silver"></span>93
                    </span>
                    <span
                      className="pe-2 d-inline-flex align-items-center"
                      title="Bronze"
                    >
                      <span className="ball ms-1"></span>136
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="hero-btn-box text-end py-3">
              <a
                href="setting.html"
                className="btn theme-btn theme-btn-outline theme-btn-outline-gray"
              >
                <i className="la la-gear me-1"></i> Edit Profile
              </a>
            </div>
          </div>
          <div className="col-lg-12">
            <ul
              className="nav nav-tabs generic-tabs generic--tabs generic--tabs-2 mt-4"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="user-profile-tab"
                  data-bs-toggle="tab"
                  href="#user-profile"
                  role="tab"
                  aria-controls="user-profile"
                  aria-selected="true"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="user-activity-tab"
                  data-bs-toggle="tab"
                  href="#user-activity"
                  role="tab"
                  aria-controls="user-activity"
                  aria-selected="false"
                >
                  Activity
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
