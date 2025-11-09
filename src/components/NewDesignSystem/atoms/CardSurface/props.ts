import { tv } from "tailwind-variants";

export const cardSurface = tv({
  base: "rounded-xl bg-white shadow transition-all",
  variants: {
    p: {
      0: "p-0",
      2: "p-2",
      4: "p-4",
      6: "p-6",
    },
    variant: {
      default: "",
      outlined: "border border-gray-200",
      subtle: "bg-gray-50",
    },
    radius: {
      sm: "rounded-md",
      md: "rounded-xl",
      lg: "rounded-2xl",
    },
  },
  defaultVariants: {
    p: 4,
    variant: "default",
    radius: "md",
  },
});

export type CardSurfaceVariants = Parameters<typeof cardSurface>[0];
