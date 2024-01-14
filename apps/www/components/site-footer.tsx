import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="py-6 md:py-0 md:px-8">
      <div className="container flex flex-col gap-4 justify-between items-center md:flex-row md:h-24">
        <p className="text-sm leading-loose text-center md:text-left text-balance text-muted-foreground">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            dalechyn
          </a>
          . Forked from{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn/ui
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
