import React from "react"
import { FaGoogle } from "react-icons/fa"

export default function ContactLink() {
  return (
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=blendi4miftari@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-paragraph hover:text-textPrimary"
    >
      <span class="sr-only">Gmail</span>
      <FaGoogle size={24} />
    </a>
  )
}
