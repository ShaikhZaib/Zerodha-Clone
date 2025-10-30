import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    // <div className="container mt-5">
    //   <div className="row ">
    //     <div className="col p-5 mt-5 ">
    //       <h1>{productName}</h1>
    //       <p>{productDescription}</p>
    //       <div>
    //         <a href={learnMore} className=" text-decoration-none">
    //           learn More <i class="fa-solid fa-arrow-right"></i>
    //         </a>
    //       </div>
    //     </div>
    //     <div className="col ">
    //       <img src={imageURL} className="" />
    //     </div>
    //   </div>
    // </div>
    <div className="container my-5 py-5">
      <div className="row align-items-center">
        <div className="col-md-6 pe-md-5">
          <h1 className="mb-3">{productName}</h1>
          <p className="mb-4">{productDescription}</p>
          <a href={learnMore} className="text-decoration-none">
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-md-6 text-center">
          <img src={imageURL} className="img-fluid p-4" alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
