import Image from "next/image";

const Feature = ({ orientation, content, heading, image }) => {
  return (
    <div className="px-lg-2 px-3 py-3">
      {orientation === "left" ? (
        <div className="row row-cols-1 row-cols-md-2 align-items-center">
          <div className="col-12 col-md-6 col-lg-7 feature-content order-1 order-sm-2 order-md-1 pe-0 pe-md-5">
            <h3>{heading}</h3>
            {content &&
              content.map((v, i) => {
                return <p key={i}>{v}</p>;
              })}
          </div>
          <div className="position-relative col-12 col-md-6 col-lg-5 px-0 d-flex align-items-center border-r overflow-hidden shadow feature-img mb-3 mb-md-0 order-2 order-sm-1 order-md-2 ">
            <Image className="w-full h-auto cover" src={image} alt={heading} quality={100} />
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 align-items-center">
          <div className="col-12 col-md-6 col-lg-5 p-0 d-flex align-items-center border-r overflow-hidden shadow feature-img mb-3 mb-md-0 h-full">
            <Image className="w-full h-auto cover" src={image} alt={heading} quality={100} />
          </div>
          <div className="col-12 col-md-6 col-lg-7 feature-content ps-0 ps-md-5">
            <h3>{heading}</h3>
            {content &&
              content.map((v, i) => {
                return (
                  <p key={i} className={`content-misv-${i}`}>
                    {v}
                  </p>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Feature;
