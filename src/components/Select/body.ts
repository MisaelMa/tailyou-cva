import { cva } from 'class-variance-authority';
export const body = cva(
  '',

  {
    variants: {
      variant: {
        default:
          'block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
