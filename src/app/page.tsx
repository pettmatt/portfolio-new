import Link from "next/link"
import { getData } from "@/services/cmsGetRequest"
import { frontpage } from "@/types/strapi-pages"

import DynamicListWrapper from "@/components/general/wrappers/DynamicListWrapper"
import SectionWrapper from "@/components/general/wrappers/SectionWrapper"
import Navigation from "@/components/general/Navigation"
import Landing from "@/components/frontpage/Landing"
import Blocks from "@/components/general/Blocks"
import Footer from "@/components/general/Footer"
import ReactMarkdown from "react-markdown"

import { project, skill } from "@/types/strapi-components"
import Skills from "@/components/general/Skills"

export default async function Home() {
    const pageData: frontpage = await getData("/frontpage?populate=projects.thumbnail,skills,socials", "Frontpage")
    const data = pageData.attributes

    const projects: project[] = await getData("/projects?sort=createdAt:Desc&populate=thumbnail")
    const skills: skill[] = await getData("/skills?sort=name")
    // const tools = skills.filter(tool => !tool.attributes.service)
    // const services = skills.filter(tool => tool.attributes.service)

    return (
        <>
            {/* <Navigation showBlogLink={ pageData.attributes?.show_blogs || false } showFreelancing={ showFreelancing } /> */}
            <main id="main-content" className="flex flex-col items-start justify-center max-height-20">

                <div className="header section flex row">
					<div className="introduction">
						<h1>Hidden header for search engines</h1>
						<h2>Petteri Mattila <span>Software Developer</span></h2>
					</div>
					<div className="link-container">
						<ul className="flex column">
							<li>email</li>
							<li>linkedin</li>
							<li>github</li>
						</ul>
					</div>
					<div className="paragraph-container">
						<p>
							As a technology-centric individual, I am always eager to learn new technologies and
							improve my skills. I have a passion for problem-solving and enjoy working in a
							collaborative environment where I can share my knowledge and learn from others.
							While my focus has been on web technologies, I am open to broadening my skills
							and expertise in new areas.
						</p>
					</div>
				</div>

				<div className="skills section flex column max-height-30">
					<h3>Skills</h3>
					<div className="technical">
						<h4>Technical</h4>
						<div className="often-used">
							JavaScript, TypeScript, Lua, Rust, PHP, C#, NoSQL, SQL
						</div>
						<div className="database">
							AWS, Serverless, Firebase, MongoDB, MySQL, SQLite
						</div>
						<div className="frontend">
							React, Vue, Svelte, Next, Nuxt, jQuery, HTML, CSS, Sass, Tailwind
						</div>
						<div className="backend">
							Node.js, Deno, Express
						</div>
						<div className="other">
							Vite, Webpack, Jest, WordPress, Three, Unix, Docker, Git
						</div>
					</div>
					<div className="soft">
						<h4>Soft skills</h4>
						Concepting, prototyping, problem solving, accessibility, scheduling, communication
					</div>
					<div className="other">
						<h4>Other</h4>
						<div className="programming-styles">
							Data oriented programming, functional programming
						</div>
						<div className="architectures">
							Serverless architecture, microservice architecture
						</div>
					</div>
				</div>

				<div className="work-experience section flex column max-height-30">
					<h3>Work Experience</h3>

					<div className="content-container">
						<ul className="flex column">
							<li>
								<h4 className="title">
									<span className="company">Capacic</span> - Full-stack web developer
								</h4>
								<div className="timeline flex row">
									<span className="time">2024</span>
									<div className="employment-type">Contract</div>
								</div>
								<div className="description-container">
									<p>
										Capacic is a startup that aims to provide a more
										intuitive, flexible and user-friendly ERP system that
										adapts seamlessly to the unique needs of modern
										businesses.
									</p>
									<p>
										My responsibility was to provide my perspectives
										on new UI elements, developing essential Vue.js
										components, and writing Lua scripts for backend
										processes to generate Vue components. I was also
										responsible for creating documention from a
										technical perspective and researching the
										possibilities of AI technologies.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className="education section max-height-20">
					<h3>Education</h3>

					<div className="content-container">
						<h4>Jamk University of Applied Sciences</h4>
						<div className="details flex column children-max-width">
							<p className="program">Bachelor of Business Administration</p>
							<p className="timeline">2019 - 2022 (~3.5 years)</p>
						</div>
					</div>
				</div>

            </main>
            {/* <Footer /> */}
        </>
    )
}
