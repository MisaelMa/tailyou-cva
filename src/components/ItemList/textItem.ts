import { cva } from 'class-variance-authority';
export const itemTextList = cva('', {
  variants: {
    variant: {
      default: 'w-28 text-center ',
      titeleItem: 'w-64 text-center font-semibold',
      infoItem: 'w-32 text-center text-gray-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
