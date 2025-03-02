"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./style.module.scss";

const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form validation schema
  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Too short").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      message: Yup.string().min(10, "Too short").required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 3000);
      resetForm();
    },
  });

  return (
    <section className={styles.contactSection} id="contact">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left: Contact Details */}
        <div className={styles.contactDetails}>
          <h2>Contact Us</h2>
          <p>Let’s plan your dream event together!</p>
          <ul>
            <li><FaPhoneAlt /> +1 (234) 567-890</li>
            <li><MdEmail /> contact@royalbloomweddings.com</li>
            <li> <FaLocationDot /> New York, USA</li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div className={styles.contactForm}>
          <h3>Send Us a Message</h3>
          {formSubmitted && <p className={styles.success}>Message sent successfully!</p>}
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              {...formik.getFieldProps("name")}
              className={formik.touched.name && formik.errors.name ? styles.error : ""}
            />
            {formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              {...formik.getFieldProps("email")}
              className={formik.touched.email && formik.errors.email ? styles.error : ""}
            />
            {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}

            <textarea
              name="message"
              placeholder="Your Message"
              {...formik.getFieldProps("message")}
              className={formik.touched.message && formik.errors.message ? styles.error : ""}
            />
            {formik.touched.message && formik.errors.message && <span>{formik.errors.message}</span>}

            <motion.button type="submit" whileHover={{ scale: 1.05 }}>
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
