import { blogsWrapped, connectionsWrapped, cv, projectsWrapped, skillsWrapped, socialsWrapped } from "./strapi-components"

export interface blogpage {
    id: Number,
    attributes: {
        page_title: string
        about_text: string
        blogs: blogsWrapped
        createdAt: string
        updatedAt: string
        publishedAt: string
    }
}

export interface frontpage {
    id: Number,
    attributes: {
        landing_roles: string
        about_text: string
        projects_text: string
        toolkit_text: string
        links_text: string
        show_blogs: boolean
        createdAt: string
        updatedAt: string
        publishedAt: string
        projects: projectsWrapped
        skills: skillsWrapped
        socials: socialsWrapped
        connects?: connectionsWrapped
        cvs?: cv
    }
}