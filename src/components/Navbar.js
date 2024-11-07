import React, { useEffect, useState } from "react"
import { Link } from "react-scroll"

function Navbar() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-10% 0px -30px 0px",
      threshold: 0.1,
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        } else if (activeSection === entry.target.id) {
          setActiveSection("")
        }
      })
    }, options)

    const sections = document.querySelectorAll("section")
    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [activeSection])

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
              className={`text-xs cursor-pointer group flex items-center py-3 ${
                activeSection === item.id
                  ? "text-textPrimary"
                  : "text-paragraph"
              }`}
            >
              <span
                className={`text-xs nav-indicator mr-4 h-px transition-all ${
                  activeSection === item.id
                    ? "w-16 bg-textPrimary"
                    : "w-8 bg-paragraph group-hover:w-16 group-hover:bg-textPrimary"
                }`}
              ></span>
              <span
                className={`text-xs nav-text font-bold uppercase tracking-widest ${
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
