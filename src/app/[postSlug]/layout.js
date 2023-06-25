import React from 'react';

import { loadBlogPost } from '@/helpers/file-helpers';
import BlogLayout from '@/components/BlogLayout';

import './styles.css';

async function PostSlugLayout({
  params,
  children,
}) {
  const { frontmatter } = await loadBlogPost(
    params.postSlug
  );

  return (
    <BlogLayout
      postSlug={params.postSlug}
      frontmatter={frontmatter}
    >
      {children}
    </BlogLayout>
  );
}

export default PostSlugLayout;
