import React from "react";

const Pagination = () => {
  return (
    <div class="pager pt-20px">
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
      <p class="fs-13 pt-2">Showing 1-20 of 50,577 results</p>
    </div>
  );
};

export default Pagination;
