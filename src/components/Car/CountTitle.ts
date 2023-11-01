import { cva } from 'class-variance-authority';
export const CountTitle = cva('', {
  variants: {
    Vtitle: {
      default: 'text-lg font-medium text-white id="slide-over-title',
      dark: 'text-lg font-medium text-black id="slide-over-title',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    Vtitle: 'default',
  },
});
