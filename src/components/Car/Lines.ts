import { cva } from 'class-variance-authority';
export const Lines = cva('', {
  variants: {
    Vlines: {
      default: '-my-6 divide-y divide-gray-500',
      delete: 'text-red-700',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    Vlines: 'default',
  },
});
