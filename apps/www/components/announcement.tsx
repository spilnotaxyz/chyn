import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { Separator } from "@/components/ui/separator"

export function Announcement() {
  return (
    <Link
      href="/docs/changelog"
      className="inline-flex items-center py-1 px-3 text-sm font-medium rounded-lg bg-muted"
    >
      🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
      <span className="sm:hidden">New components and more.</span>
      <span className="hidden sm:inline">
        New components, cli updates and more.
      </span>
      <ArrowRightIcon className="ml-1 w-4 h-4" />
    </Link>
  )
}
