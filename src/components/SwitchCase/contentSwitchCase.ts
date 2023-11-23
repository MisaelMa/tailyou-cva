import { cva } from 'class-variance-authority';
export const switchCaseContent = cva('', {
  variants: {
    variant: {
      default:
        'relative rounded-full transition duration-200 ease-in-out focus:outline-none cursor-pointer',
    },
    size: {
      default: 'w-10 h-5',
      sm: 'w-8 h-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
