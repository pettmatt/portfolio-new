import Link from "next/link"
import { getData } from "@/services/cmsGetRequest"
import { frontpage } from "@/types/strapi-pages"

import SectionWrapper from "@/components/general/wrappers/SectionWrapper"
import Navigation from "@/components/general/Navigation"
import Landing from "@/components/frontpage/Landing"
import Blocks from "@/components/general/Blocks"
import Footer from "@/components/general/Footer"
import ReactMarkdown from "react-markdown"
// import Slider from "@/components/general/Slider"
// import ImageBlock from "@/components/general/ImageBlock"
import { project, skill } from "@/types/strapi-components"

export default async function Home() {
    const pageData: frontpage = await getData("/frontpage?populate=projects.thumbnail,skills,socials", "Frontpage")
    const data = pageData.attributes

    const showFreelancing = data?.connects
        ? data.connects.data.length > 0 
        : false

    const projects: project[] = await getData("/projects?sort=createdAt:Desc&populate=thumbnail")
    const skills: skill[] = await getData("/skills?sort=name")
    // const tools = skills.filter(tool => !tool.attributes.service)
    // const services = skills.filter(tool => tool.attributes.service)

    return (
        <>
            <Navigation showBlogLink={ pageData.attributes?.show_blogs || false } showFreelancing={ showFreelancing } />
            <main className="flex flex-col items-start justify-center">

                <SectionWrapper overwriteHeight="3/4" additionalClass="bg-custom-black text-custom-white">
                    <Landing />
                </SectionWrapper>

                <SectionWrapper header="About">
                    <ReactMarkdown>{ data?.about_text }</ReactMarkdown>
                </SectionWrapper>

                <SectionWrapper header="Personal projects" description={ data?.projects_text }>
                    <div className="flex flex-row gap-4">
                        {/* { show_blogs &&
                            <ImageBlock link="/blogs" blogs={} />
                        } */}
                        <Blocks blocks={ projects } />
                    </div>
                </SectionWrapper>

                <SectionWrapper header="Toolkit" description={ data?.toolkit_text
                        ? data?.toolkit_text
                        : `Experience with over ${(Math.floor(skills.length / 10) * 10) || 0} tools`
                }>
                    <div>
                        {/* <h3 className="text-3xl my-10">Generic tools that I utilize</h3> */}
                        <ul className="flex flex-row flex-wrap gap-7 justify-center md:justify-start">
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
                        <p className="text-center mt-20 text-xl">And more to come . . .</p>
                    </div>
                    {/* <div>
                        <h3 className="text-3xl my-10">I'm also familiar with these libraries & services</h3>
                        <ul>
                            {
                                services?.map((tool, index) =>
                                    <li key={`library-${ index }` } className="w-28 text-center">
                                        <div className="h-20">
                                            { tool.attributes.class_name &&
                                                <i className={`text-7xl ${tool.attributes.class_name}`}></i>
                                            }
                                        </div>
                                        <p className="mt-2">
                                            { tool.attributes.name }
                                        </p>
                                    </li>
                                )
                            }
                        </ul>
                    </div> */}
                </SectionWrapper>

                { showFreelancing &&
                    <SectionWrapper header="Freelancing" additionalClass="bg-custom-black text-custom-white">
                        <ul>
                            {
                                data.connects?.data.map((company, index) =>
                                    <li key={`company-${ index }`}>{ company.attributes.name }</li>
                                )
                            }
                        </ul>
                    </SectionWrapper>
                }

                <SectionWrapper header="Links" description={ data?.links_text } additionalClass="bg-custom-black text-custom-white">
                    <ul className="text-center my-20">
                        {
                            data?.socials.data.map((social, index) => (
                                social.attributes.link &&
                                    <li key={ `link-${ index }` } className="inline px-1">
                                        <Link href={ social.attributes.link } className="px-4 py-2 text-2xl">
                                            { social.attributes.name }
                                        </Link>
                                    </li>
                            ))
                        }
                    </ul>
                </SectionWrapper>

            </main>
            <Footer />
        </>
    )
}
