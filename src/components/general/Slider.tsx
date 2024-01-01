// "use client"
// import { register } from "swiper/element/bundle"

// import { project, skill } from "@/types/strapi-components"
// import { useEffect, useRef } from "react"

// register()

// export default function Slider({ array }: { array: skill[] | project[] }) {
//     const swiperRef = useRef(null)
    
//     useEffect(() => {
//         if (swiperRef.current !== null) {
//             swiperRef.current.addEventListener("swiperprogress", (e: any) => {
//                 const [swiper, progress] = e.details
//                 console.log("Progress", progress)
//             })
    
//             swiperRef.current.addEventListener("swiperslidechange", (e: any) => {
//                 console.log("slide changed")
//             })
//         }
//     }, [])

//     return (
//         <swiper-container ref={swiperRef}
//             breakpoints={{
//                 1250: {
//                     slidesPerView: 6
//                 },
//                 700: {
//                     slidesPerView: 5
//                 },
//                 0: {
//                     slidesPerView: 3
//                 }
//             }}
//             space-between="3"
//             slides-per-view="5"
//             grid-rows="3"
//             mousewheel-force-to-axis="true"
//         >
//             {
//                 array.map((item: skill | project, index: number) => {
//                     console.log("item", item.attributes.name)
//                     return <swiper-slide key={`swiper-item-${index}`}>
//                         {/* <div className="w-max">
//                 //             <FontAwesomeIcon icon={fab[item.attributes.class_name || "faJava" ]} size="lg"/>
//                 //         </div> */}
//                         <p>
//                             { item.attributes.name }
//                         </p>
//                     </swiper-slide>
//                 })
//             }
//         </swiper-container>
//     )
// }