"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import Link from "next/link";

const galleryImages = [
  { id: 1, src: "/images/banner1.jpg", alt: "Wedding Ceremony" },
  { id: 2, src: "/images/banner2.jpg", alt: "Bride & Groom" },
  { id: 3, src: "/images/banner3.jpg", alt: "Luxury Wedding Setup" },
  { id: 4, src: "/images/banner1.jpg", alt: "Wedding Reception" },
];

const GallerySection = () => {
  return (
    <section className={styles.gallery}>
      {/* Background Image Using Next.js Image */}
      <div className={styles.backgroundImage}>
        <Image
          src="/images/gallery/gallery-bg.jpg"
          alt="Royal Wedding Celebration"
          fill
          priority
          quality={90}
          className={styles.bgImage}
        />
      </div>

      {/* Foreground Image Grid */}
      <div className={styles.galleryWrapper}>
        <h4 className={styles.title}>Our <span>Gallery</span> </h4>
      <div className={styles.galleryContainer}>
        {galleryImages.map((image) => (
          <Link href="/gallery" key={image.id} className={styles.galleryItem}>
            <Image src={image.src} alt={image.alt} width={350} height={250} priority />
          </Link>
        ))}
      </div>
      </div>
    
    </section>
  );
};

export default GallerySection;
