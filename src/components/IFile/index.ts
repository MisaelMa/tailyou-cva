import { cva } from 'class-variance-authority';
export const iFile = cva(
  'm-2 cursor-pointer bg-blue-500 hover-bg-blue-600 text-white py-2 px-4 rounded-lg',
  {
    variants: {
      variant: {
        default: 'm-2 cursor-pointer bg-blue-500 hover-bg-blue-600 text-white',
        update:
          'm-2 cursor-pointer bg-green-500 hover-bg-green-600 text-white py-2 px-4 rounded-lg',
      },

      size: {
        default: 'py-2 px-4 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
