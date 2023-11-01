import { cva } from 'class-variance-authority';
export const List = cva('', {
  variants: {
    Vlist: {
      default: 'flex py-6 w-60',
      delete: 'text-red-700',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    Vlist: 'default',
  },
});
