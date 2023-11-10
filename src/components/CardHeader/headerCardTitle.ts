import { cva } from 'class-variance-authority';
export const headerTitle = cva('', {
  variants: {
    variant: {
      default: 'text-lg font-semibold mt-3 ml-3',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
