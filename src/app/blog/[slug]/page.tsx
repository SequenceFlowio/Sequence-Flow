import BlogContent from '@/components/blog-details/BlogContent';
import { generateMetadata as generateMetadataUtil } from '@/utils/generateMetaData';
import getMarkDownContent from '@/utils/getMarkDownContent';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const blogs = getMarkDownData('src/data/blogs');
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  const blog = getMarkDownContent('src/data/blogs/', slug);
  return generateMetadataUtil(
    blog.data.title as string,
    blog.data.description as string,
    `https://sequenceflow.nl/blog/${slug}`,
    blog.data.thumbnail as string,
  );
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const blogContent = getMarkDownContent('src/data/blogs/', slug);

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <BlogContent blog={blogContent} />
    </main>
  );
};

export default page;
