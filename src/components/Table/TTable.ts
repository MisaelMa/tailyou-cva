import { cva } from 'class-variance-authority';
export const TTable = cva('', {
  variants: {
    Vtable: {
      default:
        ' rounded-lg border border-collapse min-w-full border-gray-300 overflow-hidden',
      second: 'w-auto flex-auto border-white overflow-hidden',
      ghost: 'border border-slate-200 bg-white m-2',
    },
  },
  defaultVariants: {
    Vtable: 'default',
  },
});
