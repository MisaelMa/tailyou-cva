import { cva } from 'class-variance-authority';
export const Trantition = cva('', {
  variants: {
    Vtrantition: {
      default:
        'max-h-[80vh] overflow-y-auto rounded-b-lg right-0 bg-slate-800 p-10 text-white absolute top-12 h-auto',
      light:
        'max-h-[80vh] overflow-y-auto rounded-b-lg right-0 bg-slate-200 p-10 text-slate-800 absolute top-10 h-auto',
      confirm: 'text-green-700',
    },
  },
  defaultVariants: {
    Vtrantition: 'default',
  },
});
