import { cva } from 'class-variance-authority';
export const CButons = cva(
  '',

  {
    variants: {
      VButons: {
        default:
          'flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600',
      },
    },
    defaultVariants: {
      VButons: 'default',
    },
  }
);
