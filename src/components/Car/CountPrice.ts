import { cva } from 'class-variance-authority';
export const CountPrice = cva('', {
  variants: {
    Vcountprice: {
      default: 'flex justify-between text-base font-medium text-white',
      delete: 'text-red-700',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    Vcountprice: 'default',
  },
});
