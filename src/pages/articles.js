import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import article1 from '../../public/images/articles/create loading screen in react js.jpg'
import { motion, useMotionValue } from 'framer-motion'

const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }) => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10)
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}>
      <h2 className='capitalize text-xl font-semibold hover:underline dark:hover:text-light dark:text-light'>{title}</h2>
      <FramerImage style={{ x: x, y: y }} ref={imgRef} src={img} alt={title}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        className='z-10 w-96 h-auto hidden absolute rounded-lg' />
    </Link>

  )
}

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4'>
      <MovingImg title={title} img={img} link={link} />
      <span className='text-primary dark:text-primaryDark font-semibold pl-4'>{date}</span>
    </motion.li>
  )
}

const FeaturedArticles = ({ img, title, time, summary, link }) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl' />
      <Link
        href={link}
        target='-blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,
  (max-width:1200px) 50vw,
  50vw"/>
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 hover:underline dark:hover:text-light dark:text-light mt-4'>{title}</h2>
      </Link>
      <p className='text-sm mb-2 dark:text-light'>{summary}</p>
      <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
    </li>
  )
}

const articles = () => {
  return (
    <> <Head>
      <title>Code | Articles Page</title>
      <meta name='description' content='any description' />
    </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
          <AnimatedText text="Words Can Change The World!" className='mb-16' />
          <ul className='grid grid-cols-2 gap-16'>
            <FeaturedArticles
              title=" Build A Custom Pagination Component In Reactjs From Scratch"
              summary=" Learn how to build a custom pagination component in ReactJS from scratch.
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article1}
            />
            <FeaturedArticles
              title=" Build A Custom Pagination Component In Reactjs From Scratch"
              summary=" Learn how to build a custom pagination component in ReactJS from scratch.
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article1}
            />
            <FeaturedArticles
              title=" Build A Custom Pagination Component In Reactjs From Scratch"
              summary=" Learn how to build a custom pagination component in ReactJS from scratch.
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article1}
            />
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light'>All Articles</h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="27 July, 2024"
              link="/"
              img={article1} />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="27 July, 2024"
              link="/"
              img={article1} />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="27 July, 2024"
              link="/"
              img={article1} />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="27 July, 2024"
              link="/"
              img={article1} />
          </ul>
        </Layout>
      </main>
    </>

  )
}

export default articles