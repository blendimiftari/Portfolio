import React from "react"
import { MdArrowOutward } from "react-icons/md"

export default function Card({
  title,
  img,
  subtitle,
  dates,
  content,
  techStacks,
  link,
}) {
  const CardContent = (
    <div className="relative group mt-6 mb-12 p-6 rounded-lg bg-bgc transition-transform hover:shadow-xl grid grid-cols-1 sm:grid-cols-6 gap-4">
      {img ? (
        <div className="sm:col-span-2">
          <img
            src={img}
            className="rounded-md border-4 border-gray-600 object-cover w-40 h-24"
          />
        </div>
      ) : (
        <div className="text-paragraph text-base pt-1 font-semibold uppercase tracking-wide sm:col-span-2">
          <p>{dates}</p>
        </div>
      )}
      <div className="sm:col-span-4">
        <h3 className="text-xl flex group-hover:text-violet-300 font-bold text-textPrimary mb-2">
          {title}
          {link && (
            <MdArrowOutward
              className="ml-1 mt-2 transform transition-transform duration-200 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1"
              size={20}
            />
          )}
        </h3>
        <h2 className="text-lg font-semibold text-paragraph mb-2">
          {subtitle}
        </h2>
        <p className="text-paragraph text-lg leading-relaxed mb-4">{content}</p>
        <ul className="flex flex-wrap">
          {techStacks &&
            techStacks.map((tech, index) => (
              <li key={index} className="mr-2 mt-2">
                <div className="flex items-center rounded-full bg-violet-300/10 px-3 py-1 text-xs font-medium leading-5 text-violet-300">
                  {tech}
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="absolute -inset-0.5 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gray-400/20 z-0"></div>
    </div>
  )

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {CardContent}
    </a>
  ) : (
    CardContent
  )
}
