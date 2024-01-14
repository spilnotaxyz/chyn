import { Transformer } from "@/src/utils/transformers"

export const transformImport: Transformer = async ({ sourceFile, config }) => {
  const importDeclarations = sourceFile.getImportDeclarations()

  for (const importDeclaration of importDeclarations) {
    const moduleSpecifier = importDeclaration.getModuleSpecifierValue()

    // Replace @/components/ui with the shadcn ui components alias.
    if (moduleSpecifier.startsWith("@/components/ui/")) {
      importDeclaration.setModuleSpecifier(
        moduleSpecifier.replace(/^@\/components\/ui/, config.aliases.ui)
      )
    }

    // Replace @/registry/[style] with the components alias.
    if (moduleSpecifier.startsWith("@/registry/")) {
      if (config.aliases.chyn) {
        importDeclaration.setModuleSpecifier(
          moduleSpecifier.replace(
            /^@\/registry\/[^/]+\/chyn/,
            config.aliases.chyn
          )
        )
      } else {
        importDeclaration.setModuleSpecifier(
          moduleSpecifier.replace(
            /^@\/registry\/[^/]+/,
            config.aliases.components
          )
        )
      }
    }

    // Replace `import { cn } from "@/lib/utils"`
    if (moduleSpecifier === "@/lib/utils") {
      const namedImports = importDeclaration.getNamedImports()
      const cnImport = namedImports.find((i) => i.getName() === "cn")
      if (cnImport) {
        importDeclaration.setModuleSpecifier(
          moduleSpecifier.replace(/^@\/lib\/utils/, config.aliases.utils)
        )
      }
    }
  }

  return sourceFile
}
