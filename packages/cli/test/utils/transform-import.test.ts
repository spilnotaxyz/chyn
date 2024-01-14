import { expect, test } from "vitest"

import { transform } from "../../src/utils/transformers"

test("transform import", async () => {
  expect(
    await transform({
      filename: "test.ts",
      raw: `import * as React from "react"
import { Foo } from "bar"
    import { Button } from "@/components/ui/button"
    import { InputERC20 } from "@/registry/default/chyn/input-erc20"
    import { Label} from "ui/label"
    import { Box } from "@/registry/default/box"

    import { cn } from "@/lib/utils"
    `,
      config: {
        tsx: true,
        tailwind: {
          baseColor: "neutral",
          cssVariables: true,
        },
        aliases: {
          components: "@/components",
          ui: "@/components/ui",
          utils: "@/lib/utils",
        },
      },
    })
  ).toMatchSnapshot()

  expect(
    await transform({
      filename: "test.ts",
      raw: `import * as React from "react"
import { Foo } from "bar"
    import { Button } from "@/components/ui/button"
    import { InputERC20 } from "@/registry/default/chyn/input-erc20"
    import { Label} from "ui/label"
    import { Box } from "@/registry/default/box"

    import { cn, foo, bar } from "@/lib/utils"
    import { bar } from "@/lib/utils/bar"
    `,
      config: {
        tsx: true,
        aliases: {
          components: "~/src/components",
          ui: "~/src/components/ui",
          utils: "~/lib",
        },
      },
    })
  ).toMatchSnapshot()

  expect(
    await transform({
      filename: "test.ts",
      raw: `import * as React from "react"
import { Foo } from "bar"
    import { Button } from "@/components/ui/button"
    import { InputERC20 } from "@/registry/default/chyn/input-erc20"
    import { Label} from "ui/label"
    import { Box } from "@/registry/default/box"

    import { cn } from "@/lib/utils"
    import { bar } from "@/lib/utils/bar"
    `,
      config: {
        tsx: true,
        aliases: {
          components: "~/src/components",
          utils: "~/src/utils",
          ui: "~/src/components/ui",
        },
      },
    })
  ).toMatchSnapshot()

  expect(
    await transform({
      filename: "test.ts",
      raw: `import * as React from "react"
import { Foo } from "bar"
    import { Button } from "@/components/ui/button"
    import { InputERC20 } from "@/registry/default/chyn/input-erc20"
    import { Label} from "ui/label"
    import { Box } from "@/registry/default/box"

    import { cn } from "@/lib/utils"
    import { bar } from "@/lib/utils/bar"
    `,
      config: {
        tsx: true,
        aliases: {
          components: "~/src/components",
          utils: "~/src/utils",
          ui: "~/src/components",
        },
      },
    })
  ).toMatchSnapshot()

  expect(
    await transform({
      filename: "test.ts",
      raw: `import * as React from "react"
import { Foo } from "bar"
    import { Button } from "@/components/ui/button"
    import { InputERC20 } from "@/registry/default/chyn/input-erc20"
    import { Label} from "ui/label"

    import { cn } from "@/lib/utils"
    import { bar } from "@/lib/utils/bar"
    `,
      config: {
        tsx: true,
        aliases: {
          components: "~/src/components",
          utils: "~/src/utils",
          ui: "~/src/ui",
          chyn: "~/src/chyn",
        },
      },
    })
  ).toMatchSnapshot()
})
