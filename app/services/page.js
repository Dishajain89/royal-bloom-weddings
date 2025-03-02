import AllServices from "@/components/allServices";
import Banner from "@/components/banner";
import FaqSection from "@/components/home/faq";
import LetsPlan from "@/components/home/letsPlan";
import React from "react";

function Services() {
   return (
      <div>
         <Banner title="Services" description="Making your special moments unforgettable." backgroundImage="/images/banner1.jpg" />
         <AllServices />
         <FaqSection />
         <LetsPlan/>
      </div>
   );
}

export default Services;
