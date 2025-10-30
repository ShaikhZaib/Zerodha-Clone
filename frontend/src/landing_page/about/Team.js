import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>
      <div className="row   text-muted  lh-lg">
        <div className="col  text-center">
          <img
            src="media/images/nithinKamath.jpg"
            className="rounded-circle w-50"
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col fs-5 ">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on &nbsp;
            <a href="" className="text-decoration-none">
              Homepage
            </a>
            &nbsp;/&nbsp;
            <a href="" className="text-decoration-none">
              TradingQnA
            </a>
            &nbsp;/&nbsp;
            <a href="" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
