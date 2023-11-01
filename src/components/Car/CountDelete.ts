import { cva } from 'class-variance-authority';
export const CountDelete = cva('', {
  variants: {
    Vcountdelete: {
      default: 'mt-6 flex justify-center text-center text-sm text-gray-500',
      delete: 'text-red-700',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    Vcountdelete: 'default',
  },
});
