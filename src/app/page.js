import React from 'react';

import { getBlogPostList } from '@/helpers/file-helpers';
import Homepage from '@/components/Homepage';

async function Home() {
  const files = await getBlogPostList('/content');

  return <Homepage articles={files} />;
}

export default Home;
