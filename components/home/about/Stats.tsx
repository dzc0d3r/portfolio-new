"use client";

import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">HTML5</span>
            <span className="chip">CSS3</span>
            <span className="chip">JavaScript</span>
            <span className="chip">Tailwind</span>
            <span className="chip">TypeScript</span>
            <span className="chip">React</span>
            <span className="chip">Nextjs</span>    
            <span className="chip">Redux/RTK</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Postgres</span>
            <span className="chip">Firebase</span>
            <span className="chip">Sanity</span>
            <span className="chip">GitHub</span>
            <span className="chip">Docker</span>
            <span className="chip">GitHub Actions</span>
            
            <span className="chip">Jest</span>
            <span className="chip">Cypress</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            
            <span className="chip">React Native</span>
            <span className="chip">Solid.js</span>
            <span className="chip">Figma</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Appwrite</span>
            <span className="chip">Supabase</span>
            <span className="chip">Vercel</span>
            <span className="chip">PHP</span>
            <span className="chip">Laravel</span>
            <span className="chip">Golang</span>
            <span className="chip">Python</span>
            <span className="chip">FastAPI</span>
            <span className="chip">Phoenix</span>
            
            
           
          </div>
        </div>
      </Reveal>
    </div>
  );
};
