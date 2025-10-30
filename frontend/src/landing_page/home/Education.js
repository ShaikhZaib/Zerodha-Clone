import React from "react";

function Education() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" className="w-75" />
        </div>
        <div className="col-6">
          <h1 className="fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="me-5 text-decoration-none">
            Versity<i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            india for all your market related queries.
          </p>
          <a href="" className="me-5 text-decoration-none">
            Trading Q&A<i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
