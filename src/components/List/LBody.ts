import { cva } from 'class-variance-authority';

export const LBody = cva('px-3 md:w-5/12 border-black-500', {
  variants: {
    variant: {
      default: '',
      second: '',
    },
    size: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
