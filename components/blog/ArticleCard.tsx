"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Article } from "@/types/Article";
import Image from "next/image";
import { useArticleStore } from "@/store/useArticleStore"; // Import Zustand store

export const ArticleCard = ({
  article,
  isGridView,
  normalizeTags,
}: {
  article: Article;
  isGridView: boolean;
  normalizeTags: (tags: string[] | string) => string[];
}) => {
  const setArticleId = useArticleStore((state) => state.setArticleId); // Zustand setter function

  const handleClick = () => {
    setArticleId(article.id.toString()); // Save the article ID
  };

  return (
    <Link
      href={`/blog/${article.id}`}
      className="block h-full"
      onClick={handleClick}
    >
      <Card
        className={`flex ${isGridView ? "flex-col" : "flex-row items-start"} h-full bg-gradient-to-br from-blue-50 to-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-lg dark:from-gray-800 dark:to-gray-900`}
      >
        <div
          className={`${isGridView ? "h-48 w-full" : "h-full w-64 flex-shrink-0"} overflow-hidden rounded-t-lg ${!isGridView && "rounded-l-lg rounded-tr-none"}`}
        >
          <Image
            src={
              article.cover_image ||
              article.social_image ||
              "/images/no-image-placeholder.jpg"
            }
            alt={article.title}
            width={256}
            height={isGridView ? 192 : 256}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
        <div className={`flex flex-1 flex-col p-6 ${isGridView ? "" : "pl-8"}`}>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {article.title}
            </CardTitle>
            <CardDescription className="mt-2 text-gray-600 dark:text-gray-300">
              {article.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-4 flex-1">
            <div className="flex flex-wrap gap-2">
              {normalizeTags(article.tag_list).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 shadow-sm transition-all duration-300 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-6">
            <Button className="w-full bg-blue-600 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600">
              Read More
            </Button>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};
