"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ArticlesArray } from "@/types/Article";
import { SearchBar } from "./SearchBar";
import { SortDropdown } from "./SortDropdown";
import { ViewToggle } from "./ViewToggle";
import { ArticleCard } from "./ArticleCard";
import { PaginationComponent } from "./PaginationComponent";

const normalizeTags = (tags: string[] | string): string[] => {
  if (Array.isArray(tags)) return tags;
  if (typeof tags === "string") return tags.split(",").map((tag) => tag.trim());
  return [];
};

export default function BlogList({ articles }: { articles: ArticlesArray }) {
  const [isGridView, setIsGridView] = useState(() => {
    return localStorage.getItem("blogView") === "list" ? false : true;
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  useEffect(() => {
    localStorage.setItem("blogView", isGridView ? "grid" : "list");
  }, [isGridView]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesTitle = article.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const tags = normalizeTags(article.tag_list);
      const matchesTags = tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      return matchesTitle || matchesTags;
    });
  }, [articles, searchQuery]);

  const sortedArticles = useMemo(() => {
    return [...filteredArticles].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.published_at).getTime() -
            new Date(a.published_at).getTime()
          );
        case "oldest":
          return (
            new Date(a.published_at).getTime() -
            new Date(b.published_at).getTime()
          );
        case "popular":
          return b.public_reactions_count - a.public_reactions_count;
        case "least-popular":
          return a.public_reactions_count - b.public_reactions_count;
        default:
          return 0;
      }
    });
  }, [filteredArticles, sortBy]);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = sortedArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );
  const totalPages = Math.ceil(sortedArticles.length / articlesPerPage);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between"
      >
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="flex items-center gap-4">
          <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          <ViewToggle
            isGridView={isGridView}
            toggleView={() => setIsGridView((prev) => !prev)}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`grid gap-8 ${isGridView ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
      >
        {currentArticles.length > 0 ? (
          currentArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <ArticleCard
                article={article}
                isGridView={isGridView}
                normalizeTags={normalizeTags}
              />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600 dark:text-gray-300">
            No articles found matching your search.
          </div>
        )}
      </motion.div>

      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={setCurrentPage}
          />
        </motion.div>
      )}
    </div>
  );
}
