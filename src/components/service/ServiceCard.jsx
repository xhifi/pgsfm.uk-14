import Image from "next/image";

const ServiceCard = ({ data }) => {
  return data.map((v, i) => {
    return (
      <div className="col mb-4" key={i}>
        <div className="card h-100 border-0 shadow rounded-lg overflow-hidden">
          <div className="image-container d-block">
            <Image src={v.image} placeholder="blur" quality={25} className="w-full h-auto" alt={v.heading} />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">{v.heading}</h5>
            <ul className="list-unstyled text-center">
              {v.list.map((item) => {
                return (
                  <li className="p-1 bg-main m-1 rounded" key={item}>
                    {item}
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
