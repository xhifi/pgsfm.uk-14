import Column from "./Column";
import ContactColumn from "./ContactCol";

const Footer = ({ data, contactData }) => {
  return (
    <>
      <div className="container-fluid px-4 py-5 bg-dark site-footer">
        <div className="row">
          <ContactColumn data={contactData} />
          {data.map((item, index) => {
            return <Column key={index} list={item.subjects} title={item.title} numOfCols={data.length} />;
          })}
        </div>
      </div>
      <div className="bg-dark py-2 text-center text-secondary border-top border-secondary">
        <p className="mb-0">{`Registered in England & Wales # ${contactData.reg} | All Rights Reserved Ⓒ`}</p>
      </div>
    </>
  );
};

export default Footer;
