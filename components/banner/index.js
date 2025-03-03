"use client";
import styles from "./style.module.scss";
import Image from "next/image";

const Banner = ({ title, description, backgroundImage }) => {
  return (
    <section className={styles.aboutBanner}>
      <div className={styles.imageWrapper}>
        <Image
          src={backgroundImage}
          alt="About Banner"
          fill style={{ objectFit: "cover" }}
          priority
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default Banner;
