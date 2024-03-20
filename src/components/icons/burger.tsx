"use client"
import { useRef, useState } from "react"
import "../../styles/components/icons/burger.css"

export default function BurgerIcon({toggled}: {toggled: boolean}) {
    const svgContainerRef = useRef<HTMLDivElement>(null)
    const lineBottomRef = useRef<SVGLineElement>(null)
    const [hovering, setHovering] = useState(false)

    return (
        <div ref={svgContainerRef}
            onClick={() => {
                lineBottomRef.current?.setAttribute("x1", toggled
                    ? "5"
                    : hovering
                        ? "5"
                        : "15"
                )
            }}
            onMouseEnter={() => {
                setHovering(true)
                if (!toggled)
                    lineBottomRef.current?.setAttribute("x1", "5")
            }}
            onMouseLeave={() => {
                setHovering(false)
                if (!toggled)
                    lineBottomRef.current?.setAttribute("x1", "15")
            }}
            className="svg-container"
        >
            <svg id="burger-svg" width="35" height="35">
                <line id="top-line"
                    x1="5"
                    x2="30"
                    y1="14"
                    y2="14"
                    strokeWidth="2"
                    stroke={hovering ? "#000" : "#fff"} 
                />
                <line ref={lineBottomRef} id="bottom-line"
                    onAnimationEnd={() => {
                        console.log("Animation ended")
                        lineBottomRef.current?.setAttribute("begin", "")
                    }}
                    x1="15"
                    x2="30"
                    y1="22"
                    y2="22"
                    strokeWidth="2"
                    stroke={hovering ? "#000" : "#fff"}
                />
            </svg>
        </div>
    )
}