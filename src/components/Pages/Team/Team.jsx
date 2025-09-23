/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import Team1 from "../../../assets/team/team1.jpg";
import Team2 from "../../../assets/team/team2.jpg";
import Team3 from "../../../assets/team/team4.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Sophia Johnson",
    role: "CEO & Founder",
    img: Team1,
    fb: "https://facebook.com/sophiajohnson",
    linkedin: "https://linkedin.com/in/sophiajohnson",
    insta: "https://instagram.com/sophiajohnson",
  },
  {
    id: 2,
    name: "Michael Smith",
    role: "Lead Designer",
    img: Team2,
    fb: "https://facebook.com/michaelsmith",
    linkedin: "https://linkedin.com/in/michaelsmith",
    insta: "https://instagram.com/michaelsmith",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Marketing Head",
    img: Team3,
    fb: "https://facebook.com/emmawilliams",
    linkedin: "https://linkedin.com/in/emmawilliams",
    insta: "https://instagram.com/emmawilliams",
  },
];

const Team = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleActive = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
         <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ fontSize: "2.5rem", fontWeight: "800", color: "#2d3748", marginBottom: "0.9rem" }}
          >
            Meet Our Team
          </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-600 mb-16 text-lg max-w-xl mx-auto"
        >
          The creative minds shaping our journey with passion and expertise.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              onClick={() => toggleActive(member.id)}
              className="relative mt-6 bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              initial={{ scale: 1 }}
              animate={{
                scale: activeId === member.id ? 1.1 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Image */}
              <motion.img
                src={member.img}
                alt={member.name}
                className="w-full h-96 object-cover"
                animate={{
                  filter: activeId === member.id ? "blur(6px)" : "blur(0px)",
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Overlay */}
              {activeId === member.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-50"
                >
                  <h3 className="text-white text-xl font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-white text-lg mb-4">{member.role}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
