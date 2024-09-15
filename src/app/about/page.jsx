import Accordion from "@/components/accordion/Accordion";
import Feature from "@/components/feature/Feature";
import Hero from "@/components/Hero";
import ProgressBar from "@/components/progress/ProgressBar";
import getPageData from "@/utils/getPageData";
const aboutData = getPageData("about");
const homeData = getPageData();

export const metadata = {
  title: "About",
};

const page = () => {
  return (
    <div>
      <Hero heading={aboutData.title} description={aboutData.description} />
      <main>
        <div>
          {aboutData.features.map((v, i) => {
            return (
              <div className="container-fluid px-3 px-lg-5" key={i}>
                <Feature orientation={v.orientation} content={v.content.p} heading={v.content.h} image={v.image} />
              </div>
            );
          })}
        </div>
        <div className="container-fluid px-3 px-lg-5 mb-4">
          <h2>Our Expertise</h2>
          <p>
            During our time as a pioneer security company, we have developed certain benchmarks and thresholds for our performance and how
            we do in certain areas. Our extensive experience of providing security and support services has taught us the value of utilising
            local expertise with the highest international standards of risk and project management.
            <br />
            We select and empower the best people to work with is. We regularly update our local knowledge, expertise and procedures, and
            respond immediately and effectively to the changing needs of our clients.
            <br />
            The five key concepts of our Approach are:
          </p>
          <ol>
            <li>An in depth understanding of the value to our clients in creating a safe and secure environment.</li>
            <li>A readiness to recruit, train, develop and embed local talent and capabilities in the services we offer.</li>
            <li>A willingness to engage with various communities to resolve security challenges.</li>
            <li>Close and continuous contact with our clients to ensure we adapt our services to meet emerging and new requirements.</li>
            <li>Rigorous quality control and compliance.</li>
          </ol>
          <ProgressBar data={homeData.expertise} />
          <div className="row row-cols-1 row-cols-md-2 mt-4">
            <div className="col">
              <h3>Why Choose Us?</h3>
              <p>
                Professional Guard Services Ltd. gives a quality service! Customer satisfaction is high on our agenda and we work hard at
                building good relationships with the people we work with. Good communication ensures we know exactly what our customers
                want, and our aim is to see satisfied customers and a confident delivery team.
              </p>
              <p>Professional Guard Services Ltd. recruits people who want to work and will go that extra mile to achieve.</p>
              <p>
                Furthermore, our vision is to provide as transparent services as possible. As a result we will make sure that we charge you
                no hidden fee or if there is any other fee, it be told you before it&apos;s payment, thus providing you with excellent
                services and economical support.
              </p>
            </div>
            <div className="col">
              <Accordion data={homeData.solutions} />
            </div>
          </div>
        </div>
        <Hero
          heading="After reading all this, if you want to set up a meeting or connect with us for anymore information, do contact us using the button below. We charge nothing for the meetups."
          headingAlignment="center"
          map="true"
          buttonText="Contact Us"
          buttonRef="/"
        />
      </main>
    </div>
  );
};

export default page;
