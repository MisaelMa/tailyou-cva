import { cva } from 'class-variance-authority';
export const headerOption = cva('', {
  variants: {
    variant: {
      default: 'text-blue-500 hover:underline text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
