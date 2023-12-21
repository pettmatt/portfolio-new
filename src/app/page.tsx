import Link from "next/link"
import { getData } from "@/services/cmsGetRequest"
import { frontpage } from "@/types/strapi-pages"

import SectionWrapper from "@/components/general/wrappers/SectionWrapper"
import Navigation from "@/components/general/Navigation"
import Landing from "@/components/frontpage/Landing"
import Blocks from "@/components/general/Blocks"
import Footer from "@/components/general/Footer"
import ReactMarkdown from "react-markdown"
import Slider from "@/components/general/Slider"
import ImageBlock from "@/components/general/ImageBlock"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default async function Home() {
    const pageData: frontpage = await getData("/frontpage?populate=projects.thumbnail,skills,socials", "Frontpage")
    const { 
        show_blogs, about_text, projects_text, links_text, toolkit_text,
        projects, skills, connects, socials
    } = pageData.attributes

    const showFreelancing = connects ? connects.data.length > 0 : false

    const tools = skills.data.filter(tool => !tool.attributes.service)
    const services = skills.data.filter(tool => tool.attributes.service)

    return (
        <>
            <Navigation showBlogLink={ show_blogs } showFreelancing={ showFreelancing } />
            <main className="flex flex-col items-start justify-center">

                <SectionWrapper overwriteHeight="3/4" additionalClass="bg-custom-black text-custom-white">
                    <Landing />
                </SectionWrapper>

                <SectionWrapper header="About">
                    <ReactMarkdown>{ about_text }</ReactMarkdown>
                </SectionWrapper>

                <SectionWrapper header="Personal projects" description={ projects_text }>
                    <div className="flex flex-row gap-4">
                        {/* { show_blogs &&
                            <ImageBlock link="/blogs" blogs={} />
                        } */}
                        <Blocks blocks={ projects.data } />
                    </div>
                </SectionWrapper>

                <SectionWrapper header="Toolkit" description={ toolkit_text
                        ? toolkit_text
                        : `I have experience with over ${Math.floor(skills.data.length / 10) * 10
                    } tools`
                }>
                    <div className="my-4">
                        <Slider array={tools} />
                        <h3 className="text-3xl mb-4">General tools I utilize</h3>
                        <ul className="flex flex-row flex-wrap gap-6">
                            {
                                tools.map((tool, index) =>
                                    <li key={`tool-${ index }` } className="w-28">
                                        { tool.attributes.class_name &&
                                            <div>
                                                <FontAwesomeIcon icon={fab[ tool.attributes.class_name || "faJava" ]} size="lg" />
                                            </div>
                                        }
                                        <p>
                                            { tool.attributes.name }
                                        </p>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-3xl">Services I have worked with</h3>
                        <ul>
                            {
                                services.map((tool, index) =>
                                    <li key={`tool-${ index }`}
                                        className={`${
                                            !tool.attributes.class_name
                                                ? "no-icon"
                                                : tool.attributes.class_name 
                                        } w-28`}
                                    >
                                        { tool.attributes.name }
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </SectionWrapper>

                { showFreelancing &&
                    <SectionWrapper header="Freelancing" additionalClass="bg-custom-black text-custom-white">
                        <ul>
                            {
                                connects?.data.map((company, index) =>
                                    <li key={`company-${ index }`}>{ company.attributes.name }</li>
                                )
                            }
                        </ul>
                    </SectionWrapper>
                }

                <SectionWrapper header="Links" description={ links_text } additionalClass="bg-custom-black text-custom-white">
                    <ul className="text-center my-20">
                        {
                            socials.data.map((social, index) => (
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
