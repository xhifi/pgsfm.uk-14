import Image from "next/image";

const ServiceCard = ({ data }) => {
  return data.map((v, i) => {
    return (
      <div className="col mb-4" key={i}>
        <div className="card h-100 border-0 border-r shadow">
          <div className="image-container d-block">
            <Image src={v.image} layout="intrinsic" width={1600 / 2} height={1000 / 2} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">{v.heading}</h5>
            <ul className="list-unstyled text-center">
              {v.list.map((l, i) => {
                return (
                  <li className="p-1 bg-main m-1 rounded" key={i}>
                    {l}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  });
};

export default ServiceCard;
