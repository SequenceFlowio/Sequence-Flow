import BlogShowcase from '@/components/blog/BlogShowcase';
import FeaturedBlog from '@/components/blog/FeaturedBlog';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog - SequenceFlow',
};

const page = () => {
  return (
    <main className="bg-background-4 dark:bg-background-9">
      {/* <FeaturedBlog /> */}
      <BlogShowcase />
    </main>
  );
};

export default page;
