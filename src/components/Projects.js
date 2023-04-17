import React, { useEffect } from 'react';
import JSIcon from "../assets/js.svg"
import CSSIcon from "../assets/css3.svg"
import HTMLIcon from "../assets/html5.svg"
import ReactIcon from "../assets/reactjs.svg"
import TailwindIcon from "../assets/tailwind.png"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
        });
      }, []);

  return (
    <section id="projects" className="bg-gray-100 pt-20 pb-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div  className="lg:text-center">
          <p className=" text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span  data-aos="fade">Hey there,</span> <span  data-aos="fade" data-aos-delay="300"> I'm Matt!</span>
          </p>
          <p data-aos="fade" data-aos-delay="500" className="mb-6 mt-2 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A Full Stack Developer 
          </p>
        </div>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-aos="fade" data-aos-delay="600" className="text-3xl font-extrabold text-gray-900">Projects</h2>
        <div  className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up" data-aos-delay="600" className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Pangea Movement.
              </h3>
              <div className="mt-1 max-w-2xl text-sm text-gray-500">
              <p>
                I reinvented Pangea's front end design, giving them an interactive, responsive, and modern UI.
              </p>
              <p className='pt-2'>Technology Stack <p>(Implemented on Existing Shopify Store):</p></p>
              <div className='flex '>
              <img className="w-1/5" src={JSIcon} alt="JavaScript" />
              <img className="w-1/5" src={CSSIcon} alt="CSS3" />
              <img className="w-1/5" src={HTMLIcon} alt="HTML5" />
              </div >
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
              <a
                href="https://www.pangeamovement.com"
                target="_blank"
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                View project<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="800" className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Pangea Movement.
              </h3>
              <div className="mt-1 max-w-2xl text-sm text-gray-500">
              <p>
                I reinvented Pangea's front end design, giving them an interactive, responsive, and modern UI.
              </p>
              <p className='pt-2'>Technology Stack:</p>
              <div className='flex '>
              <img className="w-1/5" src={JSIcon} alt="JavaScript" />
              <img className="w-1/5" src={CSSIcon} alt="CSS3" />
              <img className="w-1/5" src={HTMLIcon} alt="HTML5" />
              </div >
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
              <a
                href="https://www.pangeamovement.com"
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                View project<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="1000" className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                This Portfolio!
              </h3>
              <div className="mt-1 max-w-2xl text-sm text-gray-500">
              <p>
                I designed and implemented this portfolio website, let me know if you like it!
              </p>
              <p className='pt-2'>Technology Stack:</p>
              <div className='flex '>
              <img className="w-1/5" src={ReactIcon} alt="ReactJS" />
              <img className="w-1/5" src={HTMLIcon} alt="CSS3" />
              <img className="w-1/5" src={TailwindIcon} alt="HTML5" />
              </div >
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
              <a
                href="https://www.pangeamovement.com"
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                View project<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
