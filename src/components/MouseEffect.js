import React, { useEffect, useState } from "react"

function MouseFollowLight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = e => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const lightStyle = {
    position: "fixed", // Fixed so it stays in place while scrolling
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 30,
    pointerEvents: "none", // Prevent blocking other elements
    transition: "background 0.3s ease", // Smooth transition for gradient effect
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px,rgba(92, 84, 112, 0.3), transparent 90%)`,
  }

  return <div style={lightStyle}></div>
}

export default MouseFollowLight
