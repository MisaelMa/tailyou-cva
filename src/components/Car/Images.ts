import { cva } from 'class-variance-authority';
export const Images = cva('', {
  variants: {
    Vimages: {
      default: 'h-full w-full object-cover object-center',
      delete: 'text-red-700',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    Vimages: 'default',
  },
});
