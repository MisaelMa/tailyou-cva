import { cva } from 'class-variance-authority';
export const headerContent = cva('', {
  variants: {
    variant: {
      default: 'flex justify-between',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
