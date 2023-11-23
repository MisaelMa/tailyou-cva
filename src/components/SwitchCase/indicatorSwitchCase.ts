import { cva } from 'class-variance-authority';
export const switchIndicatorContent = cva('', {
  variants: {
    variant: {
      default:
        'absolute inset-y-0 left-0 bg-white rounded-full shadow-lg transform transition-transform duration-200 ease-in-out',
    },
    size: {
      default: 'w-5 h-5',
      sm: 'w-4 h-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
