import React from "react";

const Error = () => {
  return (
    <section class="error-area section-padding position-relative">
      <span class="icon-shape icon-shape-1"></span>
      <span class="icon-shape icon-shape-2"></span>
      <span class="icon-shape icon-shape-3"></span>
      <span class="icon-shape icon-shape-4"></span>
      <span class="icon-shape icon-shape-5"></span>
      <span class="icon-shape icon-shape-6"></span>
      <span class="icon-shape icon-shape-7"></span>
      <div class="container">
        <div class="media align-items-center justify-content-center error-content">
          <img
            src="images/404.svg"
            alt="error-image"
            class="img-fluid me-5 error-content-img"
          />
          <div class="media-body flex-inherit">
            <h2 class="section-title pb-3">Page not found!</h2>
            <p class="section-desc pb-4">
              We're sorry, we couldn't find the page you requested.
            </p>
            <ul class="generic-list-item">
              <li>
                Try{" "}
                <a href="#" class="d-inline-block text-color hover-underline">
                  searching for similar questions
                </a>
              </li>
              <li>
                Browse{" "}
                <a
                  href="questions-layout-2.html"
                  class="d-inline-block text-color hover-underline"
                >
                  our recent questions
                </a>
              </li>
              <li>
                Browse{" "}
                <a
                  href="tags-list.html"
                  class="d-inline-block text-color hover-underline"
                >
                  our popular tags
                </a>
              </li>
              <li>
                If you feel something is missing that should be here,{" "}
                <a
                  href="contact.html"
                  class="d-inline-block text-color hover-underline"
                >
                  contact us
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
