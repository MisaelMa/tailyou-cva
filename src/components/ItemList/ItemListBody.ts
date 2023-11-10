import { cva } from 'class-variance-authority';
export const itemBodyList = cva('', {
  variants: {
    variant: {
      default: 'p-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
