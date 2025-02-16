"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArticlesArray } from "@/types/Article";
import { SkeletonLoading } from "../SkeletonLoading";
import { SearchBar } from "./SearchBar";
import { SortDropdown } from "./SortDropdown";
import { ViewToggle } from "./ViewToggle";
import { ArticleCard } from "./ArticleCard";
import { PaginationComponent } from "./PaginationComponent";

const normalizeTags = (tags: any): string[] => {
  if (Array.isArray(tags)) {
    return tags;
  }
  if (typeof tags === "string") {
    return tags.split(",").map((tag) => tag.trim());
  }
  return [];
};

export default function BlogList({ articles }: { articles: ArticlesArray }) {
  const [isGridView, setIsGridView] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  useEffect(() => {
    const savedView = localStorage.getItem("blogView");
    if (savedView === "list") {
      setIsGridView(false);
    }
    setIsLoading(false);
  }, []);

  const toggleView = () => {
    const newView = !isGridView;
    setIsGridView(newView);
    localStorage.setItem("blogView", newView ? "grid" : "list");
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      const filtered = articles.filter((article) => {
        const matchesTitle = article.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const tags = normalizeTags(article.tag_list);
        const matchesSubject = tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        return matchesTitle || matchesSubject;
      });
      setFilteredArticles(filtered);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchQuery, articles]);

  useEffect(() => {
    const sortedArticles = [...filteredArticles].sort((a, b) => {
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
    setFilteredArticles(sortedArticles);
  }, [sortBy]);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (isLoading) {
    return <SkeletonLoading />;
  }

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
          <ViewToggle isGridView={isGridView} toggleView={toggleView} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`grid gap-8 ${
          isGridView
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
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
            paginate={paginate}
          />
        </motion.div>
      )}
    </div>
  );
}
