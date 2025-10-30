import React from "react";

function Stats() {
  return (
    <div className="container p-5">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4 mt-2">Customer-first always</h2>
          <p className="text-muted">
            Our platform offers a comprehensive suite of tools and services
            designed to empower developers.
          </p>
          <h2 className="fs-4 mt-2">No spam or gimmics</h2>
          <p className="text-muted">
            We focus on transparent, useful features — no noise, no shortcuts.
          </p>
          <h2 className="fs-4 mt-2">The zerodha universe</h2>
          <p className="text-muted">
            Explore a wide ecosystem of products and integrations to suit
            different investing needs.
          </p>
          <h2 className="fs-4 mt-2">Do better with money</h2>
          <p className="text-muted">
            Save and invest smarter with low-cost tools, clear insights, and
            automated goals. Watch your money work harder with simple plans that
            help you grow over time.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/images/ecosystem.png" className="w-100" />
          <div className="text-center">
            <a href="" className="me-5 text-decoration-none">
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" className="me-5 text-decoration-none">
              Try Kite demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
