import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const enhancedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-soft hover:bg-primary-light hover:shadow-medium transform hover:-translate-y-1",
        destructive: "bg-destructive text-destructive-foreground shadow-soft hover:bg-destructive/90",
        outline: "border border-primary text-primary bg-background shadow-soft hover:bg-primary hover:text-primary-foreground hover:shadow-medium transform hover:-translate-y-1",
        secondary: "bg-secondary text-secondary-foreground shadow-soft hover:bg-secondary-light hover:shadow-medium transform hover:-translate-y-1",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-secondary underline-offset-4 hover:underline hover:text-primary",
        hero: "bg-gradient-hero text-primary-foreground shadow-medium hover:shadow-strong transform hover:-translate-y-2 hover:scale-105",
        cta: "bg-primary text-white font-bold px-8 py-4 rounded-lg shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300",
        "cta-secondary": "bg-transparent border-2 border-primary text-primary font-bold px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300",
        soft: "bg-primary-soft text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground hover:shadow-soft transform hover:-translate-y-1",
        teal: "bg-accent text-accent-foreground shadow-soft hover:bg-accent-light hover:shadow-medium transform hover:-translate-y-1",
        sage: "bg-sage text-sage-foreground shadow-soft hover:bg-sage-light hover:shadow-medium transform hover:-translate-y-1",
        peach: "bg-orange-soft text-orange shadow-soft hover:bg-orange hover:text-orange-foreground hover:shadow-medium transform hover:-translate-y-1",
        lavender: "bg-purple text-purple-foreground shadow-soft hover:bg-purple-light hover:shadow-medium transform hover:-translate-y-1",
        beige: "bg-beige text-beige-foreground shadow-soft hover:bg-beige-light hover:shadow-medium transform hover:-translate-y-1",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof enhancedButtonVariants> {
  asChild?: boolean
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(enhancedButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
EnhancedButton.displayName = "EnhancedButton"

export { EnhancedButton, enhancedButtonVariants }