import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/input-erc20",
    },
    {
      title: "Figma",
      href: "/docs/figma",
    },
    {
      title: "GitHub",
      href: "https://github.com/spilnotaxyz/chyn",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/dalechyn",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        // {
        //   title: "Installation",
        //   href: "/docs/installation",
        //   items: [],
        // },
        // {
        //   title: "components.json",
        //   href: "/docs/components-json",
        //   items: [],
        // },
        {
          title: "Theming",
          href: "https://ui.shadcn.com/docs/theming",
          items: [],
        },
        {
          title: "Dark mode",
          href: "https://ui.shadcn.com/docs/dark-mode",
          items: [],
        },
        // {
        //   title: "CLI",
        //   href: "/docs/cli",
        //   items: [],
        // },
        {
          title: "Typography",
          href: "https://ui.shadcn.com/docs/components/typography",
          items: [],
        },
        // {
        //   title: "Changelog",
        //   href: "/docs/changelog",
        //   items: [],
        // },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Input ERC20",
          href: "/docs/components/input-erc20",
          items: [],
        },
      ],
    },
  ],
}
