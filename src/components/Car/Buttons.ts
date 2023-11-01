import { cva } from 'class-variance-authority';
export const Buttons = cva('', {
  variants: {
    Vbuttons: {
      default: 'w-4 py-0 border border-gray-300 rounded text-white',
      dark: 'w-4 py-0 border border-gray-600 rounded text-black',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    Vbuttons: 'default',
  },
});
