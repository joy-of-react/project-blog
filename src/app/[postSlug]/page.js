import React from "react";
import dynamic from "next/dynamic";
import { loadCachedBlogPost } from "@/helpers/file-helpers";
import BlogHero from "@/components/BlogHero";
import { MDXRemote } from "next-mdx-remote/rsc";
import CodeSnippet from "@/components/CodeSnippet";
import styles from "./postSlug.module.css";

const DivisionGroupsDemo = dynamic(() =>
  import("@/components/DivisionGroupsDemo")
);

const CircularColorsDemo = dynamic(() =>
  import("@/components/CircularColorsDemo")
);

const BlogPost = async ({ params }) => {
  // get post-slug from params
  const { postSlug } = await params;
  // get post-data from post-slug
  const { frontmatter, content } = await loadCachedBlogPost(postSlug);
  const { publishedOn, title } = frontmatter;
  // JSX
  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={new Date(publishedOn)} />
      <div className={styles.page}>
        <MDXRemote
          source={content}
          components={{
            DivisionGroupsDemo,
            CircularColorsDemo,
            pre: CodeSnippet,
          }}
        />
      </div>
    </article>
  );
};

export const generateMetadata = async ({ params }) => {
  // get post-slug from params
  const { postSlug } = await params;
  // get meta-data from post-slug
  const { frontmatter } = await loadCachedBlogPost(postSlug);
  const { abstract, title } = frontmatter;

  return {
    title,
    description: abstract,
  };
};

export default BlogPost;
