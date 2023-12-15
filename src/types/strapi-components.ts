import { Url } from "url"

interface image {
    data: {
        attributes: {
            url: Url
        }
    }
}

export interface blog {
    id: Number
    attributes: {
        title: string
        read_time: string | null
        tags: string | null
        thumbnail: image | null
        original_publish_date: string | null
        blog_text: string
        createdAt: string
        updatedAt: string
        publishedAt: string
    }
}

// Fix later if in use
export interface cv {
    data: File[]
}

export interface project {
    id: Number
    attributes: {
        title: string
        description: string
        link: Url
        thumbnail: image | null
        createdAt: string
        updatedAt: string
        publishedAt: string
    }
}

export interface skill {
    id: Number
    attributes: {
        name: string
        link: Url | null
        acquired: string | null
        deviconClass: string | null
        createdAt: string
        updatedAt: string
        publishedAt: string
    }
}

export interface social {
    id: Number
    attributes: {
        link: string
        name: string
        iconClass: string | null
        createdAt: string
        updatedAt: string
        publishedAt: string
    }
}

export interface connect {
    id: Number
    attributes: {
        name: string | null
        projectType: string | null
        comment: string | null
        createdAt: string
        updatedAt: string
        publishedAt: string
    }
}

export interface blogsWrapped {
    data: blog[]
}

export interface projectsWrapped {
    data: project[]
}

export interface socialsWrapped {
    data: social[]
}

export interface skillsWrapped {
    data: skill[]
}

export interface connectionsWrapped {
    data: connect[]
}