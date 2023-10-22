import { cva } from 'class-variance-authority';
export const TTable = cva('', {
  variants: {
    Vtable: {
      default:
        ' rounded-lg border border-collapse min-w-full border-gray-300 overflow-hidden',
      destructive: '',
      ghost: '',
    },
  },
  defaultVariants: {
    Vtable: 'default',
  },
});
