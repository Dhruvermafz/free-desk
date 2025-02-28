import React from "react";
import ProfileHero from "./ProfileHero";
import "../../css/style.css";
const UserDetails = () => {
  return (
    <>
      <ProfileHero />
      <section className="user-details-area pt-30px pb-60px">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="user-profile"
                  role="tabpanel"
                  aria-labelledby="user-profile-tab"
                >
                  <div className="user-panel-main-bar">
                    <div className="user-panel mb-30px">
                      <p className="pb-2">
                        I am a programmer. My principal language is C++. I've
                        also done commercial work in Java, C, Perl, Python,
                        Javascript and APL. I've also been known to dabble in
                        lisp, Haskell, assembler (ARM, x86, amd64) and probably
                        a few other languages that haven't left as big a mark.
                      </p>
                      <p className="pb-2">
                        Programmer at{" "}
                        <a href="#" className="text-color hover-underline">
                          Bloomberg
                        </a>
                        . Posts and commments are my opinions and are not
                        sponsored or endorsed by my employer.
                      </p>
                      <p>
                        If my answers helped you can{" "}
                        <a href="#" className="text-color hover-underline">
                          buy me a coffee.
                        </a>
                      </p>
                    </div>

                    <div className="user-panel mb-30px">
                      <div className="bg-gray p-3 rounded-rounded">
                        <h3 className="fs-17">
                          Top tags <span>(865)</span>
                        </h3>
                      </div>
                      <div className="vertical-list">
                        <div className="item tags d-flex align-items-center justify-content-between">
                          <div className="flex-grow-1">
                            <a
                              href="#"
                              className="tag-link tag-link-md tag-link-blue mb-0"
                            >
                              git
                            </a>
                            <a href="#" className="ball ball-lg ms-1 gold"></a>
                          </div>
                          <div className="user-stats d-flex align-items-center">
                            <div className="stat text-center">
                              <strong className="text-black fs-14">
                                58,420
                              </strong>
                              <small className="d-block lh-15">score</small>
                            </div>
                            <div className="stat text-center">
                              <strong className="text-black fs-14">413</strong>
                              <small className="d-block lh-15">posts</small>
                            </div>
                            <div className="stat text-center">
                              <strong className="text-black fs-14">21</strong>
                              <small className="d-block lh-15">posts %</small>
                            </div>
                          </div>
                        </div>

                        <div className="view-more pt-3 px-3">
                          <a href="#" className="btn-text fs-15">
                            View all tags{" "}
                            <i className="la la-arrow-right icon ms-1"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="user-panel mb-30px">
                      <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
                        <h3 className="fs-17">
                          Top posts <span>(865)</span>
                        </h3>
                        <div className="filter-option-box w-100px lh-1">
                          <select className="select-container">
                            <option selected="selected" value="Votes">
                              Votes
                            </option>
                            <option value="Newest">Newest</option>
                          </select>
                        </div>
                      </div>
                      <div className="vertical-list">
                        <div className="item p-0">
                          <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                            <div className="votes py-2 answered-accepted">
                              <div
                                className="vote-block d-flex align-items-center justify-content-between"
                                title="Votes"
                              >
                                <span className="vote-counts">6475</span>
                                <span className="vote-icon"></span>
                              </div>
                              <div
                                className="answer-block d-flex align-items-center justify-content-between"
                                title="Answers"
                              >
                                <span className="vote-counts">22</span>
                                <span className="answer-icon"></span>
                              </div>
                            </div>
                            <div className="media-body">
                              <h5>
                                <a href="question-details.html">
                                  How to make Git “forget” about a file that was
                                  tracked but is now in .gitignore?
                                </a>
                              </h5>
                              <small className="meta">
                                <span>May 12 '20</span>
                              </small>
                            </div>
                          </div>
                        </div>

                        <div className="view-more pt-3 px-3">
                          <a href="#" className="btn-text fs-15">
                            View all questions and answers{" "}
                            <i className="la la-arrow-right icon ms-1"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="user-panel mb-30px">
                      <div className="bg-gray p-3 rounded-rounded mb-3">
                        <h3 className="fs-17">
                          Rarest badges <span>(1,328)</span>
                        </h3>
                      </div>
                      <div className="badge-top-list">
                        <div className="badge-top badge-top-gold">
                          <div className="badge-top-name">
                            <span className="fs-20 lh-18 fw-regular d-block">
                              91
                            </span>
                            <strong>Gold</strong>
                          </div>
                          <div className="badge-top-details flex-grow-1">
                            <div className="vertical-list">
                              <div className="item tags">
                                <a
                                  href="#"
                                  className="badge badge-md badge-gray"
                                >
                                  <span className="ball gold"></span> git
                                </a>
                                <span className="fs-12 ps-1 font-italic">
                                  Jul 29 '10
                                </span>
                              </div>
                              <div className="item tags">
                                <a
                                  href="#"
                                  className="badge badge-md badge-gray"
                                >
                                  <span className="ball gold"></span> c#
                                </a>
                                <span className="fs-12 ps-1 font-italic">
                                  Feb 28 '11
                                </span>
                              </div>
                              <div className="item tags border-bottom-0">
                                <a
                                  href="#"
                                  className="badge badge-md badge-dark"
                                >
                                  <span className="ball gold"></span> Legendary
                                </a>
                                <span className="fs-12 ps-1 font-italic">
                                  Jan 11 '12
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="view-more pt-3 px-3">
                          <a href="#" className="btn-text fs-15">
                            View all badges{" "}
                            <i className="la la-arrow-right icon ms-1"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="user-activity"
                  role="tabpanel"
                  aria-labelledby="user-activity-tab"
                >
                  <div className="user-panel-main-bar">
                    <div className="user-panel mb-40px">
                      <div className="bg-gray p-3 rounded-rounded mb-3">
                        <h3 className="fs-17">Reputation</h3>
                      </div>
                      <div className="media media-card align-items-center shadow-none border border-gray p-3 text-center">
                        <div className="media-body">
                          <h5 className="fw-medium">224,110</h5>
                          <p className="fs-15">top 0.01% overall</p>
                        </div>
                      </div>
                      <div className="user-stats d-flex flex-wrap align-items-center">
                        <div className="stat flex-grow-1 my-1">
                          <h4 className="fs-15 text-gray pb-2">
                            Next tag badge:
                          </h4>
                          <span className="badge badge-md badge-gray">
                            <span className="ball"></span> function-pointers
                          </span>
                        </div>
                        <div className="stat text-center me-3 my-1">
                          <small className="d-block lh-15 pb-1">
                            149/100 score
                          </small>
                          <div className="progress progress-slim bg-gray-2">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "100%" }}
                              aria-valuenow="100"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div className="stat text-center ml-0 my-1">
                          <small className="d-block lh-15 pb-1">
                            19/20 answers
                          </small>
                          <div className="progress progress-slim bg-gray-2">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "95%" }}
                              aria-valuenow="95"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
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

export default UserDetails;
