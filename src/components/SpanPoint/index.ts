import { cva } from 'class-variance-authority';
export const spanPoint = cva('', {
  variants: {
    variant: {
      default: 'flex space-x-2 items-center',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
