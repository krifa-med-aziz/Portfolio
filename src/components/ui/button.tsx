import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 cursor-pointer px-4 py-2 relative sm:px-5 sm:py-2.5 md:px-6 md:py-3 overflow-hidden font-light rounded-full group border transform transition-all duration-300 text-sm sm:text-base",
  {
    variants: {
      variant: {
        default: "border-[#8b5cf6] bg-[#8b5cf6] text-white hover:scale-[1.03]",
        secondary:
          "border-gray-700 bg-[#0d1117] text-white hover:scale-[1.03] hover:bg-purple-500/10 hover:border-[#8b5cf6]/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
