import AllServices from "@/components/allServices";
import Banner from "@/components/banner";
import React from "react";

function Services() {
   return (
      <div>
         <Banner title="Services" description="Making your special moments unforgettable." backgroundImage="/images/banner1.jpg" />
         <AllServices />
      </div>
   );
}

export default Services;
