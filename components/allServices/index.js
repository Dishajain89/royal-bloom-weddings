"use client";
import Image from "next/image";
import styles from "./style.module.scss";

const services = [
    {
      id: 1,
      title: "Luxury Indian Weddings",
      description: 
        "Step into a world of grandeur and tradition with our luxury Indian wedding planning services. From regal mandap setups to intricate floral decorations, we bring the richness of Indian heritage to life. Our expert team ensures every ritual is beautifully orchestrated, from the vibrant sangeet night to the emotional vidai. With stunning venues, customized decor, and top-tier catering, we create unforgettable wedding experiences that reflect your cultural traditions with elegance and style.",
      imgSrc: "/images/services/indian-wedding.jpg",
    },
    {
      id: 2,
      title: "Royal Receptions",
      description: 
        "Celebrate your union in style with our royal wedding reception services. Whether you dream of a grand ballroom affair, a lavish outdoor gala, or an intimate candlelit dinner, we curate breathtaking receptions tailored to your vision. Our services include bespoke decor, premium catering, live entertainment, and meticulous event management to ensure a flawless evening. Let us create a magical atmosphere where every detail reflects sophistication and romance.",
      imgSrc: "/images/services/reception.jpg",
    },
    {
      id: 3,
      title: "Themed Birthday Celebrations",
      description: 
        "Turn every birthday into an extraordinary celebration with our themed party planning services. Whether it’s a fairy-tale princess party, a high-energy superhero adventure, or an elegant milestone birthday, we design immersive experiences with unique decor, engaging entertainment, and exquisite catering. From personalized invitations to custom cakes and interactive activities, we take care of everything, ensuring your special day is filled with joy, laughter, and unforgettable memories.",
      imgSrc: "/images/services/birthday.jpg",
    },
    {
      id: 4,
      title: "Destination Weddings",
      description: 
        "Say ‘I do’ at the most breathtaking destinations with our expert destination wedding planning. Whether you dream of a beachside ceremony, a castle wedding in Europe, or a serene hilltop retreat, we handle all logistics, from venue selection and travel arrangements to decor and guest experiences. We collaborate with top vendors worldwide to bring your vision to life, ensuring a stress-free, magical wedding in the most picturesque settings.",
      imgSrc: "/images/services/destination-wedding.jpg",
    },
  ];
  

const ALlSection = () => {
  return (
    <section className={styles.services}>
      <div className={styles.sectionHeader}>
        <h2>Our Services</h2>
      </div>
      {services.map((service, index) => (
        <div key={service.id} className={styles.serviceItem}>
          <div className={styles.text}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={service.imgSrc} alt={service.title} width={500} height={350} priority />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ALlSection;
