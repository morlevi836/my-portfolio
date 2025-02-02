import ContactForm from "./ContactForm";
import ContactIcons from "./ContactIcons";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 text-gray-800 dark:from-gray-900 dark:to-gray-800 dark:text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-4xl font-bold"
      >
        Get in Touch
      </motion.h2>

      <div className="relative mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-lg bg-white p-8 shadow-sm dark:bg-gray-800"
        >
          <h3 className="mb-6 text-2xl font-semibold">Send Me a Message</h3>
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContactIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
