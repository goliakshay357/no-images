import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

async function Stars() {
  let res = await fetch('https://api.github.com/repos/vercel/next.js');
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        I’m passionate about building robust distributed systems, ensuring impeccable design planning, writing efficient application code, and prioritizing security and observability. My role allows me to dive deep into the intricacies of software development, enabling me to craft solutions that are both scalable and secure. Here's a summary of my
          work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">slice</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Development Engineer, 2022 — Present
        </p>
        <p>
        I began my journey with <a href="https://www.sliceit.com/">slice</a> as an intern in January 2022 and transitioned to a full-time software developer in July 2022. My initial role was with the core UPI 🇮🇳 team, where I gained valuable experience in digital payment systems. Afterward, I contributed to the Collections Operations (COPS) team, enhancing my skills in financial operations and loan recovery collections management. Currently, I am part of the Core Banking Systems 🏦 team, where I am involved in developing and optimizing banking solutions that drive the backbone of our bank financial services.
        </p>
        {/* <ul>
          <li>
            In 2021, I was promoted to Director of DevRel. We{' '}
            <a href="https://twitter.com/kelseyhightower/status/1105985400110112768">
              translated customer pain
            </a>{' '}
            back into the product roadmap. We spoke at{' '}
            <Link href="/blog/nextjs-conf-2022-recap">conferences</Link>, wrote
            blog posts, and created videos. We built open-source examples and
            contributed back to the product.
          </li>
          <li>
            In 2022, I was promoted to VP of Developer Experience, now also
            leading our product documentation team. My team created a{' '}
            <a href="https://nextjs.org/learn">new free course</a> to teach
            Next.js, which had 17 million page views that year.{' '}
            <a href="https://twitter.com/leeerob/status/1608900031859527682">
              I shipped.
            </a>{' '}
            I partnered with our open-source community, collaborating with
            frameworks like{' '}
            <a href="https://vercel.com/docs/frameworks/nuxt">Nuxt</a> and{' '}
            <a href="https://astro.build/blog/vercel-official-hosting-partner/">
              Astro
            </a>{' '}
            and sponsoring individuals and projects.
          </li>
          <li>
            In 2023, I was promoted to VP of Product, now also leading Product
            Management.
          </li>
        </ul> */}
        {/* <p>
          Since I joined Vercel in 2020, Next.js active developers have grown
          1000%, now at ~900k. Next.js is now a top 10 software project on
          GitHub with <Stars />. It's used by Walmart, ChatGPT, Starbucks, Okta,
          Datastax, Notion, and <a href="https://nextjs.org/showcase">more</a>.
        </p> */}
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Canvasbird Open Source</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Founder and Maintainer, 2019 — 2022
        </p>
        <p>
        I am the founder of Canvasboard,  an initiative that garnered recognition from the Government of Telangana during the COVID-19 pandemic. a project dedicated to revolutionizing the way we teach, present, and convey ideas during the COVID-19 Pandemic. 
        Canvasboard aims to streamline the teaching and presentation process by offering an interactive board equipped with versatile plugins. This innovative platform eliminates the need for juggling multiple tools and platforms, providing a unified space for educators, presenters, and idea enthusiasts. Whether it's for virtual classrooms, professional presentations, or creative brainstorming sessions, Canvasboard simplifies and enhances the way information is shared and understood.
        </p>
        {/* <p>
          On the frontend, I led our move from a custom webpack and React
          configuration to Next.js and the latest React patterns. In the
          process, I shared my learnings online, helping educate members of the
          React and Next.js community by creating courses.
        </p>
        <p>
          Throughout my two years, I was able to work on some hard problems:
          decoupling a decade old monolith into microservices, working with a
          federated GraphQL API, learning and occasionally managing a Kubernetes
          cluster, building and implementing a design system, incrementally
          migrating individual components and routes to a new framework and
          infrastructure, and more.
        </p> */}
        {/* <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Workiva</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, 2015 — 2018
        </p>
        <p>
          Workiva ($WK) is a cloud platform for data reporting and compliance.
          During my time at Workiva, I gained my first production experience
          using React. I worked on tooling to help predict and alert and
          regressions in our SaaS platform, building a product similar to
          open-source tools like Sentry.
        </p> */}
      </div>
    </section>
  );
}
