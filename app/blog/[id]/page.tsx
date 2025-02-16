import { getArticleById } from "@/lib/devto";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const Article = dynamic(() => import("@/components/Article"));

// Correct usage for generating metadata
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // Ensure params is awaited before accessing its properties
  const { id } = params;

  // Await the article data
  const article = await getArticleById(id);

  return {
    title: article?.title || "Article Not Found",
    description: article?.description || "Read this article on my blog.",
    openGraph: {
      images: [article?.cover_image || ""],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  // Ensure params is awaited before accessing its properties
  const { id } = params;

  // Await the article data
  const article = await getArticleById(id);

  // Fetch related articles based on the current article's tags

  if (!article) {
    return (
      <main className="flex flex-col bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-4 py-32 text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">Article Not Found</h2>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-32">
        <Article article={article} />
      </div>
    </main>
  );
}
