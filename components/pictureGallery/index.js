"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.module.scss";

const galleryItems = [
    { id: 1, category: "wedding", src: "/images/gallery/wedding1.jpg", alt: "Wedding Event" },
    { id: 2, category: "wedding", src: "/images/gallery/wedding2.jpg", alt: "Wedding Event" },
    { id: 3, category: "birthday", src: "/images/gallery/birthday1.jpg", alt: "Birthday Event"},
    { id: 4, category: "birthday", src: "/images/gallery/birthday2.jpg", alt: "Birthday Event"},
    { id: 5, category: "pre-wedding", src: "/images/gallery/pre1.jpg", alt: "pre-wedding" },
    { id: 6, category: "pre-wedding", src: "/images/gallery/pre2.jpg", alt: "pre-wedding" },
    { id: 7, category: "wedding", src: "/images/gallery/wedding4.jpg", alt: "Wedding Event" },
    { id: 8, category: "wedding", src: "/images/gallery/wedding5.jpg", alt: "Wedding Event" },
    { id: 9, category: "birthday", src: "/images/gallery/birthday3.jpg", alt: "Birthday Event"},
    { id: 10, category: "birthday", src: "/images/gallery/birthday4.jpg", alt: "Birthday Event"},
    { id: 11, category: "pre-wedding", src: "/images/gallery/pre3.jpg", alt: "pre-wedding" },
    { id: 12, category: "pre-wedding", src: "/images/gallery/pre4.jpg", alt: "pre-wedding" },
    { id: 13, category: "birthday", src: "/images/gallery/birthday5.jpg", alt: "Birthday Event"},
    { id: 14, category: "birthday", src: "/images/gallery/birthday6.jpg", alt: "Birthday Event"},
    { id: 15, category: "wedding", src: "/images/gallery/wedding6.jpg", alt: "Wedding Event" },
    { id: 16, category: "wedding", src: "/images/gallery/wedding7.jpg", alt: "Wedding Event" },
    { id: 17, category: "pre-wedding", src: "/images/gallery/pre5.jpg", alt: "pre-wedding" },
    { id: 18, category: "pre-wedding", src: "/images/gallery/pre6.jpg", alt: "pre-wedding" },
  ];

const categories = ["all", "wedding", "birthday", "pre-wedding"];

export default function PictureGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.title}>Our Events</h2>
      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterButton} ${activeCategory === cat ? styles.active : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className={styles.gridContainer}>
        {filteredItems.map((item, index) => (
          <div key={item.id} className={styles.imageWrapper} onClick={() => openModal(index)}>
            <Image src={item.src} alt={item.alt} width={300} height={200} className={styles.image} />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImageIndex !== null && (
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={closeModal}>✖</button>
          <Swiper
            initialSlide={selectedImageIndex}
            navigation
            keyboard={{ enabled: true }}
            modules={[Navigation, Keyboard]}
            className={styles.swiper}
          >
            {filteredItems.map((item) => (
              <SwiperSlide key={item.id}>
                <Image src={item.src} alt={item.alt} width={1200} height={800} className={styles.fullImage} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
}
