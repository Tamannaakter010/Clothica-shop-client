/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import BigImg from "../../../assets/about/about1.jpg"; 
import SmallImg from "../../../assets/about/about2.jpg"; 
import BigImg2 from "../../../assets/about/about1.jpg"; // Duplicate for randomness
import SmallImg2 from "../../../assets/about/about2.jpg"; // Duplicate for randomness

export default function About() {
  const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } }
  };

  const imageHover = { scale: 1.05, transition: { duration: 0.3 } };

  // Array of available images
  const images = [
    { src: BigImg, alt: "Decor big showcase 1" },
    { src: SmallImg, alt: "Decor small piece 1" },
    { src: BigImg2, alt: "Decor big showcase 2" },
    { src: SmallImg2, alt: "Decor small piece 2" },
  ];

  // Randomly select 3 unique images
  const shuffledImages = images.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div style={{ padding: "4rem 2rem", backgroundColor: "#f7fafc", minHeight: "100vh" }}>
      
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ fontSize: "2.5rem", fontWeight: "800", color: "#2d3748", marginBottom: "0.5rem" }}
        >
          ABOUT US
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontSize: "1.1rem", color: "#4a5568", maxWidth: "40rem", margin: "0 auto" }}
        >
          Furns is your global destination for unique, cutting-edge furniture designs and diverse home décor inspirations.
        </motion.p>
      </header>

      {/* Image Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Image 1 */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
          style={{ position: "relative" }}
          whileHover={imageHover}
        >
          <img
            src={shuffledImages[0].src}
            alt={shuffledImages[0].alt}
            style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "0.5rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
          />
        </motion.div>

        {/* Image 2 */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
          style={{ position: "relative", overflow: "hidden", borderRadius: "0.5rem" }}
          whileHover={imageHover}
        >
          <img
            src={shuffledImages[1].src}
            alt={shuffledImages[1].alt}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </motion.div>

        {/* Image 3 */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
          style={{ position: "relative", overflow: "hidden", borderRadius: "0.5rem" }}
          whileHover={imageHover}
        >
          <img
            src={shuffledImages[2].src}
            alt={shuffledImages[2].alt}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ gridColumn: "1 / 4", display: "flex", gap: "2rem", marginTop: "2rem" }}
        >
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 8px 15px rgba(0,0,0,0.15)" }}
            style={{ flex: 1, padding: "1.5rem", backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "0.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}
          >
            <h4 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#2d3748", marginBottom: "0.75rem" }}>Our Stores</h4>
            <p style={{ fontSize: "1rem", color: "#4a5568", lineHeight: "1.6" }}>
              Explore our global network of stores offering unique furniture and décor. Visit us to experience the best in design.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 8px 15px rgba(0,0,0,0.15)" }}
            style={{ flex: 1, padding: "1.5rem", backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "0.5rem", boxShadow: "0 2px 4px rgba(0,0,0,0.05)" }}
          >
            <h4 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#2d3748", marginBottom: "0.75rem" }}>Our Mission</h4>
            <p style={{ fontSize: "1rem", color: "#4a5568", lineHeight: "1.6" }}>
              We aim to inspire and deliver innovative furniture solutions with a commitment to sustainability and quality.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}