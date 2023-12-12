/** @type {import("next").NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "localhost",
            "res.cloudinary.com",
            // Add AWS endpoint here
            "http://16.171.39.226",
            "16.171.39.226",
        ]
    }
}

module.exports = nextConfig
