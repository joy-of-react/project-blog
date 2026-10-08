import React from "react";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";
import { MDXRemote } from "next-mdx-remote/rsc";
import CodeSnippet from "@/components/CodeSnippet";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
const DivisionGroupsDemo = dynamic(() =>
  import("@/components/DivisionGroupsDemo"),
);
const CircularColorsDemo = dynamic(() =>
  import("@/components/CircularColorsDemo"),
);

export async function generateMetadata({ params }) {
  const { postSlug } = await params;
  const post = await loadBlogPost(postSlug);
  if (!post) {
    notFound();
  }
  const { frontmatter } = post;

  return {
    title: frontmatter.title,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const { postSlug } = await params;
  console.log("slug ", postSlug);

  const post = await loadBlogPost(postSlug);
  if (!post) {
    notFound();
  }
  const { frontmatter, content } = post;
  console.log("Blog data ", content);
  console.log("Front data ", frontmatter);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote
          source={content}
          components={{
            pre: CodeSnippet,
            DivisionGroupsDemo,
            CircularColorsDemo,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
