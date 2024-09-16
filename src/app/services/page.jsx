import Feature from "@/components/feature/Feature";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/service/ServiceCard";
import ServiceSprite from "@/components/service/ServiceSprite";
import getPageData from "@/utils/getPageData";
const aboutData = getPageData("about");
const homeData = getPageData();
const servicesData = getPageData("services");

export const metadata = {
  title: "Services",
};

const page = () => {
  return (
    <div>
      <Hero heading="Services" />
      <main>
        <div className="container-fluid px-3 py-5 px-lg-5">
          <h3>We understand your problems</h3>
          <p>
            No two sites have identical security issues, so we consistently develop our range of comprehensive and joined-up security
            services. We provide the best choice of reliable, effective and appropriate ways to meet your individual site requirements,
            risks and budgets. <br />
            Below are a few of the areas that we work in and some outlook of the security services that we provide. We do provide bespoke
            and exceptional services as per the client&apos;s needs. Just give us a call to discuss further in details and one of our
            dedicated team members will guide you through thoroughly.
          </p>
        </div>
        <div className="container-fluid px-3 px-lg-5 pb-5">
          <ServiceSprite data={servicesData.sprites} />
        </div>
        <div className="container-fluid px-3 px-lg-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <ServiceCard data={servicesData.miscellaneous} />
          </div>
        </div>
        <div>
          {servicesData.features.map((v, i) => {
            return (
              <div className="container-fluid px-3 px-lg-5 mb-5" key={i}>
                <Feature heading={v.heading} image={v.image} orientation="right" content={[...v.content.p, ...v.content.ul]} />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
export default page;
