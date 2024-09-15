const ServiceSprite = ({ data }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {data.map((v, i) => {
        return (
          <div className="col " key={i}>
            <div className="card h-100 border-0 bg-transparent">
              <div className="card-header bg-white border-0 p-0 px-2 px-md-2 bg-transparent">
                <div className="row align-items-center">
                  <div
                    className="icon col-3 bg-main bg-gradint shadow rounded img-thumbnail d-flex align-items-center justify-content-center"
                    style={{ width: "70px", height: "70px" }}
                  >
                    <i className={`h2 mb-0 bi bi-${v.icon}`}></i>
                  </div>

                  <h5 className="card-title mb-0 col h4">{v.heading}</h5>
                </div>
              </div>
              <div className="card-body px-0">
                <p className="card-text">{v.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSprite;
