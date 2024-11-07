import React from "react"
import ContactLink from "./ContactLink"
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"

export default function Socials() {
  return (
    <div className="m-0">
      <ul class="ml-1 mt-8 flex items-center">
        <li class="mr-5 text-xs shrink-0">
          <a
            class="block text-paragraph hover:text-textPrimary"
            href="https://github.com/blendimiftari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">GitHub</span>
            <FaGithub size={30} />
          </a>
        </li>
        <li class="mr-5 text-xs shrink-0">
          <a
            class="block text-paragraph hover:text-textPrimary"
            href="https://www.linkedin.com/in/blendi-miftari-623451255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">LinkedIn</span>
            <FaLinkedin size={30} />
          </a>
        </li>
        <li class="mr-5 text-xs shrink-0">
          <ContactLink />
        </li>
        <li class="mr-5 text-xs shrink-0">
          <a
            class="block text-paragraph hover:text-textPrimary"
            href="https://www.facebook.com/blendi.miftarii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">Facebook</span>
            <FaFacebook size={30} />
          </a>
        </li>
        <li class="mr-5 text-xs shrink-0">
          <a
            class="block text-paragraph hover:text-textPrimary"
            href="https://www.instagram.com/blendimiftarii/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">Instagram</span>
            <FaInstagram size={30} />
          </a>
        </li>
      </ul>
    </div>
  )
}
