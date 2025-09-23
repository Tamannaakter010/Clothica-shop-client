/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-neutral-content py-12 px-6 sm:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

        {/* Services */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
          <h6 className="footer-title mb-4 font-semibold text-lg">Services</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Branding</a></li>
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Design</a></li>
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Marketing</a></li>
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Advertisement</a></li>
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
          <h6 className="footer-title mb-4 font-semibold text-lg">Company</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover hover:text-orange-400 transition-colors">About us</a></li>
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Contact</a></li>
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Jobs</a></li>
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Press kit</a></li>
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
          <h6 className="footer-title mb-4 font-semibold text-lg">Legal</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Terms of use</a></li>
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Privacy policy</a></li>
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Cookie policy</a></li>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
          <h6 className="footer-title mb-4 font-semibold text-lg">Social</h6>
          <div className="flex flex-col space-y-2">
            <a className="flex items-center gap-2 hover:text-orange-400 transition-colors"><FaTwitter /> Twitter</a>
            <a className="flex items-center gap-2 hover:text-orange-400 transition-colors"><FaInstagram /> Instagram</a>
            <a className="flex items-center gap-2 hover:text-orange-400 transition-colors"><FaFacebook /> Facebook</a>
            <a className="flex items-center gap-2 hover:text-orange-400 transition-colors"><FaGithub /> GitHub</a>
          </div>
        </motion.div>

        {/* Explore */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
          <h6 className="footer-title mb-4 font-semibold text-lg">Explore</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Features</a></li>
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Enterprise</a></li>
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Security</a></li>
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Pricing</a></li>
          </ul>
        </motion.div>

        {/* Apps */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 200 }}>
          <h6 className="footer-title mb-4 font-semibold text-lg">Apps</h6>
          <ul className="space-y-2">
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Mac</a></li>
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Windows</a></li>
            <li><a className="link link-hover hover:text-orange-400 transition-colors">iPhone</a></li>
            <li><a className="link link-hover hover:text-orange-400 transition-colors">Android</a></li>
          </ul>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 text-center text-sm text-gray-400"
      >
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
