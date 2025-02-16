import Link from "next/link";
import Image from "next/image";
import { ArticleContent } from "@/types/ArticleContent";

export default function RelatedArticles({
  articles,
}: {
  articles: ArticleContent[];
}) {
  return (
    <div className="my-16">
      <h2 className="mb-8 text-2xl font-bold">Related Articles</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.id} href={`/blog/${article.id}`}>
            <div className="rounded-lg bg-gray-50 p-4 transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
              {article.cover_image && (
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={article.cover_image}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              )}
              <h3 className="mt-4 text-xl font-bold">{article.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {article.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
