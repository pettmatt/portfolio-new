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

export default async function Home() {
    const pageData: frontpage = await getData("/frontpage?populate=projects.thumbnail,skills,socials", "Frontpage")
    console.log("page", pageData.attributes)
    const { 
        show_blogs, about_text, projects_text, links_text, toolkit_text,
        projects, skills, connects, socials
    } = pageData.attributes

    const showFreelancing = connects ? connects.data.length > 0 : false

    return (
        <>
            <Navigation showBlogLink={ show_blogs } showFreelancing={ showFreelancing } />
            <main className="flex flex-col items-start justify-center">

                <SectionWrapper overwriteHeight="3/4" background_color="bg-custom-black">
                    <Landing />
                </SectionWrapper>

                <SectionWrapper header="About">
                    <ReactMarkdown>{ about_text }</ReactMarkdown>
                </SectionWrapper>

                <SectionWrapper header="Personal projects" description={ projects_text }>
                    <div className="flex flex-row gap-4">
                        { show_blogs &&
                            <ImageBlock link="/blogs" />
                        }
                        <Blocks blocks={ projects.data } />
                    </div>
                </SectionWrapper>

                <SectionWrapper header="Toolkit" description={ toolkit_text
                    ? toolkit_text
                    : `I have experience with over ${Math.floor(skills.data.length / 10) * 10} tools`
                }>
                    <Slider array={["t", "e"]} />
                    {
                        skills.data.map((tool, index) =>
                            <li key={`tool-${ index }`}
                                className={
                                    `${ (!tool.attributes.class_name) ? "no-icon" : tool.attributes.class_name }`
                                }
                            >
                                { tool.attributes.name }
                            </li>
                        )
                    }
                </SectionWrapper>

                { showFreelancing &&
                    <SectionWrapper header="Freelancing" background_color="bg-custom-black">
                        <ul>
                            {
                                connects?.data.map((company, index) =>
                                    <li key={`company-${ index }`}>{ company.attributes.name }</li>
                                )
                            }
                        </ul>
                    </SectionWrapper>
                }

                <SectionWrapper header="Links" description={ links_text } background_color="bg-custom-black">
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
