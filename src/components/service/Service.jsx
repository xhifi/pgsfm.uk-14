const Service = ({ heading, content, refLink, refText, icon }) => {
  return (
    <div className="col ">
      <div className="card h-100 border-0 text-center bg-transparent">
        <div
          className="bg-main bg-gradient shadow rounded-circle mb-3 mx-auto d-flex align-items-center justify-content-center"
          style={{ width: "100px", height: "100px" }}
        >
          <i className={`h1 mb-0 bi bi-${icon}`}></i>
        </div>
        <span className="h3">{heading}</span>
        <>
          {content &&
            content.map((v, i) => {
              return <p key={i}>{v.p}</p>;
            })}
        </>
        {/* <Link href={refLink || "/"} passHref>
          <button className="btn btn-sm btn-main w-50">{refText}</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Service;
