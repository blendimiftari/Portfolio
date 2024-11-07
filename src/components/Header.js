import React from "react"
import Hero from "./Hero"
import Socials from "./Socials"

export default function Header() {
  return (
    <div class=" sticky top-0 flex max-h-screen w-1/2 flex-col py-32">
      <Hero />
      <Socials />
    </div>
  )
}
