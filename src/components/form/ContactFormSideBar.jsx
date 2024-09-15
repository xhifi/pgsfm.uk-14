const ContactFormSideBar = ({ siteData }) => {
  const { address, phone, email } = siteData;
  return (
    <div>
      <ul className="list-unstyled">
        {address && (
          <li>
            <a
              className="text-black text-decoration-none text-white"
              href="https://www.google.com/maps/dir//%E2%80%A2+Challenge+House+Business+Centre,+616+Mitcham+Rd,+Croydon+CR0+3AA,+UK/@51.389559,-0.129084,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x487606fd5980a359:0x1fbb86874a2d427f!2m2!1d-0.1290835!2d51.3895589?hl=en-GB"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="bi bi-geo-alt-fill me-2"></i>
              <b>Click for Directions</b> - {siteData.address}
            </a>
          </li>
        )}
        {phone && (
          <li className="text-white">
            <a className="text-black text-decoration-none text-white" href={`tel:${siteData.phone}`}>
              <i className="bi bi-telephone-fill me-2"></i>
              {siteData.phone}
            </a>
          </li>
        )}
        {email && (
          <li className="text-white">
            <a className="text-black text-decoration-none text-white" href={`mailto:${siteData.email}`}>
              <i className="bi bi-envelope-fill me-2"></i>
              {siteData.email}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ContactFormSideBar;
