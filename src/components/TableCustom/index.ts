import { cva } from 'class-variance-authority';
export const tablecustomi = cva(
  'min-w-full border rounded-lg overflow-hidden text-fixed rounded-md',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',
        destructive: 'text-white hover:bg-red-600 dark:hover:bg-red-600',
        ghost:
          'bg-amber-50 text-black hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
      },
      size: {
        default: 'h-10 py-2 px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
