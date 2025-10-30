import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            We are proud to be recognized as the largest broker in the world,
            serving millions of clients globally with unparalleled services and
            support.
          </p>
          <div className="row">
            <div className="col-6 ">
              <ul>
                <li>
                  <p>Over 5 million active clients</p>
                </li>
                <li>
                  <p>More than 200 million trades executed annually </p>
                </li>
                <li>
                  <p>Presence in over 100 countries </p>
                </li>
              </ul>
            </div>
            <div className="col-6 ">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Commodity derivitives</p>
                </li>
                <li>
                  <p>Currency derivitives</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" className="w-75" />
        </div>
      </div>
    </div>
  );
}

export default Awards;
