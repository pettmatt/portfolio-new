interface image {
    data?: {
        id: number
        attributes: {
            name: string
            alternativetext: string | null
            caption: string | null
            width: number
            height: number
            formats: {
                thumbnail: {
                    name: string
                    hash: string
                    ext: string
                    mime: string
                    path: string | null
                    width: number
                    height: number
                    size: number
                    url: string
                }
            }
            hash: string
            ext: string
            mime: string
            size: number
            url: string
            previewurl: string | null
            provider: string
            provider_metadata: string | null
            createdAt: string
            updatedAt: string
        }
    }
}

export interface blog {
    id: Number
    attributes: {
        title: string
        read_time: string | null
        tags: string | null
        thumbnail: image
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
        link: string
        thumbnail: image
        createdAt: string
        updatedAt: string
        publishedAt: string
    }
}

export interface skill {
    id: Number
    attributes: {
        name: string
        link: string | null
        acquired: string | null
        class_name: string | null
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
        class_name: string | null
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