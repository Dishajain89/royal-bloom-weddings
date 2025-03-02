import Banner from "@/components/banner";
import ContactSection from "@/components/contactSection";
import React from "react";

function ContactUs() {
   return (
      <div>
         <Banner title="Contact Us" description="Seamless planning for corporate and social events" backgroundImage="/images/banner1.jpg" />
         <ContactSection />
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24156.231131212043!2d-74.0060157!3d40.7127761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5aaf3b9b1%3A0x5406c3b97a37a7a2!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1708440000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
         ></iframe>
      </div>
   );
}

export default ContactUs;
