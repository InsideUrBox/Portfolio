import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Contact Me</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <p className="text-base text-gray-500">
                  Email: matt.j.endall@gmail.com
                </p>
              </li>
              <li>
                <p className="text-base text-gray-500">
                  Phone: +61 404 709 119
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="https://github.com/insideurbox"
                  className="text-base text-gray-500 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://au.linkedin.com/in/matthew-endall-b275b8239"
                  className="text-base text-gray-500 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; 2023 Matthew Endall. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
