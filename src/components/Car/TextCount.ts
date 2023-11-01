import { cva } from 'class-variance-authority';
export const TextCount = cva('', {
  variants: {
    Vtextcount: {
      default: 'm-0 px-1 text-xs text-white',
      delete: 'text-red-700',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    Vtextcount: 'default',
  },
});
