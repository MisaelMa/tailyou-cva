import { cva } from 'class-variance-authority';
export const cardContent = cva('', {
  variants: {
    variant: {
      default: 'p-4 h-auto',
      second: 'p-4 h-auto border-b'
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
