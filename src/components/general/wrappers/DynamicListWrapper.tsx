"use client"
import { MutableRefObject, useRef, useState } from "react"
import "../../../styles/components/DynamicListWrapper.css"
import WrapperContext from "@/app/context/WrapperContext"

export default function DynamicListWrapper({
    children
}: { children: React.ReactNode }) {
    const [show, setShow] = useState(false)
    const scrollRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

    function handleScrollClick(scrollAmount: number) {
        const currentScroll = scrollRef.current?.scrollLeft ?? 0
        const scrollToOptions = {
            left: 0,
            behavior: "smooth"
        }

        if (scrollAmount < 0) scrollToOptions.left = currentScroll - scrollAmount
        else scrollToOptions.left = currentScroll + scrollAmount

        scrollRef.current?.scrollBy(scrollToOptions)
    }

    function showOnClick() {
        setShow(!show)
    }

    return (
        <div id="dynamic-list-wrapper">
            <div className="flex relative">
                { !show && (
                    <div className="absolute left-0 top-0 bottom-0">
                        <button onClick={ () => handleScrollClick(-120) }
                            className="button-next rounded-md"
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
                    <div className="absolute right-0 top-0 bottom-0">
                        <button onClick={ () => handleScrollClick(120) }
                            className="button-next rounded-md"
                        >
                            {">"}
                        </button>
                    </div>
                )}
            </div>
            <button onClick={showOnClick}>
                { show ? "Show less" : "Extend" }
            </button>
        </div>
    )
}