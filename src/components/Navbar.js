import React, { useEffect, useState } from "react"
import { Link } from "react-scroll"

function Navbar() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-30% 0px -30px 0px",
      threshold: 0.2,
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Set the section as active when it comes into view
          setActiveSection(entry.target.id)
        } else if (activeSection === entry.target.id) {
          // If the section is not visible and it is currently active, reset it
          setActiveSection("")
        }
      })
    }, options)

    const sections = document.querySelectorAll("section")
    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [activeSection]) // Include activeSection in the dependency array to handle updates

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
  ]

  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        {navItems.map(item => (
          <li key={item.id}>
            <Link
              to={item.id}
              offset={-50}
              className={`cursor-pointer group flex items-center py-3 ${
                activeSection === item.id
                  ? "text-textPrimary"
                  : "text-paragraph"
              }`}
            >
              <span
                className={`nav-indicator mr-4 h-px w-8 transition-all ${
                  activeSection === item.id
                    ? "w-16 bg-textPrimary"
                    : "bg-paragraph group-hover:w-16 group-hover:bg-textPrimary"
                }`}
              ></span>
              <span
                className={`nav-text text-s font-bold uppercase tracking-widest ${
                  activeSection === item.id
                    ? "text-textPrimary"
                    : "text-paragraph group-hover:text-textPrimary"
                }`}
              >
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
