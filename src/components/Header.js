import React, { useState, useEffect } from 'react';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        const sectionBottom = section.offsetTop + section.offsetHeight - 50;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const id = section.getAttribute('id');
          setActiveLink(id);
        }
      });

      navLinks.forEach((link) => {
        console.log(link)
        const href = link.getAttribute('href').substring(1);
        if (href === activeLink) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink]);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className="fixed w-full z-10 shadow-sm bg-white  text-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-12">
        <a href="#home" className="text-xl font-bold">
            Matthew Endall
        </a>
        <nav className="hidden md:flex space-x-4">
          <a className='hover:underline underline-offset-8' href="#projects">Projects</a>
          <a className='hover:underline underline-offset-8' href="#about">About Me</a>
          <a className='hover:underline underline-offset-8' href="#contact">Contact</a>
        </nav>
        <button
          type="button"
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={toggleMenu}
        >
          {showMenu ? (
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9.5l5 5H5l5-5zm0-2.5l-5 5h10l-5-5z"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 6h14v2H3V6zm0 5h14v2H3v-2zm0 5h14v2H3v-2z"
              />
            </svg>
          )}
        </button>
        <div
          className={`${
            showMenu ? 'block z-10' : 'hidden'
          } md:hidden absolute top-16 left-0 w-full bg-gray-800 py-2 transition-opacity duration-500`}
          style={{ height: showMenu ? '' : '0' }}
        >
          <a
            href="#projects"
            className="block px-4 py-2 text-white hover:bg-gray-700"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-white hover:bg-gray-700"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-white hover:bg-gray-700"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
