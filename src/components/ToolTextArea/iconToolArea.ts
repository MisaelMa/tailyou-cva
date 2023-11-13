import { cva } from 'class-variance-authority';
export const iconToolArea = cva('', {
  variants: {
    variant: {
      default: 'px-4 py-1 rounded-md text-black hover:bg-gray-300',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
