"use client";
import Image from "next/image";
import styles from "./style.module.scss";

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>About <span>Royal Bloom Weddings</span></h2>
          <p>
            At <strong>Royal Bloom Weddings</strong>, we create magical and unforgettable wedding experiences tailored to perfection. 
            With years of expertise in luxury wedding planning, we ensure every detail is handled with elegance and precision.
          </p>
          <p>
            Our team of expert planners, designers, and coordinators work tirelessly to bring your dream wedding to life, 
            from breathtaking venues to exquisite floral arrangements.
          </p>
          <p className={styles.signature}>— Turning Dreams into Reality</p>
        </div>
        
        <div className={styles.images}>
          <div className={styles.imgWrapper}>
            <Image src="/images/banner1.jpg" alt="Elegant Wedding Setup" width={500} height={350} priority />
          </div>
          <div className={styles.imgWrapper}>
            <Image src="/images/banner2.jpg" alt="Royal Wedding Decoration" width={500} height={350} priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
