"use client";
import Image from "next/image";
import styles from "./style.module.scss";

const services = [
    {
      id: 1,
      title: "Luxury Indian Weddings",
      description: "Experience the grandeur of traditional Indian weddings with vibrant decor, rituals, and unforgettable moments.",
      imgSrc: "/images/services/indian-wedding.jpg",
    },
    {
      id: 2,
      title: "Royal Reception Events",
      description: "Celebrate your love with an elegant reception event featuring stunning decor, lighting, and premium hospitality.",
      imgSrc: "/images/services/reception.jpg",
    },
    {
      id: 3,
      title: "Pre-Wedding Shoots",
      description: "Cherish the beginning of your journey with beautifully curated engagement ceremonies and pre-wedding shoots.",
      imgSrc: "/images/services/pre-wedding.jpg",
    },
    {
      id: 4,
      title: "Themed Birthday Parties",
      description: "From fairytale themes to luxury gala nights, we bring your dream birthday celebrations to life.",
      imgSrc: "/images/services/birthday.jpg",
    },
    {
      id: 5,
      title: "Destination Weddings",
      description: "Plan your perfect wedding at breathtaking destinations with complete event coordination and styling.",
      imgSrc: "/images/services/destination-wedding.jpg",
    },
  ];
  

const ServicesSection = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        {/* <div className={styles.separator}></div> Decorative Separator */}
        <h2>Our <span>Services</span></h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={service.imgSrc} alt={service.title} width={400} height={300} priority />
                <div className={styles.overlay}>
                  <p>{service.description}</p>
                </div>
              </div>
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
