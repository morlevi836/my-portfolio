"use client";

import BlogList from "@/components/blog/BlogList";
import { ArticlesArray } from "@/types/Article";
import { motion } from "framer-motion";

export default function BlogSection({ articles }: { articles: ArticlesArray }) {
  return (
    <div className="container mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-16 text-center text-4xl font-bold sm:text-5xl"
        >
          My Blog
        </motion.h2>

        <BlogList articles={articles} />
      </motion.div>
    </div>
  );
}
