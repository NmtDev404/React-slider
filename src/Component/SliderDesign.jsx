import React from "react";

const SliderDesign = (props) => {
  const { proName, proCount, image } = props;
  return (
    <div className="main-container grid lg:grid-cols-2 items-center gap-5 mx-3 max-w-[309px]">
      <div className="rounded-full max-h-32 max-w-32 ">
        <img src={image} width="600" className="rounded-full"
              height="600"/>
      </div>

      <div className="pro-count flex flex-col gap-2 items-start">
        <div>
          <h4>{proName}</h4>
        </div>
        <div>
          <h4>{proCount}products</h4>
        </div>
      </div>
    </div>
  );
};

export default SliderDesign;
