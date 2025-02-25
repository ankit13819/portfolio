import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/profile-pic.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Expriences from '@/components/Expriences'
import Education from '@/components/Education'

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Code | About Page</title>
        <meta name='description' content='any description' />
      </Head>
      <main className='flex w-full flex-col items-center  justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion Fuels Purpose" className='mb-16' />
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-center justify-start
            '>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium '>
                I’m Ankit Gupta, a web developer and android developer with 2 years of experience, specializing in building dynamic, high-performance web applications using React and Next.js. I believe in creating intuitive, user-centered digital experiences and am passionate about using modern technologies to solve complex problems.
              </p>
              <p className='my-4 font-medium'>
                Design is about solving real problems and creating intuitive experiences. As a React and Next.js developer, I focus on combining clean code with user-centered design to build high-performance, scalable, and accessible digital products.
              </p>
              <p className='my-4 font-medium '>
                Whether ${`I'm`} working on a website, mobile app, or
                other digital product, I bring my commitment to design excellence and user-centered thinking to
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={profilePic} alt='codebucks' className=''
                priority
                sizes="(max-width:768px) 100vw,
                      (max-width:1200px) 50vw,
              33vw"/>
            </div>


            <div className='col-span-2 flex flex-col items-end justify-between'>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold '>
                  <AnimatedNumber value={2} />+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Satisfied Clients</h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold '>
                  <AnimatedNumber value={4} />+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Projects Completed</h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold '><AnimatedNumber value={2} />+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Years of Exprience</h2>
              </div>
            </div>
          </div>
          <Skills />
          <Expriences />
          <Education />
        </Layout>

      </main>
    </>
  )
}

export default about