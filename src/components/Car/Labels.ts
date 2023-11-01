import { cva } from 'class-variance-authority';
export const Labels = cva('', {
  variants: {
    Vlabels: {
      default: 'flex justify-between font-medium text-white',
      dark: 'flex justify-between font-medium text-black',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    Vlabels: 'default',
  },
});
