import fs from 'fs';
import path from 'path';
import React from 'react';
import matter from 'gray-matter';

// TODO: Convert to readFileSync, simpler.
export function readFile(localPath) {
  return new Promise((resolve) => {
    fs.readFile(
      path.join(process.cwd(), localPath),
      'utf8',
      (err, data) => resolve(data)
    );
  });
}

export function readDirectory(localPath) {
  return new Promise((resolve) => {
    fs.readdir(
      path.join(process.cwd(), localPath),
      (err, data) => resolve(data)
    );
  });
}

export const loadBlogPost = React.cache(async function (
  slug
) {
  const rawContent = await readFile(`/content/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});

export const getBlogPostList = React.cache(() => {
  const localPath = path.join(process.cwd(), '/content');

  return fs
    .readdirSync(localPath)
    .map((filename) => {
      const fileContent = fs.readFileSync(
        path.join(process.cwd(), `/content/${filename}`)
      );
      const slug = filename.replace('.mdx', '');

      const { data: frontmatter } = matter(fileContent);

      return {
        slug,
        ...frontmatter,
      };
    })
    .sort((p1, p2) =>
      p1.publishedOn < p2.publishedOn ? 1 : -1
    );
});
