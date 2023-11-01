import { cva } from 'class-variance-authority';
export const CountCounter = cva('', {
  variants: {
    Vcountcounter: {
      default: 'ml-4 flex flex-1 flex-col',
      delete: 'text-red-700',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    Vcountcounter: 'default',
  },
});
