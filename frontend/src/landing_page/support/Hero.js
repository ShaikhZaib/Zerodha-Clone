import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className="p-3  d-flex justify-content-between " id="supportWrapper">
        <h5>Support Portal</h5>
        <a href="">Track tickets</a>
      </div>
      <div className=" row p-5 my-1 ml-5  ">
        <div className=" col p-5  ">
          <h1 className="fs-3">
            {" "}
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg. how do I activate F&O"
            className="w-100 rounded p-4 fs-5 my-3 "
          />
          <br />
          <a href="" className="ml-3 fs-6">
            Track account opening
          </a>
          <a href="" className="mx-3 fs-6">
            Track segment activation
          </a>
          <a href="" className="mx-3 fs-6">
            Intraday margins
          </a>
          <a href="" className="mx-3 fs-6">
            Kite user manual{" "}
          </a>
        </div>
        <div className=" col p-5 my-2 ">
          <h1 className="fs-3">Featured</h1>
          <ol className="lh-lg">
            <li>
              {" "}
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              {" "}
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
