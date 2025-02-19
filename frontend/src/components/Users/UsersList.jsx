import React from "react";
import Pagination from "../Common/Pagination";
const UsersList = () => {
  return (
    <section class="question-area pt-40px pb-40px">
      <div class="container">
        <div class="filters pb-3">
          <div class="d-flex flex-wrap align-items-center justify-content-between pb-3">
            <h3 class="fs-22 fw-medium">Users</h3>
            <a href="ask-question.html" class="btn theme-btn theme-btn-sm">
              Ask Question
            </a>
          </div>
          <div class="d-flex flex-wrap align-items-center justify-content-between">
            <form method="post" class="me-3 w-25">
              <div class="form-group">
                <input
                  class="form-control form--control form-control-sm h-auto lh-34"
                  type="text"
                  name="search"
                  placeholder="Filter by user"
                />
                <button class="form-btn" type="button">
                  <i class="la la-search"></i>
                </button>
              </div>
            </form>
            <div class="btn-group btn--group mb-3">
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio1"
                checked
              />
              <label class="btn btn-outline-primary" for="btnradio1">
                Reputation
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio2"
              />
              <label class="btn btn-outline-primary" for="btnradio2">
                New users
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio3"
              />
              <label class="btn btn-outline-primary" for="btnradio3">
                Votes
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio4"
              />
              <label class="btn btn-outline-primary" for="btnradio4">
                Editors
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio5"
              />
              <label class="btn btn-outline-primary" for="btnradio5">
                Moderators
              </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 responsive-column-half">
            <div class="media media-card p-3">
              <a
                href="user-profile.html"
                class="media-img d-inline-block flex-shrink-0"
              >
                <img src="images/company-logo.png" alt="company logo" />
              </a>
              <div class="media-body">
                <h5 class="fs-16 fw-medium">
                  <a href="user-profile.html">Sector labs</a>
                </h5>
                <small class="meta d-block lh-24 pb-1">
                  <span>New York, United States</span>
                </small>
                <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
              </div>
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default UsersList;
