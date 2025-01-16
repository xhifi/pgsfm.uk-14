import Link from "next/link";
import Image from "next/image";
import BrandBg from "@/static/images/brand-bg.svg";

const CallToAction = ({ heading, content, certificates, refLink, refText }) => {
  return (
    <div className="container-fluid px-3 px-lg-5 py-5 text-center bg-main bg-gradient shadow-lg cta-section">
      <span className="stamp-bg">
        <Image src={BrandBg} alt={heading} width={300} height={300} quality={75} />
      </span>
      <h2>{heading}</h2>
      <>
        {content &&
          content?.map((v, i) => {
            return <p key={i}>{v.p}</p>;
          })}
      </>
      {certificates && (
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-2">
          {certificates.map((certificate, i) => {
            return (
              <Link href={certificate.url} key={certificate.title} className="certificate" passHref>
                <Image src={certificate.image} alt={certificate.title} quality={75} style={{ height: "120px", width: "auto" }} />
              </Link>
            );
          })}
        </div>
      )}
      {refLink && refText && (
        <Link href={refLink} passHref>
          <button className="btn btn-dark">{refText}</button>
        </Link>
      )}
    </div>
  );
};

export default CallToAction;
