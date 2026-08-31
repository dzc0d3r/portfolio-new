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
    title: "YoSell",
    imgSrc: "/project-imgs/yosell.png",
    projectLink: "https://yosell.app",
    tech: ["Next.js", "NestJS", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Vercel"],
    description:
      "#1 E-commerce platform in Algeria — launch a store in minutes, confirm orders faster, and manage delivery with COD-ready checkout.",
    modalContent: (
      <>
        <p>
          YoSell is a full-stack e-commerce platform built for the Algerian market, enabling sellers to launch online stores with Cash on Delivery (COD) support, buyer confirmation flows, and delivery route management.
        </p>
        <p>
          Features include storefront previews, COD-ready checkout, buyer confidence signals (verified buyer, COD payment, delivery assigned), and a dashboard to manage orders across wilayas like Algiers, Oran, and Constantine.
        </p>
      </>
    ),
  },
  {
    title: "Mirador",
    imgSrc: "/project-imgs/mirador.png",
    projectLink: "http://laravel.mirador.lu/",
    tech: ["Laravel", "React", "TypeScript", "Tailwind CSS", "MySQL"],
    description:
      "Restaurant and event venue website in Luxembourg — table reservations, event bookings, menu management, and an admin panel.",
    modalContent: (
      <>
        <p>
          Mirador is a full-stack web application for a restaurant and terrace venue in Luxembourg. It features table reservations, event booking, a digital menu, and an agenda for upcoming events.
        </p>
        <p>
          Built with Laravel on the backend and React on the frontend. Includes an admin panel at laravel.mirador.lu/admin for managing reservations, menu items, events, and venue spaces.
        </p>
      </>
    ),
  },
  {
    title: "WavyCloud",
    imgSrc: "/project-imgs/wavycloud.png",
    projectLink: "https://wavycloud.com/en",
    tech: ["Next.js", "Express.js", "TypeScript", "Tailwind CSS", "AI", "WhatsApp API"],
    description:
      "AI-powered phone assistant for contractors — answers calls in English, captures job details, and sends them to you via WhatsApp.",
    modalContent: (
      <>
        <p>
          WavyCloud is an AI phone assistant built for contractors who can&apos;t answer every call. It answers in English (and Spanish), captures the job details using AI, and sends them straight to your WhatsApp — 24/7, with a 300ms response time.
        </p>
        <p>
          Built as a freelance gig. The platform features a landing page with pricing, service management, user authentication, and WhatsApp integration for real-time job lead delivery.
        </p>
      </>
    ),
  },
  {
    title: "Innerspace",
    imgSrc: "/project-imgs/innerspace.png",
    code: "https://github.com/202306-NEA-DZ-FEW/online-Therapist/",
    projectLink: "https://innerspace.vercel.app/",
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
    projectLink: "https://movie-project-team-404.vercel.app/",
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
];
