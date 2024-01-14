import { createContentlayerPlugin } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
  },
  redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components/input-erc20",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/input-erc20",
        permanent: true,
      },
      {
        source: "/docs/primitives/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
    ]
  },
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

export default withContentlayer(nextConfig)
