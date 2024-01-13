"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { serialize } from 'wagmi'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { InputERC20 } from "@/registry/default/ui/input-erc20"
import { toast } from "@/components/ui/use-toast"
import { config } from '@/components/wagmi-provider'
import { getToken } from '@wagmi/core'
import { parseUnits } from "viem"

const ADDRESS = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"

const FormSchema = z.object({
  amount: z.bigint().refine(async (value) => {
    const {decimals} = await getToken(config, {address: ADDRESS})
    return value >= parseUnits('10', decimals)
  }, 'Should be at least 10')
})

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema, {async:true}),
    mode: "onChange",
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="p-4 mt-2 rounded-md w-[340px] bg-slate-950">
          <code className="text-white break-all whitespace-break-spaces">{JSON.stringify(serialize(data), null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-2/3">
        <FormField
          control={form.control}
          name="amount"
          render={({ field: {onChange, value, ...rest} }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <InputERC20 address={ADDRESS} placeholder="0.1" onChange={(_e,value) => onChange(value)} value={value} {...rest} />
              </FormControl>
              <FormDescription>
                The amount of tokens to send.
              </FormDescription>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button disabled={!form.formState.isValid} type="submit">Submit</Button>
      </form>
    </Form>
  )
}
