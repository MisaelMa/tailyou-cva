import { cva } from 'class-variance-authority';
export const imagenInput = cva('', {
  variants: {
    variant: {
      default: 'text-black cursor-pointer stroke-2',
      green: 'text-gren-700 cursor-pointer stroke-2',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
