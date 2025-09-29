import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
} from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/dwipurnomo515",
      icon: <FaGithub size={24} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/dwi-purnomo",
      icon: <FaLinkedin size={24} />,
    },
    {
      name: "Email",
      href: "mailto:dwipurnomo5151@gmail.com",
      icon: <FaEnvelope size={24} />,
    },
  ];
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Dwi Purnomo
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Full-stack developer passionate about creating beautiful,
              functional, and user-centered digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <HiOutlineMail className="text-indigo-400 w-5 h-5" />
                <a
                  href="mailto:dwipurnomo5151@gmail.com"
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                >
                  dwipurnomo5151@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <HiOutlineLocationMarker className="text-indigo-400 w-5 h-5" />
                <span className="text-gray-300">Indonesia</span>
              </div>
              <div className="flex items-center space-x-3">
                <HiOutlineBriefcase className="text-indigo-400 w-5 h-5" />
                <span className="text-gray-300">Available for work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Dwi Purnomo. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Crafted with ❤️ using Next.js & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
