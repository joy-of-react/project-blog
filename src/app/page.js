import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";

async function Home() {
  const blogs = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {blogs.map((blog) => {
        return <BlogSummaryCard key={blog.slug} {...blog} />;
      })}

      {/* TODO: Iterate over the data read from the file system! */}
    </div>
  );
}

export default Home;
