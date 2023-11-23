import { cva } from 'class-variance-authority';
export const button = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',
        destructive: 'text-white hover:bg-red-600 dark:hover:bg-red-600',
        outline:
          'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-200 dark:border-slate-700',
        subtle:
          'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
        ghost:
          'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
        add: 'block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
        cancel:
          'bg-red-700 text-white hover:bg-red-800 dark:bg-red-200 dark:text-red-900 dark:hover:bg-red-100',
        confirm:
          'bg-green-700 text-white hover:bg-green-800 dark:bg-green-200 dark:text-green-900 dark:hover:bg-green-100',
        slate:
          'bg-white text-black  dark:text-black dark:hover:bg-slate-100 border border-black',
        text: 'text-blue-700',
      },

      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
