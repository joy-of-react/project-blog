import { MDXRemote } from 'next-mdx-remote/rsc';

import { loadBlogPost } from '@/helpers/file-helpers';
import { COMPONENTS } from '@/helpers/mdx-helpers';

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadBlogPost(
    params.postSlug
  );

  return {
    title: frontmatter.title,
  };
}

async function BlogPost({ params }) {
  const { content } = await loadBlogPost(params.postSlug);

  return (
    <>
      <MDXRemote source={content} components={COMPONENTS} />
    </>
  );
}

export default BlogPost;
