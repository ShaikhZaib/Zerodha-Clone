import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          {" "}
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-muted text-small ">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" className="w-50" />
          <p className="text-muted text-small ">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" className="w-50" />
          <p className="text-muted text-small ">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-2">
          <img src="media/images/zerodhaFundhouse.png" className="w-50" />
          <p className="text-muted text-small ">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-2">
          <img src="media/images/goldenpiLogo.png" className="w-50" />
          <p className="text-muted text-small ">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-2  ">
          <img src="media/images/dittoLogo.png" className="w-25" />
          <p className="text-muted text-small ">Insurance</p>
        </div>
        <button className="p-2 btn btn-primary fs-5 my-5 w-25 d-block mx-auto">
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
