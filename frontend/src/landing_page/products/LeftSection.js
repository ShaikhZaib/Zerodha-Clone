import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    // <div className="container mt-5">
    //   <div className="row ">
    //     <div className="col  ">
    //       <img src={imageURL} className="" />
    //     </div>
    //     <div className="col p-5 mt-5">
    //       <h1>{productName}</h1>
    //       <p>{productDescription}</p>
    //       <div>
    //         <a href={tryDemo} className="text-decoration-none">
    //           Try Demo <i class="fa-solid fa-arrow-right"></i>
    //         </a>
    //         <a href={learnMore} className="mx-5 text-decoration-none">
    //           learn More <i class="fa-solid fa-arrow-right"></i>
    //         </a>
    //       </div>
    //       <div className="mt-3">
    //         <a href={googlePlay}>
    //           <img src="media/images/googlePlayBadge.svg" />
    //         </a>
    //         <a href={appStore} className="mx-3">
    //           <img src="media/images/appstoreBadge.svg" />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container my-5 py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img src={imageURL} className="img-fluid p-4" alt={productName} />
        </div>
        <div className="col-md-6 ps-md-5">
          <h1 className="mb-3">{productName}</h1>
          <p className="mb-4">{productDescription}</p>
          <div className="mb-4">
            <a href={tryDemo} className="text-decoration-none me-4">
              Try Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href={learnMore} className="text-decoration-none">
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay} className="me-3">
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
