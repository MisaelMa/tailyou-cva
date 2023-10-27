import { cva } from 'class-variance-authority';

export const LContent = cva(
  'w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6',
  {
    variants: {
      variantContent: {
        default: '',
        second: '',
      },
      size: {
        default: '',
      },
    },
    defaultVariants: {
      variantContent: 'default',
      size: 'default',
    },
  }
);
