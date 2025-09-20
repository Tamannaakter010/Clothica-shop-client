import React from "react";
// eslint-disable-next-line no-unused-vars
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const Team = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl  font-extrabold text-gray-800 mb-10"
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-600 mb-16 text-lg max-w-xl mx-auto"
        >
          The creative minds shaping our journey with passion and expertise.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariant}
              whileHover={{ scale: 1.05 }}
              className="relative mt-6 bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
             
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-80 object-cover"
              />

        
              <div className="absolute inset-0 flex items-center justify-center gap-6 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <a href={member.fb} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full hover:bg-blue-600 transition">
                  <FaFacebookF className="text-xl text-gray-700 hover:text-white" />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full hover:bg-blue-700 transition">
                  <FaLinkedinIn className="text-xl text-gray-700 hover:text-white" />
                </a>
                <a href={member.insta} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full hover:bg-pink-600 transition">
                  <FaInstagram className="text-xl text-gray-700 hover:text-white" />
                </a>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
