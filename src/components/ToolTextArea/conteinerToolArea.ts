import { cva } from 'class-variance-authority';
export const conteinerToolArea = cva('', {
  variants: {
    variant: {
      default: 'flex border border-gray-700 w-full',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
