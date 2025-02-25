import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            className="text-primary capitalize dark:text-primaryDark"
            target={"_blank"}>
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/75">
          {time} | {address}
        </span>

        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Expriences = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Exprience</h2>

      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Full Stack Developer"
            company="TECHINOVATIV"
            time=" 2024-Present"
            companyLink="https://techinovativ-frontend.vercel.app/"
            address="Sector 62, Noida"
            work="Worked as a Tech Lead on a team responsible for developing new features for the app, including enhancing search accuracy and relevance, as well as building advanced SEO and data visualization features."
          />
          <Details
            position="Associate Software Engineer"
            company="Fantiger"
            time=" 2022-Jul - 2023-Sept"
            companyLink="https://www.google.com"
            address="Sector 90, Noida"
            work=" Single-handedly migrated a fantiger app from React to Next.js, optimizing page loading speed and image
            handling, resulting in improved performance and better user experience."
          />
          <Details
            position="Frontend Developer Intern"
            company="Artistfirst Technology"
            time=" 2022-Mar - 2022-Jun"
            companyLink="https://www.google.com"
            address="Sector 142, Noida"
            work="Developed a responsive web applications using ReactJs and TailwindCSS, improving user engagement by 15%. Participated in code reviews and followed Agile methodologies, improving code quality and development efficiency.
"
          />
        </ul>
      </div>
    </div>
  );
};

export default Expriences;
