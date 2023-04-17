import React, { useEffect } from 'react';

// import Image from './Image'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import resumePDF from '../assets/MatthewEndall.pdf';

const About = () => {
    
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
        });
      }, []);
      
    
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 data-aos="fade" className="lg:text-center text-base text-indigo-600 font-semibold tracking-wide uppercase">
            About Me
          </h2>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div data-aos="fade"  className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
                <p data-aos="fade" data-aos-delay="200"  className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Personal Information
                </p>
              </dt>
              <dd data-aos="fade" data-aos-delay="400" className="mt-2 ml-16 text-base text-gray-500">
              I'm a full stack developer with a passion for creating elegant and efficient solutions. 
              I have experience with a variety of technologies and enjoy taking on new challenges.  
              I am committed to continuous 
              learning and staying up-to-date with the latest trends and techniques in software development.
              Let's work together to build innovative and impactful solutions.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div data-aos="fade" data-aos-delay="400" className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p data-aos="fade" data-aos-delay="600" className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Hobbies
                </p>
              </dt>
              <dd data-aos="fade" data-aos-delay="800" className="mt-2 ml-16 text-base text-gray-500">
                In my free time, I enjoy learning new languages and exploring the world through communication. I also love experimenting with electronics prototyping, which allows me to bring my ideas to life and create something tangible. Both hobbies allow me to challenge myself, learn new skills, and stay curious about the world around me.
              </dd>
            </div>
        </dl>
    </div>
    </div>
    <div className='mt-6 text-gray-900 text-center'>
        <p className=''>If you wanna find out more, check out my <a className='underline' target="_blank" href={resumePDF}>resume!</a></p>
    </div>
    </section>
  );
}

export default About;
