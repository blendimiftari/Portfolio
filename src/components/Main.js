import React from "react"
import { useState } from "react"
import Card from "./Card"
import fth from "../assets/frokify-thumbnail.png"
import rtwth from "../assets/rolltowin-thumbnail.png"
import maptyth from "../assets/mapty-thumbnail.png"
import bankistth from "../assets/bankist-thumbnail.png"
import whitebankth from "../assets/whitebank-thumbnail.png"
import corahrth from "../assets/corahr-thumbnail.png"
import { MdArrowOutward } from "react-icons/md"

export default function Main() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const handleMouseEnter = index => setHoveredCard(index)
  const handleMouseLeave = () => setHoveredCard(null)

  const educationCards = [
    {
      title: "Computer Science and Engineering",
      dates: "Oct 2021-PRESENT",
      subtitle: "University for Business and Technology, Pristina",
      content:
        "At university, I expanded my knowledge of programming, gaining hands-on experience in areas like data structures, algorithms, and software development. It provided a solid foundation for a career in tech.",
      techStacks: ["HTML", "CSS", "Javascript", "Java", "Php", "MySql"],
    },
    {
      title: "Digital School",
      dates: "Sep 2018-June 2021",
      content:
        "I began my programming journey here, learning essential front-end languages like HTML, CSS, JavaScript, and foundational programming skills in Java.",
      techStacks: ["HTML", "CSS", "Javascript", "Java", "Wordpress"],
    },
    {
      title: "High School",
      dates: "Sep 2018-June 2021",
      subtitle: "Kuvendi i Arberit, Ferizaj",
    },
    {
      title: "Elementary School",
      dates: "Sep 2009-June 2018",
      subtitle: "Gjon Serreci, Ferizaj",
    },
  ]

  const projectCards = [
    {
      title: "CoraHr App",
      img: corahrth,
      content: `This HR Management System is designed to simplify human resource operations. Built as a collaborative university lab project, the system allows administrators to manage essential HR tasks efficiently. Key features include user role management, employee records, and job application tracking, allowing job seekers to apply to the company and enabling HR to manage those applications seamlessly.`,
      techStacks: ["NodeJs", "ReactJs", "Tailwind CSS", "MySql", "MongoDB"],
      link: "https://github.com/EltonMehmeti/HR-Management-System",
    },
    {
      title: "Forkify-Recipe App",
      img: fth,
      content: `Forkify is a JavaScript-based app developed as a learning project. It enables users to search for recipes via the Forkify API, view ingredient details, and adjust servings to match preferences. Built using ES6+ JavaScript features, it showcases skills in API integration and modern web development. Deployed on Netlify for seamless access.`,
      techStacks: ["Javascript", "HTML", "SCSS"],
      link: "https://forkify-blendi.netlify.app/",
    },
    {
      title: "Roll to Win App",
      img: rtwth,
      content: `Roll to Win is a web-based, two-player dice game where players take turns rolling a virtual dice to accumulate points. Avoid rolling a '1' or you'll lose your current points for that turn! Players can hold to save their score, aiming to reach 100 points first to win. Built for learning JavaScript and DOM manipulation in a fun, interactive way.`,
      techStacks: ["Javascript", "HTML", "CSS"],
      link: "https://github.com/blendimiftari/RollToWin",
    },
    {
      title: "Mapty-Workout Tracker App",
      img: maptyth,
      content: `An app that logs running and cycling sessions on an interactive map, capturing distance, duration, cadence, and elevation. It calculates pace and speed, with data stored locally for tracking progress. Built with JavaScript, it demonstrates skills in geolocation, UI design, and classes, deepening knowledge in map integration and interactive interfaces.`,
      techStacks: ["Javascript", "HTML", "CSS"],
      link: "https://github.com/blendimiftari/Mapty-WorkoutTracker",
    },
    {
      title: "Bankist App",
      img: bankistth,
      content: `Bankist is a fictional bank web app I built for learning purposes, simulating core banking features like login, transfers, loan requests, and account closure. Users can track transactions, view balances, and summaries. Developed with JavaScript, HTML, and CSS, this project showcases dynamic UI updates, data handling, and a clean design interface.`,
      techStacks: ["Javascript", "HTML", "CSS"],
      link: "https://github.com/blendimiftari/BankistApp",
    },
    {
      title: "WhiteBank App",
      img: whitebankth,
      content: `A responsive, modern banking website prototype focused on simplicity and a minimalist design. Features interactive sections like a modal for opening an account, smooth scrolling navigation, lazy-loaded images, and testimonials slider. Built with HTML, CSS, and JavaScript for learning and portfolio showcase purposes.`,
      techStacks: ["Javascript", "HTML", "CSS"],
      link: "https://github.com/blendimiftari/WhiteBank",
    },
  ]

  return (
    <div id="content" class=" lg:w-1/2 lg:py-12">
      <section
        id="about"
        class=" pt-16 h-auto scroll-mt-16 md:mb-24 lg:mb-4 lg:scroll-mt-12"
      >
        <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 class="text-xl font-bold uppercase tracking-widest text-textPrimary lg:sr-only">
            About
          </h2>
        </div>
        <div>
          <p class="mb-4 text-paragraph text-base">
            Since my early days as a computer science student, I’ve been
            passionate about learning and growing in software engineering. I aim
            to bridge the gap between theory and real-world problem-solving,
            constantly exploring new technologies and methodologies. Every
            project is an opportunity to deepen my understanding and expand my
            skills.
          </p>
          <p class="mb-4 text-paragraph text-base">
            I’m all about collaboration and creating a supportive team vibe. I
            believe success comes from building strong relationships and helping
            each other out. I’m constantly growing, both professionally and
            personally, and I always try to bring positivity to everything I do.
            My goal is to create a space where everyone feels encouraged,
            empowered, and ready to thrive.
          </p>
          <p class="mb-4 text-paragraph text-base">
            When I’m not coding, you’ll find me enjoying sports, movies, NBA,
            football, and chess. These hobbies help me stay focused, balanced,
            and continuously grow as a developer and individual.
          </p>
        </div>
      </section>
      <section
        id="education"
        className="!mb-60 scroll-mt-6 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 class="text-xl font-bold uppercase tracking-widest text-textPrimary lg:sr-only">
            Education
          </h2>
        </div>

        {educationCards.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`transition-opacity duration-300 ${
              hoveredCard !== null && hoveredCard !== index
                ? "opacity-50"
                : "opacity-100"
            }`}
          >
            <Card
              title={card.title}
              subtitle={card.subtitle}
              dates={card.dates}
              content={card.content}
              techStacks={card.techStacks}
            />
          </div>
        ))}
        <a
          href="https://drive.google.com/file/d/1kqy-31_Uut2hJuqYD9n569f1iJ3qBO_W/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex ml-6 text-base hover:text-violet-300 font-bold text-textPrimary"
        >
          View Full Resume
          <MdArrowOutward
            className="ml-1 mt-2 transform transition-transform duration-200 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 "
            size={16}
          />
        </a>
      </section>
      <section
        id="projects"
        className="mb-16 mt-32 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 class="text-xl font-bold uppercase tracking-widest text-textPrimary lg:sr-only">
            Projects
          </h2>
        </div>

        {projectCards.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`transition-opacity duration-300 ${
              hoveredCard !== null && hoveredCard !== index
                ? "opacity-50"
                : "opacity-100"
            }`}
          >
            <Card
              title={card.title}
              img={card.img}
              content={card.content}
              techStacks={card.techStacks}
              link={card.link}
            />
          </div>
        ))}
      </section>
    </div>
  )
}
