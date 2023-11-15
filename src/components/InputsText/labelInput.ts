import { cva } from 'class-variance-authority';
export const labelInput = cva('', {
  variants: {
    variant: {
      default: 'block text-sm  text-gray-700',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
