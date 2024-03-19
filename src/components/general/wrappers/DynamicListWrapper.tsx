"use client"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import WrapperContext from "@/app/context/WrapperContext"
import "../../../styles/components/DynamicListWrapper.css"

export default function DynamicListWrapper({
    children
}: { children: React.ReactNode }) {
    const [playAnimation, setPlayAnimation] = useState(false)
    const [showControls, setShowControls] = useState(true)
    const [show, setShow] = useState(false)
    const scrollRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

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

    useEffect(() => {
        if (playAnimation) {
            const timeout = setTimeout(() => {

            }, 300)
        }

        else {

        }
    }, [playAnimation])

    return (
        <div id="dynamic-list-wrapper">
            <div className={`flex relative${
                playAnimation ? " animate-height" : ""
            }`}>
                <div aria-hidden={!showControls}
                    className={`button-wrapper absolute top-0 bottom-0 left-0 sm:left-n-1 md:left-n-3 flex justify-center items-center${showControls ? "" : " hidden"}`}>
                    <button onClick={ () => handleScrollClick(true) }
                        className={`control-button rounded-md font-bold${showControls ? " appear" : " disappear"}`}
                        aria-label="Previous slide button"
                    >
                        {"<"}
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

                <div aria-hidden={!showControls}
                    className={`button-wrapper absolute top-0 bottom-0 right-0 md:right-n-3 flex justify-center items-center${showControls ? "" : " hidden"}`}>
                    <button onClick={ () => handleScrollClick(false) }
                        className={`control-button rounded-md font-bold${showControls ? " appear" : " disappear"}`}
                        aria-label="Next slide button"
                    >
                        {">"}
                    </button>
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