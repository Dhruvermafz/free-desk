import React from "react";
import ApplicationHero from "./ApplicationHero";

const JobApplication = () => {
  return (
    <div>
      <ApplicationHero />

      <section class="company-area pb-90px">
        <div class="bg-white shadow-sm pt-30px pb-30px sticky-navs-wrap">
          <div class="container">
            <ul class="js-scroll-nav">
              <li class="active">
                <a href="#about-company" class="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#tech-stack" class="page-scroll">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#company-videos" class="page-scroll">
                  Videos
                </a>
              </li>
              <li>
                <a href="#jobs" class="page-scroll">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="company-details-panel-main-bar pt-30px">
                <div class="company-details-panel mb-30px" id="about-company">
                  <h3 class="fs-20 pb-3">Canva culture</h3>
                  <img
                    src="images/img-loading.png"
                    data-src="images/company-cover-img.png"
                    alt="cover image"
                    class="mb-4 w-100 lazy"
                  />
                  <p class="pb-3">
                    At Canva, we work every day to make a significant positive
                    impact on society. Our mission is to democratize design and
                    empower creativity and visual expression for every person,
                    on every platform.
                  </p>
                  <p class="pb-3">
                    Since launch in August 2013, our user base has grown
                    exponentially, amassing over 10 million monthly active users
                    in over 120 languages, making us one of the world's
                    fastest-growing technology companies. As of today, we've
                    achieved profitability, and the company is valued over
                    $2.5-billion, which prepares us for the next phase of growth
                    and development.
                  </p>
                  <p class="pb-3">
                    At Canva, we value the collective strength of diverse
                    individuals who sign up to join our adventure. We are an
                    eclectic group of people, with such different strengths and
                    talents - it feels like there is little we can’t achieve.
                    But at the heart of our diversity lies one universal
                    characteristic that sets Canva apart - we are a team of
                    problem-solvers working together. We want everyone at Canva
                    to feel challenged and inspired to do the best work of their
                    lives. We all play an active role in shaping Canva to be the
                    company where we want to work.
                  </p>
                  <p class="pb-3">
                    One of our core values at Canva, “Being a force for good”
                    means we are actively working towards a world that isn't
                    just good for a small few, but one that’s good for everyone.
                    We believe deeply that bringing together diversity of
                    thoughts, perspectives and expression is key for building
                    the best product for our equally diverse community. To
                    achieve this, we need to constantly work towards making
                    Canva the best place to work, for everyone.
                  </p>
                  <p class="pb-3">
                    We ensure that the Canva workspace is setup for you to do
                    your best work and have a great time doing so, with in-house
                    chefs, gym and yoga studio access, breakout areas, and quiet
                    places to retreat and do your best work!{" "}
                  </p>
                </div>
                <div class="company-details-panel mb-30px" id="tech-stack">
                  <h3 class="fs-20 pb-3">Empowering the world to design!</h3>
                  <div class="tags pb-3">
                    <a href="#" class="tag-link tag-link-blue fs-13">
                      java
                    </a>
                    <a href="#" class="tag-link tag-link-blue fs-13">
                      javascript
                    </a>
                    <a href="#" class="tag-link tag-link-blue fs-13">
                      html
                    </a>
                    <a href="#" class="tag-link tag-link-blue fs-13">
                      css
                    </a>
                    <a href="#" class="tag-link tag-link-blue fs-13">
                      sql
                    </a>
                    <a href="#" class="tag-link tag-link-blue fs-13">
                      amazon-web-services
                    </a>
                    <a href="#" class="tag-link tag-link-blue fs-13">
                      ecmascript-6
                    </a>
                    <a href="#" class="tag-link tag-link-blue fs-13">
                      mongodb
                    </a>
                    <a href="#" class="tag-link tag-link-blue fs-13">
                      cassandra
                    </a>
                    <a href="#" class="tag-link tag-link-blue fs-13">
                      zookeeper
                    </a>
                    <a href="#" class="tag-link tag-link-blue fs-13">
                      redis
                    </a>
                    <a href="#" class="tag-link tag-link-blue fs-13">
                      objective-c
                    </a>
                    <a href="#" class="tag-link tag-link-blue fs-13">
                      swift
                    </a>
                    <a href="#" class="tag-link tag-link-blue fs-13">
                      android
                    </a>
                    <a href="#" class="tag-link tag-link-blue fs-13">
                      distributed
                    </a>
                  </div>
                  <p class="pb-3">
                    Software engineering is the core of who we are at Canva. The
                    Canva code base was built to scale from day one. This has
                    allowed for a unique environment where engineers spend most
                    of their time optimizing performance and releasing new
                    features rather than fixing legacy code.{" "}
                  </p>
                  <p class="pb-3">
                    With an adherence to fundamentals and first principles, the
                    team strives to use the most appropriate tools for the tasks
                    at hand, aiming to strike that carefully measured balance
                    between getting things done and long-term maintainability of
                    the code base and supporting infrastructure.
                  </p>
                  <p class="pb-3">
                    You'll be joining a team of skilled technologists with
                    previous experience at companies such as Google, JetBrains,
                    Yandex, Atlassian, Amazon, Apple, and Facebook; leveraging
                    their knowledge and experience building mass-scale web
                    applications for consumers and businesses alike.
                  </p>
                  <p class="pb-3">
                    We promote a warm and collaborative work environment by
                    embracing a flat structure where engineers set big goals and
                    are given the tools and support to achieve them. We also
                    invite our engineers to contribute to the direction their
                    peers are taking with proactive pair ups for peer-reviewing
                    of code as well as regular engineering forums for opinions
                    and ideas to be heard. These practices ensure that knowledge
                    is shared and releases are quick and efficient.
                  </p>
                  <p class="pb-3">
                    Finally - you're probably curious about our technology
                    stack. At a high level, Canva's backend is powered by a set
                    of services (some micro, some not-so-micro) built primarily
                    in Java, hosted on Linux, sitting on AWS. We also sprinkle
                    in some powerful open-source libraries and tools (have a
                    look at
                    <a
                      href="#"
                      target="_blank"
                      class="text-color hover-underline"
                    >
                      finagle
                    </a>
                    ), as well as bespoke components to power some of the magic.
                    For the front end, we have just re-written the Canva code
                    base in a React, MobX and Typescript stack. That means
                    you’re working with the cleanest, leanest frontend stack.
                  </p>
                  <p class="pb-3">Want to experience Canva for yourself?</p>
                  <ul class="generic-list-item generic-list-item-bullet pb-3">
                    <li>
                      Check out what life is like at Canva on{" "}
                      <a
                        href="#"
                        target="_blank"
                        class="text-color d-inline-block hover-underline"
                      >
                        Instagram
                      </a>
                      .
                    </li>
                    <li>
                      Check out what our users are saying about us on{" "}
                      <a
                        href="#"
                        target="_blank"
                        class="text-color d-inline-block hover-underline"
                      >
                        Twitter
                      </a>
                      .
                    </li>
                    <li>
                      Learn{" "}
                      <a
                        href="#"
                        target="_blank"
                        class="text-color d-inline-block hover-underline"
                      >
                        how we work
                      </a>{" "}
                      from Dave, our CTO
                    </li>
                    <li>
                      Get to{" "}
                      <a
                        href="#"
                        target="_blank"
                        class="text-color d-inline-block hover-underline"
                      >
                        know our Chef
                      </a>
                      , Chris
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        class="text-color d-inline-block hover-underline"
                      >
                        Meet our CEO
                      </a>
                      , Melanie
                    </li>
                    <li>
                      Finally, give{" "}
                      <a
                        href="#"
                        target="_blank"
                        class="text-color d-inline-block hover-underline"
                      >
                        Canva a go
                      </a>
                      !
                    </li>
                  </ul>
                  <p class="pb-3">
                    You can also read more about our engineering culture on{" "}
                    <a
                      href="#"
                      class="text-color hover-underline"
                      target="_blank"
                    >
                      https://engineering.canva.com/
                    </a>
                  </p>
                </div>
                <div class="company-details-panel mb-30px" id="company-videos">
                  <h3 class="fs-20 pb-3">Videos</h3>
                  <div class="video-box">
                    <img
                      class="w-100 rounded-rounded lazy"
                      src="images/img-loading.png"
                      data-src="images/img5.jpg"
                      alt="video image"
                    />
                    <div class="video-content">
                      <a
                        class="icon-element icon-element-lg hover-y mx-auto"
                        href="https://www.youtube.com/watch?v=GlrxcuEDyF8"
                        data-fancybox=""
                        title="Play Video"
                      >
                        <svg
                          width="24"
                          height="24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 58.752 58.752"
                        >
                          <path
                            fill="#0d233e"
                            d="M52.524,23.925L12.507,0.824c-1.907-1.1-4.376-1.097-6.276,0C4.293,1.94,3.088,4.025,3.088,6.264v46.205
                                                c0,2.24,1.204,4.325,3.131,5.435c0.953,0.555,2.042,0.848,3.149,0.848c1.104,0,2.192-0.292,3.141-0.843l40.017-23.103
                                                c1.936-1.119,3.138-3.203,3.138-5.439C55.663,27.134,54.462,25.05,52.524,23.925z M49.524,29.612L9.504,52.716
                                                c-0.082,0.047-0.18,0.052-0.279-0.005c-0.084-0.049-0.137-0.142-0.137-0.242V6.263c0-0.1,0.052-0.192,0.14-0.243
                                                c0.042-0.025,0.09-0.038,0.139-0.038c0.051,0,0.099,0.013,0.142,0.038l40.01,23.098c0.089,0.052,0.145,0.147,0.145,0.249
                                                C49.663,29.47,49.611,29.561,49.524,29.612z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="company-details-panel mb-30px" id="jobs">
                  <h3 class="fs-20 pb-3">Job Openings</h3>
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
                          <span class="author pe-1 text-gray">Canva</span>
                          <span class="pe-1">- Amsterdam, Netherlands</span>
                          <span>- 20 mins ago -</span>
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
                    <div class="media media-card media--card align-items-center">
                      <div class="media-body border-left-0">
                        <h5 class="pb-1">
                          <a href="career-details.html">
                            Senior Software Engineer - Core Platforms &
                            Libraries (Java)
                          </a>
                        </h5>
                        <small class="meta d-block lh-20 pb-1">
                          <span class="author pe-1 text-gray">Canva</span>
                          <span class="pe-1">- Amsterdam, Netherlands</span>
                          <span>- 20 mins ago -</span>
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
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="sidebar pt-40px ps-30px">
                <div class="media media-card">
                  <div class="media-img w-auto h-auto rounded-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                    >
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        transform="translate(1 1)"
                      >
                        <path
                          fill="#c3e5eb"
                          d="M39.8594595,3.56756757 L7.6,3.56756757 C5.38216216,3.56756757 3.58772973,5.38216216 3.58772973,7.6 L3.56756757,43.8918919 L11.6324324,35.827027 L39.8594595,35.827027 C42.0772973,35.827027 43.8918919,34.0124324 43.8918919,31.7945946 L43.8918919,7.6 C43.8918919,5.38216216 42.0772973,3.56756757 39.8594595,3.56756757 Z"
                        ></path>
                        <path
                          stroke="#3cb1c6"
                          d="M36.2918919,0 L4.03243243,0 C1.81459459,0 0.0201621622,1.81459459 0.0201621622,4.03243243 L0,40.3243243 L8.06486486,32.2594595 L36.2918919,32.2594595 C38.5097297,32.2594595 40.3243243,30.4448649 40.3243243,28.227027 L40.3243243,4.03243243 C40.3243243,1.81459459 38.5097297,0 36.2918919,0 Z"
                        ></path>
                        <polygon
                          fill="#6ABE62"
                          points="26.162 8.324 28.885 11.213 23.082 17.368 18.325 12.323 9.514 21.681 11.19 23.459 18.325 15.892 23.082 20.937 30.574 13.004 33.297 15.892 33.297 8.324"
                        ></polygon>
                      </g>
                    </svg>
                  </div>
                  <div class="media-body">
                    <h5 class="pb-1 fw-semi-bold">High response rate</h5>
                    <small class="meta d-block lh-18">
                      <span>
                        This company responds to the majority of applications it
                        receives.
                      </span>
                    </small>
                  </div>
                </div>
                <div class="card card-item">
                  <div class="card-body">
                    <h3 class="fs-19 pb-3 fw-semi-bold">About</h3>
                    <div class="divider">
                      <span></span>
                    </div>
                    <div class="icon-box pt-3">
                      <span class="fw-semi-bold d-block text-uppercase fs-13 lh-22">
                        Website
                      </span>
                      <p class="fs-14 lh-20">
                        <a href="#" class="text-color hover-underline">
                          Canva labs
                        </a>
                      </p>
                    </div>
                    <div class="icon-box pt-3">
                      <span class="fw-semi-bold d-block text-uppercase fs-13 lh-22">
                        Industry
                      </span>
                      <p class="fs-14 lh-20">
                        Design, Information Technology, Software Development
                      </p>
                    </div>
                    <div class="icon-box pt-3">
                      <span class="fw-semi-bold d-block text-uppercase fs-13 lh-22">
                        Size
                      </span>
                      <p class="fs-14 lh-20">201–500 employees</p>
                    </div>
                    <div class="icon-box pt-3">
                      <span class="fw-semi-bold d-block text-uppercase fs-13 lh-22">
                        Founded
                      </span>
                      <p class="fs-14 lh-20">2013</p>
                    </div>
                    <div class="icon-box pt-3">
                      <span class="fw-semi-bold d-block text-uppercase fs-13 lh-22">
                        status
                      </span>
                      <p class="fs-14 lh-20">Private</p>
                    </div>
                    <div class="icon-box pt-3">
                      <span class="fw-semi-bold d-block text-uppercase fs-13 lh-22">
                        followers
                      </span>
                      <p class="fs-14 lh-20">34</p>
                    </div>
                    <div class="icon-box pt-3">
                      <span class="fw-semi-bold d-block text-uppercase fs-13 lh-20">
                        social
                      </span>
                      <div class="social-icon-box pt-1">
                        <a
                          class="me-1 icon-element icon-element-xs shadow-sm text-gray hover-y d-inline-block"
                          href="#"
                          target="_blank"
                          title="Follow on Facebook"
                        >
                          <svg
                            focusable="false"
                            class="svg-inline--fa fa-facebook-f fa-w-10"
                            width="14px"
                            height="14px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path
                              fill="currentColor"
                              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                            ></path>
                          </svg>
                        </a>
                        <a
                          class="me-1 icon-element icon-element-xs shadow-sm text-gray hover-y d-inline-block"
                          href="#"
                          target="_blank"
                          title="Follow on Twitter"
                        >
                          <svg
                            focusable="false"
                            class="svg-inline--fa fa-twitter fa-w-16"
                            width="14px"
                            height="14px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                            ></path>
                          </svg>
                        </a>
                        <a
                          class="me-1 icon-element icon-element-xs shadow-sm text-gray hover-y d-inline-block"
                          href="#"
                          target="_blank"
                          title="Follow on Linkedin"
                        >
                          <svg
                            focusable="false"
                            class="svg-inline--fa fa-linkedin fa-w-14"
                            width="14px"
                            height="14px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                            ></path>
                          </svg>
                        </a>
                        <a
                          class="me-1 icon-element icon-element-xs shadow-sm text-gray hover-y d-inline-block"
                          href="#"
                          target="_blank"
                          title="Follow on Instagram"
                        >
                          <svg
                            focusable="false"
                            class="svg-inline--fa fa-instagram-square fa-w-14"
                            width="14px"
                            height="14px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card card-item">
                  <div class="card-body">
                    <h3 class="fs-19 pb-3 fw-semi-bold">Photos</h3>
                    <div class="divider">
                      <span></span>
                    </div>
                    <div class="photo-gallery pt-4">
                      <div class="row mb-3">
                        <div class="col-lg-12">
                          <a
                            href="images/img6.jpg"
                            class="gallery-item"
                            data-fancybox="company-detail-gallery"
                          >
                            <img src="images/img6.jpg" alt="review image" />
                          </a>
                        </div>
                        <div class="col-lg-6">
                          <a
                            href="images/img7.jpg"
                            class="gallery-item"
                            data-fancybox="company-detail-gallery"
                          >
                            <img src="images/img7.jpg" alt="review image" />
                          </a>
                        </div>
                        <div class="col-lg-6">
                          <a
                            href="images/img8.jpg"
                            class="gallery-item"
                            data-fancybox="company-detail-gallery"
                          >
                            <img src="images/img8.jpg" alt="review image" />
                          </a>
                        </div>
                        <div class="col-lg-12">
                          <div class="collapse" id="showMoreTags">
                            <div class="row">
                              <div class="col-lg-6">
                                <a
                                  href="images/img9.jpg"
                                  class="gallery-item"
                                  data-fancybox="company-detail-gallery"
                                >
                                  <img
                                    src="images/img9.jpg"
                                    alt="review image"
                                  />
                                </a>
                              </div>
                              <div class="col-lg-6">
                                <a
                                  href="images/img10.jpg"
                                  class="gallery-item"
                                  data-fancybox="company-detail-gallery"
                                >
                                  <img
                                    src="images/img10.jpg"
                                    alt="review image"
                                  />
                                </a>
                              </div>
                              <div class="col-lg-6">
                                <a
                                  href="images/img11.jpg"
                                  class="gallery-item"
                                  data-fancybox="company-detail-gallery"
                                >
                                  <img
                                    src="images/img11.jpg"
                                    alt="review image"
                                  />
                                </a>
                              </div>
                              <div class="col-lg-6">
                                <a
                                  href="images/img10.jpg"
                                  class="gallery-item"
                                  data-fancybox="company-detail-gallery"
                                >
                                  <img
                                    src="images/img10.jpg"
                                    alt="review image"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        class="collapse-btn btn theme-btn theme-btn-outline w-100 fw-regular"
                        data-bs-toggle="collapse"
                        href="#showMoreTags"
                        role="button"
                        aria-expanded="false"
                        aria-controls="showMoreTags"
                      >
                        <span class="collapse-btn-hide">
                          See 4 more photos
                          <i class="la la-angle-down ms-1 fs-11"></i>
                        </span>
                        <span class="collapse-btn-show">
                          Show less<i class="la la-angle-up ms-1 fs-11"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card card-item">
                  <div class="card-body">
                    <h3 class="fs-19 pb-3 fw-semi-bold">Office Locations</h3>
                    <div class="divider">
                      <span></span>
                    </div>
                    <ul class="generic-list-item pt-3 pb-2 fs-15">
                      <li>
                        <a href="#">
                          <svg
                            class="me-1"
                            xmlns="http://www.w3.org/2000/svg"
                            height="19px"
                            viewBox="0 0 24 24"
                            width="19px"
                            fill="#6c727c"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>{" "}
                          Via Ufente, 20 04100 Latina Italy
                        </a>
                      </li>
                    </ul>
                    <div id="map" class="h-200px"></div>
                  </div>
                </div>
                <div class="card card-item">
                  <div class="card-body">
                    <h3 class="fs-19 pb-3 fw-semi-bold">Company Benefits</h3>
                    <div class="divider">
                      <span></span>
                    </div>
                    <ul class="generic-list-item pt-3 fs-15">
                      <li>
                        <svg
                          class="me-1"
                          xmlns="http://www.w3.org/2000/svg"
                          enable-background="new 0 0 24 24"
                          height="19px"
                          viewBox="0 0 24 24"
                          width="19px"
                          fill="#6c727c"
                        >
                          <g>
                            <path d="M0,0h24v24H0V0z" fill="none" />
                          </g>
                          <g>
                            <path d="M17,10c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v3c0,1.1,0.9,2,2,2h1v2H7c-1.1,0-2,0.9-2,2v7h2v-3h10v3h2v-7 c0-1.1-0.9-2-2-2h-1v-2H17z M7,8V5h10v3H7z M17,16H7v-2h10V16z M14,12h-4v-2h4V12z" />
                          </g>
                        </svg>{" "}
                        Remote or office work
                      </li>
                      <li>
                        <svg
                          class="me-1"
                          xmlns="http://www.w3.org/2000/svg"
                          height="19px"
                          viewBox="0 0 24 24"
                          width="19px"
                          fill="#6c727c"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                        </svg>{" "}
                        Competitive salary
                      </li>
                      <li>
                        <svg
                          class="me-1"
                          xmlns="http://www.w3.org/2000/svg"
                          height="19px"
                          viewBox="0 0 24 24"
                          width="19px"
                          fill="#6c727c"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                        </svg>{" "}
                        Flexible work hours
                      </li>
                      <li>
                        <svg
                          class="me-1"
                          xmlns="http://www.w3.org/2000/svg"
                          enable-background="new 0 0 24 24"
                          height="19px"
                          viewBox="0 0 24 24"
                          width="19px"
                          fill="#6c727c"
                        >
                          <g>
                            <path d="M0,0h24v24H0V0z" fill="none" />
                          </g>
                          <g>
                            <path d="M16,7.08c0,1.77-0.84,3.25-2,3.82V21h-2V10.9c-1.16-0.57-2-2.05-2-3.82C10.01,4.83,11.35,3,13,3C14.66,3,16,4.83,16,7.08z M17,3v18h2v-8h2V7C21,5.24,19.76,3,17,3z M8.28,3c-0.4,0-0.72,0.32-0.72,0.72V7H6.72V3.72C6.72,3.32,6.4,3,6,3 S5.28,3.32,5.28,3.72V7H4.44V3.72C4.44,3.32,4.12,3,3.72,3S3,3.32,3,3.72V9c0,1.1,0.9,2,2,2v10h2V11c1.1,0,2-0.9,2-2V3.72 C9,3.32,8.68,3,8.28,3z" />
                          </g>
                        </svg>{" "}
                        Unlimited snacks and drinks
                      </li>
                      <li>
                        <svg
                          class="me-1"
                          xmlns="http://www.w3.org/2000/svg"
                          height="19px"
                          viewBox="0 0 24 24"
                          width="19px"
                          fill="#6c727c"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
                        </svg>{" "}
                        Top-notch equipment
                      </li>
                      <li>
                        <svg
                          class="me-1"
                          xmlns="http://www.w3.org/2000/svg"
                          height="19px"
                          viewBox="0 0 24 24"
                          width="19px"
                          fill="#6c727c"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M12 9c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zm7 5.58c-2.53.34-4.93 1.3-7 2.82-2.06-1.52-4.47-2.49-7-2.83v-6.95c2.1.38 4.05 1.35 5.64 2.83L12 14.28l1.36-1.27c1.59-1.48 3.54-2.45 5.64-2.83v6.95z" />
                        </svg>{" "}
                        Study Fridays
                      </li>
                      <li>
                        <svg
                          class="me-1"
                          xmlns="http://www.w3.org/2000/svg"
                          height="19px"
                          viewBox="0 0 24 24"
                          width="19px"
                          fill="#6c727c"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <circle cx="15.5" cy="9.5" r="1.5" />
                          <circle cx="8.5" cy="9.5" r="1.5" />
                          <path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.7 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        </svg>{" "}
                        Cheerful environment
                      </li>
                      <li>
                        <svg
                          class="me-1"
                          xmlns="http://www.w3.org/2000/svg"
                          height="19px"
                          viewBox="0 0 24 24"
                          width="19px"
                          fill="#6c727c"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M21 19.57l-1.427 1.428-6.442-6.442 1.43-1.428zM13.12 3c-2.58 0-5.16.98-7.14 2.95l-.01.01c-3.95 3.95-3.95 10.36 0 14.31l14.3-14.31C18.3 3.99 15.71 3 13.12 3zM6.14 17.27C5.4 16.03 5 14.61 5 13.12c0-.93.16-1.82.46-2.67.19 1.91.89 3.79 2.07 5.44l-1.39 1.38zm2.84-2.84C7.63 12.38 7.12 9.93 7.6 7.6c.58-.12 1.16-.18 1.75-.18 1.8 0 3.55.55 5.08 1.56l-5.45 5.45zm1.47-8.97c.85-.3 1.74-.46 2.67-.46 1.49 0 2.91.4 4.15 1.14l-1.39 1.39c-1.65-1.18-3.52-1.88-5.43-2.07z" />
                        </svg>{" "}
                        Paid retreats
                      </li>
                      <li>
                        <svg
                          class="me-1"
                          xmlns="http://www.w3.org/2000/svg"
                          enable-background="new 0 0 24 24"
                          height="19px"
                          viewBox="0 0 24 24"
                          width="19px"
                          fill="#6c727c"
                        >
                          <g>
                            <path d="M0,0h24v24H0V0z" fill="none" />
                            <path d="M0,0h24v24H0V0z" fill="none" />
                          </g>
                          <g>
                            <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
                          </g>
                        </svg>{" "}
                        Conferences & Educational budget
                      </li>
                      <li>
                        <svg
                          class="me-1"
                          xmlns="http://www.w3.org/2000/svg"
                          height="19px"
                          viewBox="0 0 24 24"
                          width="19px"
                          fill="#6c727c"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z" />
                        </svg>{" "}
                        Mentoring
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobApplication;
