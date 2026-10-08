import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";
import { BLOG_TITLE } from "@/constants";

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
};

async function Home() {
  const blogs = await getBlogPostList();
  console.log("Blogs data ", blogs);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {/* TODO: Iterate over the data read from the file system! */}
      {blogs.map((blog) => {
        return (
          <BlogSummaryCard
            key={blog.slug}
            slug={blog.slug}
            title={blog.title}
            abstract={blog.abstract}
            publishedOn={blog.publishedOn}
          />
        );
      })}
    </div>
  );
}

export default Home;
