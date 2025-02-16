"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { getArticleById } from "@/lib/devto";
import { Skeleton } from "@/components/ui/skeleton";
import { ArticleContent } from "@/types/ArticleContent";

const Article = dynamic(() => import("@/components/Article"), { ssr: false });

export default function ArticlePage() {
  const [article, setArticle] = useState<ArticleContent>();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const fetchArticle = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const data = await getArticleById(id);
      setArticle(data);
    } catch (error) {
      console.error("Failed to fetch article", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchArticle(id.toString());
    } else {
      setLoading(false);
    }
  }, [id, fetchArticle]);

  if (loading) {
    return (
      <div className="animate-pulse space-y-6 px-20 pb-20 pt-28">
        <Skeleton className="h-72 w-full rounded-lg" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    );
  }

  return (
    <main className="flex flex-col bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-32">
        {article ? (
          <Article article={article} />
        ) : (
          <div className="text-center">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Article Not Found
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
