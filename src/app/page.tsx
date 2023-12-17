import Link from "next/link"
import Blocks from "@/components/general/Blocks"
import Landing from "@/components/frontpage/Landing"
import SectionWrapper from "@/components/general/wrappers/SectionWrapper"
import { getData } from "@/services/cmsGetRequest"
import { frontpage } from "@/types/strapi-pages"
import Navigation from "@/components/general/Navigation"
import ReactMarkdown from "react-markdown"

export default async function Home() {
    const pageData: frontpage = await getData("/frontpage?populate=*", "Frontpage")
    // console.log("page", pageData)
    const { about_text, projects, skills, connects, socials } = pageData.attributes

    return (
        <>
            <Navigation showBlogLink={ true } />
            <main className="flex flex-col items-start justify-center">

                <SectionWrapper overwriteHeight="3/4" background_color="bg-custom-black">
                    <Landing />
                </SectionWrapper>

                <SectionWrapper header="About">
                    <ReactMarkdown>{ about_text }</ReactMarkdown>
                </SectionWrapper>

                <SectionWrapper header="Personal projects" description="testing if styling is ok">
                    <Blocks blocks={ projects.data } />
                </SectionWrapper>

                <SectionWrapper header="Toolkit">
                    <ul>
                        {
                            skills.data.map((skill, index) =>
                                <li key={ `link-${ index }` }>{ skill.attributes.name }</li>
                            )
                        }
                    </ul>
                </SectionWrapper>

                <SectionWrapper header="Worked with" background_color="bg-custom-black">
                    <ul>
                        {
                            connects.data.map((company, index) => {
                                const key = `link-${ index }`
                                return <li key={ key }>{ company.attributes.name }</li>
                            })
                        }
                    </ul>
                </SectionWrapper>

                <SectionWrapper header="Links" background_color="bg-custom-black">
                    <ul className="text-center my-20">
                        {
                            socials.data.map((social, index) => (
                                (social.attributes.link) &&
                                    <li key={ `link-${ index }` } className="inline py-6 px-4">
                                        <Link href={ social.attributes.link }>
                                            { social.attributes.name }
                                        </Link>
                                    </li>
                            ))
                        }
                    </ul>
                </SectionWrapper>
            </main>
        </>
    )
}
