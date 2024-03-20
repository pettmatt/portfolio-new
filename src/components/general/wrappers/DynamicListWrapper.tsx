"use client"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import WrapperContext from "@/app/context/WrapperContext"
import "../../../styles/components/DynamicListWrapper.css"

export default function DynamicListWrapper({
    children
}: { children: React.ReactNode }) {
    const [showControls, setShowControls] = useState(true)
    const [show, setShow] = useState(false)
    const scrollRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
    const leftButtonRef: MutableRefObject<HTMLButtonElement | null> = useRef(null)
    const rightButtonRef: MutableRefObject<HTMLButtonElement | null> = useRef(null)

    function handleScrollClick(left: boolean) {
        const clientWidth = scrollRef.current?.clientWidth
        const offset = 14

        const scrollLeftCalculation = -Math.abs(clientWidth
            ? clientWidth > 526
                ? clientWidth + offset
                : clientWidth
            : 0
        )
        const scrollRightCalculation = Math.abs(clientWidth
            ? clientWidth > 526
                ? clientWidth + offset
                : clientWidth
            : 0
        )

        const config: ScrollToOptions = {
            left: left
                ? scrollLeftCalculation
                : scrollRightCalculation,
            top: 0,
            behavior: "smooth"
        }

        scrollRef.current?.scrollBy(config)
    }

    function showOnClick() {
        setShow(!show)
        scrollRef.current?.scrollIntoView(true)
    }

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setShowControls(!show)
    //     }, 300)

    //     return () => clearTimeout(timeout)
    // }, [show])

    return (
        <div id="dynamic-list-wrapper">
            <div className={`flex relative`}>
                <div aria-hidden={show}
                    className={`button-wrapper absolute top-0 bottom-0 left-0 sm:left-n-1 md:left-n-3 flex justify-center items-center`}
                >
                    <button ref={leftButtonRef}
                        onClick={() => handleScrollClick(true)}
                        onAnimationEnd={() => {
                            if (show) {
                                leftButtonRef.current?.classList.remove("opacity-100")
                                leftButtonRef.current?.classList.add("hidden")
                            }
                            else {
                                leftButtonRef.current?.classList.remove("hidden")
                                leftButtonRef.current?.classList.remove("opacity-0")
                            }
                        }}
                        className={
                            `control-button rounded-md font-bold
                            ${show ? "disappear opacity-100" : "appear opacity-0"}`
                        }
                        aria-label="Previous slide button"
                    >
                        {"<"}
                    </button>
                </div>

                <div aria-hidden={!showControls}
                    className={`button-wrapper absolute top-0 bottom-0 right-0 sm:right-n-1 md:right-n-3 flex justify-center items-center
                    ${show ? "hidden" : ""}`}
                >
                    <button ref={rightButtonRef} 
                        onAnimationEnd={() => {
                            if (show) {
                                leftButtonRef.current?.classList.remove("opacity-100")
                                leftButtonRef.current?.classList.add("hidden")
                            }
                            else {
                                leftButtonRef.current?.classList.remove("hidden")
                                leftButtonRef.current?.classList.remove("opacity-0")
                            }
                        }}
                        onClick={ () => handleScrollClick(false) }
                        className={`control-button rounded-md font-bold
                            ${show ? "disappear" : "appear"}`
                        }
                        aria-label="Next slide button"
                    >
                        {">"}
                    </button>
                </div>

                <div ref={scrollRef} className={`list-wrapper flex gap-4 overflow-hidden ${ show
                    ? "max-h-full flex-wrap flex-column"
                    : "flex-row mx-12 sm:mx-0"
                }`}>
                    <WrapperContext.Provider value={show
                        ? "max-h-full flex-wrap flex-column"
                        : "flex-row"
                    }>
                        { children }
                    </WrapperContext.Provider>
                </div>
            </div>
            <div id="extend-button-container" className={`relative text-center mt-6 flex justify-center border-width-t-${show ? "solid" : "dotted"}`}>
                <button onClick={showOnClick} className="absolute">
                    { show ? "Show less" : "Extend" }
                </button>
            </div>
        </div>
    )
}