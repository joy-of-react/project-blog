import fs from 'fs/promises';
import path from 'path';
import React from 'react';
import matter from 'gray-matter';

export function readFile(localPath) {
  return fs.readFile(
    path.join(process.cwd(), localPath),
    'utf8'
  );
}

export function readDirectory(localPath) {
  return fs.readdir(path.join(process.cwd(), localPath));
}

export const loadBlogPost = React.cache(async function (
  slug
) {
  const rawContent = await readFile(`/content/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});

export const getBlogPostList = React.cache(async () => {
  const fileNames = await readDirectory('/content');

  const blogPosts = [];

  for (let fileName of fileNames) {
    const fileContent = await readFile(
      `/content/${fileName}`
    );
    const slug = fileName.replace('.mdx', '');

    const { data: frontmatter } = matter(fileContent);

    blogPosts.push({
      slug,
      ...frontmatter,
    });
  }

  return blogPosts.sort((p1, p2) =>
    p1.publishedOn < p2.publishedOn ? 1 : -1
  );
});
