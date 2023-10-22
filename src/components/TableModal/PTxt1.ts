import { cva } from 'class-variance-authority';
export const PTxt1 = cva(
  '',

  {
    variants: {
      VTxt1: {
        default: 'text-xl font-semibold text-gray-900 dark:text-white',
      },
    },
    defaultVariants: {
      VTxt1: 'default',
    },
  }
);
