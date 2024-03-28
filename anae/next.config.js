/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "res.cloudinary.com"
        ]
    },
    i18n: {
        locales: ['en', 'fr', 'tr'],
        defaultLocale: 'en'
    }
}

module.exports = nextConfig
