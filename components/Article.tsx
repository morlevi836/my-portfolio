import { generateTableOfContents } from "@/lib/generateTableOfContents";
import { ArticleContent } from "@/types/ArticleContent";
import Image from "next/image";
import Link from "next/link";
import ReadingProgressBar from "./ReadingProgressBar";
import ScrollToTopButton from "./ScrollToTopButton";

export default function Article({ article }: { article: ArticleContent }) {
  const tableOfContents = generateTableOfContents(article.body_html);

  return (
    <>
      {/* Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Back Button */}
      <div>
        <Link
          href="/blog"
          className="mb-8 inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
        >
          &larr; Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <div className="mb-16">
        {article.cover_image && (
          <div className="relative h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={article.cover_image}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              draggable={false}
            />
          </div>
        )}
        <h1 className="mt-8 text-4xl font-bold sm:text-5xl">{article.title}</h1>
        <div className="mt-4 flex items-center space-x-4 text-gray-600 dark:text-gray-400">
          <span>{article.readable_publish_date}</span>
          <span>•</span>
          <span>{article.reading_time_minutes} min read</span>
        </div>
      </div>

      {/* Table of Contents */}
      {tableOfContents.length > 0 && (
        <div className="mb-16 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-bold">Table of Contents</h2>
          <ul className="space-y-2">
            {tableOfContents.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.id}`}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Article Content */}
      <article className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: article.body_html }} />
      </article>

      {/* Floating Back to Top Button */}
      <ScrollToTopButton />

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-24 text-center dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Enjoyed This Article?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            If you found this article helpful, feel free to share it or explore
            more of my work.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:shadow-xl dark:shadow-blue-700/30"
          >
            Explore More Articles
          </Link>
        </div>
      </div>
    </>
  );
}
