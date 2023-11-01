import { cva } from 'class-variance-authority';
export const CountTotal = cva('', {
  variants: {
    Vcounttotal: {
      default: 'flex text-white',
      dark: 'flex text-black',
    },
  },
  defaultVariants: {
    Vcounttotal: 'default',
  },
});
