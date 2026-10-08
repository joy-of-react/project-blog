import { BLOG_TITLE } from "@/constants";
import { getBlogPostList } from "@/helpers/file-helpers";
import RSS from "rss";

export async function GET(request) {
  const blogPosts = await getBlogPostList();
  console.log("Blogs data ", blogPosts);

  const origin = new URL(request.url).origin;

  var feed = new RSS({
    title: BLOG_TITLE,
    feed_url: origin + "/rss.xml",
    description: "A wonderful blog about JavaScript",
    site_url: origin,
  });

  blogPosts.forEach((blog) => {
    feed.item({
      title: blog.title,
      description: blog.abstract,
      date: blog.publishedOn,
      url: origin + "/" + blog.slug,
    });
  });

  var xml = feed.xml();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
