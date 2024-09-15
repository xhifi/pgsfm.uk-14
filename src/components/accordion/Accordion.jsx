const Accordion = ({ data }) => {
  return (
    <div className="accordion mb-3 mb-md-0" id="primaryAccordion">
      <h3>Our Solution</h3>
      {data.map((item, index) => {
        return (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed bg-main"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {item.heading}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="primaryAccordion"
            >
              <div className="accordion-body">
                {item.content.map((item, index) => {
                  return <p key={index}>{item.p}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
