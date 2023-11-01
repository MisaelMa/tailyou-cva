import { cva } from 'class-variance-authority';
export const CountData = cva('', {
  variants: {
    Vcountdata: {
      default: 'ml-4 flex flex-1 flex-col',
      delete: 'text-red-700',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    Vcountdata: 'default',
  },
});
