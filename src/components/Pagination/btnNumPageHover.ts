import { cva } from 'class-variance-authority';

export const btnPaginationHover = cva('px-4 py-2 w-12', {
  variants: {
    btnPageHoverVariant: {
      blueHover:
        'bg-gray-200 text-gray-500 hover:bg-blue-200 hover:text-blue-500',
    },
  },
  defaultVariants: {
    btnPageHoverVariant: 'blueHover',
  },
});
