import Feature from "./Feature";

export default function Features({ data }) {
  return (
    <div className="container-fluid px-3 px-lg-5 py-5">
      {data.map((v, i) => {
        return <Feature key={i} orientation={v.orientation} content={v.content.p} heading={v.heading} image={v.image} />;
      })}
    </div>
  );
}
