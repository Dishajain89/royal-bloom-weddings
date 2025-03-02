"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you offer for weddings?",
    answer: "We offer full-service wedding planning, decor, vendor coordination, and on-the-day management to ensure a seamless experience.",
  },
  {
    question: "Can we customize our wedding package?",
    answer: "Yes! We provide fully customizable packages tailored to your specific needs, preferences, and budget.",
  },
  {
    question: "Do you provide destination wedding planning?",
    answer: "Absolutely! We specialize in organizing destination weddings, taking care of all logistics, from venue selection to guest accommodations.",
  },
  {
    question: "How far in advance should we book your services?",
    answer: "We recommend booking at least 6-12 months in advance to ensure availability and proper planning for your dream wedding.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently <span>Asked Questions</span> </h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={`${styles.faqItem} ${openIndex === index ? styles.open : ""}`} onClick={() => toggleFAQ(index)}>
              <div className={styles.faqQuestion}>
                <h3>{faq.question}</h3>
                <span>{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
              </div>
              <div className={styles.faqAnswer}>{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
