import RSS from 'rss';

import {
  BLOG_TITLE,
  BLOG_DESCRIPTION,
} from '@/constants';
import { getBlogPostList } from '@/helpers/file-helpers';

export async function GET() {
  // Create the feed using the RSS helper, and the metadata
  // about our blog.
  const feed = new RSS({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
  });

  // Use the same helper we use on the homepage, to gather
  // information about each blog post, as a sorted array:
  const blogPosts = await getBlogPostList();

  // For each blog post, create a new item in our RSS feed:
  blogPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.abstract,
      date: post.publishedOn,
      url: `http://some-website.com/${post.slug}`,
    });
  });

  // Generate the raw XML string using `feed.xml`, and then
  // send it to the client. We need to set the Content-Type
  // header so that browsers / RSS clients will interpret
  // it as XML, and not as plaintext.
  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
