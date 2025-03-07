import React from "react";

const SettingsHero = () => {
  return (
    <section class="hero-area bg-white shadow-sm overflow-hidden pt-60px">
      <span class="stroke-shape stroke-shape-1"></span>
      <span class="stroke-shape stroke-shape-2"></span>
      <span class="stroke-shape stroke-shape-3"></span>
      <span class="stroke-shape stroke-shape-4"></span>
      <span class="stroke-shape stroke-shape-5"></span>
      <span class="stroke-shape stroke-shape-6"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="hero-content d-flex align-items-center">
              <div class="icon-element shadow-sm flex-shrink-0 me-3 border border-gray lh-55">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32px"
                  viewBox="0 0 24 24"
                  width="32px"
                  fill="#2d86eb"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                </svg>
              </div>
              <h2 class="section-title fs-30">Settings</h2>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="hero-btn-box text-end py-3">
              <a
                href="user-profile.html"
                class="btn theme-btn theme-btn-outline theme-btn-outline-gray"
              >
                <i class="la la-user me-1"></i>View Profile
              </a>
            </div>
          </div>
        </div>
        <ul
          class="nav nav-tabs generic-tabs generic--tabs generic--tabs-2 mt-4"
          id="myTab"
          role="tablist"
        >
          <li class="nav-item">
            <a
              class="nav-link active"
              id="edit-profile-tab"
              data-bs-toggle="tab"
              href="#edit-profile"
              role="tab"
              aria-controls="edit-profile"
              aria-selected="true"
            >
              Edit Profile
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="change-password-tab"
              data-bs-toggle="tab"
              href="#change-password"
              role="tab"
              aria-controls="change-password"
              aria-selected="false"
            >
              Change Password
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="email-settings-tab"
              data-bs-toggle="tab"
              href="#email-settings"
              role="tab"
              aria-controls="email-settings"
              aria-selected="false"
            >
              Email Settings
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="privacy-tab"
              data-bs-toggle="tab"
              href="#privacy"
              role="tab"
              aria-controls="privacy"
              aria-selected="false"
            >
              Privacy
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="delete-account-tab"
              data-bs-toggle="tab"
              href="#delete-account"
              role="tab"
              aria-controls="delete-account"
              aria-selected="false"
            >
              Delete Account
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SettingsHero;
