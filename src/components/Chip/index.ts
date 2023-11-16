import { cva } from 'class-variance-authority';
export const chip = cva('', {
  variants: {
    variant: {
      default:
        'inline-flex items-center px-4 py-1 bg-gray-300 text-gray-800 rounded-3xl',
      confirm:
        'inline-flex items-center px-4 py-1 bg-green-300 text-gray-800 rounded-3xl',
      danger:
        'inline-flex items-center px-4 py-1 bg-red-300 text-gray-800 rounded-3xl',
    },
    size: {
      default: 'text-base',
      xs: 'text-xs',
      sm: 'text-sm',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
