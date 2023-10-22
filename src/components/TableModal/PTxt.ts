import { cva } from 'class-variance-authority';
export const PTxt = cva(
  '',

  {
    variants: {
      VTxt: {
        default: 'text-base leading-relaxed text-gray-500 dark:text-gray-400',
      },
    },
    defaultVariants: {
      VTxt: 'default',
    },
  }
);
