import { cva } from 'class-variance-authority';
export const checkBox = cva('', {
  variants: {
    variant: {
      default:
        'h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500',
      circule:
        'w-4 h-4 rounded-full appearance-none focus:ring-indigo-500 border-2 border-gray-300',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
