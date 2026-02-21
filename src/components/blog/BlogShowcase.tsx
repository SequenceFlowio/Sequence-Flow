import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import PaginationWrapper from './PaginationWrapper';

const BlogShowcase = () => {
  const blogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs');

  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>
              Alle <span className="text-[#C7F56F] inline-block">artikelen &amp; inzichten</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[738px]">
              Onze artikelen en inzichten belichten de nieuwste ontwikkelingen, prestaties en thought leadership die
              onze weg vooruit vormgeven — van productinnovaties tot trends in de industrie.
            </p>
          </RevealAnimation>
        </div>

        {/* Blog grid with pagination wrapper */}
        <PaginationWrapper blogs={blogs} />
      </div>
    </section>
  );
};

BlogShowcase.displayName = 'BlogShowcase';
export default BlogShowcase;
