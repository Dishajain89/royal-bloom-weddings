"use client";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

const eventImages = [
  { src: "/images/banner1.jpg", alt: "Luxury Wedding Setup" },
  { src: "/images/banner2.jpg", alt: "Traditional Indian Wedding" },
  { src: "/images/banner3.jpg", alt: "Grand Reception Hall" },
  { src: "/images/banner1.jpg", alt: "Floral Wedding Stage" },
];

const LetsPlan = () => {
  return (
    <section className={styles.letsPlan}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <motion.div 
          className={styles.textSection}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Let's Plan Your Dream Event</h2>
          <p className={styles.text}>
            Whether it's a wedding, birthday, or corporate event, we bring your vision to life with elegance and perfection.
          </p>
          <motion.a 
            href="/contactUs" 
            className={styles.ctaButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Started
          </motion.a>
        </motion.div>

        {/* Event Image Grid */}
        <motion.div 
          className={styles.imageGrid}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {eventImages.map((image, index) => (
            <motion.div 
              key={index} 
              className={styles.imageWrapper}
              whileHover={{ scale: 1.05 }}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={150} 
                height={150} 
                className={styles.gridImage}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LetsPlan;
