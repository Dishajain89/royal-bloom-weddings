import Banner from "@/components/banner";
import AboutSection from "@/components/home/aboutSection";
import FaqSection from "@/components/home/faq";
import LetsPlan from "@/components/home/letsPlan";
import React from "react";

function AboutUs() {
   return <div>
      <Banner 
      title="About Us"
      description="Creating unforgettable wedding experiences with elegance and perfection."
      backgroundImage="/images/banner1.jpg"
       />
       <AboutSection/>
       <FaqSection />
       <LetsPlan />
   </div>;
}

export default AboutUs;
