import React from "react";
import HeroJobs from "./HeroJobs";

const JobsList = () => {
  return (
    <>
      <HeroJobs />
      <section class="question-area pt-40px pb-40px">
        <div class="container">
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="jobs"
              role="tabpanel"
              aria-labelledby="jobs-tab"
            >
              <form
                method="post"
                class="search-form p-0 rounded-0 bg-transparent shadow-none position-relative z-index-1"
              >
                <div class="d-flex flex-wrap align-items-center">
                  <div class="d-flex flex-wrap align-items-center flex-grow-1">
                    <div class="form-group me-3 flex-grow-1">
                      <input
                        class="form-control form--control pl-40px"
                        type="text"
                        name="text"
                        placeholder="Search all jobs"
                      />
                      <span class="la la-search input-icon"></span>
                    </div>
                    <div class="form-group me-3 flex-grow-1">
                      <input
                        class="form-control form--control pl-40px"
                        type="text"
                        name="text"
                        placeholder="Located anywhere"
                      />
                      <span class="la la-map-marker input-icon"></span>
                      <div class="km-select-wrap">
                        <select class="form-select">
                          <option value="5">within 5 km</option>
                          <option value="10">within 10 km</option>
                          <option value="20" selected="">
                            within 20 km
                          </option>
                          <option value="50">within 50 km</option>
                          <option value="100">within 100 km</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="search-btn-box mb-3">
                    <button class="btn theme-btn">
                      Search <i class="la la-search ms-1"></i>
                    </button>
                  </div>
                </div>
                <div class="filter-btn-group d-flex flex-wrap align-items-center">
                  <div class="btn border border-gray bg-white lh-26 text-gray form-check pl-30px fs-14 d-inline-block me-2 mb-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="r"
                    />
                    <label class="form-check-label" for="r">
                      Remote
                    </label>
                  </div>
                  <div class="btn-group me-2 mb-2">
                    <button
                      class="btn border border-gray dropdown-toggle lh-26 text-gray fs-14"
                      type="button"
                      id="techDropdownMenu"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        class="me-1"
                        width="16"
                        height="16"
                        viewBox="0 0 18 18"
                        fill="currentColor"
                      >
                        <path d="M8 4.41 6.59 3l-6 6 6 6L8 13.59 3.41 9 8 4.41zm2 0L11.41 3l6 6-6 6L10 13.59 14.59 9 10 4.41z"></path>
                      </svg>
                      Tech
                    </button>
                    <div
                      class="dropdown-menu dropdown--menu dropdown--menu-2 keep-open mt-3"
                      aria-labelledby="techDropdownMenu"
                    >
                      <div class="py-3 px-4">
                        <div class="form-group mb-2">
                          <label class="fs-14 text-black fw-medium lh-18">
                            Tech you like
                            <span class="fs-13 lh-18 d-block fw-regular text-gray">
                              Add up to 5 tech tags
                            </span>
                          </label>
                          <input
                            class="input-tags"
                            type="text"
                            name="text"
                            placeholder="e.g. javascript"
                          />
                        </div>
                        <div class="form-group mb-2">
                          <label class="fs-14 text-black fw-medium lh-18">
                            Tech you dislike
                            <span class="fs-13 lh-18 d-block fw-regular text-gray">
                              Add up to 5 tech tags
                            </span>
                          </label>
                          <input
                            class="input-tags"
                            type="text"
                            name="text"
                            placeholder="e.g. c, php"
                          />
                        </div>
                        <button
                          type="button"
                          class="btn theme-btn theme-btn-sm"
                        >
                          Apply filters
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="btn-group me-2 mb-2">
                    <button
                      class="btn border border-gray dropdown-toggle lh-26 text-gray fs-14"
                      type="button"
                      id="compensationDropdownMenu"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        class="me-1"
                        width="16"
                        height="16"
                        viewBox="0 0 18 18"
                      >
                        <path
                          d="M13.92 3H4c.07-.6.62-1.05 1.22-1h7.48c.6-.05 1.15.4 1.22 1zm.57 1c.6-.05 1.15.4 1.22 1H2.29c.07-.6.6-1.04 1.2-1h11zM1 7h16a1.14 1.14 0 00-1.22-1H2.22c-.6-.05-1.15.4-1.22 1zm1.5 1C1.67 8 1 8.67 1 9.5v5c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-13zM5 15a3 3 0 110-6h8a3 3 0 110 6H5z"
                          fill="currentColor"
                        ></path>
                        <path d="M9 13.9a1.9 1.9 0 100-3.8 1.9 1.9 0 0 0 0 3.8z"></path>
                      </svg>
                      Compensation
                    </button>
                    <div
                      class="dropdown-menu dropdown--menu dropdown--menu-2 keep-open mt-3"
                      aria-labelledby="compensationDropdownMenu"
                    >
                      <div class="py-3 px-4">
                        <div class="form-group mb-2">
                          <label class="fs-14 text-black fw-medium lh-18">
                            Minimum Annual Salary
                          </label>
                          <input
                            class="form-control form--control mb-2 form-control-sm"
                            type="text"
                            name="text"
                          />
                          <select class="select-container">
                            <option selected="selected" value="BDT">
                              BDT
                            </option>
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                            <option value="GBP">GBP (£)</option>
                            <option value="CAD">CAD (C$)</option>
                            <option value="AUD">AUD (A$)</option>
                            <option value="INR">INR (₹)</option>
                            <option value="SEK">SEK (kr)</option>
                            <option value="PLN">PLN (zł)</option>
                            <option value="CHF">CHF</option>
                            <option value="DKK">DKK</option>
                            <option value="NZD">NZD</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label class="fs-14 text-black fw-medium lh-18">
                            Other Compensation
                          </label>
                          <div class="form-check fs-14">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="OffersEquity"
                            />
                            <label class="form-check-label" for="OffersEquity">
                              Offers Equity
                            </label>
                          </div>
                        </div>
                        <button
                          type="button"
                          class="btn theme-btn theme-btn-sm"
                        >
                          Apply filters
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="btn-group me-2 mb-2">
                    <button
                      class="btn border border-gray dropdown-toggle lh-26 text-gray fs-14"
                      type="button"
                      id="perksDropdownMenu"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        class="me-1"
                        width="16"
                        height="16"
                        viewBox="0 0 18 18"
                      >
                        <path
                          d="m11.56 10.13-1.43 1.43L15.57 17 17 15.57l-5.44-5.44z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="m16.27 3.63-2.53 2.53a9.86 9.86 0 00-10.1-2.54 8.93 8.93 0 0 1 12.63.01zm-12.65.01a8.93 8.93 0 00.01 12.63l2.53-2.53a9.86 9.86 0 01-2.54-10.1z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M3.62 3.63h.01c2.66-.34 6.09 1.03 8.85 3.8l-5.06 5.05C4.66 9.7 3.3 6.29 3.62 3.63z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      Perks
                    </button>
                    <div
                      class="dropdown-menu dropdown--menu dropdown--menu-2 keep-open mt-3"
                      aria-labelledby="perksDropdownMenu"
                    >
                      <div class="py-3 px-4">
                        <div class="form-group">
                          <label class="fs-14 text-black fw-medium lh-18 d-block">
                            Location options
                          </label>

                          <div class="form-check fs-14">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="Visa-sponsor"
                            />
                            <label class="form-check-label" for="Visa-sponsor">
                              Visa sponsor
                            </label>
                          </div>

                          <div class="form-check fs-14">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="Offers-relocation"
                            />
                            <label
                              class="form-check-label"
                              for="Offers-relocation"
                            >
                              Offers relocation
                            </label>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="fs-14 text-black fw-medium lh-18 d-block">
                            Perks
                          </label>

                          <div class="form-check fs-14">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="Education-and-tuition-benefits"
                            />
                            <label
                              class="form-check-label"
                              for="Education-and-tuition-benefits"
                            >
                              Education and tuition benefits
                            </label>
                          </div>

                          <div class="form-check fs-14">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="10+vacation-days"
                            />
                            <label
                              class="form-check-label"
                              for="10+vacation-days"
                            >
                              10+ vacation days
                            </label>
                          </div>

                          <div class="form-check fs-14">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="Great-engineering-culture"
                            />
                            <label
                              class="form-check-label"
                              for="Great-engineering-culture"
                            >
                              Great engineering culture
                            </label>
                          </div>

                          <div class="form-check fs-14">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="Gym-and-fitness-perks"
                            />
                            <label
                              class="form-check-label"
                              for="Gym-and-fitness-perks"
                            >
                              Gym and fitness perks
                            </label>
                          </div>
                        </div>
                        <button
                          type="button"
                          class="btn theme-btn theme-btn-sm"
                        >
                          Apply filters
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="btn-group me-2 mb-2">
                    <button
                      class="btn border border-gray dropdown-toggle lh-26 text-gray fs-14"
                      type="button"
                      id="backgroundDropdownMenu"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        class="me-1"
                        width="16"
                        height="16"
                        viewBox="0 0 18 18"
                        fill="currentColor"
                      >
                        <path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h7a2 2 0 002-2V5a2 2 0 00-2-2H5zm2 3a1 1 0 11-2 0 1 1 0 0 1 2 0zm-2 4.5c0-.28.22-.5.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm.5 1.5h6a.5.5 0 010 1h-6a.5.5 0 010-1zM5 14.5c0-.28.22-.5.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z"></path>
                        <path
                          opacity=".4"
                          d="M5.9 2h6.35A2.75 2.75 0 0115 4.75v9.35c.62-.6 1-1.43 1-2.35v-7.5C16 2.45 14.54 1 12.75 1h-4.5c-.92 0-1.75.38-2.35 1z"
                        ></path>
                      </svg>
                      Background
                    </button>
                    <div
                      class="dropdown-menu dropdown--menu dropdown--menu-2 keep-open mt-3"
                      aria-labelledby="backgroundDropdownMenu"
                    >
                      <div class="py-3 px-4">
                        <div class="form-group mb-2">
                          <label class="fs-14 text-black fw-medium lh-18">
                            Experience Level
                          </label>
                          <select class="select-container">
                            <option selected="selected" value="">
                              Select experience
                            </option>
                            <option value="Student">Student</option>
                            <option value="Junior">Junior</option>
                            <option value="MidLevel">Mid-Level</option>
                            <option value="Senior">Senior</option>
                            <option value="Lead">Lead</option>
                            <option value="Manager">Manager</option>
                          </select>
                        </div>
                        <div class="form-group mb-2">
                          <label class="fs-14 text-black fw-medium lh-18">
                            Role
                            <span class="fs-13 lh-18 d-block fw-regular text-gray">
                              Add up to 5 roles
                            </span>
                          </label>
                          <select class="limit-select">
                            <option selected value="">
                              e.g. Full Stack Developer
                            </option>
                            <option value="BackendDeveloper">
                              Backend Developer
                            </option>
                            <option value="DataScientist">
                              Data Scientist
                            </option>
                            <option value="DatabaseAdministrator">
                              Database Administrator
                            </option>
                            <option value="Designer">Designer</option>
                            <option value="DesktopDeveloper">
                              Desktop Developer
                            </option>
                            <option value="DevOpsDeveloper">DevOps</option>
                            <option value="EmbeddedDeveloper">
                              Embedded Developer
                            </option>
                            <option value="FrontendDeveloper">
                              Frontend Developer
                            </option>
                            <option value="FullStackDeveloper">
                              Full Stack Developer
                            </option>
                            <option value="GameDeveloper">
                              Graphics/Game Developer
                            </option>
                            <option value="MobileDeveloper">
                              Mobile Developer
                            </option>
                            <option value="ProductManager">
                              Product Manager
                            </option>
                            <option value="QATestDeveloper">
                              QA/Test Developer
                            </option>
                            <option value="SystemAdministrator">
                              System Administrator
                            </option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label class="fs-14 text-black fw-medium lh-18 d-block">
                            Job Type
                          </label>
                          <div>
                            <div class="form-check fs-14">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="Full-time"
                              />
                              <label class="form-check-label" for="Full-time">
                                Full-time
                              </label>
                            </div>
                          </div>
                          <div>
                            <div class="form-check fs-14">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="Contact"
                              />
                              <label class="form-check-label" for="Contact">
                                Contact
                              </label>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          class="btn theme-btn theme-btn-sm"
                        >
                          Apply filters
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="btn-group me-2 mb-2">
                    <button
                      class="btn border border-gray dropdown-toggle lh-26 text-gray fs-14"
                      type="button"
                      id="moreDropdownMenu"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        class="me-1"
                        width="16"
                        height="16"
                        viewBox="0 0 17 18"
                        fill="currentColor"
                      >
                        <path d="M3.5 10a1.5 1.5 0 110-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 0 1 0 3zM12 8.5a1.5 1.5 0 103 0 1.5 1.5 0 0 0-3 0z"></path>
                      </svg>
                      More
                    </button>
                    <div
                      class="dropdown-menu dropdown--menu dropdown--menu-2 keep-open mt-3"
                      aria-labelledby="moreDropdownMenu"
                    >
                      <div class="py-3 px-4">
                        <div class="form-group">
                          <label class="fs-14 text-black fw-medium lh-18 d-block">
                            Job Features
                          </label>
                          <div class="form-check fs-14">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="Be-one-of-the-first-applicants"
                            />
                            <label
                              class="form-check-label"
                              for="Be-one-of-the-first-applicants"
                            >
                              Be one of the first applicants
                            </label>
                          </div>
                          <div class="form-check fs-14">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="High-response-rate"
                            />
                            <label
                              class="form-check-label"
                              for="High-response-rate"
                            >
                              High response rate
                            </label>
                          </div>
                        </div>
                        <div class="form-group mb-2">
                          <label class="fs-14 text-black fw-medium lh-18 d-block">
                            Companies to include
                            <span class="fs-13 lh-18 d-block fw-regular text-gray">
                              Add up to 5 companies
                            </span>
                          </label>
                          <input
                            type="text"
                            class="input-tags px-0"
                            placeholder="e.g. Initrode"
                          />
                        </div>
                        <div class="form-group mb-2">
                          <label class="fs-14 text-black fw-medium lh-18 d-block">
                            Companies to exclude
                            <span class="fs-13 lh-18 d-block fw-regular text-gray">
                              Add up to 5 companies
                            </span>
                          </label>
                          <input
                            type="text"
                            class="input-tags px-0"
                            placeholder="e.g. Initech"
                          />
                        </div>
                        <div class="form-group mb-2">
                          <label class="fs-14 text-black fw-medium lh-18 d-block">
                            Industry
                            <span class="fs-13 lh-18 d-block fw-regular text-gray">
                              Add up to 5 Industries
                            </span>
                          </label>
                          <select
                            class="limit-select"
                            multiple
                            data-placeholder="e.g. Finance"
                          >
                            <option value="">e.g. Finance</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Advertising">Advertising</option>
                            <option value="Aerospace">Aerospace</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Architecture">Architecture</option>
                            <option value="Arts">Arts</option>
                            <option value="Automotive">Automotive</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Business Intelligence">
                              Business Intelligence
                            </option>
                            <option value="Charity">Charity</option>
                            <option value="Chemicals">Chemicals</option>
                            <option value="Collaboration Tools">
                              Collaboration Tools
                            </option>
                            <option value="Communications">
                              Communications
                            </option>
                            <option value="Construction">Construction</option>
                            <option value="Consulting">Consulting</option>
                            <option value="Customer Service">
                              Customer Service
                            </option>
                            <option value="Data &amp; Analytics">
                              Data &amp; Analytics
                            </option>
                            <option value="Dating">Dating</option>
                            <option value="Design">Design</option>
                            <option value="Education">Education</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Energy &amp; Utilities">
                              Energy &amp; Utilities
                            </option>
                            <option value="Enterprise">Enterprise</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Events">Events</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Finance">Finance</option>
                            <option value="Food &amp; Beverage">
                              Food &amp; Beverage
                            </option>
                            <option value="Gambling">Gambling</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Geophysics">Geophysics</option>
                            <option value="Government">Government</option>
                            <option value="Hardware">Hardware</option>
                            <option value="Health &amp; Fitness">
                              Health &amp; Fitness
                            </option>
                            <option value="Health Care">Health Care</option>
                            <option value="Home and Garden">
                              Home and Garden
                            </option>
                            <option value="Hospitality">Hospitality</option>
                            <option value="Information Technology">
                              Information Technology
                            </option>
                            <option value="Insurance">Insurance</option>
                            <option value="Language Services">
                              Language Services
                            </option>
                            <option value="Legal">Legal</option>
                            <option value="Life Sciences">Life Sciences</option>
                            <option value="Location Services">
                              Location Services
                            </option>
                            <option value="Logistics &amp; Distribution">
                              Logistics &amp; Distribution
                            </option>
                            <option value="Manufacturing">Manufacturing</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Media">Media</option>
                            <option value="Meteorology">Meteorology</option>
                            <option value="Military">Military</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Pets">Pets</option>
                            <option value="Platforms">Platforms</option>
                            <option value="Politics">Politics</option>
                            <option value="Price Comparison">
                              Price Comparison
                            </option>
                            <option value="Printing">Printing</option>
                            <option value="Publishing">Publishing</option>
                            <option value="Q&amp;A">Q&amp;A</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Recreation &amp; Leisure">
                              Recreation &amp; Leisure
                            </option>
                            <option value="Recruiting">Recruiting</option>
                            <option value="Retail">Retail</option>
                            <option value="Reviews">Reviews</option>
                            <option value="Science">Science</option>
                            <option value="Search">Search</option>
                            <option value="Security">Security</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Software Development">
                              Software Development
                            </option>
                            <option value="Sports">Sports</option>
                            <option value="Telecommunications">
                              Telecommunications
                            </option>
                            <option value="Transportation">
                              Transportation
                            </option>
                            <option value="Travel &amp; Tourism">
                              Travel &amp; Tourism
                            </option>
                          </select>
                        </div>
                        <button
                          type="button"
                          class="btn theme-btn theme-btn-sm"
                        >
                          Apply filters
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    class="btn lh-26 text-gray fs-14 hover-bg-gray mb-2"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#alertModal"
                  >
                    <svg
                      class="me-1"
                      width="16"
                      height="16"
                      viewBox="0 0 18 18"
                      fill="currentColor"
                    >
                      <path d="M16 13v1H2v-1l.73-.58c.77-.77.81-3.55 1.19-5.42C4.69 3.23 8 2 8 2a1 1 0 011-1 1 1 0 0 1 1 1s3.39 1.23 4.16 5c.38 1.88.42 4.66 1.19 5.42l.66.58H16zm-7 4a2 2 0 002-2H7a2 2 0 002 2z"></path>
                    </svg>
                    Create Alert
                  </button>
                </div>
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                  <p class="fs-14 fw-medium">682 jobs founded</p>
                  <div class="d-flex align-items-center lh-1 select-box-group">
                    <label for="sort" class="mb-0 me-2 fs-13">
                      Sort by:
                    </label>
                    <select id="sort" class="form-select">
                      <option value="i" selected="">
                        Matches
                      </option>
                      <option value="p">Newest</option>
                      <option value="y">Salary</option>
                    </select>
                  </div>
                </div>
              </form>
              <div class="row mt-4">
                <div class="col-lg-9">
                  <div class="jobs-snippet">
                    <div class="media media-card media--card align-items-center">
                      <div class="media-body border-left-0">
                        <h5 class="pb-1">
                          <a href="career-details.html">
                            React Native Engineer at sustainable mobility
                            Start-up (m/f/x)
                          </a>
                        </h5>
                        <small class="meta d-block lh-20 pb-1">
                          <span class="author text-gray">Canva</span>
                          <span class="px-1">-</span>
                          <span> Amsterdam, Netherlands</span>
                          <span class="px-1">-</span>
                          <span>20 mins ago</span>
                          <span class="px-1">-</span>
                          <span class="text-success fw-medium">
                            High response rate
                          </span>
                        </small>
                        <small class="meta d-block lh-20">
                          <span class="pe-1 text-success fw-medium">
                            £30k - 50k
                          </span>
                          <span class="pe-1 text-success">| Equity</span>
                          <span class="pe-1 text-danger">Visa sponsor</span>
                          <span class="text-info">Paid relocation</span>
                        </small>
                        <div class="tags pt-2">
                          <a href="#" class="tag-link">
                            javascript
                          </a>
                          <a href="#" class="tag-link">
                            react-native
                          </a>
                          <a href="#" class="tag-link">
                            typescript
                          </a>
                          <a href="#" class="tag-link">
                            node.js
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pager pt-4">
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
                        <li class="page-item">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item active">
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
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="sidebar">
                    <div class="card card-item">
                      <div class="card-body">
                        <h3 class="fs-17 pb-3">Number Achievement</h3>
                        <div class="divider">
                          <span></span>
                        </div>
                        <div class="row no-gutters text-center">
                          <div class="col-lg-6 responsive-column-half">
                            <div class="icon-box pt-3">
                              <span class="fs-20 fw-bold text-color">980k</span>
                              <p class="fs-14">Questions</p>
                            </div>
                          </div>
                          <div class="col-lg-6 responsive-column-half">
                            <div class="icon-box pt-3">
                              <span class="fs-20 fw-bold text-color-2">
                                610k
                              </span>
                              <p class="fs-14">Answers</p>
                            </div>
                          </div>
                          <div class="col-lg-6 responsive-column-half">
                            <div class="icon-box pt-3">
                              <span class="fs-20 fw-bold text-color-3">
                                650k
                              </span>
                              <p class="fs-14">Answer accepted</p>
                            </div>
                          </div>
                          <div class="col-lg-6 responsive-column-half">
                            <div class="icon-box pt-3">
                              <span class="fs-20 fw-bold text-color-4">
                                320k
                              </span>
                              <p class="fs-14">Users</p>
                            </div>
                          </div>
                          <div class="col-lg-12 pt-3">
                            <p class="fs-14">
                              To get answer of question{" "}
                              <a
                                href="signup.html"
                                class="text-color hover-underline"
                              >
                                Join<i class="la la-arrow-right ms-1"></i>
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="ad-card">
                      <h4 class="text-gray text-uppercase fs-13 pb-3 text-center">
                        Advertisements
                      </h4>
                      <div class="ad-banner mb-4 mx-auto">
                        <span class="ad-text">290x500</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="companies"
              role="tabpanel"
              aria-labelledby="companies-tab"
            >
              <form
                method="post"
                class="search-form p-0 rounded-0 bg-transparent shadow-none position-relative z-index-1"
              >
                <div class="d-flex flex-wrap align-items-center">
                  <div class="d-flex flex-wrap align-items-center flex-grow-1">
                    <div class="form-group me-3 flex-grow-1">
                      <input
                        class="form-control form--control pl-40px"
                        type="text"
                        name="text"
                        placeholder="Search all companies"
                      />
                      <span class="la la-search input-icon"></span>
                    </div>
                    <div class="form-group me-3 flex-grow-1">
                      <input
                        class="form-control form--control pl-40px"
                        type="text"
                        name="text"
                        placeholder="Located anywhere"
                      />
                      <span class="la la-map-marker input-icon"></span>
                      <div class="km-select-wrap">
                        <select class="form-select">
                          <option value="5">within 5 km</option>
                          <option value="10">within 10 km</option>
                          <option value="20" selected="">
                            within 20 km
                          </option>
                          <option value="50">within 50 km</option>
                          <option value="100">within 100 km</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="search-btn-box mb-3">
                    <button class="btn theme-btn">
                      Search <i class="la la-search ms-1"></i>
                    </button>
                  </div>
                </div>
                <div class="filter-btn-group d-flex flex-wrap align-items-center">
                  <div class="btn border border-gray bg-white lh-26 text-gray pl-30px form-check fs-14 d-inline-block me-2 mb-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="r2"
                    />
                    <label class="form-check-label" for="r2">
                      Remote
                    </label>
                  </div>
                  <div class="btn border border-gray bg-white lh-26 text-gray pl-30px form-check fs-14 d-inline-block me-2 mb-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="v"
                    />
                    <label class="form-check-label" for="v">
                      Visa sponsor
                    </label>
                  </div>
                  <div class="btn border border-gray bg-white lh-26 text-gray pl-30px form-check fs-14 d-inline-block me-2 mb-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="o"
                    />
                    <label class="form-check-label" for="o">
                      Offers relocation
                    </label>
                  </div>
                  <div class="btn-group me-2 mb-2">
                    <button
                      class="btn border border-gray dropdown-toggle lh-26 text-gray fs-14"
                      type="button"
                      id="techDropdownMenuTwo"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        class="me-1"
                        width="16"
                        height="16"
                        viewBox="0 0 18 18"
                        fill="currentColor"
                      >
                        <path d="M8 4.41 6.59 3l-6 6 6 6L8 13.59 3.41 9 8 4.41zm2 0L11.41 3l6 6-6 6L10 13.59 14.59 9 10 4.41z"></path>
                      </svg>
                      Tech
                    </button>
                    <div
                      class="dropdown-menu dropdown--menu dropdown--menu-2 keep-open mt-3"
                      aria-labelledby="techDropdownMenuTwo"
                    >
                      <div class="py-3 px-4">
                        <div class="form-group mb-2">
                          <label class="fs-14 text-black fw-medium lh-18">
                            Tech Stack
                            <span class="fs-13 lh-18 d-block fw-regular text-gray">
                              Add up to 5 tech tags
                            </span>
                          </label>
                          <input
                            class="input-tags"
                            type="text"
                            name="text"
                            placeholder="e.g. html, c#"
                          />
                        </div>
                        <button
                          type="button"
                          class="btn theme-btn theme-btn-sm"
                        >
                          Apply filters
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="fs-14 fw-medium">1,464 results</p>
              </form>
              <div class="row mt-4">
                <div class="col-lg-9">
                  <div class="jobs-snippet">
                    <div class="media media-card">
                      <a href="company-details.html" class="media-img d-block">
                        <img src="images/company-logo.png" alt="company logo" />
                      </a>
                      <div class="media-body border-left-0">
                        <h5 class="pb-1 fs-16 fw-medium">
                          <a href="company-details.html">Sector Labs</a>
                        </h5>
                        <small class="meta d-block lh-20 pb-1">
                          <span class="pe-1">
                            <i class="la la-map-marker me-1"></i>Sydney
                          </span>
                          <span>
                            <i class="la la-building me-1"></i>Internet
                            Classifieds, Real Estate, Web Development
                          </span>
                        </small>
                        <p class="lh-20 fs-13 text-black-50 truncate">
                          Offering the best and hoping to get the same in
                          return: we chose a location in the heart of the city
                          so you can have access to a bunch of good restaurants,
                          we let you chose your hardware to work on, we buy
                          top-of-the-line chairs from Herman Miller and
                          Steelcase (your choice) and standing desks and will
                          keep on trying to make the workplace better than our
                          homes. Auton...
                        </p>
                        <div class="tags pt-2">
                          <a href="#" class="tag-link">
                            javascript
                          </a>
                          <a href="#" class="tag-link">
                            python
                          </a>
                          <a href="#" class="tag-link">
                            reactjs
                          </a>
                          <a href="#" class="tag-link">
                            node.js
                          </a>
                          <a href="#" class="tag-link active">
                            2 jobs
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="media media-card">
                      <a href="company-details.html" class="media-img d-block">
                        <img
                          src="images/company-logo2.png"
                          alt="company logo"
                        />
                      </a>
                      <div class="media-body border-left-0">
                        <h5 class="pb-1 fs-16 fw-medium">
                          <a href="company-details.html">Canva labs</a>
                        </h5>
                        <small class="meta d-block lh-20 pb-1">
                          <span class="pe-1">
                            <i class="la la-map-marker me-1"></i>Sydney
                          </span>
                          <span>
                            <i class="la la-building me-1"></i>Internet
                            Classifieds, Real Estate, Web Development
                          </span>
                        </small>
                        <p class="lh-20 fs-13 text-black-50 truncate">
                          Offering the best and hoping to get the same in
                          return: we chose a location in the heart of the city
                          so you can have access to a bunch of good restaurants,
                          we let you chose your hardware to work on, we buy
                          top-of-the-line chairs from Herman Miller and
                          Steelcase (your choice) and standing desks and will
                          keep on trying to make the workplace better than our
                          homes. Auton...
                        </p>
                        <div class="tags pt-2">
                          <a href="#" class="tag-link">
                            javascript
                          </a>
                          <a href="#" class="tag-link">
                            python
                          </a>
                          <a href="#" class="tag-link">
                            reactjs
                          </a>
                          <a href="#" class="tag-link">
                            node.js
                          </a>
                          <a href="#" class="tag-link active">
                            22 jobs
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="media media-card">
                      <a href="company-details.html" class="media-img d-block">
                        <img
                          src="images/company-logo3.jpg"
                          alt="company logo"
                        />
                      </a>
                      <div class="media-body border-left-0">
                        <h5 class="pb-1 fs-16 fw-medium">
                          <a href="company-details.html">Shogun Inc</a>
                        </h5>
                        <small class="meta d-block lh-20 pb-1">
                          <span class="pe-1">
                            <i class="la la-map-marker me-1"></i>Sydney
                          </span>
                          <span>
                            <i class="la la-building me-1"></i>Internet
                            Classifieds, Real Estate, Web Development
                          </span>
                        </small>
                        <p class="lh-20 fs-13 text-black-50 truncate">
                          Offering the best and hoping to get the same in
                          return: we chose a location in the heart of the city
                          so you can have access to a bunch of good restaurants,
                          we let you chose your hardware to work on, we buy
                          top-of-the-line chairs from Herman Miller and
                          Steelcase (your choice) and standing desks and will
                          keep on trying to make the workplace better than our
                          homes. Auton...
                        </p>
                        <div class="tags pt-2">
                          <a href="#" class="tag-link">
                            javascript
                          </a>
                          <a href="#" class="tag-link">
                            python
                          </a>
                          <a href="#" class="tag-link">
                            reactjs
                          </a>
                          <a href="#" class="tag-link">
                            node.js
                          </a>
                          <a href="#" class="tag-link active">
                            33 jobs
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="media media-card">
                      <a href="company-details.html" class="media-img d-block">
                        <img
                          src="images/company-logo4.png"
                          alt="company logo"
                        />
                      </a>
                      <div class="media-body border-left-0">
                        <h5 class="pb-1 fs-16 fw-medium d-flex align-items-center">
                          <a href="company-details.html">Outliant</a>
                          <span class="badge border border-gray fw-regular ms-2 text-black-50">
                            <svg
                              aria-hidden="true"
                              class="me-1"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                            >
                              <path
                                fill="#5eba7d"
                                d="M11 4l2.29 2.29L10.5 9l-3-3L1 12.5 2.5 14l5-5 3 3 4.21-4.29L17 10V4h-6z"
                              ></path>
                            </svg>
                            High response rate
                          </span>
                        </h5>
                        <small class="meta d-block lh-20 pb-1">
                          <span class="pe-1">
                            <i class="la la-map-marker me-1"></i>Sydney
                          </span>
                          <span>
                            <i class="la la-building me-1"></i>Internet
                            Classifieds, Real Estate, Web Development
                          </span>
                        </small>
                        <p class="lh-20 fs-13 text-black-50 truncate">
                          Offering the best and hoping to get the same in
                          return: we chose a location in the heart of the city
                          so you can have access to a bunch of good restaurants,
                          we let you chose your hardware to work on, we buy
                          top-of-the-line chairs from Herman Miller and
                          Steelcase (your choice) and standing desks and will
                          keep on trying to make the workplace better than our
                          homes. Auton...
                        </p>
                        <div class="tags pt-2">
                          <a href="#" class="tag-link">
                            javascript
                          </a>
                          <a href="#" class="tag-link">
                            python
                          </a>
                          <a href="#" class="tag-link">
                            reactjs
                          </a>
                          <a href="#" class="tag-link">
                            node.js
                          </a>
                          <a href="#" class="tag-link active">
                            1 job
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="media media-card">
                      <a href="company-details.html" class="media-img d-block">
                        <img src="images/company-logo.png" alt="company logo" />
                      </a>
                      <div class="media-body border-left-0">
                        <h5 class="pb-1 fs-16 fw-medium">
                          <a href="company-details.html">Sector Labs</a>
                        </h5>
                        <small class="meta d-block lh-20 pb-1">
                          <span class="pe-1">
                            <i class="la la-map-marker me-1"></i>Sydney
                          </span>
                          <span>
                            <i class="la la-building me-1"></i>Internet
                            Classifieds, Real Estate, Web Development
                          </span>
                        </small>
                        <p class="lh-20 fs-13 text-black-50 truncate">
                          Offering the best and hoping to get the same in
                          return: we chose a location in the heart of the city
                          so you can have access to a bunch of good restaurants,
                          we let you chose your hardware to work on, we buy
                          top-of-the-line chairs from Herman Miller and
                          Steelcase (your choice) and standing desks and will
                          keep on trying to make the workplace better than our
                          homes. Auton...
                        </p>
                        <div class="tags pt-2">
                          <a href="#" class="tag-link">
                            javascript
                          </a>
                          <a href="#" class="tag-link">
                            python
                          </a>
                          <a href="#" class="tag-link">
                            reactjs
                          </a>
                          <a href="#" class="tag-link">
                            node.js
                          </a>
                          <a href="#" class="tag-link active">
                            2 jobs
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="media media-card">
                      <a href="company-details.html" class="media-img d-block">
                        <img
                          src="images/company-logo2.png"
                          alt="company logo"
                        />
                      </a>
                      <div class="media-body border-left-0">
                        <h5 class="pb-1 fs-16 fw-medium">
                          <a href="company-details.html">Canva labs</a>
                        </h5>
                        <small class="meta d-block lh-20 pb-1">
                          <span class="pe-1">
                            <i class="la la-map-marker me-1"></i>Sydney
                          </span>
                          <span>
                            <i class="la la-building me-1"></i>Internet
                            Classifieds, Real Estate, Web Development
                          </span>
                        </small>
                        <p class="lh-20 fs-13 text-black-50 truncate">
                          Offering the best and hoping to get the same in
                          return: we chose a location in the heart of the city
                          so you can have access to a bunch of good restaurants,
                          we let you chose your hardware to work on, we buy
                          top-of-the-line chairs from Herman Miller and
                          Steelcase (your choice) and standing desks and will
                          keep on trying to make the workplace better than our
                          homes. Auton...
                        </p>
                        <div class="tags pt-2">
                          <a href="#" class="tag-link">
                            javascript
                          </a>
                          <a href="#" class="tag-link">
                            python
                          </a>
                          <a href="#" class="tag-link">
                            reactjs
                          </a>
                          <a href="#" class="tag-link">
                            node.js
                          </a>
                          <a href="#" class="tag-link active">
                            22 jobs
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="media media-card">
                      <a href="company-details.html" class="media-img d-block">
                        <img
                          src="images/company-logo3.jpg"
                          alt="company logo"
                        />
                      </a>
                      <div class="media-body border-left-0">
                        <h5 class="pb-1 fs-16 fw-medium">
                          <a href="company-details.html">Shogun Inc</a>
                        </h5>
                        <small class="meta d-block lh-20 pb-1">
                          <span class="pe-1">
                            <i class="la la-map-marker me-1"></i>Sydney
                          </span>
                          <span>
                            <i class="la la-building me-1"></i>Internet
                            Classifieds, Real Estate, Web Development
                          </span>
                        </small>
                        <p class="lh-20 fs-13 text-black-50 truncate">
                          Offering the best and hoping to get the same in
                          return: we chose a location in the heart of the city
                          so you can have access to a bunch of good restaurants,
                          we let you chose your hardware to work on, we buy
                          top-of-the-line chairs from Herman Miller and
                          Steelcase (your choice) and standing desks and will
                          keep on trying to make the workplace better than our
                          homes. Auton...
                        </p>
                        <div class="tags pt-2">
                          <a href="#" class="tag-link">
                            javascript
                          </a>
                          <a href="#" class="tag-link">
                            python
                          </a>
                          <a href="#" class="tag-link">
                            reactjs
                          </a>
                          <a href="#" class="tag-link">
                            node.js
                          </a>
                          <a href="#" class="tag-link active">
                            33 jobs
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="media media-card">
                      <a href="company-details.html" class="media-img d-block">
                        <img
                          src="images/company-logo4.png"
                          alt="company logo"
                        />
                      </a>
                      <div class="media-body border-left-0">
                        <h5 class="pb-1 fs-16 fw-medium d-flex align-items-center">
                          <a href="company-details.html">Outliant</a>
                          <span class="badge border border-gray fw-regular ms-2 text-black-50">
                            <svg
                              aria-hidden="true"
                              class="me-1"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                            >
                              <path
                                fill="#5eba7d"
                                d="M11 4l2.29 2.29L10.5 9l-3-3L1 12.5 2.5 14l5-5 3 3 4.21-4.29L17 10V4h-6z"
                              ></path>
                            </svg>
                            High response rate
                          </span>
                        </h5>
                        <small class="meta d-block lh-20 pb-1">
                          <span class="pe-1">
                            <i class="la la-map-marker me-1"></i>Sydney
                          </span>
                          <span>
                            <i class="la la-building me-1"></i>Internet
                            Classifieds, Real Estate, Web Development
                          </span>
                        </small>
                        <p class="lh-20 fs-13 text-black-50 truncate">
                          Offering the best and hoping to get the same in
                          return: we chose a location in the heart of the city
                          so you can have access to a bunch of good restaurants,
                          we let you chose your hardware to work on, we buy
                          top-of-the-line chairs from Herman Miller and
                          Steelcase (your choice) and standing desks and will
                          keep on trying to make the workplace better than our
                          homes. Auton...
                        </p>
                        <div class="tags pt-2">
                          <a href="#" class="tag-link">
                            javascript
                          </a>
                          <a href="#" class="tag-link">
                            python
                          </a>
                          <a href="#" class="tag-link">
                            reactjs
                          </a>
                          <a href="#" class="tag-link">
                            node.js
                          </a>
                          <a href="#" class="tag-link active">
                            1 job
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pager pt-4">
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
                        <li class="page-item">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item active">
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
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="sidebar">
                    <div class="card card-item">
                      <div class="card-body">
                        <h3 class="fs-17 pb-3">Number Achievement</h3>
                        <div class="divider">
                          <span></span>
                        </div>
                        <div class="row no-gutters text-center">
                          <div class="col-lg-6 responsive-column-half">
                            <div class="icon-box pt-3">
                              <span class="fs-20 fw-bold text-color">980k</span>
                              <p class="fs-14">Questions</p>
                            </div>
                          </div>
                          <div class="col-lg-6 responsive-column-half">
                            <div class="icon-box pt-3">
                              <span class="fs-20 fw-bold text-color-2">
                                610k
                              </span>
                              <p class="fs-14">Answers</p>
                            </div>
                          </div>
                          <div class="col-lg-6 responsive-column-half">
                            <div class="icon-box pt-3">
                              <span class="fs-20 fw-bold text-color-3">
                                650k
                              </span>
                              <p class="fs-14">Answer accepted</p>
                            </div>
                          </div>
                          <div class="col-lg-6 responsive-column-half">
                            <div class="icon-box pt-3">
                              <span class="fs-20 fw-bold text-color-4">
                                320k
                              </span>
                              <p class="fs-14">Users</p>
                            </div>
                          </div>
                          <div class="col-lg-12 pt-3">
                            <p class="fs-14">
                              To get answer of question{" "}
                              <a
                                href="signup.html"
                                class="text-color hover-underline"
                              >
                                Join<i class="la la-arrow-right ms-1"></i>
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="ad-card">
                      <h4 class="text-gray text-uppercase fs-13 pb-3 text-center">
                        Advertisements
                      </h4>
                      <div class="ad-banner mb-4 mx-auto">
                        <span class="ad-text">290x500</span>
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

export default JobsList;
