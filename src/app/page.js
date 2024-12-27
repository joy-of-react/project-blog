import React from "react";
import { getBlogPostList } from "@/helpers/file-helpers";
import BlogSummaryCard from "@/components/BlogSummaryCard";
import { BLOG_TITLE } from "@/constants";
import styles from "./homepage.module.css";

const Home = async () => {
  const blogPosts = await getBlogPostList();
  // JSX
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {blogPosts.map(({ slug, title, abstract, publishedOn }) => {
        return (
          <BlogSummaryCard
            key={slug}
            slug={slug}
            title={title}
            abstract={abstract}
            publishedOn={new Date(publishedOn)}
          />
        );
      })}
    </div>
  );
};

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
};

export default Home;
