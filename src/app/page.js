// "use client";

import CallToAction from "@/components/calltoaction/Cta";
import Slider from "@/components/carousel/CarouselSlide";
import Services from "@/components/service/Services";
import Features from "@/components/feature/Features";
import Accordion from "@/components/accordion/Accordion";
import ProgressBar from "@/components/progress/ProgressBar";

import getPageData from "@/utils/getPageData";

const servicesData = getPageData("services");
const homeData = getPageData();

export default function Home() {
  return (
    <main>
      <Slider data={homeData.slides} />
      <CallToAction heading={homeData.callToAction.title} content={homeData.callToAction.content} />
      <Services data={servicesData.services} />
      <Features data={homeData.features} />

      <div className="container-fluid pb-5 px-3 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2">
          <Accordion data={homeData.solutions} />
          <ProgressBar data={homeData.expertise} />
        </div>
      </div>
    </main>
  );
}
