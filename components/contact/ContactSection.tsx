"use client";

import ContactForm from "./ContactForm";
import ContactIcons from "./ContactIcons";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="pb-24 pt-32">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-4xl font-bold sm:text-5xl"
        >
          Let’s Work Together
        </motion.h2>

        {/* Split Layout: Form on the Left, Info on the Right */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Side: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
            >
              <h3 className="mb-6 text-2xl font-semibold">Send Me a Message</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Have a project in mind or just want to say hello? Fill out the
                form below, and I’ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </motion.div>

            {/* Right Side: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col justify-center space-y-8"
            >
              {/* Contact Phrases */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Why Reach Out?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Whether you’re looking to build a new project, improve an
                  existing one, or just chat about tech, I’d love to hear from
                  you!
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  I specialize in creating scalable, user-friendly applications
                  with modern technologies like React, TypeScript, and Node.js.
                </p>
              </div>

              {/* Contact Icons */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Connect With Me</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You can also reach out directly via email or connect with me
                  on social media:
                </p>
                <ContactIcons />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
