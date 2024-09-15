import Service from "./Service";

const Services = ({ data }) => {
  return (
    <div className="container-fluid py-5 px-3 px-lg-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {data &&
          data.map((v, i) => {
            return v && <Service key={i} image={v.image} heading={v.heading} content={v.content} icon={v.icon} />;
          })}
      </div>
    </div>
  );
};

export default Services;
