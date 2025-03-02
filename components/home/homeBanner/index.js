"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./style.module.scss";

// Banner Data Array
const slides = [
  {
    id: 1,
    image: "/images/banner1.jpg",
    alt: "Luxury Wedding Setup",
    title: "Unforgettable Weddings",
    description: "Luxury. Elegance. Perfection.",
  },
  {
    id: 2,
    image: "/images/banner2.jpg",
    alt: "Royal Wedding Decor",
    title: "Make Your Dream Wedding a Reality",
    description: "With our expert planners & designers.",
  },
  {
    id: 3,
    image: "/images/banner3.jpg",
    alt: "Elegant Wedding Venue",
    title: "Every Detail, Perfected",
    description: "From venues to decor, we handle it all.",
  },
];

const HomeBanner = () => {
  return (
    <section className={styles.banner}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div className={styles.overlay}></div>
            <Image
              src={slide.image}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              priority
              quality={90}
            />
            <div className={styles.content}>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeBanner;
