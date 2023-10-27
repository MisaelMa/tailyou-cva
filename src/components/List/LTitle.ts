import { cva } from 'class-variance-authority';

export const LTitle = cva(
  'w-full p-3 border-b border-gray-200 text-gray-600 font-semibold',
  {
    variants: {
      variantTitle: {
        default: 'w-full p-3 border-b border-gray-200 ',
        second: '',
      },
      sizeTitle: {
        default: '',
      },
    },
    defaultVariants: {
      variantTitle: 'default',
      sizeTitle: 'default',
    },
  }
);
