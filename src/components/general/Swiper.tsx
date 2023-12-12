import { register } from "swiper/element/bundle"
import { useEffect, useRef } from "react"

export default function SwiperPlugin({ content }) {
    const swiperRef = useRef(null)

    useEffect(() => {
        register()

        const swiperParams = {
            breakpoints: {
                1250: {
                    slidesPerView: 6
                },
                700: {
                    slidesPerView: 5
                },
                0: {
                    slidesPerView: 3
                }
            },
            modules: [],
            slidesPerView: 6,
            loop: "true",
            pagination: { clickable: false },
            scrollbar: { draggable: false },
        }

        Object.assign(swiperRef.current!, swiperParams)
        swiperRef.current!.initialize()
    })

    return (
        <swiper-container init="false" ref={swiperRef}>
            {
                content.map((item: any) => (
                    <swiper-slide key={ item.id }>
                        <div className="grid-box">
                            { 
                                (item.attributes.deviconClass)
                                    ? (item.attributes.deviconClass.includes("-"))
                                        ? <i className={"devicon-" + item.attributes.deviconClass + " colored"}></i>
                                        : <i className={"devicon-" + item.attributes.deviconClass + "-plain colored"}></i>
                                    : <i className={"no-icon colored"}>{"?"}</i>
                            }
                            <p>{item.attributes.name}</p>
                        </div>
                    </swiper-slide>
                ))
            }
        </swiper-container>
    )
}