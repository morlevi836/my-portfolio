import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactIcons = () => {
  return (
    <div className="mt-8 text-center">
      <h3 className="mb-6 text-2xl font-semibold">Or Reach Out Directly</h3>
      <div className="flex justify-center space-x-8">
        <a
          href="https://github.com/morlevi836"
          target="_blank"
          className="flex items-center text-3xl text-gray-700 transition-all duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mor-levi-73a364247"
          target="_blank"
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
    </div>
  );
};

export default ContactIcons;
