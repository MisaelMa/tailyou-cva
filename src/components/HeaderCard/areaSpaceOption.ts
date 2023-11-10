import { cva } from 'class-variance-authority';
export const spaceOption = cva('', {
  variants: {
    variant: {
      default: 'flex space-x-3 mt-4 mr-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
