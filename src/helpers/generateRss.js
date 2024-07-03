import RSS from 'rss'
import fs from 'fs/promises';
import path from 'path';
import { getBlogPostList } from "./file-helpers.js";
import { BLOG_TITLE } from "../constants.js";

async function generateRss() {
  const blogs = await getBlogPostList();

  const feed = new RSS({
    title: BLOG_TITLE,
    description: "A wonderful blogS",
    feed_url: "localhost:3000/rss.xml",
    site_url: "localhost:3000",
    copyright: "2024 localhost:3000.com",
    language: "en",
    categories: ["blogs"],
    pubDate: new Date(),
    ttl: "60",
  });

  blogs.forEach(({slug, title, abstract: description, publishedOn: date}) => {
    feed.item({
      title,
      description,
      url: `http:localhost:3000/${slug}`, // Adjust the URL as needed
      date,
    })
  })

  const xml = feed.xml({ indent: true });
  const outputPath = path.join(path.resolve(), 'public', 'rss.xml');
  await fs.writeFile(outputPath, xml, 'utf8');
  console.log('RSS feed generated at', outputPath);
}

generateRss();
