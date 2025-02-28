import React from "react";
import logo from "../../img/logo_white.jpg";
import { IoMdSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { CiLogout, CiUser } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { FaSign } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header-area bg-white border-bottom border-bottom-gray">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <div className="logo-box">
              <a href="/" className="logo">
                <img src={logo} style={{ width: "50%" }} alt="logo" />
              </a>
              <div className="user-action">
                <div
                  className="search-menu-toggle icon-element icon-element-xs shadow-sm me-1"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Search"
                >
                  <IoMdSearch />
                </div>
                <div
                  className="off-canvas-menu-toggle icon-element icon-element-xs shadow-sm me-1"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Main menu"
                >
                  <FaBars />
                </div>
                <div
                  className="user-off-canvas-menu-toggle icon-element icon-element-xs shadow-sm"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="User menu"
                >
                  <CiUser />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="menu-wrapper border-left border-left-gray ps-4">
              <nav className="menu-bar me-auto"></nav>
              <form method="post" className="me-2">
                <div className="form-group mb-0">
                  <input
                    className="form-control form--control form--control-bg-gray"
                    type="text"
                    name="search"
                    placeholder="Type your search words..."
                  />
                  <button className="form-btn" type="button">
                    <IoMdSearch />
                  </button>
                </div>
              </form>
              <div className="nav-right-button">
                <ul className="user-action-wrap d-flex align-items-center">
                  <li className="dropdown">
                    <span className="ball red ball-lg noti-dot"></span>
                    <a
                      className="nav-link dropdown-toggle dropdown--toggle"
                      href="#"
                      id="notificationDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <FaBell />
                    </a>
                    <div
                      className="dropdown-menu dropdown--menu dropdown-menu-right mt-3 keep-open"
                      aria-labelledby="notificationDropdown"
                    >
                      <h6 className="dropdown-header">
                        <i className="la la-bell pe-1 fs-16"></i>Notifications
                      </h6>
                      <div className="dropdown-divider border-top-gray mb-0"></div>
                      <div className="dropdown-item-list">
                        <a className="dropdown-item" href="notifications.html">
                          <div className="media media-card media--card shadow-none mb-0 rounded-0 align-items-center bg-transparent">
                            <div className="media-img media-img-sm flex-shrink-0">
                              <img src="images/img3.jpg" alt="avatar" />
                            </div>
                            <div className="media-body p-0 border-left-0">
                              <h5 className="fs-14 fw-regular">
                                John Doe following your post
                              </h5>
                              <small className="meta d-block lh-24">
                                <span>45 secs ago</span>
                              </small>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a
                        className="dropdown-item pb-1 border-bottom-0 text-center btn-text fw-regular"
                        href="notifications.html"
                      >
                        View All Notifications{" "}
                        <i className="la la-arrow-right icon ms-1"></i>
                      </a>
                    </div>
                  </li>
                  <li className="dropdown user-dropdown">
                    <a
                      className="nav-link dropdown-toggle dropdown--toggle ps-2"
                      href="#"
                      id="userMenuDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="media media-card media--card shadow-none mb-0 rounded-0 align-items-center bg-transparent">
                        <div className="media-img media-img-xs flex-shrink-0 rounded-full me-2">
                          <img
                            src="images/img4.jpg"
                            alt="avatar"
                            className="rounded-full"
                          />
                        </div>
                        <div className="media-body p-0 border-left-0">
                          <h5 className="fs-14">Arden Smith</h5>
                        </div>
                      </div>
                    </a>
                    <div
                      className="dropdown-menu dropdown--menu dropdown-menu-right mt-3 keep-open"
                      aria-labelledby="userMenuDropdown"
                    >
                      <h6 className="dropdown-header">Hi, Arden Smith</h6>
                      <div className="dropdown-divider border-top-gray mb-0"></div>
                      <div className="dropdown-item-list">
                        <a className="dropdown-item" href="/u/:id">
                          <CiUser className="me-2" />
                          Profile
                        </a>
                        <a className="dropdown-item" href="/notifications">
                          <FaBell className="me-2" />
                          Notifications
                        </a>

                        <a className="dropdown-item" href="/settings">
                          <CiSettings className="me-2" /> Settings
                        </a>
                        <a className="dropdown-item" href="#">
                          <IoMdLogOut className="me-2" />
                          Log out
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="off-canvas-menu custom-scrollbar-styled">
        <div
          className="off-canvas-menu-close icon-element icon-element-sm shadow-sm"
          data-bs-toggle="tooltip"
          data-placement="left"
          title="Close menu"
        >
          <FaTimes />
        </div>

        <div className="off-canvas-btn-box px-4 pt-5 text-center">
          <a
            href="/login"
            className="btn theme-btn theme-btn-sm theme-btn-outline"
          >
            Login
          </a>
          <span className="fs-15 fw-medium d-inline-block mx-2">Or</span>
          <a href="/signup" className="btn theme-btn theme-btn-sm">
            Sign up
          </a>
        </div>
      </div>
      <div className="user-off-canvas-menu custom-scrollbar-styled">
        <div
          className="user-off-canvas-menu-close icon-element icon-element-sm shadow-sm"
          data-bs-toggle="tooltip"
          data-placement="left"
          title="Close menu"
        >
          <FaTimes />
        </div>
        <ul
          className="nav nav-tabs generic-tabs generic--tabs pt-90px ps-4 shadow-sm"
          id="myTab2"
          role="tablist"
        >
          <li className="nav-item">
            <div className="anim-bar"></div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              id="user-notification-menu-tab"
              data-bs-toggle="tab"
              href="#user-notification-menu"
              role="tab"
              aria-controls="user-notification-menu"
              aria-selected="true"
            >
              Notifications
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="user-profile-menu-tab"
              data-bs-toggle="tab"
              href="#user-profile-menu"
              role="tab"
              aria-controls="user-profile-menu"
              aria-selected="false"
            >
              Profile
            </a>
          </li>
        </ul>
        <div className="tab-content pt-3" id="myTabContent2">
          <div
            className="tab-pane fade show active"
            id="user-notification-menu"
            role="tabpanel"
            aria-labelledby="user-notification-menu-tab"
          >
            <div className="dropdown--menu shadow-none w-auto rounded-0">
              <div className="dropdown-item-list">
                <a className="dropdown-item" href="/notifications">
                  <div className="media media-card media--card shadow-none mb-0 rounded-0 align-items-center bg-transparent">
                    <div className="media-img media-img-sm flex-shrink-0">
                      <img src="images/img3.jpg" alt="avatar" />
                    </div>
                    <div className="media-body p-0 border-left-0">
                      <h5 className="fs-14 fw-regular">
                        John Doe following your post
                      </h5>
                      <small className="meta d-block lh-24">
                        <span>45 secs ago</span>
                      </small>
                    </div>
                  </div>
                </a>
              </div>
              <a
                className="dropdown-item border-bottom-0 text-center btn-text fw-regular"
                href="/notifications"
              >
                View All Notifications{" "}
                <i className="la la-arrow-right icon ms-1"></i>
              </a>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="user-profile-menu"
            role="tabpanel"
            aria-labelledby="user-profile-menu-tab"
          >
            <div className="dropdown--menu shadow-none w-auto rounded-0">
              <div className="dropdown-item-list">
                <a className="dropdown-item" href="user-profile.html">
                  <CiUser /> Profile
                </a>
                <a className="dropdown-item" href="notifications.html">
                  <FaBell /> Notifications
                </a>

                <a className="dropdown-item" href="setting.html">
                  <CiSettings />
                  Settings
                </a>
                <a className="dropdown-item" href="index.html">
                  <CiLogout />
                  Log out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-search-form">
        <div className="d-flex align-items-center">
          <form method="post" className="flex-grow-1 me-3">
            <div className="form-group mb-0">
              <input
                className="form-control form--control pl-40px"
                type="text"
                name="search"
                placeholder="Type your search words..."
              />
              <span className="la la-search input-icon"></span>
            </div>
          </form>
          <div className="search-bar-close icon-element icon-element-sm shadow-sm">
            <i className="la la-times"></i>
          </div>
        </div>
      </div>
      <div className="body-overlay"></div>
    </header>
  );
};

export default Header;
