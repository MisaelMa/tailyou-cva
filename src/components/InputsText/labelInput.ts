import { cva } from 'class-variance-authority';
export const labelInput = cva('', {
  variants: {
    variant: {
      default: 'block text-sm  text-gray-700',
      isValid: 'block text-sm text-green-500',
      inValid: 'block text-sm text-red-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
