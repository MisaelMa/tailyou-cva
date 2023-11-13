import { cva } from 'class-variance-authority';
export const inputImgBox = cva('', {
  variants: {
    variant: {
      default:
        'relative w-72 h-72 border-2 border-dashed border-gray-300 flex items-center justify-center ',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
