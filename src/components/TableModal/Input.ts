import { cva } from 'class-variance-authority';
export const Input = cva(
  '',

  {
    variants: {
      VInput: {
        default:
          'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white',
      },
    },
    defaultVariants: {
      VInput: 'default',
    },
  }
);
