"use client";

import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Innerspace",
    imgSrc: "/project-imgs/innerspace.png",
    code: "https://github.com/202306-NEA-DZ-FEW/online-Therapist/",
    projectLink: "https://innerspace.codewithwalid.pro",
    tech: ["React", "Nextjs", "Tailwind", "Firebase", "Framer Motion", "Stripe", "Sanity", "Jest", "Github Actions", "Eslint", "Vercel"],
    description:
      "Bridge the gap to mental well-being – A therapy website connects patients with experienced therapists for personalized and confidential support.",
    modalContent: (
      <>
        <p>
          Worked as a developer and as a tech lead in the middle of the project.  created dynamic reusable components, Integrated many features like registration for therapists, blog system  using sanity  with comments and reactions for authenticated users, and a the profile page for the therapists.
        </p>
        <p>
          The tech stack is based on Nextjs with the Tailwind,
          connected to a firebase backend, with a sanity CMS.
        </p>
      </>
    ),
  },
  {
    title: "MoviPlaza",
    imgSrc: "/project-imgs/moviplaza.png",
    code: "https://github.com/202306-NEA-DZ-FEW/movie-project-team_404/",
    projectLink: "https://moviplaza.codewithwalid.pro",
    tech: ["React", "Next", "Tailwind", "DaisyUI", "TmDB API", "Eslint", "Prettier", "commitlint", "Vercel"],
    description:
      "Unlock a world of movies and TV shows online with our TMDB API-powered website for seamless discovery and enjoyment.",
    modalContent: (
      <>
        <p>
          Worked as a tech lead for this web application. Integrated TmDB
          api&apos;s, Created dynamic and reusable components like the navbar. integrated the search functionality.
        </p>
        <p>
          I work primarily on the frontend, creating reusable components and
          integrating api.
        </p>
        <p>
          We had only one week and the team in total consists of 5 developers. This is a passion project for all of us. as it was our first real next project during Recoded bootcamp
        </p>
      </>
    ),
  },
  {
    title: "Ebuy",
    imgSrc: "/project-imgs/ebuy.png",
    code: "https://github.com/202306-NEA-DZ-FEW/e-commerce-project-e-buy/",
    projectLink:
      "https://e-commerce-project-e-buy.vercel.app/",
    tech: ["React", "Nextjs", "Tailwind", "Redux", "Eslint", "Prettier", "commitlint", "Vercel"],
    description:
      "Discover eBuy: a sleek online store powered by Next.js, Redux, and a dynamic API for a seamless shopping adventure!",
    modalContent: (
      <>
        <p>
          Embark on a seamless shopping journey at eBuy, where Next.js, Redux, and a dynamic API converge for a modern and personalized experience. Explore the future of online retail with cutting-edge technology at your fingertips!
        </p>
        <p>Like moviplaza we had only one week and the team in total consists of 5 developers. i mainly worked on cart page the global state using redux/rtk</p>
      </>
    ),
  },
  {
    title: "PyNotes",
    imgSrc: "/project-imgs/pynotes.png",
    code: "https://www.github.com/dzc0d3r/pynotes",
    projectLink: "https://pynotes.codewithwalid.pro",
    tech: ["Python", "mkdocs", "mkdocs-material", "mkdocs-static-i18n", "Github Actions"],
    description:
      "Elevate your Python programming skills with our intuitive documentation hub.",
    modalContent: (
      <>
        <p>
          This is a self project that i made to share python tutorials, projects, and tips while learning python and becoming a pythoneer.
        </p>
        <p>
          I wrote some tutorials and integrated translation into arabic too, while the project seems straight forward it needs more work especialy for the translation and content creation.
        </p>
      </>
    ),
  },
];
