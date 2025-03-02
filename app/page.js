import HomeBanner from "@/components/home/homeBanner";
import styles from "./page.module.css";
import AboutSection from "@/components/home/aboutSection";
import ServicesSection from "@/components/home/serviceSection";
import GallerySection from "@/components/home/gallerySection";
import FaqSection from "@/components/home/faq";
import LetsPlan from "@/components/home/letsPlan";
import Testimonial from "@/components/home/testimonial";


export default function Home() {
  return (
    <div >
   <HomeBanner />
   <AboutSection />
   <ServicesSection/>
   <GallerySection/>
   <Testimonial/>
   <FaqSection />
   <LetsPlan />
    </div>
  );
}
