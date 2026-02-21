import avatar from '@public/images/ns-avatar-6.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Comment = () => {
  return (
    <RevealAnimation delay={0.2}>
      <article className="mx-auto mt-10 max-w-[850px] md:mt-[72px]">
        <div className="mb-[70px] space-y-4">
          <h5 className="text-heading-4">Reacties</h5>
          <div className="flex items-center gap-3">
            <figure className="size-14 overflow-hidden rounded-2xl bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%]">
              <Image
                src={avatar}
                className="object-cover object-center"
                alt="Avatar"
                width={56}
                height={56}
                loading="lazy"
              />
            </figure>
            <div>
              <h3 className="text-tagline-1 font-medium">Esther Howard</h3>
              <time
                dateTime="2024-04-17"
                className="text-tagline-2 text-secondary/60 dark:text-accent/60 flex items-center gap-2 font-normal">
                17 apr 2024
              </time>
            </div>
          </div>
          <p>
            Een verhelderend artikel. De vergelijking tussen human-in-the-loop en human-on-the-loop maakt het
            verschil in aanpak heel concreet.
          </p>
          <h6 className="text-tagline-1">Reageer</h6>
        </div>
        <div className="dark:bg-background-8 max-w-[850px] rounded-[20px] bg-white px-4 py-6 md:w-full md:p-6 lg:p-[42px]">
          <form action="#" method="post">
            {/* naam veld */}
            <fieldset className="mb-8 flex w-full flex-col items-start justify-start gap-2">
              <label htmlFor="fullName" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                Volledige naam
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                placeholder="Voer uw naam in"
                className="placeholder:text-tagline-1 dark:placeholder:text-accent/60 dark:text-accent border-stroke-3 dark:border-stroke-6 focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                aria-required="true"
              />
            </fieldset>
            {/* e-mail veld */}
            <fieldset className="mb-8 flex w-full flex-col items-start justify-start gap-2">
              <label htmlFor="emailAddress" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                E-mailadres
              </label>
              <input
                type="email"
                required
                name="emailAddress"
                id="emailAddress"
                placeholder="Voer uw e-mailadres in"
                className="placeholder:text-tagline-1 dark:placeholder:text-accent/60 dark:text-accent border-stroke-3 dark:border-stroke-6 focus-visible:outline-primary-500 w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                aria-required="true"
              />
            </fieldset>
            {/* bericht veld */}
            <fieldset className="mb-4 flex w-full flex-col items-start justify-start gap-2">
              <label htmlFor="messages" className="text-tagline-1 text-secondary dark:text-accent font-medium">
                Bericht
              </label>
              <textarea
                name="messages"
                id="messages"
                required
                placeholder="Voer uw bericht in"
                className="placeholder:text-tagline-1 dark:placeholder:text-accent/60 dark:text-accent border-stroke-3 dark:border-stroke-6 focus-visible:outline-primary-500 min-h-[120px] w-full resize-none rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus-visible:outline"
                aria-required="true"
                defaultValue={''}
              />
            </fieldset>
            {/* akkoord checkbox */}
            <fieldset className="mb-4 flex items-center gap-2">
              <label htmlFor="agree-terms" className="flex cursor-pointer items-center gap-x-3">
                <input id="agree-terms" type="checkbox" className="peer sr-only" required />
                <span className="border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-4 cursor-pointer rounded-full border after:absolute after:top-1/2 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:opacity-0 peer-checked:after:opacity-100" />
                <span className="text-tagline-3 text-secondary/60 dark:text-accent/60">
                  Ik ga akkoord met de{' '}
                  <Link href="/terms-conditions" className="text-primary-500 text-tagline-3 underline">
                    algemene voorwaarden
                  </Link>
                </span>
              </label>
            </fieldset>
            {/* verzenden knop */}
            <button
              type="submit"
              className="btn btn-secondary dark:btn-accent btn-md hover:btn-primary w-full first-letter:uppercase before:content-none"
              aria-label="Reactie verzenden">
              Verstuur
            </button>
          </form>
        </div>
      </article>
    </RevealAnimation>
  );
};

export default Comment;
