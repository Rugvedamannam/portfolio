// import React, { useState } from "react";
// import axios from "axios";
// import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
// import styles from "./Contact.module.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState(""); // For success/error messages

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("https://server-r1bqyldia-mannam-rugvedas-projects.vercel.app/send-email", formData);
//       setStatus(response.data.success);
//       setFormData({ name: "", email: "", message: "" }); // Clear form after success
//     } catch (error) {
//       setStatus(error.response?.data?.error || "Failed to send message. Please try again.");
//     }
//   };

//   return (
//     <div className={styles.contactContainer}>
//       {/* Left Section - Contact Details */}
//       <div className={styles.contactInfo}>
//         <h2 className={styles.heading}>Get in Touch</h2>
//         <p><FaEnvelope className={styles.icon} /> rugvedamannam@gmail.com</p>
//         <p><FaMapMarkerAlt className={styles.icon} /> Andhra Pradesh, INDIA</p>
//       </div>

//       {/* Right Section - Contact Form */}
//       <div className={styles.contactFormBox}>
//         <h2 className={styles.heading}>Contact Me</h2>
//         <form onSubmit={handleSubmit} className={styles.contactForm}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className={styles.input}
//           />

//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className={styles.input}
//           />

//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className={styles.textarea}
//           />

//           <button type="submit" className={styles.sendButton}>
//             <FaPaperPlane className={styles.buttonIcon} /> Send Message
//           </button>
//           {status && <p className={styles.statusMessage}>{status}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Configuration
    const serviceID = "service_qgzxorg";
    const templateID = "template_btvguis";
    const publicKey = "jTL2E1REgFIEQMgEi"; // FIX: Ensure correct API key

    // EmailJS expects a specific format
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("Failed to send message. Try again.");
      });
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p><FaEnvelope className={styles.icon} /> rugvedamannam@gmail.com</p>
        <p><FaMapMarkerAlt className={styles.icon} /> Ongole, AP</p>
      </div>

      <div className={styles.contactFormBox}>
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.textarea}
          />

          <button type="submit" className={styles.sendButton}>
            <FaPaperPlane className={styles.buttonIcon} /> Send Message
          </button>
          {status && <p className={styles.statusMessage}>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;