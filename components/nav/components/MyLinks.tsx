"use client";

import styles from "./headinglinks.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import {BsStackOverflow} from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link href="https://www.linkedin.com/in/walid-lamraoui" target="_blank" rel="nofollow">
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="https://stackoverflow.com/users/8990846/walid-lamraoui" target="_blank" rel="nofollow">
          <BsStackOverflow size="2.4rem" />
        </Link>
      </motion.span>
    

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="https://github.com/dzc0d3r" target="_blank" rel="nofollow">
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>


      

    </div>
  );
};
