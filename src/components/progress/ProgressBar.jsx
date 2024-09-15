const ProgressBar = ({ data }) => {
  return (
    <div>
      <h3>Our Expertise</h3>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <span className="d-block mb-1">{item.heading}</span>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-main"
                role="progressbar"
                style={{ width: item.percent + "%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
