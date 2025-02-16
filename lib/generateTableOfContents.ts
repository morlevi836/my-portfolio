export function generateTableOfContents(html: string) {
  const headings = html.match(/<h[2-3][^>]*>(.*?)<\/h[2-3]>/g) || [];
  return headings.map((heading) => {
    const text = heading.replace(/<[^>]+>/g, "");
    const id = text.toLowerCase().replace(/\s+/g, "-");
    return { id, text };
  });
}