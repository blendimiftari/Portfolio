import React from "react"
import Navbar from "./Navbar"
import Socials from "./Socials"

function Hero() {
  return (
    <section>
      <h1 className="!text-huge font-bold tracking-tight text-textPrimary sm:text-5xl ">
        <a href="/">Blendi Miftari</a>
      </h1>
      <h2 class="mt-3 !text-h2 font-medium tracking-tight text-textPrimary sm:text-xl">
        Computer Science Student
      </h2>
      <p className="mt-4 max-w-xs leading-normal text-paragraph text-paragraphSize">
        Building software that solves real problems, while always learning and
        evolving
      </p>
      <Navbar />
      <Socials />
    </section>
  )
}

export default Hero
