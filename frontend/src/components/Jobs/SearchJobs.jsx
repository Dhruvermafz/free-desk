import React from "react";

const SearchJobs = () => {
  return (
    <section class="question-area">
      <div class="container">
        <div class="question-main-bar pt-40px pb-40px">
          <div class="filters pb-4">
            <div class="d-flex flex-wrap align-items-center justify-content-between pb-3">
              <h3 class="fs-22 fw-medium">All Questions</h3>
              <a href="ask-question.html" class="btn theme-btn theme-btn-sm">
                Ask Question
              </a>
            </div>
            <div class="d-flex flex-wrap align-items-center justify-content-between">
              <p class="pt-1 fs-15 fw-medium lh-20">21,287 questions</p>
              <div class="filter-option-box w-10">
                <select class="form-select">
                  <option value="newest" selected="selected">
                    Newest{" "}
                  </option>
                  <option value="featured">Bountied (390)</option>
                  <option value="frequent">Frequent </option>
                  <option value="votes">Votes </option>
                  <option value="active">Active </option>
                  <option value="unanswered">Unanswered </option>
                </select>
              </div>
            </div>
          </div>
          <div class="questions-snippet border-top border-top-gray">
            <div class="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
              <div class="votes text-center votes-2">
                <div class="vote-block">
                  <span class="vote-counts d-block text-center pr-0 lh-20 fw-medium">
                    3
                  </span>
                  <span class="vote-text d-block fs-13 lh-18">votes</span>
                </div>
                <div class="answer-block answered my-2">
                  <span class="answer-counts d-block lh-20 fw-medium">3</span>
                  <span class="answer-text d-block fs-13 lh-18">answers</span>
                </div>
                <div class="view-block">
                  <span class="view-counts d-block lh-20 fw-medium">12</span>
                  <span class="view-text d-block fs-13 lh-18">views</span>
                </div>
              </div>
              <div class="media-body">
                <h5 class="mb-2 fw-medium">
                  <a href="question-details.html">
                    Bootstrap select pass value with disabled
                  </a>
                </h5>
                <p class="mb-2 truncate lh-20 fs-15">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div class="tags">
                  <a href="#" class="tag-link">
                    javascript
                  </a>
                  <a href="#" class="tag-link">
                    bootstrap-4
                  </a>
                  <a href="#" class="tag-link">
                    jquery
                  </a>
                  <a href="#" class="tag-link">
                    select
                  </a>
                </div>
                <div class="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
                  <a href="user-profile.html" class="media-img d-block">
                    <img src="images/img3.jpg" alt="avatar" />
                  </a>
                  <div class="media-body d-flex flex-wrap align-items-center justify-content-between">
                    <div>
                      <h5 class="pb-1">
                        <a href="user-profile.html">Arden Smith</a>
                      </h5>
                      <div class="stats fs-12 d-flex align-items-center lh-18">
                        <span class="text-black pe-2" title="Reputation score">
                          224
                        </span>
                        <span
                          class="pe-2 d-inline-flex align-items-center"
                          title="Gold badge"
                        >
                          <span class="ball gold"></span>16
                        </span>
                        <span
                          class="pe-2 d-inline-flex align-items-center"
                          title="Silver badge"
                        >
                          <span class="ball silver"></span>93
                        </span>
                        <span
                          class="pe-2 d-inline-flex align-items-center"
                          title="Bronze badge"
                        >
                          <span class="ball"></span>136
                        </span>
                      </div>
                    </div>
                    <small class="meta d-block text-end">
                      <span class="text-black d-block lh-18">asked</span>
                      <span class="d-block lh-18 fs-12">6 hours ago</span>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pager pt-30px px-3">
            <nav aria-label="Page navigation example">
              <ul class="pagination generic-pagination pe-1">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i class="la la-arrow-left"></i>
                    </span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    4
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i class="la la-arrow-right"></i>
                    </span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
            <p class="fs-13 pt-2">Showing 1-10 results of 50,577 questions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchJobs;
