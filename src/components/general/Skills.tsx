"use client"
import WrapperContext from "@/app/context/WrapperContext"
import { skill } from "@/types/strapi-components"
import { useContext } from "react"

function Skills({ skills }: { skills: skill[] }) {
    const wrapperStatus = useContext(WrapperContext)

    return (
        <ul className={`flex gap-7 justify-center md:justify-start ${
            (wrapperStatus?.includes("flex-column"))
                ? "flex-column flex-wrap"
                : "flex-row"
        }`}>
            {
                skills.sort().map((tool, index) =>
                    <li key={`tool-${ index }` } className="w-28 text-center">
                        <div className="h-20">
                            { tool.attributes.class_name &&
                                <i className={`text-7xl devicon-${tool.attributes.class_name}`}></i>
                            }
                        </div>
                        <p className="mt-2">
                            { tool.attributes.name }
                        </p>
                    </li>
                )
            }
        </ul>
    )
}


export default Skills