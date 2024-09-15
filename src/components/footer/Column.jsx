import Link from "../Link";

const Column = ({ list, title, numOfCols }) => {
  return (
    <div className={`col-12 col-md-4 col-lg-2 text-white px-3 mb-4 mb-lg-0`}>
      <h5 className="text-main">{title}</h5>
      <ul className="list-unstyled m-0 p-0">
        {list.map((v, i) => {
          return (
            <li key={i}>
              <i className="bi bi-chevron-right"></i>
              <Link className="text-decoration-none text-white" href={v.link}>
                {v.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Column;
