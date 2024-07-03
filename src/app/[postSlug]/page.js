import React from "react";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";
import { loadBlogPost } from "@/helpers/file-helpers";
import { notFound } from "next/navigation";

const components = {
  CodeSnippet: React.lazy(() => import("@/components/CodeSnippet")),
  DivisionGroupsDemo: React.lazy(() =>
    import("@/components/DivisionGroupsDemo")
  ),
  CircularColorsDemo: React.lazy(() =>
    import("@/components/CircularColorsDemo")
  ),
  Sandbox: React.lazy(() => import("@/components/Sandbox"))
};

export const generateMetadata = async ({ params }) => {
  const { postSlug } = params;
  const { frontmatter } = await loadBlogPost(postSlug);

  return {
    title: frontmatter?.title,
    meta: frontmatter?.abstract,
  };
};

async function BlogPost({ params }) {
  const { postSlug } = params;
  const { frontmatter, content } = await loadBlogPost(postSlug);

  if (!(frontmatter && frontmatter.title)) {
    return notFound()
  }

  console.log("🚀 ~ BlogPost ~ frontmatter:", frontmatter)
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={content} components={components} />
      </div>
    </article>
  );
}

export default BlogPost;
