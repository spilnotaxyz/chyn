import { Registry } from "@/registry/schema"

const chyn: Registry = [
  {
    name: "input-erc20",
    type: "components:chyn",
    files: ["chyn/input-erc20.tsx"],
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

export const registry: Registry = [...chyn, ...example]
