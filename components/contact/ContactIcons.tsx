import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactIcons = () => {
  return (
    <div className="flex justify-start gap-6">
      <a
        href="https://github.com/morlevi836"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-3xl text-gray-700 transition-all duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/mor-levi-73a364247"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-3xl text-gray-700 transition-all duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:morlevimail@gmail.com"
        className="flex items-center text-3xl text-gray-700 transition-all duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
      >
        <FaEnvelope />
      </a>
    </div>
  );
};

export default ContactIcons;
