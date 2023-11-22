import { cva } from 'class-variance-authority';
export const dialogScroll = cva('', {
  variants: {
    variant: {
      default: 'overflow-y-auto max-h-[420px]',
      any: 'overflow-y-auto',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
