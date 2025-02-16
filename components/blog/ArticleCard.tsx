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

export const ArticleCard = ({
  article,
  isGridView,
  normalizeTags,
}: {
  article: Article;
  isGridView: boolean;
  normalizeTags: (tags: any) => string[];
}) => {
  const tags = normalizeTags(article.tag_list);

  return (
    <Link href={`/blog/${article.id}`} className="block h-full">
      <Card
        className={`flex ${
          isGridView ? "flex-col" : "flex-row items-start"
        } h-full bg-gradient-to-br from-blue-50 to-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-lg dark:from-gray-800 dark:to-gray-900`}
      >
        <div
          className={`${
            isGridView ? "h-48 w-full" : "h-full w-64 flex-shrink-0"
          } overflow-hidden rounded-t-lg ${!isGridView && "rounded-l-lg rounded-tr-none"}`}
        >
          <Image
            src={
              article.cover_image ||
              article.social_image ||
              "/images/no-image-placeholder.jpg"
            }
            alt={article.title}
            width={256} // Adjust width (w-64 = 256px)
            height={isGridView ? 192 : 256} // Adjust height (h-48 = 192px for grid view)
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
        <div className={`flex flex-1 flex-col p-6 ${isGridView ? "" : "pl-8"}`}>
          <div className="absolute right-2 top-2 flex gap-2">
            {article.public_reactions_count > 200 && (
              <span className="rounded-full bg-indigo-400 px-3 py-1 text-sm text-white shadow-md">
                Top Pick
              </span>
            )}
            {article.public_reactions_count > 100 && (
              <span className="rounded-full bg-pink-400 px-3 py-1 text-sm text-white shadow-md">
                Trending
              </span>
            )}
            {article.public_reactions_count > 50 && (
              <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm text-white shadow-md">
                Popular
              </span>
            )}
            {new Date(article.published_at).getTime() >
              Date.now() - 7 * 24 * 60 * 60 * 1000 && (
              <span className="rounded-full bg-green-400 px-3 py-1 text-sm text-white shadow-md">
                New
              </span>
            )}
          </div>
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
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 shadow-sm transition-all duration-300 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
            {article.reading_time_minutes && (
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                {article.reading_time_minutes} min read
              </div>
            )}
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
