import Blocks from "@/components/general/Blocks"
import Landing from "@/components/frontpage/Landing"
import SectionWrapper from "@/components/general/wrappers/SectionWrapper"
import { getData } from "@/services/cmsGetRequest"

export default async function Home() {
    
    const pageData = await getData()
    // console.log(pageData)

    return (
        <main className="flex flex-col items-start justify-center">
            <SectionWrapper overwriteHeight="3/4">
                <Landing />
            </SectionWrapper>

            <SectionWrapper header="About">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </SectionWrapper>

            <SectionWrapper header="Own projects" description="testing if styling is ok">
                <Blocks blocks={[]} />
            </SectionWrapper>

            <SectionWrapper header="Toolkit">
                <ul>
                    {
                        ["tool 1", "tool 2", "tool 3"].map((link, index) => {
                            const key = `link-${ index }`
                            return <li key={ key }>{ link }</li>
                        })
                    }
                </ul>
            </SectionWrapper>

            <SectionWrapper header="Worked with">
                <ul>
                    {
                        ["company 1", "company 2", "company 3"].map((link, index) => {
                            const key = `link-${ index }`
                            return <li key={ key }>{ link }</li>
                        })
                    }
                </ul>
            </SectionWrapper>

            <SectionWrapper header="Links">
                <ul className="text-center my-20">
                    {
                        ["link 1", "link 2", "link 3"].map((link, index) => {
                            const key = `link-${ index }`
                            return <li key={ key } className="inline py-6 px-4">{ link }</li>
                        })
                    }
                </ul>
            </SectionWrapper>
        </main>
    )
}
