import { cva } from 'class-variance-authority';
export const SizeContent = cva('', {
  variants: {
    Vsizecontent: {
      default:
        'h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-slate-700',
      delete: 'text-red-700',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    Vsizecontent: 'default',
  },
});
