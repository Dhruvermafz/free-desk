import React from "react";
import SettingsHero from "./SettingsHero";

const SettingsTabs = () => {
  return (
    <>
      <SettingsHero />
      <section class="user-details-area pt-40px pb-40px">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <div class="tab-content mb-50px" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="edit-profile"
                  role="tabpanel"
                  aria-labelledby="edit-profile-tab"
                >
                  <div class="user-panel-main-bar">
                    <div class="user-panel">
                      <div class="bg-gray p-3 rounded-rounded">
                        <h3 class="fs-17">Edit your profile</h3>
                      </div>
                      <form method="post" class="pt-35px">
                        <div class="settings-item mb-10px">
                          <h4 class="fs-14 pb-2 text-gray text-uppercase">
                            Public information
                          </h4>
                          <div class="divider">
                            <span></span>
                          </div>
                          <div class="row pt-4 align-items-center">
                            <div class="col-lg-6">
                              <div class="edit-profile-photo d-flex flex-wrap align-items-center">
                                <img
                                  src="images/team.jpg"
                                  alt="user avatar"
                                  class="profile-img me-4"
                                />
                                <div>
                                  <div class="file-upload-wrap file--upload-wrap">
                                    <input
                                      type="file"
                                      name="files[]"
                                      class="multi file-upload-input"
                                      multiple
                                    />
                                    <span class="file-upload-text">
                                      <i class="la la-photo me-2"></i>Upload
                                      Photo
                                    </span>
                                  </div>
                                  <p class="fs-14">Maximum file size: 10 MB.</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="input-box">
                                <label class="fs-13 text-black lh-20 fw-medium">
                                  Display name
                                </label>
                                <div class="form-group">
                                  <input
                                    class="form-control form--control"
                                    type="text"
                                    name="text"
                                    value="Arden Smith"
                                  />
                                </div>
                              </div>
                              <div class="input-box">
                                <label class="fs-13 text-black lh-20 fw-medium">
                                  Location
                                </label>
                                <div class="form-group">
                                  <input
                                    class="form-control form--control"
                                    type="text"
                                    name="text"
                                    value="United States"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="input-box">
                                <label class="fs-15 text-black lh-20 fw-medium">
                                  About me
                                </label>
                                <div class="form-group">
                                  <textarea
                                    class="form-control form--control user-text-editor"
                                    rows="10"
                                    cols="40"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="settings-item">
                          <h4 class="fs-14 pb-2 text-gray text-uppercase">
                            Web presence
                          </h4>
                          <div class="divider">
                            <span></span>
                          </div>
                          <div class="row pt-4">
                            <div class="col-lg-6">
                              <div class="input-box">
                                <label class="fs-13 text-black lh-20 fw-medium">
                                  Website link
                                </label>
                                <div class="form-group">
                                  <input
                                    class="form-control form--control pl-40px"
                                    type="text"
                                    name="text"
                                  />
                                  <span class="la la-link input-icon"></span>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="input-box">
                                <label class="fs-13 text-black lh-20 fw-medium">
                                  Twitter link
                                </label>
                                <div class="form-group">
                                  <input
                                    class="form-control form--control pl-40px"
                                    type="text"
                                    name="text"
                                  />
                                  <span class="la la-twitter input-icon"></span>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="input-box">
                                <label class="fs-13 text-black lh-20 fw-medium">
                                  Facebook link
                                </label>
                                <div class="form-group">
                                  <input
                                    class="form-control form--control pl-40px"
                                    type="text"
                                    name="text"
                                  />
                                  <span class="la la-facebook input-icon"></span>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="input-box">
                                <label class="fs-13 text-black lh-20 fw-medium">
                                  Instagram link
                                </label>
                                <div class="form-group">
                                  <input
                                    class="form-control form--control pl-40px"
                                    type="text"
                                    name="text"
                                  />
                                  <span class="la la-instagram input-icon"></span>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="input-box">
                                <label class="fs-13 text-black lh-20 fw-medium">
                                  Youtube link
                                </label>
                                <div class="form-group">
                                  <input
                                    class="form-control form--control pl-40px"
                                    type="text"
                                    name="text"
                                  />
                                  <span class="la la-youtube input-icon"></span>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6">
                              <div class="input-box">
                                <label class="fs-13 text-black lh-20 fw-medium">
                                  Vimeo link
                                </label>
                                <div class="form-group">
                                  <input
                                    class="form-control form--control pl-40px"
                                    type="text"
                                    name="text"
                                  />
                                  <span class="la la-vimeo input-icon"></span>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="input-box">
                                <label class="fs-13 text-black lh-20 fw-medium">
                                  GitHub link
                                </label>
                                <div class="form-group">
                                  <input
                                    class="form-control form--control pl-40px"
                                    type="text"
                                    name="text"
                                  />
                                  <span class="la la-github input-icon"></span>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="submit-btn-box pt-3">
                                <button class="btn theme-btn" type="button">
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="change-password"
                  role="tabpanel"
                  aria-labelledby="change-password-tab"
                >
                  <div class="user-panel-main-bar">
                    <div class="user-panel">
                      <div class="bg-gray p-3 rounded-rounded">
                        <h3 class="fs-17">Change password</h3>
                      </div>
                      <form method="post" class="pt-20px">
                        <div class="settings-item mb-30px">
                          <div class="form-group">
                            <label class="fs-13 text-black lh-20 fw-medium">
                              Current Password
                            </label>
                            <input
                              class="form-control form--control password-field"
                              type="password"
                              name="password"
                              placeholder="Current password"
                            />
                          </div>
                          <div class="form-group">
                            <label class="fs-13 text-black lh-20 fw-medium">
                              New Password
                            </label>
                            <input
                              class="form-control form--control password-field"
                              type="password"
                              name="password"
                              placeholder="New password"
                            />
                          </div>
                          <div class="form-group">
                            <label class="fs-13 text-black lh-20 fw-medium">
                              New Password (again)
                            </label>
                            <input
                              class="form-control form--control password-field"
                              type="password"
                              name="password"
                              placeholder="New password again"
                            />
                            <p class="fs-14 lh-18 py-2">
                              Passwords must contain at least eight characters,
                              including at least 1 letter and 1 number.
                            </p>
                            <button
                              class="btn theme-btn-outline theme-btn-outline-gray toggle-password"
                              type="button"
                              data-bs-toggle="tooltip"
                              data-placement="right"
                              title="Show/hide password"
                            >
                              <svg
                                class="eye-on"
                                xmlns="http://www.w3.org/2000/svg"
                                height="22px"
                                viewBox="0 0 24 24"
                                width="22px"
                                fill="currentColor"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
                              </svg>
                              <svg
                                class="eye-off"
                                xmlns="http://www.w3.org/2000/svg"
                                height="22px"
                                viewBox="0 0 24 24"
                                width="22px"
                                fill="currentColor"
                              >
                                <path
                                  d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                                  fill="none"
                                />
                                <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
                              </svg>
                            </button>
                          </div>
                          <div class="submit-btn-box pt-3">
                            <button class="btn theme-btn" type="button">
                              Change Password
                            </button>
                          </div>
                        </div>
                        <div class="border border-gray p-4">
                          <h4 class="fs-18 mb-2">Forgot your password</h4>
                          <p class="pb-3">
                            Don't worry it's happen with everyone. We'll help
                            you to get back your password
                          </p>
                          <a
                            href="recover-password.html"
                            class="btn theme-btn theme-btn-sm theme-btn-white"
                          >
                            Recover Password{" "}
                            <i class="la la-arrow-right ms-1"></i>
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="email-settings"
                  role="tabpanel"
                  aria-labelledby="email-settings-tab"
                >
                  <div class="user-panel-main-bar">
                    <div class="user-panel">
                      <div class="bg-gray p-3 rounded-rounded">
                        <h3 class="fs-17">Email Settings</h3>
                      </div>
                      <form method="post" class="pt-20px">
                        <div class="settings-item mb-30px border-bottom border-bottom-gray pb-30px">
                          <label class="fs-13 text-black lh-20 fw-medium mb-2">
                            Email Address
                          </label>
                          <div class="input-group">
                            <input
                              class="form-control form--control"
                              type="email"
                              name="email"
                              value="ardensmith81@gmail.com"
                            />
                            <span class="input-group-text">
                              <span class="input-group-button">Save</span>
                            </span>
                          </div>
                        </div>
                        <div class="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                          <div class="input-box">
                            <label class="fs-14 text-black lh-20 fw-medium mb-0">
                              Features & Announcements
                            </label>
                            <span class="fs-13 d-block lh-18 pb-3">
                              New products and feature updates, as well as
                              occasional company announcements
                            </span>
                            <div class="form-group">
                              <div class="btn-group">
                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio"
                                  id="btnradio1"
                                  checked
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="btnradio1"
                                >
                                  Off
                                </label>

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio"
                                  id="btnradio2"
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="btnradio2"
                                >
                                  On
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                          <div class="input-box">
                            <label class="fs-14 text-black lh-20 fw-medium mb-0">
                              The Disilab
                            </label>
                            <span class="fs-13 d-block lh-18 pb-3">
                              An email rounding up the best news, entertainment,
                              and culture from the world of software development
                            </span>
                            <div class="form-group">
                              <div class="btn-group">
                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio1"
                                  id="btnradioemail1"
                                  checked
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="btnradioemail1"
                                >
                                  Off
                                </label>

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio1"
                                  id="btnradioemail2"
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="btnradioemail2"
                                >
                                  On
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                          <div class="input-box">
                            <label class="fs-14 text-black lh-20 fw-medium mb-0">
                              Tips & Reminders
                            </label>
                            <span class="fs-13 d-block lh-18 pb-3">
                              Timely advice and reminders to help you make the
                              most of our features
                            </span>
                            <div class="form-group">
                              <div class="btn-group">
                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio2"
                                  id="tipradio1"
                                  checked
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="tipradio1"
                                >
                                  Off
                                </label>

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio2"
                                  id="tipradio2"
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="tipradio2"
                                >
                                  On
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                          <div class="input-box">
                            <label class="fs-14 text-black lh-20 fw-medium mb-0">
                              Inbox
                            </label>
                            <span class="fs-13 d-block lh-18 pb-3">
                              Answers to your questions, comments, chat
                              notifications, and more
                            </span>
                            <div class="form-group">
                              <div class="btn-group">
                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio3"
                                  id="inboxradio1"
                                  checked
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="inboxradio1"
                                >
                                  Off
                                </label>

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio3"
                                  id="inboxradio2"
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="inboxradio2"
                                >
                                  Weekly
                                </label>

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio3"
                                  id="inboxradio3"
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="inboxradio3"
                                >
                                  Daily
                                </label>

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio3"
                                  id="inboxradio4"
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="inboxradio4"
                                >
                                  3 hrs
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                          <div class="input-box">
                            <label class="fs-14 text-black lh-20 fw-medium mb-0">
                              Community Milestones
                            </label>
                            <span class="fs-13 d-block lh-18 pb-3">
                              Notifications about bounties, reputation and more.
                              Hint: sometimes involves swag.
                            </span>
                            <div class="form-group">
                              <div class="btn-group">
                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio4"
                                  id="community1"
                                  checked
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="community1"
                                >
                                  Off
                                </label>

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio4"
                                  id="community2"
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="community2"
                                >
                                  On
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                          <div class="input-box">
                            <label class="fs-14 text-black lh-20 fw-medium mb-0">
                              Research
                            </label>
                            <span class="fs-13 d-block lh-18 pb-3">
                              Invitations to participate in surveys, usability
                              tests, and more. Only a few per year.
                            </span>
                            <div class="form-group">
                              <div class="btn-group">
                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio5"
                                  id="research1"
                                  checked
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="research1"
                                >
                                  Off
                                </label>

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio5"
                                  id="research2"
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="research2"
                                >
                                  On
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="settings-item mb-20px border-bottom border-bottom-gray pb-20px">
                          <div class="input-box">
                            <label class="fs-14 text-black lh-20 fw-medium mb-0">
                              Recommended Jobs
                            </label>
                            <span class="fs-13 d-block lh-18 pb-3">
                              Occasional emails highlighting special jobs and
                              companies
                            </span>
                            <div class="form-group">
                              <div class="btn-group">
                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio6"
                                  id="jobalert1"
                                  checked
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="jobalert1"
                                >
                                  Off
                                </label>

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio6"
                                  id="jobalert2"
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="jobalert2"
                                >
                                  On
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="settings-item">
                          <div class="input-box">
                            <label class="fs-14 text-black lh-20 fw-medium mb-0">
                              Company Alerts
                            </label>
                            <span class="fs-13 d-block lh-18 pb-3">
                              Content from companies you follow
                            </span>
                            <div class="form-group">
                              <div class="btn-group">
                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio7"
                                  id="companyalert1"
                                  checked
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="companyalert1"
                                >
                                  Off
                                </label>

                                <input
                                  type="radio"
                                  class="btn-check"
                                  name="btnradio7"
                                  id="companyalert2"
                                />
                                <label
                                  class="btn btn-outline-primary"
                                  for="companyalert2"
                                >
                                  Weekly
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="privacy"
                  role="tabpanel"
                  aria-labelledby="privacy-tab"
                >
                  <div class="user-panel-main-bar">
                    <div class="user-panel">
                      <div class="bg-gray p-3 rounded-rounded">
                        <h3 class="fs-17">Privacy Settings</h3>
                        <p class="fs-13">
                          Select who may see your profile details
                        </p>
                      </div>
                      <form method="post" class="pt-20px">
                        <div class="settings-item">
                          <div class="input-box">
                            <label class="fs-13 text-black lh-20 fw-medium">
                              Profile Picture
                            </label>
                            <div class="form-group">
                              <select class="form-select">
                                <option selected="selected" value="public">
                                  Public
                                </option>
                                <option value="followers">Followers</option>
                                <option value="me">Only me</option>
                              </select>
                            </div>
                          </div>
                          <div class="input-box">
                            <label class="fs-13 text-black lh-20 fw-medium">
                              Email
                            </label>
                            <div class="form-group">
                              <select class="form-select">
                                <option selected="selected" value="public">
                                  Public
                                </option>
                                <option value="followers">Followers</option>
                                <option value="me">Only me</option>
                              </select>
                            </div>
                          </div>
                          <div class="input-box">
                            <label class="fs-13 text-black lh-20 fw-medium">
                              Country
                            </label>
                            <div class="form-group">
                              <select class="form-select">
                                <option selected="selected" value="public">
                                  Public
                                </option>
                                <option value="followers">Followers</option>
                                <option value="me">Only me</option>
                              </select>
                            </div>
                          </div>
                          <div class="input-box">
                            <label class="fs-13 text-black lh-20 fw-medium">
                              Biography
                            </label>
                            <div class="form-group">
                              <select class="form-select">
                                <option selected="selected" value="public">
                                  Public
                                </option>
                                <option value="followers">Followers</option>
                                <option value="me">Only me</option>
                              </select>
                            </div>
                          </div>
                          <div class="input-box">
                            <label class="fs-13 text-black lh-20 fw-medium">
                              Social links
                            </label>
                            <div class="form-group">
                              <select class="form-select">
                                <option selected="selected" value="public">
                                  Public
                                </option>
                                <option value="followers">Followers</option>
                                <option value="me">Only me</option>
                              </select>
                            </div>
                          </div>
                          <div class="submit-btn-box pt-3">
                            <button class="btn theme-btn" type="button">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="delete-account"
                  role="tabpanel"
                  aria-labelledby="delete-account-tab"
                >
                  <div class="user-panel-main-bar">
                    <div class="user-panel">
                      <div class="delete-account-info card card-item border border-danger">
                        <div class="card-body">
                          <h3 class="fs-22 text-danger fw-bold">
                            Delete Account
                          </h3>
                          <p class="pb-3 pt-2 lh-22 fs-15">
                            Before confirming that you would like your profile
                            deleted, we'd like to take a moment to explain the
                            implications of deletion:
                          </p>
                          <ul class="generic-list-item generic-list-item-bullet fs-15">
                            <li>
                              Deletion is irreversible, and you will have no way
                              to regain any of your original content, should
                              this deletion be carried out and you change your
                              mind later on.
                            </li>
                            <li>
                              Your questions and answers will remain on the
                              site, but will be disassociated and anonymized
                              (the author will be listed as "user15319675") and
                              will not indicate your authorship even if you
                              later return to the site.
                            </li>
                          </ul>
                          <p class="pb-3 pt-2 lh-22 fs-15">
                            Once you delete your account, there is no going
                            back. Please be certain.
                          </p>
                          <div class="form-check mb-4">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="delete-terms"
                            />
                            <label class="form-check-label" for="delete-terms">
                              I have read the information stated above and
                              understand the implications of having my profile
                              deleted. I wish to proceed with the deletion of my
                              profile.
                            </label>
                          </div>

                          <button
                            type="button"
                            class="btn btn-danger fw-medium"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModal"
                            id="delete-button"
                            disabled
                          >
                            <i class="la la-trash me-1"></i> Delete your account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SettingsTabs;
