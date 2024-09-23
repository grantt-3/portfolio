import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex rounded-md border border-white/10 bg-primary px-4 py-5 text-base focus:border-accent font-light placeholder:text-white/60 outline-none h-[48px] ",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }