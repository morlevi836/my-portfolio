import { useMemo } from "react";
import { generateTableOfContents } from "@/lib/generateTableOfContents";
import { ArticleContent } from "@/types/ArticleContent";
import Image from "next/image";
import Link from "next/link";
import ReadingProgressBar from "./ReadingProgressBar";
import ScrollToTopButton from "./ScrollToTopButton";

export default function Article({ article }: { article: ArticleContent }) {
  const tableOfContents = useMemo(
    () => generateTableOfContents(article.body_html),
    [article.body_html],
  );

  return (
    <>
      {/* Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Back Button */}
      <div className="p-4">
        <Link
          href="/blog"
          className="inline-block text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 sm:text-base"
        >
          &larr; Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <section className="mb-10 px-4 sm:px-6">
        {article.cover_image && (
          <div className="relative h-60 w-full overflow-hidden rounded-lg sm:h-80 md:h-96">
            <Image
              src={article.cover_image}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              draggable={false}
              priority
            />
          </div>
        )}
        <h1 className="mt-6 text-2xl font-bold sm:text-4xl md:text-5xl">
          {article.title}
        </h1>
        <div className="mt-2 flex flex-wrap items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
          <span>{article.readable_publish_date}</span>
          <span>•</span>
          <span>{article.reading_time_minutes} min read</span>
        </div>
      </section>

      {/* Table of Contents */}
      {tableOfContents.length > 0 && (
        <section className="mb-10 px-4 sm:px-6">
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h2 className="mb-2 text-lg font-bold sm:text-xl">
              Table of Contents
            </h2>
            <ul className="space-y-2 overflow-x-auto sm:overflow-visible">
              {tableOfContents.map((item, index) => (
                <li key={index} className="whitespace-nowrap">
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 sm:text-base"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="prose prose-base mx-auto max-w-3xl px-4 dark:prose-invert sm:prose-lg sm:px-0">
        <div dangerouslySetInnerHTML={{ __html: article.body_html }} />
      </article>

      {/* Floating Back to Top Button */}
      <ScrollToTopButton />

      {/* Call-to-Action Section */}
      <section className="mt-10 bg-gradient-to-br from-blue-50 to-purple-50 py-12 text-center dark:from-gray-800 dark:to-gray-900 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Enjoyed This Article?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-gray-600 dark:text-gray-300 sm:text-lg">
            If you found this article helpful, feel free to share it or explore
            more of my work.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:shadow-xl dark:shadow-blue-700/30 sm:px-8 sm:py-3 sm:text-lg"
          >
            Explore More Articles
          </Link>
        </div>
      </section>
    </>
  );
}
