import { cva } from 'class-variance-authority';
export const textToolArea = cva('', {
  variants: {
    variant: {
      default:
        'appearance-none border border-gray-300 py-2 px-3 text-base leading-6 text-gray-700 transition duration-200 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 w-full h-auto',
      rounded:
        ' appearance-none border border-gray-300 rounded-md py-2 px-3 text-base leading-6 text-gray-700 transition duration-200 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 w-full',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
