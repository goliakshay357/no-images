import Link from 'next/link';
import { Suspense } from 'react';
import Image from 'next/image';
import grad from 'public/grad.jpeg';
import gradhori from 'public/gradhori.jpeg';
import medal from 'public/medal.jpeg';
import osi from 'public/osi.jpeg'

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BlogLink({ name, slug }) {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <div className="group">
      <a
        href={`${baseUrl}/blog/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}



export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey, I'm goli akshay 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm an engineer based in India. I currently `}
        <Link href="/work">work</Link>
        {` as a software development engineer at `}
        <span className="not-prose">
          <Badge href="https://www.sliceit.com/">
            {/* <img
              width="13"
              height="11"
              role="img"
              aria-label="Vercel logo"
              className="mr-1 inline-flex"
            >
              <src href="public/slice.png" />
            </img> */}
            {/* <img
              alt="SJSU Logo"
              loading="lazy"
              width="15"
              height="15"
              decoding="async"
              data-nimg="1"
              class="mr-1 inline-flex"
              style="color:transparent"
              srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsjsu.9253cbe4.png&amp;w=16&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsjsu.9253cbe4.png&amp;w=32&amp;q=75 2x"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsjsu.9253cbe4.png&amp;w=32&amp;q=75"
            ></img> */}
            🏦 slice
          </Badge>
          {` . With a strong foundation from my education at `}
          <Badge href="https://www.iiitb.ac.in/">🏫 IIIT Bangalore</Badge>
          {` where I specialized in Artificial Intelligence and Machine Learning with a major in Electronics and Communication Engineering, I bring a unique blend of technical expertise and innovative thinking to my work.`}
        </span>
      </p>
      <br></br>
      {/* <p className="prose prose-neutral dark:prose-invert">
        {` I’m passionate about building robust distributed systems, ensuring impeccable design planning, writing efficient application code, and prioritizing security and observability. My role allows me to dive deep into the intricacies of software development, enabling me to craft solutions that are both scalable and secure.`}
      </p> */}
      {/* <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
        <div className="relative h-60">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={summit}
            fill
            sizes="(max-width: 868px) 213px, 43vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative sm:row-span-2 row-span-1">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={reactathon}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={ship}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={filming}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={meetups}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={smashing}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div> */}

<div className="grid grid-cols-2 grid-rows-1 sm:grid-rows-2 sm:grid-cols-3 gap-4 my-8">
  {/* First Row */}
  <div className="relative h-60 hidden sm:block col-span-2">
    <Image
      alt="Graduation Horizontal Image"
      src={gradhori}
      fill
      sizes="(max-width: 768px) 213px, 66vw"
      priority
      className="rounded-lg object-cover"
    />
  </div>
  <div className="relative h-60">
    <Image
      alt="Graduation Portrait"
      src={grad}
      fill
      sizes="(max-width: 868px) 213px, 43vw"
      priority
      className="rounded-lg object-cover"
    />
  </div>
  {/* Second Row */}
  <div className="relative h-60">
    <Image
      alt="Medal Image"
      src={medal}
      fill
      sizes="(max-width: 768px) 213px, 100vw"
      priority
      className="rounded-lg object-cover medal-image-mobile"
    />
  </div>
  <div className="relative h-60 sm:block col-span-2">
    <Image
      alt="Medal Close-up"
      src={osi}
      fill
      sizes="(max-width: 868px) 213px, 43vw"
      priority
      className="rounded-lg object-cover osi-image-mobile"
    />
  </div>
</div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Outside of my professional life, I am deeply interested in the vibrant
          world of startups. I love exploring new ventures, dissecting their
          unique selling propositions, and understanding their product-market
          fits. This hobby not only keeps me updated with the latest industry
          trends but also fuels my creativity and strategic thinking.
        </p>
      </div>

      {/* Blogs */}

      {/* <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink name="The Story of Canvasboard" slug="canvasboard" />
      </div> */}

      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {/* <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            href="https://goliakshay.com/blog"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">blog</p>
          </a>
        </li> */}
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/goliakshay/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Let's connect</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href="mailto:goliakshay357@gmail.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">goliakshay357 [at] gmail.com</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
