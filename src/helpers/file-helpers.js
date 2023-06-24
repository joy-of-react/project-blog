import fs from 'fs';
import path from 'path';
import React from 'react';
import matter from 'gray-matter';

export function readFile(localPath) {
  return new Promise((resolve) => {
    fs.readFile(
      path.join(process.cwd(), localPath),
      'utf8',
      (err, data) => resolve(data)
    );
  });
}

export const loadBlogPost = React.cache(
  async function (slug) {
    const rawContent = await readFile(
      `/content/${slug}.mdx`
    );

    const { data: frontmatter, content } =
      matter(rawContent);

    return { frontmatter, content };
  }
);
