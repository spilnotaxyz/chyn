import { Registry } from "@/registry/schema"

const ui: Registry = [
  {
    name: "input-erc20",
    type: "components:ui",
    files: ["ui/input-erc20.tsx"],
  },
]

const example: Registry = [
  {
    name: "input-erc20-demo",
    type: "components:example",
    registryDependencies: ["input-erc20"],
    files: ["example/input-erc20-demo.tsx"],
  },
  {
    name: "input-erc20-form",
    type: "components:example",
    registryDependencies: ["input-erc20"],
    files: ["example/input-erc20-form.tsx"],
  },
]

export const registry: Registry = [...ui, ...example]
