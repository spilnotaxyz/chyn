import * as React from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { parseUnits, formatUnits as viem_formatUnits } from "viem"
import { Config, ResolvedRegister, useConfig } from "wagmi"
import { GetTokenOptions, getTokenQueryOptions } from "wagmi/query"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

const InputERC20Inner = React.forwardRef<
  HTMLInputElement,
  InputERC20PropsInner
>(
  (
    {
      className,
      inputClassName,
      address,
      chainId,
      formatUnits,
      scopeKey,
      onChange,
      value,
      ...props
    },
    ref
  ) => {
    const config = useConfig()
    const options = getTokenQueryOptions(config, {
      address,
      chainId,
      formatUnits,
      scopeKey,
    })
    const { data: token } = useSuspenseQuery(options)

    return (
      <div
        className={cn(
          "flex justify-between py-2 px-3 h-10 text-sm rounded-md border border-input bg-background ring-offset-background has-[:focus-visible]:outline-none has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-2 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50",
          className
        )}
      >
        <input
          type="number"
          className={cn(
            "min-w-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-background placeholder:text-muted-foreground focus-visible:outline-none grow",
            inputClassName
          )}
          ref={ref}
          onChange={(e) => {
            onChange?.(e, parseUnits(e.target.value, token.decimals))
          }}
          value={value ? viem_formatUnits(value, token.decimals) : undefined}
          {...props}
        />
        <div className="flex items-center px-2 h-full text-xs">
          <span className="text-sm select-none text-muted-foreground">
            {token.symbol}
          </span>
        </div>
      </div>
    )
  }
)
InputERC20Inner.displayName = "InputERC20Inner"

const InputERC20Skeleton = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { inputClassName?: string }
>(({ className, inputClassName, ...props }, ref) => {
  return (
    <div
      id="pseudo-input"
      className={cn(
        "flex justify-between py-2 px-3 h-10 text-sm rounded-md border border-input bg-background ring-offset-background has-[:focus-visible]:outline-none has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-2 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50",
        className
      )}
    >
      <input
        type="number"
        className={cn(
          "min-w-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-background placeholder:text-muted-foreground focus-visible:outline-none grow",
          inputClassName
        )}
        disabled
        ref={ref}
        {...props}
      />
      <div className="flex items-center px-2 h-full text-xs">
        <Skeleton className="w-9 h-5 bg-muted-foreground" />
      </div>
    </div>
  )
})
InputERC20Skeleton.displayName = "InputERC20Skeleton"

export type InputERC20PropsInner<
  config extends Config = ResolvedRegister["config"]
> = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "onChange" | "value"
> &
  GetTokenOptions<config> & {
    value?: bigint
    onChange?: (
      e: React.ChangeEvent<HTMLInputElement>,
      parsedValue: bigint
    ) => void
    inputClassName?: string
  }

export type InputERC20Props = InputERC20PropsInner

const InputERC20 = React.forwardRef<HTMLInputElement, InputERC20Props>(
  (props, ref) => (
    <React.Suspense
      fallback={<InputERC20Skeleton placeholder={props.placeholder} />}
    >
      <InputERC20Inner {...props} ref={ref} />
    </React.Suspense>
  )
)

export { InputERC20 }
