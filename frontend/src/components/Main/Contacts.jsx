import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaImagePortrait } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contacts = () => {
  return (
    <div className="flex flex-wrap justtify-start gap-4 p-4 sm:gap-6 sm:p-6">
      {/* RESUME */}
      <a
        href="https://thy-resume.netlify.app/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-pink-200 to-fuchsia-100 px-4 sm:px-5 text-sm sm:text-base font-medium text-gray-800 duration-500"
      >
        <div className="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
          <div class="absolute translate-x-0 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0">
            <FaImagePortrait className="h-5 w-5" />
          </div>
          <span class="pl-6">Resume</span>
          <div class="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </a>

      {/* GITHUB */}
      <a
        href="https://github.com/thyatran"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 px-4 sm:px-5 text-sm sm:text-base font-medium text-neutral-200"
      >
        <div className="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
          <div class="absolute translate-x-0 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0">
            <FaGithub className="h-5 w-5" /> {/* GitHub icon */}
          </div>
          <span class="pl-6">Github</span>
          <div class="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </a>

      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/thyatran/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 px-4 sm:px-5 text-sm sm:text-base font-medium text-neutral-200"
      >
        <div className="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
          <div class="absolute translate-x-0 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0">
            <FaLinkedin className="h-5 w-5" />
          </div>
          <span class="pl-6">LinkedIn</span>
          <div class="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </a>

      {/* MAIL */}
      <a
        href="mailto:thyatran0113@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 px-4 sm:px-5 text-sm sm:text-base font-medium text-neutral-200"
      >
        <div className="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
          <div class="absolute translate-x-0 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0">
            <IoMail className="h-5 w-5" />
          </div>
          <span class="pl-6">Mail</span>
          <div class="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Contacts;
