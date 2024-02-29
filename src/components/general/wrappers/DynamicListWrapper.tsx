"use client"
import { MutableRefObject, useRef, useState } from "react"
import WrapperContext from "@/app/context/WrapperContext"
import "../../../styles/components/DynamicListWrapper.css"

export default function DynamicListWrapper({
    children
}: { children: React.ReactNode }) {
    const [show, setShow] = useState(false)
    const scrollRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

    function handleScrollClick(left: boolean) {
        const config: ScrollToOptions = {
            left: left 
                ? -Math.abs(scrollRef.current?.clientWidth ?? 0)
                : Math.abs(scrollRef.current?.clientWidth ?? 0),
            top: 0,
            behavior: "smooth"
        }

        scrollRef.current?.scrollBy(config)
    }

    function showOnClick() {
        setShow(!show)
        scrollRef.current?.scrollIntoView(true)
    }

    return (
        <div id="dynamic-list-wrapper">
            <div className="flex relative">
                { !show && (
                    <div className="button-wrapper absolute sm:left-n-1 md:left-n-1 top-0 bottom-0">
                        <button onClick={ () => handleScrollClick(true) }
                            className="control-button rounded-md"
                            aria-label="Previous slide button"
                        >
                            {"<"}
                        </button>
                    </div>
                ) }

                <div ref={scrollRef} className={`list-wrapper flex gap-4 overflow-hidden
                ${ show
                    ? "max-h-full flex-wrap flex-column"
                    : "max-h-96 flex-row"
                }`}>
                    <WrapperContext.Provider value={show
                        ? "max-h-full flex-wrap flex-column"
                        : "max-h-96 flex-row"
                    }>
                        { children }
                    </WrapperContext.Provider>
                </div>

                { !show && (
                    <div className="button-wrapper absolute right-n-1 md:right-n-2 top-0 bottom-0">
                        <button onClick={ () => handleScrollClick(false) }
                            className="control-button rounded-md"
                            aria-label="Next slide button"
                        >
                            {">"}
                        </button>
                    </div>
                )}
            </div>
            <div className="relative text-center mt-2">
                <button onClick={showOnClick} className="absolute">
                    { show ? "Show less" : "Extend" }
                </button>
            </div>
        </div>
    )
}