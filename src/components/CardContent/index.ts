import { cva } from 'class-variance-authority';
export const cardContent = cva('', {
  variants: {
    variant: {
      default: 'p-4 h-auto',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
