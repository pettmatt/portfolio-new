import { register } from "swiper/element"
import { Swiper, SwiperSlide } from "swiper/react"

import { skill } from "@/types/strapi-components"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

register()

export default function Slider({ array }: { array: any[] }) {
    return (
        <swiper-container
            // breakpoints={
            //     1250: {
            //     slidesPerView: 6
            //     },
            //     700: {
            //     slidesPerView: 5
            //     },
            //     0: {
            //     slidesPerView: 3
            //     }
            // }
            space-between="3"
            slides-per-view="5"
            grid-rows="3"
            mousewheel-force-to-axis="true"
        >
            {
                array.map((item: any, index: number) => {
                    <Item key={ index } item={ item } />
                })
            }
        </swiper-container>
    )
}

function Item({ item }: { item: any | skill }) {
    return (
        <swiper-slide>
            <div className="w-max">
                <FontAwesomeIcon icon={fab[item.attributes.class_name || "faJava" ]} size="lg"/>
            </div>
            <p>
                { item.attributes.name }
            </p>
        </swiper-slide>
    )
}