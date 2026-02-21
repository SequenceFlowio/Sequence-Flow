import matter from 'gray-matter';
import Image, { StaticImageData } from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import Comment from './Comment';
import ShareLink from './ShareLink';

interface FaqItem {
  question: string;
  answer: string;
}

const BlogContent = ({ blog }: { blog: matter.GrayMatterFile<string> }) => {
  const faqItems = blog.data.faq as FaqItem[] | undefined;

  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <div className="mx-auto max-w-[1209px] space-y-3">
          <RevealAnimation delay={0.1}>
            <h2 className="max-w-[884px]">{blog.data.title}</h2>
          </RevealAnimation>
          <div className="flex items-center gap-3">
            <RevealAnimation delay={0.2}>
              <figure className="size-12 overflow-hidden rounded-full bg-[#ECEAED]">
                <Image
                  src={blog.data.authorImage as string | StaticImageData}
                  className="object-cover object-center"
                  alt="Auteur avatar"
                  width={48}
                  height={48}
                  loading="lazy"
                />
              </figure>
            </RevealAnimation>
            <div>
              <RevealAnimation delay={0.3}>
                <h3 className="text-tagline-1 font-medium">{blog.data.author}</h3>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <time
                  dateTime={blog.data.publishDate}
                  className="text-tagline-2 text-secondary/60 dark:text-accent/60 flex items-center gap-2 font-normal">
                  {blog.data.publishDate} <span>•</span> {blog.data.readTime}
                </time>
              </RevealAnimation>
            </div>
          </div>
        </div>
        <RevealAnimation delay={0.4}>
          <figure className="my-10 max-w-full overflow-hidden rounded-lg md:my-[70px] md:rounded-4xl">
            <Image
              src={blog.data.thumbnail as string | StaticImageData}
              className="h-full w-full object-cover object-center"
              alt="blog-details-cover"
              width={1200}
              height={700}
            />
          </figure>
        </RevealAnimation>
        {/* Blog details-body */}
        <RevealAnimation delay={0.5}>
          <article className="details-body">
            <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{blog.content}</ReactMarkdown>
          </article>
        </RevealAnimation>

        {/* FAQ accordion */}
        {faqItems && faqItems.length > 0 && (
          <RevealAnimation delay={0.3}>
            <div className="mx-auto mt-20 max-w-[950px]">
              <h2 className="text-heading-4 mb-8">Veelgestelde vragen</h2>
              <Accordion defaultValue="0">
                {faqItems.map((item, i) => (
                  <AccordionItem key={i} value={String(i)}>
                    <AccordionTrigger
                      className="flex w-full cursor-pointer items-center justify-between pt-6 pb-6"
                      titleClassName="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                      value={String(i)}
                      iconType="arrow">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent value={String(i)}>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </RevealAnimation>
        )}

        {/* details-footer */}
        <ShareLink />
        <Comment />
      </div>
    </section>
  );
};

export default BlogContent;
