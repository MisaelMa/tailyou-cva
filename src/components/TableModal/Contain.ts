import { cva } from 'class-variance-authority';
export const Contain = cva(
  '',

  {
    variants: {
      VContain: {
        default:
          'flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600',
      },
    },
    defaultVariants: {
      VContain: 'default',
    },
  }
);
