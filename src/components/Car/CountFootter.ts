import { cva } from 'class-variance-authority';
export const CountFooter = cva('', {
  variants: {
    Vcountfotter: {
      default: 'border-t border-gray-500 px-4 py-6 sm:px-6 mt-2',
      delete: 'text-red-700',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    Vcountfotter: 'default',
  },
});
