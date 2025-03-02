"use client";
import styles from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Riya & Ruhan",
    image: "/images/clients/client1.jpg",
    review:
      "Royal Bloom Weddings made our special day magical! Every detail was perfect. Their professionalism and creativity turned our dream wedding into reality!",
  },
  {
    name: "Aarav & Meera",
    image: "/images/clients/client2.jpg",
    review:
      "A dream wedding come true! The decor, the planning, and the flawless execution made our big day stress-free and unforgettable. Highly recommend!",
  },
  {
    name: "Vikram & Ananya",
    image: "/images/clients/client3.jpg",
    review:
      "Flawless execution, stunning decor, and a team that truly cares! We couldn't have asked for a better experience. Thank you, Royal Bloom Weddings!",
  },
];

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
        <h3 className={styles.title}>Client <span>Review</span></h3>
      <div className={styles.container}>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 75000 }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          modules={[Navigation, Autoplay]}
          className={styles.swiper}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.content}>
                {/* Left Side - Review */}
                <div className={styles.review}>
                  <p className={styles.quote}>“{item.review}”</p>
                  <h4 className={styles.name}>— {item.name}</h4>

                  {/* Navigation Buttons */}
                  <div className={styles.navigation}>
                    <button className="prev">‹</button>
                    <button className="next">›</button>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={400}
                    className={styles.image}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
