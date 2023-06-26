import { MDXRemote } from 'next-mdx-remote/rsc';

import { loadBlogPost } from '@/helpers/file-helpers';
import { COMPONENTS } from '@/helpers/mdx-helpers';

async function BlogPost({ params }) {
  const { content } = await loadBlogPost(params.postSlug);

  return (
    <>
      <MDXRemote source={content} components={COMPONENTS} />
    </>
  );
}

export default BlogPost;
