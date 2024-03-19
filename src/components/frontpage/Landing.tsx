"use client"
import { useEffect, useRef, useState } from "react"
import "../../styles/specific/landing.css"

export default function Landing() {
    const [animate, setAnimate] = useState(false)
    const parentRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (window.scrollY === 0) setAnimate(true)
        }, 2000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <div ref={parentRef} id="landing"
            onAnimationEnd={() => {
                parentRef.current?.classList.remove("full-height")
                parentRef.current?.classList.add("min-height")
            }}
            className={`flex flex-col sm:flex-row gap-6 py-12 full-height${
                animate ? " animate" : ""
            }`}
        >
            <div className="title-wrapper flex-1">
                <h1 className="flex flex-col"
                    title="Hello, I am your ordinary web developer with versatile skills"
                >
                    <span aria-hidden className="greeting text-8xl sm:text-9xl my-12">Hello.</span>
                    <span aria-hidden className="text-3xl my-4">I am</span>
                    {/* whitespace-nowrap, min-[410px]:whitespace-wrap */}
                    <span aria-hidden className="name text-c whitespace-nowrap">Petteri Mattila</span>
                    {/*  whitespace-nowrap, min-[410px]:flex-column */}
                    <span aria-hidden className="flex gap-2 min-[440px]:flex-row flex-col text-3xl my-6 whitespace-nowrap ">
                        {/* Iterate a role array, web developer, backend, frontend,
                        debugger, optimizer, updater, tester, concepter. */}
                        your ordinary <span className="role">web developer</span>
                    </span>
                </h1>
            </div>
            <div className="tool-wrapper flex-1 sm:m-auto sm:text-center">
                {/* <div>Right tool to the right job</div> */}
                {/* Image that shows a random skill of mine */}
                {/* After iteration show all with animation and add a text "and more to come" */}
                {/* Secondary anim: while iterating place the images in a list and when finished add the text */}
            </div>
        </div>
    )
}