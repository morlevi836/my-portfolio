import { SkeletonLoading } from "@/components/SkeletonLoading";
import { getArticles } from "@/lib/devto";
import dynamic from "next/dynamic";

const BlogSection = dynamic(() => import("@/components/blog/BlogSection"));

export default async function BlogPage() {
  const articles = await getArticles("morlevi23");

  if (!articles) {
    return <SkeletonLoading />;
  }

  return (
    <main className="flex flex-col bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <BlogSection articles={articles} />
    </main>
  );
}
