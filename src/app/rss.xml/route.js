import RSS from "rss";
import { getBlogPostList } from "@/helpers/file-helpers";

export async function GET() {
  // start feed
  const feed = new RSS({
    title: "My title",
    description: "My description",
  });
  // get blog posts
  const blogPosts = await getBlogPostList();
  // add blog posts to feed
  blogPosts.forEach(({ slug, title, abstract, publishedOn }) =>
    feed.item({
      title,
      description: abstract,
      url: `/${slug}`,
      date: publishedOn,
    })
  );
  // XML
  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
